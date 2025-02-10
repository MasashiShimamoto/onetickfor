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
    }

    if(!userLang.includes(lang)){
        query=lang;
    }*/

    if (!select && lang) {
        window.location.href = url + "?lang=" + lang;
    }
});