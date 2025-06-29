const translations = {
  zh: {
    title: "老挝交易通 - 首页",
    header_title: "老挝交易通",
    header_desc: "一个集商品、二手车、房产、土地买卖于一体的综合交易平台。",
    products: "商品",
    cars: "二手车",
    houses: "房产",
    land: "土地买卖",
    contact: "联系客服",
    wechat_title: "微信客服",
    wechat_tip: "长按识别添加客服"
  },
  lo: {
    title: "ລາວການຄ້າ - ໜ້າຫຼັກ",
    header_title: "ສູນການຄ້າອອນລາຍ",
    header_desc: "ພື້ນທີ່ຊື້ຂາຍຄົບວົງຈອນ: ສິນຄ້າ, ລົດມືສອງ, ເຮືອນ, ທີ່ດິນ ແລະ ອື່ນໆ...",
    products: "ສິນຄ້າ",
    cars: "ລົດມືສອງ",
    houses: "ເຮືອນ, ອາຄານ",
    land: "ທີ່ດິນ",
    contact: "ຕິດຕໍ່ພະນັກງານ",
    wechat_title: "ລາຍລະອຽດສຳລັບ WeChat",
    wechat_tip: "ກົດຄ້າງເພື່ອສະແກນ QR Code"
  }
};

function setLanguage(lang) {
  localStorage.setItem('siteLang', lang);
  applyTranslations(lang);
}

function applyTranslations(lang) {
  const dict = translations[lang] || translations.zh;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
  document.title = dict.title || document.title;
}

document.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('siteLang') || 'zh';
  applyTranslations(lang);
});
