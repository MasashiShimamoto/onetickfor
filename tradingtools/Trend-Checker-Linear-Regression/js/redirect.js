document.addEventListener("DOMContentLoaded", function() {
    let userLang = navigator.language || navigator.userLanguage;
    let currentUrl = new URL(window.location.href);
    let url = "https://onetickfor.win/tradingtools/Trend-Checker-Linear-Regression/"; 
    let lang = currentUrl.searchParams.get("lang");
    let select = currentUrl.searchParams.get("select");
    let query = null;

    if (userLang.includes("ja")) {
        query = "ja";
    }else if (userLang.includes("ru")) {
        query = "ru";
    }else if (userLang.includes("zh")) {
        query = "zh";
    }else if (userLang.includes("es")) {
        query = "es";
    }else if (userLang.includes("pt")) {
        query = "pt";
    }else if (userLang.includes("de")) {
        query = "de";
    }else if (userLang.includes("ko")) {
        query = "ko";
    }else if (userLang.includes("fr")) {
        query = "fr";
    }else if (userLang.includes("it")) {
        query = "it";
    }else if (userLang.includes("tr")) {
        query = "tr";
    }

    if (query && query !== lang) {
        if(!select){
            window.location.href = url + "?lang=" + query;
        }
    }
});
