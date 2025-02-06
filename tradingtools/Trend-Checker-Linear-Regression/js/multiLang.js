import { translations } from './translations.js';

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