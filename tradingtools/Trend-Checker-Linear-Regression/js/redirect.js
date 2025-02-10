document.addEventListener("DOMContentLoaded", function() {
    let userLang = navigator.language || navigator.userLanguage;
    let currentUrl = new URL(window.location.href);
    let url = "https://onetickfor.win/tradingtools/Trend-Checker-Linear-Regression/"; 
    let lang = currentUrl.searchParams.get("lang");
    let select = currentUrl.searchParams.get("select");
    let query = null;

    // ユーザーの言語が日本語の場合
    if (userLang.includes("ja")) {
        query = "ja";
    }

    // 言語がクエリパラメータと異なる場合、リダイレクト
    if (!select && query && query !== lang) {
        window.location.href = url + "?lang=" + query;
    }
});

// 言語選択用のオブジェクト
const languageSelector = document.getElementById('language-selector');
const translations = {
    en: { url: "./?select=true" },
    jp: { url: "./?lang=ja&select=true" },
    ru: { url: "./?lang=ru&select=true" },
    zh: { url: "./?lang=zh&select=true" },
    es: { url: "./?lang=es&select=true" },
    pt: { url: "./?lang=pt&select=true" },
    de: { url: "./?lang=de&select=true" },
    ko: { url: "./?lang=ko&select=true" },
    fr: { url: "./?lang=fr&select=true" },
    it: { url: "./?lang=it&select=true" },
    tr: { url: "./?lang=tr&select=true" }
};

// 言語変更時のリダイレクト処理
languageSelector.addEventListener('change', function() {
    let currentUrl = new URL(window.location.href);
    let select = currentUrl.searchParams.get("select");
    const selectedLanguage = languageSelector.value;
    if (!select) {
        window.location.href = translations[selectedLanguage].url;
    }
});
