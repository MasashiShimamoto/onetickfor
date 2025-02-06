import { translations } from 'https://onetickfor.win/tradingtools/Trend-Checker-Linear-Regression/js/translations.js';

document.addEventListener("DOMContentLoaded",function(){
    let params = new URLSearchParams(window.location.search);
    let resultText = "";

    if(params.get("lang")==="ja"){
        resultText = translations.ja;
    }else{
        resultText = translations.en;
    }

    document.getElementById("sub-copy").textContent = resultText;
});