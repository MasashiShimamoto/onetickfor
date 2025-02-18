document.addEventListener("DOMContentLoaded", function() {
    // Debounce関数の定義
    function debounce(func, wait) {
      let timeout;
      return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
      };
    }
  
    // ボタンクリックイベントの共通関数
    function setupButtonEvent(buttonId, eventName) {
      document.getElementById(buttonId)?.addEventListener("click", function() {
        gtag('event', eventName, {});
      });
    }
  
    // 各ボタンのイベント設定
    [
      ["mt5-link-top", "mt5-top"],
      ["mt4-link-top", "mt4-top"],
      ["mt5-link-bottom", "mt5-bottom"],
      ["mt4-link-bottom", "mt4-bottom"],
      ["mt5-link-side", "mt5-side"],
      ["mt4-link-side", "mt4-side"]
    ].forEach(([id, event]) => setupButtonEvent(id, event));
  
    // トラッキングする要素のIDリスト
    const elementsToTrack = [
      "2nd-View-End", "thirdv-title", "thirdv-item-1-End", "thirdv-title2",
      "problem-End", "thirdv-item-2-End", "encouragement-End", "thirdv-title3",
      "v", "thirdv-item-3-End", "cta-title", "mt4-link-bottom",
      "last-view-text", "bottom"
    ];
  
    // スクロール時に要素の位置をチェックする関数
    function trackElementView() {
      const windowHeight = window.innerHeight;
      elementsToTrack.forEach(id => {
        const element = document.getElementById(id);
        if (!element || element.isTracked) return;
        const rect = element.getBoundingClientRect();
        if (rect.top < windowHeight && rect.bottom > 0) {
          element.isTracked = true;
          gtag('event', `scroll_to_${id}`, {
            'element_id': id,
            'event_category': 'scroll',
            'event_label': location.pathname
          });
        }
      });
    }
  
    // スクロールイベントを登録（debounce付き）
    window.addEventListener("scroll", debounce(trackElementView, 200));
    
    // 初回チェック
    trackElementView();
  });
  