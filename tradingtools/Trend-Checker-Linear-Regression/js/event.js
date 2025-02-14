// ボタンクリックイベントの共通関数
function setupButtonEvent(buttonId, eventName) {
    document.getElementById(buttonId).addEventListener("click", function() {
        gtag('event', eventName, {
        });
    });
}

// 各ボタンのイベント設定
setupButtonEvent("mt5-link-top",  "mt5-top");
setupButtonEvent("mt4-link-top",  "mt4-top");
setupButtonEvent("mt5-link-bottom","mt5-bottom");
setupButtonEvent("mt4-link-bottom", "mt4-bottom");
setupButtonEvent("mt5-link-side",  "mt5-side");
setupButtonEvent("mt4-link-side",  "mt4-side");


// トラッキングする要素のIDリスト
const elementsToTrack = [
    "2nd-View-End", "thirdv-title", "thirdv-item-1-End",
    "3rd-View-Video-End", "thirdv-title2", "problem-End", 
    "solve-text", "encouragement-End", "thirdv-title3", 
    "confident-img-End", "thirdv-item-3-End", "cta-title", 
    "cta-buttons-top", "mt4-link-bottom", "last-view-text", 
    "bottom"
];

// スクロール時に要素の位置をチェックする関数
function trackElementView() {
    const windowHeight = window.innerHeight;

    elementsToTrack.forEach(id => {
        const element = document.getElementById(id);
        if (!element || element.isTracked) return; // 要素が存在しない、または既にトラッキング済みならスキップ

        const elementRect = element.getBoundingClientRect();
        const elementTop = elementRect.top;
        const elementBottom = elementRect.bottom;

        // 要素が表示された場合にスクロール進捗をトラッキング
        if (elementTop < windowHeight && elementBottom > 0) {
            element.isTracked = true; // 重複送信を防ぐ

            // イベント名を要素IDを元に動的に設定
            const eventName = `scroll_to_${id}`;

            gtag('event', eventName, {
                'element_id': id,
                'event_category': 'scroll',
                'event_label': location.pathname
            });
        }
    });
}

// スクロールイベントを登録
window.addEventListener("scroll", trackElementView);
