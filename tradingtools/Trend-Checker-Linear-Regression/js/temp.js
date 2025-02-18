document.addEventListener("DOMContentLoaded", function() {
    // ボタンクリックイベントの共通関数
    function setupButtonEvent(buttonId, eventName) {
      document.getElementById(buttonId)?.addEventListener("click", () => {
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
      "thirdv-item-1-End", 
      "thirdv-item-2-End", 
      "thirdv-item-3-End",
      "CTA-section-End", 
      "bottom"
    ];
  
    // IntersectionObserverを使用してスクロールトラッキング
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.tracked) {
          const id = entry.target.id;
          gtag('event', `scroll_to_${id}`, {
            'element_id': id,
            'page_path': location.pathname
          });
          entry.target.dataset.tracked = "true";
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
  
    // 監視開始
    elementsToTrack.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });
  });

