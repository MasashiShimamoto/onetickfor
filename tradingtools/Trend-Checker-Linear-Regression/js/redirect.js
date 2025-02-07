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
        window.location.href = url + "?lang=" + query;
    }
});
