// ===== RIDE PAGE =====

const DRIVERS = [
  { name: { th: 'สมชาย ขับดี', en: 'Somchai Khabdee' }, rating: '4.9', plate: 'กข 1234', emoji: '👨' },
  { name: { th: 'วิไล รถดี', en: 'Wilai Rotdee' }, rating: '4.8', plate: 'ขค 5678', emoji: '👩' },
  { name: { th: 'ประเสริฐ โชติ', en: 'Prasert Chot' }, rating: '5.0', plate: 'คง 9012', emoji: '👨‍🦱' },
];

let rideState = 'idle'; // idle | searching | matched | otw
let rideTimer = null;
let selectedVehicle = null;

let leafletMap = null;
let pickupMarker = null;
let destMarker = null;
let activeInputId = 'r-pickup';

function renderRide() {
  const session = getSession();
  if (session?.role === 'helper') {
    renderHelperRide();
  } else {
    renderPWDRide();
  }
}

function renderPWDRide() {
  document.getElementById('app').innerHTML = `
    ${navbarHTML()}
    <div class="page" style="padding-top:88px;padding-bottom:20px">
      <div class="ride-container">
        <div class="ride-panel">
          <div class="glass-card" style="padding:20px">
            <div class="breadcrumb">
              <a onclick="navigate('dashboard')">${t('backDash')}</a>
            </div>
            <h2 class="page-title">${t('ridePageTitle')}</h2>
            <p class="page-subtitle">${t('ridePageDesc')}</p>

            <div id="ride-alert" class="alert alert-error"></div>

            <div id="ride-form">
              <div class="form-group">
                <label>${t('pickup')} <span style="font-size:12px;color:var(--primary);cursor:pointer;margin-left:4px">(จิ้มบนแผนที่ได้เลย)</span></label>
                <input type="text" id="r-pickup" placeholder="${t('pickupPH')}" onclick="activeInputId='r-pickup'" onfocus="activeInputId='r-pickup'">
              </div>
              <div class="form-group">
                <label>${t('destination')}</label>
                <input type="text" id="r-dest" placeholder="${t('destinationPH')}" onclick="activeInputId='r-dest'" onfocus="activeInputId='r-dest'">
              </div>
              <div class="form-group">
                <label>${t('vehicleType')}</label>
                <div class="vehicle-options">
                  <div class="vehicle-option" id="v-van" onclick="selectVehicle('van')">
                    <span class="v-icon">🚐</span>
                    <div class="v-name">${t('v1name')}</div>
                    <div class="v-desc">${t('v1desc')}</div>
                  </div>
                  <div class="vehicle-option" id="v-sedan" onclick="selectVehicle('sedan')">
                    <span class="v-icon">🚗</span>
                    <div class="v-name">${t('v2name')}</div>
                    <div class="v-desc">${t('v2desc')}</div>
                  </div>
                  <div class="vehicle-option" id="v-moto" onclick="selectVehicle('moto')">
                    <span class="v-icon">🏍️</span>
                    <div class="v-name">${t('v3name')}</div>
                    <div class="v-desc">${t('v3desc')}</div>
                  </div>
                </div>
              </div>
              <button class="btn btn-success" onclick="callRide()" style="margin-top:8px">${t('callBtn')}</button>
            </div>

            <div class="glass-card ride-status-card" id="ride-status-card">
              <span class="status-animation" id="status-emoji">🔍</span>
              <h3 id="status-title" style="font-size:20px;font-weight:700;margin-bottom:6px">${t('searching')}</h3>
              <div class="status-bar">
                <div class="status-step active" id="step-0"></div>
                <div class="status-step" id="step-1"></div>
                <div class="status-step" id="step-2"></div>
              </div>
              <p id="status-steps-label" style="font-size:12px;color:var(--text-muted);display:flex;justify-content:space-between;padding:0 4px">
                <span>${t('steps')[0]}</span><span>${t('steps')[1]}</span><span>${t('steps')[2]}</span>
              </p>
              <div class="driver-card hidden" id="driver-card">
                <div class="driver-avatar" id="driver-avatar">👨</div>
                <div class="driver-info">
                  <div class="driver-name" id="driver-name">-</div>
                  <div class="driver-rating" id="driver-rating">-</div>
                  <div class="driver-plate" id="driver-plate">-</div>
                </div>
                <div class="driver-eta">
                  <span id="driver-eta-val">-</span>
                  <span>${t('eta')}</span>
                  <span style="font-size:10px">${t('etaLabel')}</span>
                </div>
              </div>
              <button class="btn btn-secondary" style="margin-top:16px;width:100%;max-width:200px" onclick="cancelRide()">${t('cancelBtn')}</button>
            </div>
          </div>
        </div>

        <div class="ride-map" id="map-container" style="padding:0;min-height:350px">
           <div id="leaflet-map" style="width:100%;height:100%;border-radius:18px;z-index:1;"></div>
        </div>
      </div>
    </div>`;

  setTimeout(initLeafletMap, 100);
}

function selectVehicle(type) {
  selectedVehicle = type;
  document.querySelectorAll('.vehicle-option').forEach(el => el.classList.remove('selected'));
  document.getElementById(`v-${type}`)?.classList.add('selected');
}

function callRide() {
  const pickup = document.getElementById('r-pickup')?.value.trim();
  const dest = document.getElementById('r-dest')?.value.trim();
  if (!pickup || !dest) return showAlert('ride-alert', t('errPickup'));
  if (!selectedVehicle) return showAlert('ride-alert', t('errVehicle'));

  document.getElementById('ride-form').classList.add('hidden');
  const card = document.getElementById('ride-status-card');
  card.classList.add('show');
  
  if (leafletMap) {
    leafletMap.remove();
    leafletMap = null;
  }
  
  // Update map container with Google Maps embed
  const mapIframe = `<iframe width="100%" height="100%" frameborder="0" src="https://maps.google.com/maps?q=${encodeURIComponent(dest)}&t=&z=14&ie=UTF8&iwloc=&output=embed" style="border:0; border-radius:18px;"></iframe>`;
  document.getElementById('map-container').innerHTML = mapIframe;

  rideState = 'searching';
  updateRideStatus();

  clearTimeout(rideTimer);
  rideTimer = setTimeout(() => {
    rideState = 'matched';
    updateRideStatus();
    const driver = DRIVERS[Math.floor(Math.random() * DRIVERS.length)];
    const eta = Math.floor(Math.random() * 8) + 3;
    document.getElementById('driver-card')?.classList.remove('hidden');
    document.getElementById('driver-avatar').textContent = driver.emoji;
    document.getElementById('driver-name').textContent = driver.name[currentLang];
    document.getElementById('driver-rating').textContent = `${t('rating')} ${driver.rating}`;
    document.getElementById('driver-plate').textContent = `${t('plate')} ${driver.plate}`;
    document.getElementById('driver-eta-val').textContent = eta;

    rideTimer = setTimeout(() => {
      rideState = 'otw';
      updateRideStatus();
    }, 4000);
  }, 3500);
}

function updateRideStatus() {
  const steps = { searching: 0, matched: 1, otw: 2 };
  const emojis = { searching: '🔍', matched: '✅', otw: '🚗' };
  const titles = { searching: t('searching'), matched: t('matched'), otw: t('otw') };
  const stepIdx = steps[rideState] ?? 0;
  
  const emojiEl = document.getElementById('status-emoji');
  if(emojiEl) emojiEl.textContent = emojis[rideState];
  
  const titleEl = document.getElementById('status-title');
  if(titleEl) titleEl.textContent = titles[rideState];
  
  for (let i = 0; i < 3; i++) {
    const el = document.getElementById(`step-${i}`);
    if (el) el.className = 'status-step' + (i < stepIdx ? ' done' : i === stepIdx ? ' active' : '');
  }
}

function cancelRide() {
  clearTimeout(rideTimer);
  rideState = 'idle';
  selectedVehicle = null;
  renderRide();
}

// ===== HELPER RIDE DASHBOARD =====
function renderHelperRide() {
  const ride = state.activeRide;
  if (!ride) {
     navigate('dashboard');
     return;
  }
  
  const origin = ride.pickup[currentLang];
  const dest = ride.dest[currentLang];
  
  // Real Google Maps App Direct Link (Deep Link for navigation)
  const mapsAppUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(dest)}`;
  
  // Embedded Google Maps iframe (Destination pin)
  const iframeUrl = `https://maps.google.com/maps?q=${encodeURIComponent(dest)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  document.getElementById('app').innerHTML = `
    ${navbarHTML()}
    <div class="page" style="padding-top:88px;padding-bottom:20px">
      <div class="ride-container">
        <div class="ride-panel">
          <div class="glass-card" style="padding:22px">
             <div class="breadcrumb">
               <a onclick="navigate('dashboard')">${t('backDash')}</a>
             </div>
             
             <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px">
               <div class="helper-avatar" style="font-size:20px;width:48px;height:48px">${ride.initials}</div>
               <div>
                  <h3 style="font-size:18px;font-weight:800;color:var(--text)">${ride.name[currentLang]}</h3>
                  <div style="font-size:13px;color:var(--primary)">รอยืนยันคนขับ</div>
               </div>
             </div>
             
             <div class="glass-card" style="padding:16px;background:var(--bg3);border:1px solid var(--glass-border);margin-bottom:16px">
                <div style="font-size:13px;color:var(--text-muted);margin-bottom:4px">สถานที่รับ - ส่ง</div>
                <div style="font-size:15px;color:var(--text);font-weight:600;margin-bottom:6px">📍 ${origin}</div>
                <div style="font-size:15px;color:var(--text);font-weight:600">🏁 ${dest}</div>
             </div>
             
             <div style="display:flex;gap:16px;margin-bottom:24px">
                <div class="glass-card" style="flex:1;padding:12px;text-align:center;background:var(--bg3)">
                   <div style="font-size:24px;margin-bottom:4px">${ride.vehicle}</div>
                   <div style="font-size:12px;font-weight:700">${ride.type[currentLang]}</div>
                </div>
                <div class="glass-card" style="flex:1;padding:12px;text-align:center;background:var(--bg3)">
                   <div style="font-size:24px;margin-bottom:4px">📏</div>
                   <div style="font-size:12px;font-weight:700">${ride.distance}</div>
                </div>
             </div>
             
             <a href="${mapsAppUrl}" target="_blank" class="btn btn-primary" style="margin-bottom:12px;font-size:16px;padding:14px">
               🗺️ เปิดนำทางใน Google Maps
             </a>
             <button class="btn btn-danger-outline" style="width:100%" onclick="navigate('dashboard')">
               ✕ ยกเลิกงาน
             </button>
             
          </div>
        </div>
        
        <div class="ride-map" style="padding:0">
           <iframe width="100%" height="100%" frameborder="0" src="${iframeUrl}" style="border:0; border-radius:18px;"></iframe>
        </div>
      </div>
    </div>`;
}

// ===== LEAFLET MAP =====
function initLeafletMap() {
  if (typeof L === 'undefined') return;
  if (leafletMap) {
    leafletMap.remove();
    leafletMap = null;
  }
  
  const mapEl = document.getElementById('leaflet-map');
  if (!mapEl) return;
  
  // Center to Bangkok Victory Monument
  leafletMap = L.map('leaflet-map').setView([13.7649, 100.5383], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19, attribution: '© OpenStreetMap'
  }).addTo(leafletMap);
  
  const MapIcon = L.Icon.extend({ options: { iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png', shadowSize: [41, 41] } });
  const iconBlue = new MapIcon({iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png'});
  const iconRed = new MapIcon({iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png'});

  // Active Map Click
  leafletMap.on('click', async (e) => {
    const lat = e.latlng.lat;
    const lng = e.latlng.lng;
    const inputEl = document.getElementById(activeInputId);
    if(inputEl) inputEl.value = '📍 กำลังระบุพิกัดสถานที่...';
    
    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`);
      const data = await res.json();
      const addr = data.display_name.split(',').slice(0, 3).join(',');
      if(inputEl) inputEl.value = addr;
      
      if (activeInputId === 'r-pickup') {
        if(pickupMarker) leafletMap.removeLayer(pickupMarker);
        pickupMarker = L.marker([lat, lng], {icon: iconBlue}).addTo(leafletMap).bindPopup('จุดรับ (Pickup)').openPopup();
        activeInputId = 'r-dest'; // Auto switch to destination after pickup is selected
        document.getElementById('r-dest')?.focus();
      } else {
        if(destMarker) leafletMap.removeLayer(destMarker);
        destMarker = L.marker([lat, lng], {icon: iconRed}).addTo(leafletMap).bindPopup('จุดหมาย (Destination)').openPopup();
      }
    } catch(err) {
      if(inputEl) inputEl.value = `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
    }
  });
}
