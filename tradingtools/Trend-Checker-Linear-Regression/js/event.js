// ボタンクリックイベントの共通関数
function setupButtonEvent(buttonId, buttonName, location) {
    document.getElementById(buttonId).addEventListener("click", function() {
        gtag('event', 'cta_click', {
            'button_name': buttonName,
            'location': location
        });
    });
}

// 各ボタンのイベント設定
setupButtonEvent("mt5-link-top", "mt5-top", "first view");
setupButtonEvent("mt4-link-top", "mt4-top", "first view");
setupButtonEvent("mt5-link-bottom", "mt5-bottom", "CTA view");
setupButtonEvent("mt4-link-bottom", "mt4-bottom", "CTA view");
setupButtonEvent("mt5-link-side", "mt5-side", "side");
setupButtonEvent("mt4-link-side", "mt4-side", "side");
setupButtonEvent("Privacy-Policy", "Privacy-Policy", "CTA view");
