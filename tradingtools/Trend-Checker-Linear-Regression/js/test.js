document.addEventListener("DOMContentLoaded", function () {
    // 言語の取得（デフォルトは "en"）
    let params = new URLSearchParams(window.location.search);
    let language = params.get("lang") || 'en';

    // 外部JSONファイルを非同期で読み込む
    fetch(`./translations/${language}.json`)
        .then(response => response.json())
        .then(translations => {
            // データが読み込まれたら、DOMを更新する
            updateContent(translations);
        })
        .catch(error => {
            console.error("翻訳ファイルの読み込みに失敗しました:", error);
        });

    // DOMを更新する関数
    function updateContent(translations) {
        const elementsToUpdate = [
            "copy", "sub-copy", "second-view-text", "thirdv-title", 
            "thirdv-item-1","thirdv_title2", "thirdv_item_2_text1","problem_text1","problem_text2",
            "problem_text3","thirdv_item_2_text2","solve_text","encouragement_text","thirdv_title3",
            "thirdv_item_3","cta-title","cta_description","cta_buttons_top","accessforever","cta_buttons_full",
            "privacy_policy","last-view-text"
        ];

        elementsToUpdate.forEach(id => {
            let element = document.getElementById(id);
            if (element && translations[id]) {
                element.innerHTML = translations[id];
            }
        });

        // ボタン・リンクの更新
        const linkElements = [
            { id: "mt5-link-top", urlKey: "linkUrl_mt5", textKey: "btn_mt5" },
            { id: "mt4-link-top", urlKey: "linkUrl_mt4", textKey: "btn_mt4" },
            { id: "mt5-link-bottom", urlKey: "linkUrl_mt5", textKey: "btn_mt5" },
            { id: "mt4-link-bottom", urlKey: "linkUrl_mt4", textKey: "btn_mt4" },
            { id: "mt5-link-side", urlKey: "linkUrl_mt5", textKey: "btn_mt5" },
            { id: "mt4-link-side", urlKey: "linkUrl_mt4", textKey: "btn_mt4" }
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
