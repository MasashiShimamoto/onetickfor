const languageSelector = document.getElementById('language-selector');
const translations = {
    en: {
        url: "./"
    },
    jp: {
        url: "./?lang=ja"
    },
    ru: {
        url: "./?lang=ru"
    },
    zh: {
        url: "./?lang=zh"
    },
    es: {
        url: "./?lang=es"
    },
    pt: {
        url: "./?lang=pt"
    },
    de: {
        url: "./?lang=de"
    },
    ko: {
        url: "./?lang=ko"
    },
    fr: {
        url: "./?lang=fr"
    },
    it: {
        url: "./?lang=it"
    },
    tr: {
        url: "./?lang=tr"
    }
};

// Event listener for language change
languageSelector.addEventListener('change', function() {
    const selectedLanguage = languageSelector.value;
    window.location.href = translations[selectedLanguage].url; // Redirect based on selected language
});

// Set default language to English
updateText('en');
