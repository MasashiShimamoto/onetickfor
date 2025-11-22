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

    // 言語選択肢を設定
    if (lang && [...languageSelector.options].some(option => option.value === lang)) {
        languageSelector.value = lang;
    }

    // 言語別URLリスト
    const translations = languages.reduce((acc, code) => {
        acc[code] = { url: `./?lang=${code}&select=true` };
        return acc;
    }, { "": { url: "./?select=true" } });

    // 言語選択時の動作
    languageSelector.addEventListener("change", function () {
        const selectedLanguage = languageSelector.value;
        if (selectedLanguage !== lang) {
            window.location.href = translations[selectedLanguage].url;
        }
    });

    // 国旗の設定
    function updateFlag() {
        const selectedOption = languageSelector.options[languageSelector.selectedIndex];
        const flagCode = selectedOption.getAttribute("data-flag");
        if (flagCode) {
            languageSelector.style.backgroundImage = `url("https://flagcdn.com/w40/${flagCode}.png")`;
        }
    }

    languageSelector.addEventListener("change", updateFlag);
    updateFlag(); // 初回設定
});
