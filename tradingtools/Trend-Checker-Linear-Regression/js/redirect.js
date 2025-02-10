document.addEventListener("DOMContentLoaded", function() {
    let userLang = navigator.language || navigator.userLanguage;
    let currentUrl = new URL(window.location.href);
    let url = "https://onetickfor.win/tradingtools/Trend-Checker-Linear-Regression/"; 
    let langParam = currentUrl.searchParams.get("lang");
    let query = null;

    if (userLang.includes("ja")) {
        query = "ja";
    } 

    if (query && query !== langParam) {
        redirect(url + "?lang=" + query);
    }
});

const languageSelector = document.getElementById('language-selector');
const translations = {
    en: {
        url: "./?select=true"
    },
    jp: {
        url: "./?lang=ja&select=true"
    },
    ru: {
        url: "./?lang=ru&select=true"
    },
    zh: {
        url: "./?lang=zh&select=true"
    },
    es: {
        url: "./?lang=es&select=true"
    },
    pt: {
        url: "./?lang=pt&select=true"
    },
    de: {
        url: "./?lang=de&select=true"
    },
    ko: {
        url: "./?lang=ko&select=true"
    },
    fr: {
        url: "./?lang=fr&select=true"
    },
    it: {
        url: "./?lang=it&select=true"
    },
    tr: {
        url: "./?lang=tr&select=true"
    }
};

// Event listener for language change
languageSelector.addEventListener('change', function() {
    const selectedLanguage = languageSelector.value;
    redirect(translations[selectedLanguage].url);
});

function redirect(url){
    let select = currentUrl.searchParams.get("select");

    if (!select) {
        window.location.href = url;
    }
}

