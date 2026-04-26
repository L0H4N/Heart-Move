// ===== CHAT PAGE =====

const HELPERS = [
  { id: 1, name: { th: 'สมศรี มีใจดี', en: 'Somsri Midee' }, specialty: { th: 'ดูแลทั่วไป', en: 'General Care' }, initials: 'สม' },
  { id: 2, name: { th: 'นายแพทย์ วิชัย', en: 'Dr. Wichai' }, specialty: { th: 'การแพทย์', en: 'Medical' }, initials: 'วช' },
  { id: 3, name: { th: 'อาสาสมัคร พร', en: 'Volunteer Porn' }, specialty: { th: 'รับส่ง / ขับรถ', en: 'Transport' }, initials: 'พร' },
  { id: 4, name: { th: 'สุภาพร รักดี', en: 'Supaporn Rakdee' }, specialty: { th: 'ให้คำปรึกษา', en: 'Counseling' }, initials: 'สภ' },
];

const AUTO_REPLIES = {
  th: [
    'สวัสดีค่ะ ฉันพร้อมช่วยเหลือคุณนะคะ 😊',
    'ได้เลยค่ะ กรุณารอสักครู่นะคะ',
    'ขอทราบรายละเอียดเพิ่มเติมได้เลยค่ะ',
    'รับทราบค่ะ จะดำเนินการให้โดยเร็วที่สุดนะคะ',
  ],
  en: [
    'Hello! I\'m ready to help you 😊',
    'Sure! Please wait a moment.',
    'Could you provide more details?',
    'Understood! I\'ll take care of this.',
  ]
};

const PWD_AUTO_REPLIES = {
  th: ['ขอบคุณมากครับ/ค่ะ 😊', 'รบกวนด้วยนะครับ/ค่ะ', 'ใช่ครับ ตามนั้นเลย', 'ขอบคุณที่ช่วยเหลือครับ'],
  en: ['Thank you very much 😊', 'I appreciate your help', 'Yes, that is correct', 'Thanks a lot']
};

let chatMessages = {};
let activeContactId = null;

function renderChat() {
  const session = getSession();
  const isHelper = session?.role === 'helper';
  const lang = currentLang;
  
  const contacts = isHelper ? (typeof MOCK_CHAT_REQUESTS !== 'undefined' ? MOCK_CHAT_REQUESTS : []) : HELPERS;
  const listTitle = isHelper ? '💬 ' + t('pendingChats') : '💬 ' + t('availableHelpers');
  
  const contactListHTML = contacts.map(c => `
    <div class="helper-item ${activeContactId === c.id ? 'active' : ''}" onclick="selectContact(${c.id})" id="contact-${c.id}">
      <div class="helper-avatar">${c.initials}</div>
      <div class="helper-info">
        <div class="helper-name">${c.name[lang]}</div>
        <div class="helper-status"><span class="status-dot"></span>${t('online')} · ${isHelper ? c.detail[lang] : c.specialty[lang]}</div>
      </div>
    </div>`).join('');

  document.getElementById('app').innerHTML = `
    ${navbarHTML()}
    <div class="page" style="padding-top:80px;padding-bottom:10px">
      <div class="chat-layout">
        <div class="chat-sidebar">
          <div class="sidebar-header">${listTitle}</div>
          <div class="helper-list">${contactListHTML}</div>
        </div>
        <div class="chat-main">
          <div class="chat-header" id="chat-header">
            <div style="font-size:26px">💬</div>
            <div>
              <div style="font-weight:700;font-size:15px">${isHelper ? 'เลือกแชท' : t('selectHelper')}</div>
              <div style="font-size:13px;color:var(--text-muted)">${isHelper ? 'กรุณาเลือกผู้พิการเพื่อตอบกลับ' : t('selectHelperDesc')}</div>
            </div>
          </div>
          <div class="chat-messages" id="chat-messages">
            <div style="text-align:center;margin:auto;color:var(--text-muted)">
              <div style="font-size:48px;margin-bottom:12px">💬</div>
              <div>${isHelper ? 'เลือกการสนทนาเพื่อนเริ่มตอบกลับ' : t('selectHelper')}</div>
            </div>
          </div>
          <div class="chat-input-area">
            <input class="chat-input" id="chat-input" placeholder="${t('typeMsg')}" onkeydown="if(event.key==='Enter')sendMessage()">
            <button class="send-btn" onclick="sendMessage()">➤</button>
          </div>
        </div>
      </div>
    </div>`;

  if (activeContactId) selectContact(activeContactId);
  else if (isHelper && contacts.length > 0) selectContact(contacts[0].id);
}

function selectContact(id) {
  activeContactId = id;
  const session = getSession();
  const isHelper = session?.role === 'helper';
  const lang = currentLang;
  const contacts = isHelper ? MOCK_CHAT_REQUESTS : HELPERS;
  const contact = contacts.find(c => c.id === id);
  if (!contact) return;

  document.querySelectorAll('.helper-item').forEach(el => el.classList.remove('active'));
  document.getElementById(`contact-${id}`)?.classList.add('active');

  document.getElementById('chat-header').innerHTML = `
    <div class="helper-avatar">${contact.initials}</div>
    <div>
      <div style="font-weight:700;font-size:15px">${contact.name[lang]}</div>
      <div class="helper-status"><span class="status-dot"></span>${t('online')} · ${isHelper ? contact.detail[lang] : contact.specialty[lang]}</div>
    </div>
    <div style="margin-left:auto">
      <button class="btn btn-secondary" style="padding:7px 16px;font-size:13px" onclick="navigate('dashboard')">${t('backDash')}</button>
    </div>`;

  // Seed mock message from PWD if helper just opened it
  if (!chatMessages[id]) {
    chatMessages[id] = [];
    if (isHelper && contact.msg) {
      chatMessages[id].push({ from: 'them', text: contact.msg[lang], time: '10:00 AM' });
    }
  }
  
  renderMessages(id);
  
  // If PWD and no messages, trigger helper auto reply
  if (!isHelper && chatMessages[id].length === 0) {
    setTimeout(() => addAutoReply(id), 800);
  }
}

function renderMessages(id) {
  const container = document.getElementById('chat-messages');
  if (!container) return;
  const msgs = chatMessages[id] || [];
  if (msgs.length === 0) {
    container.innerHTML = `<div style="text-align:center;margin:auto;color:var(--text-muted)"><div style="font-size:36px;margin-bottom:8px">👋</div><div style="font-size:14px">เริ่มการสนทนา / Start chatting</div></div>`;
    return;
  }
  container.innerHTML = msgs.map(m => `
    <div class="msg ${m.from === 'me' ? 'sent' : 'received'}">
      <div class="msg-bubble">${m.text}</div>
      <div class="msg-time">${m.time}</div>
    </div>`).join('');
  container.scrollTop = container.scrollHeight;
}

function sendMessage() {
  if (!activeContactId) return;
  const input = document.getElementById('chat-input');
  const text = input?.value.trim();
  if (!text) return;
  input.value = '';
  
  const now = new Date();
  const time = now.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' });
  
  if (!chatMessages[activeContactId]) chatMessages[activeContactId] = [];
  chatMessages[activeContactId].push({ from: 'me', text, time });
  renderMessages(activeContactId);
  
  setTimeout(() => addAutoReply(activeContactId), 1000 + Math.random() * 1200);
}

function addAutoReply(id) {
  const session = getSession();
  const isHelper = session?.role === 'helper';
  
  const replies = isHelper ? PWD_AUTO_REPLIES[currentLang] : AUTO_REPLIES[currentLang];
  const text = replies[Math.floor(Math.random() * replies.length)];
  
  const now = new Date();
  const time = now.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' });
  
  if (!chatMessages[id]) chatMessages[id] = [];
  chatMessages[id].push({ from: 'them', text, time });
  renderMessages(id);
}
