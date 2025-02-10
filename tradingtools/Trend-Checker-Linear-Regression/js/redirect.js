document.addEventListener("DOMContentLoaded", function() {
    let userLang = navigator.language || navigator.userLanguage;
    let currentUrl = new URL(window.location.href);
    let url = "https://onetickfor.win/tradingtools/Trend-Checker-Linear-Regression/"; 
    let lang = currentUrl.searchParams.get("lang");
    let select = currentUrl.searchParams.get("select");
    let query = null;

    /*if (userLang.includes("ja")) {
        query = "ja";
    }else if (userLang.includes("ru")) {
        query = "ru";
    }else if (userLang.includes("ja")) {
        query = "ja";
    }else if (userLang.includes("ja")) {
        query = "ja";
    }else if (userLang.includes("ja")) {
        query = "ja";
    }else if (userLang.includes("ja")) {
        query = "ja";
    }else if (userLang.includes("ja")) {
        query = "ja";
    }else if (userLang.includes("ja")) {
        query = "ja";
    }else if (userLang.includes("ja")) {
        query = "ja";
    }else if (userLang.includes("ja")) {
        query = "ja";
    }*/

    if(!userLang.includes(lang)){
        query=lang;
    }

    if (!select && query) {
        window.location.href = url + "?lang=" + query;
    }
});

/*const languageSelector = document.getElementById('language-selector');
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

languageSelector.addEventListener('change', function() {
    let currentUrl = new URL(window.location.href);
    let select = currentUrl.searchParams.get("select");
    const selectedLanguage = languageSelector.value;
    if (!select) {
        window.location.href = translations[selectedLanguage].url;
    }
});*/
