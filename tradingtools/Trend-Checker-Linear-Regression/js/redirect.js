document.addEventListener("DOMContentLoaded", function () {
    const languageSelector = document.getElementById("language-selector");
    const currentUrl = new URL(window.location.href);
    const url = "https://onetickfor.win/tradingtools/Trend-Checker-Linear-Regression/";
    const lang = currentUrl.searchParams.get("lang");
    const select = currentUrl.searchParams.get("select");

    // 言語コードリスト
    const languages = ["ja", "ru", "zh", "es", "pt", "de", "ko", "fr", "it", "tr"];
    let userLang = navigator.language.slice(0, 2); // 2文字の言語コード取得

    if (languages.includes(userLang) && userLang !== lang && !select) {
        window.location.href = `${url}?lang=${userLang}`;
    }

});
