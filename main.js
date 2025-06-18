const translations = {
  es: {
    title: 'Bienvenido a manto.es',
    wallet: 'Wallet',
    payments: 'Pasarela de Pagos',
    whitepaper: 'Whitepaper',
    ecosystem: 'Ecosistema',
    walletHeading: 'Conecta tu Wallet manto MT',
    connectBtn: 'Conectar con Phantom',
    paymentsHeading: 'Pasarela Híbrida de Pagos',
    paymentsDesc: 'Opera con MT y monedas tradicionales de forma segura.',
    payBtn: 'Pagar',
    whitepaperHeading: 'Whitepaper',
    download: 'Descargar documento',
    ecosystemHeading: 'Links del Ecosistema'
  },
  en: {
    title: 'Welcome to manto.es',
    wallet: 'Wallet',
    payments: 'Payments Gateway',
    whitepaper: 'Whitepaper',
    ecosystem: 'Ecosystem',
    walletHeading: 'Connect your manto MT Wallet',
    connectBtn: 'Connect with Phantom',
    paymentsHeading: 'Hybrid Payment Gateway',
    paymentsDesc: 'Operate safely with MT and traditional currencies.',
    payBtn: 'Pay',
    whitepaperHeading: 'Whitepaper',
    download: 'Download document',
    ecosystemHeading: 'Ecosystem Links'
  }
};

function applyTranslations(lang) {
  const dict = translations[lang] || translations.es;
  document.getElementById('title').textContent = dict.title;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      if (el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'button') {
        el.value = dict[key];
        el.textContent = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });
}

document.getElementById('language-switch').addEventListener('click', (e) => {
  const lang = e.target.getAttribute('data-lang');
  if (lang) applyTranslations(lang);
});

// Placeholder wallet connection
const connectBtn = document.getElementById('connectWallet');
connectBtn.addEventListener('click', () => {
  alert('Integración con elmanto.sol pendiente de despliegue.');
});

// Placeholder payment action
document.getElementById('payNow').addEventListener('click', () => {
  alert('Pasarela híbrida de pagos en preparación.');
});

// Initialize page
applyTranslations('es');
