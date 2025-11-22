document.addEventListener("DOMContentLoaded", function () {

    // 言語取得 (デフォルトは "en")
    let params = new URLSearchParams(window.location.search);
    let language = params.get("lang") || 'en';

    // 外部JSONファイルを非同期で読み込む
    fetch(`./json/${language}.json`)
        .then(response => response.json())
        .then(translations => {
            // データが読み込まれたら、DOMを更新する
            updateContent(translations);
        })
        .catch(error => {
            console.error("翻訳ファイルの読み込みに失敗しました:", error);
        });

    // すべての要素を一括更新
    function updateContent(translations) {

        const elementsToUpdate = [
            "copy", "sub-copy", "second-view-text", "thirdv-title", 
            "thirdv-item-1","thirdv-title2", "thirdv-item_2-text1","problem-text1","problem-text2",
            "problem-text3","thirdv-item-2-text2","solve-text","encouragement-text","thirdv-title3",
            "thirdv-item-3","cta-title","cta-description","cta-buttons-top","accessforever","cta-buttons-full",
            "privacy-policy","last-view-text"
        ];
        elementsToUpdate.forEach(id => {
            let element = document.getElementById(id);
            if (element && translations[id]) {
                element.innerHTML = translations[id];
            }
        });

        // ボタン・リンクの更新
        const linkElements = [
            { id: "mt5-link-top", urlKey: "linkUrl-mt5", textKey: "btn-mt5" },
            { id: "mt4-link-top", urlKey: "linkUrl-mt4", textKey: "btn-mt4" },
            { id: "mt5-link-bottom", urlKey: "linkUrl-mt5", textKey: "btn-mt5" },
            { id: "mt4-link-bottom", urlKey: "linkUrl-mt4", textKey: "btn-mt4" },
            { id: "mt5-link-side", urlKey: "linkUrl-mt5", textKey: "btn-mt5" },
            { id: "mt4-link-side", urlKey: "linkUrl-mt4", textKey: "btn-mt4" }
        ];
        
        linkElements.forEach(({ id, urlKey, textKey }) => {
            let element = document.getElementById(id);
            if (element && translations[urlKey] && translations[textKey]) {
                element.href = translations[urlKey];
                element.innerHTML = translations[textKey];
            }
        });
    }
});
