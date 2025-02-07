document.addEventListener("DOMContentLoaded", function() {
    let userLang = navigator.language || navigator.userLanguage;
    let url = "https://onetickfor.win/tradingtools/Trend-Checker-Linear-Regression/"; 
    let query = "";

    if (userLang.startsWith("ja")) {
        query = "?lang=ja";
    } else {
        query = "";
    }
    
    if (query !== ""){
        window.location.href = url+query;
    }
});
