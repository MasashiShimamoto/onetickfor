document.addEventListener("DOMContentLoaded", function() {
    let userLang = navigator.language || navigator.userLanguage;
    let currentUrl = new URL(window.location.href);
    let url = "https://onetickfor.win/tradingtools/Trend-Checker-Linear-Regression/"; 
    let langParam = currentUrl.searchParams.get("lang");
    let query = null;

    // ユーザーの言語が日本語の場合
    if (userLang.includes("ja")) {
        query = "ja";
    }

    // 言語がクエリパラメータと異なる場合、リダイレクト
    if (query && query !== langParam) {
        redirect(url + "?lang=" + query);
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
    const selectedLanguage = languageSelector.value;
    redirect(translations[selectedLanguage].url);
});

// リダイレクト関数
function redirect(newUrl) {
    let currentUrl = new URL(window.location.href);
    let select = currentUrl.searchParams.get("select");

    // 'select' パラメータが存在しない場合、リダイレクトを行う
    if (!select) {
        window.location.href = newUrl;
    }
}
