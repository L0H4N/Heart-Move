// ===== i18n TRANSLATIONS =====
const LANG = {
  th: {
    appName: 'Heart Move',
    appTagline: 'ระบบช่วยเหลือผู้พิการ',
    login: 'เข้าสู่ระบบ', register: 'สมัครสมาชิก',
    thaiId: 'เลขบัตรประชาชน (13 หลัก)',
    thaiIdPH: 'x-xxxx-xxxxx-xx-x',
    password: 'รหัสผ่าน', confirmPwd: 'ยืนยันรหัสผ่าน',
    pwdPH: 'อย่างน้อย 6 ตัวอักษร', confirmPwdPH: 'กรอกรหัสผ่านอีกครั้ง',
    loginBtn: '🔐 เข้าสู่ระบบ', registerBtn: '✨ สมัครสมาชิก',
    authWelcome: 'ยินดีต้อนรับ', authDesc: 'บริการช่วยเหลือผู้พิการครบวงจร',
    selectRole: 'เลือกประเภทผู้ใช้งาน',
    selectRoleDesc: 'กรุณาเลือกว่าคุณเป็นใคร เพื่อที่เราจะได้ให้บริการที่เหมาะสมกับคุณ',
    pwdRole: 'ผู้พิการ', pwdRoleDesc: 'สำหรับผู้ที่ต้องการความช่วยเหลือ รับบริการแชทและเรียกรถรับส่งเฉพาะ',
    helperRole: 'ผู้ช่วยเหลือ', helperRoleDesc: 'สำหรับผู้ที่ต้องการช่วยเหลือผู้พิการ ให้บริการด้านต่างๆ',
    continueBtn: 'ดำเนินการต่อ →',
    pwdProfileTitle: '📋 ข้อมูลส่วนตัวผู้พิการ',
    pwdProfileDesc: 'กรุณากรอกข้อมูลให้ครบถ้วน เพื่อให้เราสามารถดูแลคุณได้ดีที่สุด',
    helperProfileTitle: '📋 ข้อมูลส่วนตัวผู้ช่วยเหลือ',
    helperProfileDesc: 'กรุณากรอกข้อมูลให้ครบถ้วน เพื่อให้คุณสามารถให้บริการได้',
    personalInfo: 'ข้อมูลส่วนตัว',
    myProfile: 'ข้อมูลส่วนตัว',
    firstName: 'ชื่อ', lastName: 'นามสกุล', age: 'อายุ', address: 'ที่อยู่',
    phone: 'เบอร์โทรศัพท์', kinPhone: 'เบอร์ฉุกเฉิน',
    drugAllergy: 'ประวัติการแพ้ยา', drugAllergyPH: 'ระบุชื่อยาที่แพ้ หรือกรอก "ไม่มี"',
    disability: 'อาการพิการ/ความบกพร่อง',
    disabilityTypes: {
      visual: '👁️ ตาบอด/บกพร่องทางสายตา',
      hearing: '👂 หูหนวก/บกพร่องทางการได้ยิน',
      mobility: '♿ ขาพิการ/เดินไม่ได้',
      speech: '🗨️ บกพร่องทางการพูด',
      intellectual: '🧠 บกพร่องทางสติปัญญา',
      other: '🔹 อื่นๆ',
    },
    notes: 'หมายเหตุ / ข้อมูลเพิ่มเติม', notesPH: 'ข้อมูลเพิ่มเติมที่ต้องการแจ้ง',
    skills: 'ความสามารถ/บริการที่ให้ได้',
    skillTypes: {
      driving: '🚗 ขับรถรับส่ง', medical: '💊 ดูแลด้านการแพทย์',
      counseling: '💬 ให้คำปรึกษา', physical: '💪 ช่วยกิจกรรมทางกาย',
      translation: '🌐 ล่ามภาษา', other: '🔹 อื่นๆ',
    },
    saveProfile: '💾 บันทึกข้อมูล',
    dashTitle: 'เลือกบริการที่ต้องการ',
    dashDesc: 'ยินดีต้อนรับ เราพร้อมดูแลคุณ',
    chatTitle: '💬 แชทกับผู้ช่วยเหลือ',
    chatDesc: 'พูดคุยกับผู้ช่วยเหลือที่พร้อมให้บริการได้ทันที ปลอดภัย และเป็นส่วนตัว',
    chatBadge: 'ออนไลน์ตลอด 24 ชม.',
    rideTitle: '🚗 บริการเรียกรถรับส่ง',
    rideDesc: 'รถปรับสภาพสำหรับผู้พิการโดยเฉพาะ พร้อมคนขับที่ผ่านการอบรมแล้ว',
    rideBadge: 'รถปรับสภาพพิเศษ',
    // Chat page
    availableHelpers: 'ผู้ช่วยเหลือที่พร้อมให้บริการ',
    online: 'ออนไลน์',
    typeMsg: 'พิมพ์ข้อความ...',
    selectHelper: 'เลือกผู้ช่วยเหลือ', selectHelperDesc: 'กรุณาเลือกผู้ช่วยเหลือจากรายการด้านซ้าย',
    // Ride page
    ridePageTitle: '🚗 เรียกรถรับส่ง',
    ridePageDesc: 'บริการรถรับส่งสำหรับผู้พิการโดยเฉพาะ',
    pickup: '📍 จุดรับ', pickupPH: 'กรอกที่อยู่จุดรับ',
    destination: '🏁 จุดหมาย', destinationPH: 'กรอกที่อยู่จุดหมาย',
    vehicleType: 'เลือกประเภทรถ',
    v1name: 'รถแวนปรับสภาพ', v1desc: 'สำหรับวีลแชร์',
    v2name: 'รถเก๋งพิเศษ', v2desc: 'ประตูกว้างพิเศษ',
    v3name: 'รถจักรยานยนต์', v3desc: 'เดินทางสะดวก รวดเร็ว',
    callBtn: '🚗 เรียกรถ', cancelBtn: '✕ ยกเลิก',
    searching: 'กำลังค้นหาคนขับ...', matched: 'พบคนขับแล้ว!', otw: 'คนขับกำลังมาหาคุณ',
    steps: ['ค้นหา', 'จับคู่', 'กำลังมา'],
    eta: 'นาที', etaLabel: 'ETA',
    rating: '⭐ คะแนน', plate: 'ป้ายทะเบียน',
    back: '← กลับ', backDash: '← หน้าหลัก',
    logout: 'ออกจากระบบ',
    // Helper dashboard
    helperDashTitle: 'ระบบจัดการผู้ช่วยเหลือ',
    helperDashDesc: 'รับคำขอและให้ความช่วยเหลือผู้พิการ',
    pendingChats: 'คำขอแชทที่รอ', pendingRides: 'คำขอรับส่งที่รอ',
    noChats: 'ไม่มีคำขอแชทในขณะนี้', noRides: 'ไม่มีคำขอรับส่งในขณะนี้',
    acceptChat: '💬 ตอบกลับ', acceptRide: '✅ รับงาน', declineRide: '✕ ปฏิเสธ',
    statCompleted: 'งานเสร็จสิ้น', statRating: 'คะแนน', statActive: 'งานที่กำลังทำ',
    urgentTag: '🔴 เร่งด่วน', normalTag: '🟢 ปกติ',
    errId: '❌ กรุณากรอกเลขบัตรประชาชน 13 หลัก',
    errPwd: '❌ รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร',
    errPwdMatch: '❌ รหัสผ่านไม่ตรงกัน',
    errExist: '❌ เลขบัตรประชาชนนี้ถูกใช้ไปแล้ว',
    errNotFound: '❌ ไม่พบผู้ใช้งาน กรุณาตรวจสอบเลขบัตรประชาชนและรหัสผ่าน',
    errFill: '❌ กรุณากรอกข้อมูลให้ครบถ้วน',
    errPickup: '❌ กรุณากรอกจุดรับและจุดหมาย',
    errVehicle: '❌ กรุณาเลือกประเภทรถ',
    roleLabel: 'บทบาท:',
  },
  en: {
    appName: 'CareConnect',
    appTagline: 'Disability Assistance System',
    login: 'Login', register: 'Register',
    thaiId: 'Thai National ID (13 digits)',
    thaiIdPH: 'x-xxxx-xxxxx-xx-x',
    password: 'Password', confirmPwd: 'Confirm Password',
    pwdPH: 'At least 6 characters', confirmPwdPH: 'Re-enter password',
    loginBtn: '🔐 Login', registerBtn: '✨ Create Account',
    authWelcome: 'Welcome', authDesc: 'Comprehensive Disability Support Services',
    selectRole: 'Select Your Role',
    selectRoleDesc: 'Please choose your role so we can provide the right services for you.',
    pwdRole: 'Person with Disability', pwdRoleDesc: 'For those who need assistance. Access chat and accessible ride-hailing services.',
    helperRole: 'Assistant / Helper', helperRoleDesc: 'For those who want to help people with disabilities. Provide various support services.',
    continueBtn: 'Continue →',
    pwdProfileTitle: '📋 Personal Profile (PWD)',
    pwdProfileDesc: 'Please fill in your information completely so we can take the best care of you.',
    helperProfileTitle: '📋 Personal Profile (Helper)',
    helperProfileDesc: 'Please fill in your information so you can start providing services.',
    personalInfo: 'Personal Information',
    myProfile: 'My Profile',
    firstName: 'First Name', lastName: 'Last Name', age: 'Age', address: 'Address',
    phone: 'Phone Number', kinPhone: 'Emergency / Relative Contact',
    drugAllergy: 'Drug Allergy History', drugAllergyPH: 'List allergies or enter "None"',
    disability: 'Disability / Impairment Type',
    disabilityTypes: {
      visual: '👁️ Blind / Visual Impairment',
      hearing: '👂 Deaf / Hearing Impairment',
      mobility: '♿ Mobility / Wheelchair',
      speech: '🗨️ Speech Impairment',
      intellectual: '🧠 Intellectual Disability',
      other: '🔹 Other',
    },
    notes: 'Notes / Additional Information', notesPH: 'Any additional information you want to share',
    skills: 'Skills / Services You Can Provide',
    skillTypes: {
      driving: '🚗 Driving / Transport', medical: '💊 Medical Care',
      counseling: '💬 Counseling', physical: '💪 Physical Assistance',
      translation: '🌐 Interpreter', other: '🔹 Other',
    },
    saveProfile: '💾 Save Profile',
    dashTitle: 'Choose a Service',
    dashDesc: 'Welcome, we are here for you',
    chatTitle: '💬 Chat with Helper',
    chatDesc: 'Instantly connect with available helpers. Safe, private, and accessible.',
    chatBadge: 'Available 24/7',
    rideTitle: '🚗 Accessible Ride Service',
    rideDesc: 'Specially adapted vehicles for people with disabilities, driven by trained drivers.',
    rideBadge: 'Accessible Vehicles',
    availableHelpers: 'Available Helpers',
    online: 'Online',
    typeMsg: 'Type a message...',
    selectHelper: 'Select a Helper', selectHelperDesc: 'Please select a helper from the list on the left.',
    ridePageTitle: '🚗 Request a Ride',
    ridePageDesc: 'Accessible ride service exclusively for people with disabilities.',
    pickup: '📍 Pickup Location', pickupPH: 'Enter pickup address',
    destination: '🏁 Destination', destinationPH: 'Enter destination address',
    vehicleType: 'Select Vehicle Type',
    v1name: 'Wheelchair Van', v1desc: 'For wheelchair users',
    v2name: 'Accessible Sedan', v2desc: 'Extra-wide doors',
    v3name: 'Motorcycle', v3desc: 'Fast & convenient',
    callBtn: '🚗 Request Ride', cancelBtn: '✕ Cancel',
    searching: 'Searching for driver...', matched: 'Driver Found!', otw: 'Driver is on the way',
    steps: ['Searching', 'Matched', 'On Way'],
    eta: 'min', etaLabel: 'ETA',
    rating: '⭐ Rating', plate: 'Plate No.',
    back: '← Back', backDash: '← Dashboard',
    logout: 'Logout',
    helperDashTitle: 'Helper Management System',
    helperDashDesc: 'Accept requests and assist people with disabilities',
    pendingChats: 'Pending Chat Requests', pendingRides: 'Pending Ride Requests',
    noChats: 'No pending chat requests', noRides: 'No pending ride requests',
    acceptChat: '💬 Reply', acceptRide: '✅ Accept', declineRide: '✕ Decline',
    statCompleted: 'Completed', statRating: 'Rating', statActive: 'Active',
    urgentTag: '🔴 Urgent', normalTag: '🟢 Normal',
    errId: '❌ Please enter a valid 13-digit Thai ID.',
    errPwd: '❌ Password must be at least 6 characters.',
    errPwdMatch: '❌ Passwords do not match.',
    errExist: '❌ This Thai ID is already registered.',
    errNotFound: '❌ User not found. Please check your Thai ID and password.',
    errFill: '❌ Please fill in all required fields.',
    errPickup: '❌ Please enter pickup and destination.',
    errVehicle: '❌ Please select a vehicle type.',
    roleLabel: 'Role:',
  }
};

// ===== STATE =====
let currentLang = localStorage.getItem('lang') || 'th';
let state = {
  user: null,
  role: null,
  activeHelper: null,
};

function t(key) {
  const keys = key.split('.');
  let val = LANG[currentLang];
  for (const k of keys) { val = val?.[k]; }
  return val ?? key;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  renderCurrentPage();
}

// ===== STORAGE =====
function getUsers() { return JSON.parse(localStorage.getItem('cc_users') || '{}'); }
function saveUsers(u) { localStorage.setItem('cc_users', JSON.stringify(u)); }
function getSession() { return JSON.parse(localStorage.getItem('cc_session') || 'null'); }
function saveSession(s) { localStorage.setItem('cc_session', JSON.stringify(s)); }
function clearSession() { localStorage.removeItem('cc_session'); }

// ===== ROUTER =====
let currentPage = 'auth';
function renderCurrentPage() {
  switch (currentPage) {
    case 'auth': renderAuth(); break;
    case 'role': renderRole(); break;
    case 'profile': renderProfile(); break;
    case 'view-profile': renderViewProfile(); break;
    case 'dashboard': renderDashboard(); break;
    case 'chat': renderChat(); break;
    case 'ride': renderRide(); break;
  }
}

function navigate(page) {
  currentPage = page;
  renderCurrentPage();
  window.scrollTo(0, 0);
}

// ===== LANG SWITCHER HTML =====
function langSwitcherHTML() {
  return `<div class="lang-switcher">
    <button class="lang-btn ${currentLang === 'th' ? 'active' : ''}" data-lang="th" onclick="setLang('th')">🇹🇭 ไทย</button>
    <button class="lang-btn ${currentLang === 'en' ? 'active' : ''}" data-lang="en" onclick="setLang('en')">🇬🇧 EN</button>
  </div>`;
}

function navbarHTML(showUser = true) {
  const session = getSession();
  if (!showUser || !session) return '';
  const initials = (session.profile?.firstName || session.thaiId).substring(0, 2).toUpperCase();
  const isPwd = session.role === 'pwd';
  const roleName = isPwd ? t('pwdRole') : t('helperRole');
  const roleTagClass = isPwd ? 'nav-role-pwd' : 'nav-role-helper';
  const roleIcon = isPwd ? '♿' : '🤝';
  return `<nav class="navbar">
    <div class="nav-left">
      <div class="nav-brand" onclick="navigate('dashboard')">
        <div class="nav-logo">${roleIcon}</div>
        <div class="nav-title">${t('appName')}</div>
      </div>
      <div class="lang-switcher-nav">
        <button class="lang-btn ${currentLang === 'th' ? 'active' : ''}" data-lang="th" onclick="setLang('th')">🇹🇭 ไทย</button>
        <button class="lang-btn ${currentLang === 'en' ? 'active' : ''}" data-lang="en" onclick="setLang('en')">🇬🇧 EN</button>
      </div>
    </div>
    <div class="nav-user">
      <div class="nav-avatar" style="cursor:pointer" onclick="navigate('view-profile')">${initials}</div>
      <div class="nav-name" style="cursor:pointer" onclick="navigate('view-profile')">${session.profile?.firstName || ''}<span class="nav-role-tag ${roleTagClass}">${roleName}</span></div>
      <a onclick="navigate('view-profile')" style="color:var(--primary);margin-right:12px;cursor:pointer;font-size:14px;font-weight:600">👤 ${t('myProfile')}</a>
      <button class="btn-logout" onclick="logout()">⏻ ${t('logout')}</button>
    </div>
  </nav>`;
}

function showAlert(id, msg, type = 'error') {
  const el = document.getElementById(id);
  if (!el) return;
  el.className = `alert alert-${type} show`;
  el.innerHTML = msg;
  setTimeout(() => el.classList.remove('show'), 4000);
}

// ===== AUTH PAGE =====
let authMode = 'login';
function renderAuth() {
  document.getElementById('app').innerHTML = `
    ${langSwitcherHTML()}
    <div class="page">
      <div class="auth-container">
        <div class="auth-header">
          <div class="auth-logo">♿</div>
          <h1>${t('appName')}</h1>
          <p>${t('authDesc')}</p>
        </div>
        <div class="glass-card auth-card">
          <div class="auth-tabs">
            <button class="auth-tab ${authMode === 'login' ? 'active' : ''}" onclick="switchAuthTab('login')">${t('login')}</button>
            <button class="auth-tab ${authMode === 'register' ? 'active' : ''}" onclick="switchAuthTab('register')">${t('register')}</button>
          </div>
          <div id="auth-alert" class="alert alert-error"></div>
          <div class="form-group">
            <label>${t('thaiId')}</label>
            <input type="text" id="auth-id" placeholder="${t('thaiIdPH')}" maxlength="13" oninput="this.value=this.value.replace(/\D/g,'')">
          </div>
          <div class="form-group">
            <label>${t('password')}</label>
            <input type="password" id="auth-pwd" placeholder="${t('pwdPH')}">
          </div>
          ${authMode === 'register' ? `<div class="form-group">
            <label>${t('confirmPwd')}</label>
            <input type="password" id="auth-cpwd" placeholder="${t('confirmPwdPH')}">
          </div>` : ''}
          <button class="btn btn-primary" onclick="${authMode === 'login' ? 'doLogin()' : 'doRegister()'}" style="margin-top:8px">
            ${authMode === 'login' ? t('loginBtn') : t('registerBtn')}
          </button>
        </div>
      </div>
    </div>`;
}

function switchAuthTab(mode) {
  authMode = mode;
  renderAuth();
}

function doLogin() {
  const id = document.getElementById('auth-id').value.trim();
  const pwd = document.getElementById('auth-pwd').value;
  if (id.length !== 13) return showAlert('auth-alert', t('errId'));
  const users = getUsers();
  if (!users[id] || users[id].password !== pwd) return showAlert('auth-alert', t('errNotFound'));
  saveSession(users[id]);
  currentPage = users[id].profile ? 'dashboard' : 'role';
  renderCurrentPage();
}

function doRegister() {
  const id = document.getElementById('auth-id').value.trim();
  const pwd = document.getElementById('auth-pwd').value;
  const cpwd = document.getElementById('auth-cpwd').value;
  if (id.length !== 13) return showAlert('auth-alert', t('errId'));
  if (pwd.length < 6) return showAlert('auth-alert', t('errPwd'));
  if (pwd !== cpwd) return showAlert('auth-alert', t('errPwdMatch'));
  const users = getUsers();
  if (users[id]) return showAlert('auth-alert', t('errExist'));
  users[id] = { thaiId: id, password: pwd, role: null, profile: null };
  saveUsers(users);
  saveSession(users[id]);
  navigate('role');
}

// ===== ROLE PAGE =====
function renderRole() {
  document.getElementById('app').innerHTML = `
    ${langSwitcherHTML()}
    <div class="page">
      <div class="role-container">
        <h2 class="page-title" style="text-align:center">${t('selectRole')}</h2>
        <p class="page-subtitle" style="text-align:center">${t('selectRoleDesc')}</p>
        <div id="role-alert" class="alert alert-error"></div>
        <div class="role-cards">
          <div class="glass-card role-card" id="role-pwd" onclick="selectRole('pwd')">
            <span class="role-icon">♿</span>
            <h3>${t('pwdRole')}</h3>
            <p>${t('pwdRoleDesc')}</p>
          </div>
          <div class="glass-card role-card" id="role-helper" onclick="selectRole('helper')">
            <span class="role-icon">🤝</span>
            <h3>${t('helperRole')}</h3>
            <p>${t('helperRoleDesc')}</p>
          </div>
        </div>
        <div style="text-align:center;margin-top:28px">
          <button class="btn btn-primary" style="max-width:220px;margin:0 auto" onclick="confirmRole()">${t('continueBtn')}</button>
        </div>
      </div>
    </div>`;
  state.role = null;
}

let selectedRole = null;
function selectRole(role) {
  selectedRole = role;
  document.querySelectorAll('.role-card').forEach(c => { c.style.borderColor = ''; c.style.background = ''; });
  document.getElementById(`role-${role}`).style.borderColor = 'var(--primary)';
  document.getElementById(`role-${role}`).style.background = 'rgba(22,163,74,0.08)';
}

function confirmRole() {
  if (!selectedRole) return showAlert('role-alert', t('errFill'));
  const session = getSession();
  session.role = selectedRole;
  const users = getUsers();
  users[session.thaiId].role = selectedRole;
  saveUsers(users);
  saveSession(session);
  navigate('profile');
}

// ===== PROFILE PAGE =====
function renderProfile() {
  const session = getSession();
  const isPwd = session.role === 'pwd';
  const disTypes = t('disabilityTypes');
  const skTypes = t('skillTypes');

  const prof = session.profile || {};
  const isC = (arr, val) => arr && arr.includes(val) ? 'checked' : '';

  const pwdForm = `
    <p class="section-title">${t('personalInfo')}</p>
    <div class="form-row">
      <div class="form-group"><label>${t('firstName')}</label><input type="text" id="p-fname" value="${prof.firstName || ''}" placeholder="${t('firstName')}"></div>
      <div class="form-group"><label>${t('lastName')}</label><input type="text" id="p-lname" value="${prof.lastName || ''}" placeholder="${t('lastName')}"></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label>${t('age')}</label><input type="number" id="p-age" value="${prof.age || ''}" placeholder="25" min="1" max="150" inputmode="numeric"></div>
      <div class="form-group"><label>${t('phone')}</label><input type="number" id="p-phone" value="${prof.phone || ''}" placeholder="08XXXXXXXX" inputmode="numeric"></div>
    </div>
    <div class="form-group"><label>${t('address')}</label><textarea id="p-addr" placeholder="${t('address')}">${prof.address || ''}</textarea></div>
    <div class="form-group"><label>${t('drugAllergy')}</label><input type="text" id="p-allergy" value="${prof.drugAllergy || ''}" placeholder="${t('drugAllergyPH')}"></div>
    <div class="form-group"><label>${t('kinPhone')}</label><input type="number" id="p-kin" value="${prof.kinPhone || ''}" placeholder="08XXXXXXXX" inputmode="numeric"></div>
    <div class="form-group">
      <label>${t('disability')}</label>
      <div class="checkbox-group">
        ${Object.entries(disTypes).map(([k, v]) => `<label class="checkbox-item"><input type="checkbox" name="dis" value="${k}" ${isC(prof.disabilities, k)}> ${v}</label>`).join('')}
      </div>
    </div>
    <div class="form-group"><label>${t('notes')}</label><textarea id="p-notes" placeholder="${t('notesPH')}">${prof.notes || ''}</textarea></div>`;

  const helperForm = `
    <p class="section-title">${t('personalInfo')}</p>
    <div class="form-row">
      <div class="form-group"><label>${t('firstName')}</label><input type="text" id="p-fname" value="${prof.firstName || ''}" placeholder="${t('firstName')}"></div>
      <div class="form-group"><label>${t('lastName')}</label><input type="text" id="p-lname" value="${prof.lastName || ''}" placeholder="${t('lastName')}"></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label>${t('phone')}</label><input type="number" id="p-phone" value="${prof.phone || ''}" placeholder="08XXXXXXXX" inputmode="numeric"></div>
      <div class="form-group"><label>${t('age')}</label><input type="number" id="p-age" value="${prof.age || ''}" placeholder="25" min="1" inputmode="numeric"></div>
    </div>
    <div class="form-group"><label>${t('address')}</label><textarea id="p-addr" placeholder="${t('address')}">${prof.address || ''}</textarea></div>
    <div class="form-group">
      <label>${t('skills')}</label>
      <div class="checkbox-group">
        ${Object.entries(skTypes).map(([k, v]) => `<label class="checkbox-item"><input type="checkbox" name="skill" value="${k}" ${isC(prof.skills, k)}> ${v}</label>`).join('')}
      </div>
    </div>
    <div class="form-group"><label>${t('notes')}</label><textarea id="p-notes" placeholder="${t('notesPH')}">${prof.notes || ''}</textarea></div>`;

  document.getElementById('app').innerHTML = `
    ${langSwitcherHTML()}
    <div class="page">
      <div class="profile-container">
        <div class="profile-header">
          <h2>${isPwd ? t('pwdProfileTitle') : t('helperProfileTitle')}</h2>
          <p style="color:var(--text-muted);font-size:14px">${isPwd ? t('pwdProfileDesc') : t('helperProfileDesc')}</p>
        </div>
        <div class="glass-card profile-card">
          <div id="profile-alert" class="alert alert-error"></div>
          ${isPwd ? pwdForm : helperForm}
          <div style="display:flex;gap:10px;margin-top:20px">
            <button class="btn btn-secondary" style="flex:1" onclick="navigate(getSession().profile ? 'view-profile' : 'role')">${t('cancelBtn')}</button>
            <button class="btn btn-success" style="flex:2" onclick="saveProfile()">${t('saveProfile')}</button>
          </div>
        </div>
      </div>
    </div>`;
}

function saveProfile() {
  const session = getSession();
  const isPwd = session.role === 'pwd';
  const fname = document.getElementById('p-fname')?.value.trim();
  const lname = document.getElementById('p-lname')?.value.trim();
  const phone = document.getElementById('p-phone')?.value.trim();
  const age = document.getElementById('p-age')?.value.trim();
  const addr = document.getElementById('p-addr')?.value.trim();
  const kinPhone = document.getElementById('p-kin')?.value.trim();

  if (isPwd) {
    if (!fname || !lname || !age || !phone || !addr || !kinPhone) {
      return showAlert('profile-alert', t('errFill'));
    }
  } else {
    if (!fname || !lname || !age || !phone || !addr) {
      return showAlert('profile-alert', t('errFill'));
    }
  }

  const profile = {
    firstName: fname, lastName: lname,
    age: document.getElementById('p-age')?.value,
    phone: phone,
    address: document.getElementById('p-addr')?.value,
    notes: document.getElementById('p-notes')?.value,
  };

  if (isPwd) {
    profile.drugAllergy = document.getElementById('p-allergy')?.value;
    profile.kinPhone = document.getElementById('p-kin')?.value;
    profile.disabilities = [...document.querySelectorAll('input[name="dis"]:checked')].map(i => i.value);
  } else {
    profile.skills = [...document.querySelectorAll('input[name="skill"]:checked')].map(i => i.value);
  }

  session.profile = profile;
  const users = getUsers();
  users[session.thaiId].profile = profile;
  saveUsers(users);
  saveSession(session);
  navigate('view-profile');
}

// ===== VIEW PROFILE PAGE =====
function renderViewProfile() {
  const session = getSession();
  const prof = session.profile;
  if (!prof) return navigate('profile');
  const isPwd = session.role === 'pwd';
  const roleName = isPwd ? t('pwdRole') : t('helperRole');
  const disTypes = t('disabilityTypes');
  const skTypes = t('skillTypes');

  const disList = isPwd && prof.disabilities && prof.disabilities.length ? prof.disabilities.map(d => disTypes[d]).join(', ') : '-';
  const skillList = !isPwd && prof.skills && prof.skills.length ? prof.skills.map(s => skTypes[s]).join(', ') : '-';

  document.getElementById('app').innerHTML = `
    ${navbarHTML()}
    <div class="page" style="padding-top:88px;padding-bottom:20px">
      <div class="profile-container">
        <div class="breadcrumb" style="margin-bottom:16px">
           <a onclick="navigate('dashboard')" style="cursor:pointer;color:var(--primary)">← ${t('backDash')}</a>
        </div>
        <div class="glass-card profile-card">
           <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:24px;">
             <div>
               <h2 style="font-size:24px;font-weight:800;color:var(--primary-light)">${t('myProfile')}</h2>
               <div style="display:inline-block;padding:4px 10px;background:rgba(38,208,206,0.1);color:var(--primary);border-radius:12px;font-size:13px;font-weight:600;margin-top:6px">${roleName}</div>
             </div>
             <button class="btn btn-secondary btn-sm" onclick="navigate('profile')" style="width:auto;font-size:14px;padding:6px 12px">✏️ แก้ไข</button>
           </div>
           
           <div class="profile-details">
             <div class="detail-row"><div class="detail-label">${t('firstName')}-${t('lastName')}</div> <div class="detail-value">${prof.firstName} ${prof.lastName}</div></div>
             <div class="detail-row"><div class="detail-label">${t('age')}</div> <div class="detail-value">${prof.age} ปี</div></div>
             <div class="detail-row"><div class="detail-label">${t('phone')}</div> <div class="detail-value">${prof.phone}</div></div>
             <div class="detail-row"><div class="detail-label">${t('address')}</div> <div class="detail-value">${prof.address}</div></div>
             ${isPwd ? `
             <div class="detail-row"><div class="detail-label">${t('kinPhone')}</div> <div class="detail-value">${prof.kinPhone}</div></div>
             <div class="detail-row"><div class="detail-label">${t('drugAllergy')}</div> <div class="detail-value">${prof.drugAllergy || 'ไม่มี'}</div></div>
             <div class="detail-row"><div class="detail-label">${t('disability')}</div> <div class="detail-value">${disList}</div></div>
             ` : `
             <div class="detail-row"><div class="detail-label">${t('skills')}</div> <div class="detail-value">${skillList}</div></div>
             `}
             <div class="detail-row" style="border:none;margin-bottom:0;padding-bottom:0"><div class="detail-label">${t('notes')}</div> <div class="detail-value">${prof.notes || '-'}</div></div>
           </div>
        </div>
      </div>
    </div>
  `;
}

// ===== DASHBOARD (role-aware) =====
function renderDashboard() {
  const session = getSession();
  if (session.role === 'helper') renderHelperDashboard();
  else renderPWDDashboard();
}

function renderPWDDashboard() {
  const session = getSession();
  const name = session.profile?.firstName || session.thaiId;
  document.getElementById('app').innerHTML = `
    ${navbarHTML()}
    <div class="page">
      <div class="dashboard-container">
        <div class="dashboard-welcome">
          <h2>👋 ${t('authWelcome')}, ${name}!</h2>
          <p>${t('dashDesc')}</p>
        </div>
        <div class="service-cards">
          <div class="glass-card service-card chat-card" onclick="navigate('chat')">
            <div class="service-card-inner">
              <span class="service-icon">💬</span>
              <h3>${t('chatTitle')}</h3>
              <p>${t('chatDesc')}</p>
              <span class="service-badge">${t('chatBadge')}</span>
            </div>
          </div>
          <div class="glass-card service-card ride-card" onclick="navigate('ride')">
            <div class="service-card-inner">
              <span class="service-icon">🚗</span>
              <h3>${t('rideTitle')}</h3>
              <p>${t('rideDesc')}</p>
              <span class="service-badge">${t('rideBadge')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}

let MOCK_CHAT_REQUESTS = [
  { id: 1, name: { th: 'สมศรี ผู้พิการ', en: 'Somsri (PWD)' }, detail: { th: 'ตาบอด • อายุ 42', en: 'Blind • Age 42' }, msg: { th: 'ต้องการคำแนะนำเรื่องยาแพ้', en: 'Need advice about medication' }, urgent: true, initials: 'สศ' },
  { id: 2, name: { th: 'วิชัย ใจดี', en: 'Wichai (PWD)' }, detail: { th: 'ขาพิการ • อายุ 58', en: 'Mobility impaired • Age 58' }, msg: { th: 'อยากคุยสักครู่ค่ะ', en: 'Just want to chat' }, urgent: false, initials: 'วช' },
  { id: 3, name: { th: 'มานี สีสวย', en: 'Malee (PWD)' }, detail: { th: 'หูหนวก • อายุ 35', en: 'Deaf • Age 35' }, msg: { th: 'ขอคำปรึกษาสิทธิ์ผู้พิการ', en: 'Need disability rights advice' }, urgent: true, initials: 'มล' },
];

let MOCK_RIDE_REQUESTS = [
  { id: 1, name: { th: 'ประเสริญ เครืองกล', en: 'Praserth K.' }, pickup: { th: 'โรงพยาบาลสีราผา', en: 'Sriraj Hospital' }, dest: { th: 'อนุสาวรีชัยชนะสงคราม', en: 'Victory Monument' }, vehicle: '🚐', type: { th: 'รถแวน', en: 'Van' }, distance: '5.2 km', initials: 'ปส', urgent: true },
  { id: 2, name: { th: 'สุภาพร คำปรีชา', en: 'Supaporn K.' }, pickup: { th: 'สยามพารากอน', en: 'Siam Paragon' }, dest: { th: 'อาคารบ้านแถวรัชดา', en: 'Ratchada Condo' }, vehicle: '🏍️', type: { th: 'มอเตอร์ไซค์', en: 'Motorcycle' }, distance: '3.1 km', initials: 'สภ', urgent: false },
];

function renderHelperDashboard() {
  const session = getSession();
  const name = session.profile?.firstName || session.thaiId;
  const lang = currentLang;

  const chatRequestsHTML = MOCK_CHAT_REQUESTS.map(r => `
    <div class="request-card">
      <div class="request-user">
        <div class="request-avatar">${r.initials}</div>
        <div>
          <div class="request-name">${r.name[lang]} <span class="request-tag ${r.urgent ? 'tag-urgent' : 'tag-normal'}">${r.urgent ? t('urgentTag') : t('normalTag')}</span></div>
          <div class="request-detail">${r.detail[lang]}</div>
        </div>
      </div>
      <div class="request-msg">"${r.msg[lang]}"</div>
      <div class="request-actions">
        <button class="btn btn-primary btn-sm" style="width:auto" onclick="acceptChatRequest(${r.id})">${t('acceptChat')}</button>
        <button class="btn btn-danger-outline btn-sm" style="width:auto" onclick="declineChatRequest(${r.id})">ปฏิเสธ</button>
      </div>
    </div>`).join('');

  const rideRequestsHTML = MOCK_RIDE_REQUESTS.map(r => `
    <div class="request-card">
      <div class="request-user">
        <div class="request-avatar">${r.initials}</div>
        <div>
          <div class="request-name">${r.name[lang]} <span class="request-tag ${r.urgent ? 'tag-urgent' : 'tag-normal'}">${r.urgent ? t('urgentTag') : t('normalTag')}</span></div>
          <div class="request-detail">${r.vehicle} ${r.type[lang]} • ${r.distance}</div>
        </div>
      </div>
      <div class="request-msg">📍 ${r.pickup[lang]} → 🏁 ${r.dest[lang]}</div>
      <div class="request-actions">
        <button class="btn btn-accent btn-sm" style="width:auto" onclick="acceptRideRequest(${r.id})">${t('acceptRide')}</button>
        <button class="btn btn-danger-outline btn-sm" style="width:auto" onclick="declineRideRequest(${r.id})">${t('declineRide')}</button>
      </div>
    </div>`).join('');

  document.getElementById('app').innerHTML = `
    ${navbarHTML()}
    <div class="page" style="padding-top:88px;align-items:center">
      <div class="helper-dashboard">
        <div class="helper-welcome">
          <h2>🤝 ${t('authWelcome')}, ${name}!</h2>
          <p>${t('helperDashDesc')}</p>
        </div>
        <div class="helper-stats">
          <div class="glass-card stat-card">
            <div class="stat-num">12</div>
            <div class="stat-label">✅ ${t('statCompleted')}</div>
          </div>
          <div class="glass-card stat-card">
            <div class="stat-num" style="color:var(--warning)">4.9 ⭐</div>
            <div class="stat-label">${t('statRating')}</div>
          </div>
          <div class="glass-card stat-card">
            <div class="stat-num" style="color:var(--secondary)">${MOCK_CHAT_REQUESTS.length + MOCK_RIDE_REQUESTS.length}</div>
            <div class="stat-label">🟡 ${t('statActive')}</div>
          </div>
        </div>
        <div class="helper-panels">
          <div class="glass-card helper-panel">
            <div class="helper-panel-header chat-hdr">
              <span class="helper-panel-title">💬 ${t('pendingChats')}</span>
              <span class="request-badge">${MOCK_CHAT_REQUESTS.length}</span>
            </div>
            <div class="helper-panel-body">${chatRequestsHTML || '<div class="empty-state"><div class="empty-icon">💬</div><div>' + t('noChats') + '</div></div>'}</div>
          </div>
          <div class="glass-card helper-panel">
            <div class="helper-panel-header ride-hdr">
              <span class="helper-panel-title">🚗 ${t('pendingRides')}</span>
              <span class="request-badge">${MOCK_RIDE_REQUESTS.length}</span>
            </div>
            <div class="helper-panel-body">${rideRequestsHTML || '<div class="empty-state"><div class="empty-icon">🚗</div><div>' + t('noRides') + '</div></div>'}</div>
          </div>
        </div>
      </div>
    </div>`;
}

function acceptChatRequest(id) { navigate('chat'); }
function declineChatRequest(id) {
  MOCK_CHAT_REQUESTS = MOCK_CHAT_REQUESTS.filter(r => r.id !== id);
  renderDashboard();
}

function acceptRideRequest(id) {
  state.activeRide = MOCK_RIDE_REQUESTS.find(r => r.id === id);
  navigate('ride');
}
function declineRideRequest(id) {
  MOCK_RIDE_REQUESTS = MOCK_RIDE_REQUESTS.filter(r => r.id !== id);
  renderDashboard();
}

// ===== LOGOUT =====
function logout() {
  clearSession();
  authMode = 'login';
  navigate('auth');
}

// ===== INIT =====
window.addEventListener('DOMContentLoaded', () => {
  const session = getSession();
  if (session) {
    if (!session.role) navigate('role');
    else if (!session.profile) navigate('profile');
    else navigate('dashboard');
  } else {
    navigate('auth');
  }
});
