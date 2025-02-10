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

languageSelector.addEventListener('change', function() {
    let currentUrl = new URL(window.location.href);
    let lang = currentUrl.searchParams.get("lang");

    const selectedLanguage = languageSelector.value;

    if (selectedLanguage!==lang) {
        window.location.href = translations[selectedLanguage].url;
    }
});