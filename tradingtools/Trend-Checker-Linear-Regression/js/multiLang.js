document.addEventListener("DOMContentLoaded", function () {
    // 言語データを格納
    const translations = {
        en: {
            copy: '<span class="accent-string">Simplified</span> analysis<br>Stay on top of trends',
            sub_copy: `
                <p>
                    This tool uses linear regression and trigonometry to help you spot trends and reversal points in an instant. 
                    You won’t need to rely on complicated methods like Dow Theory or Granville’s Rules. 
                    It’s simple, clear, and designed to help you focus on confident trading without the guesswork.
                </p>`,
            linkUrl_mt5: "https://www.mql5.com/en/market/product/128368?source=Site",
            btn_mt5: '<i class="fa-solid fa-rocket"></i> Get started with MT5',
            linkUrl_mt4: "https://www.mql5.com/en/market/product/128100?source=Site",
            btn_mt4: '<i class="fa-solid fa-rocket"></i> Get started with MT4',
            second_view_text: `“Hey there, traders! ✨<br>
                I’m so glad we’ve crossed paths today!<br>
                Let me show you how Trend Checker Linear Regression works.<br>
                It might sound a little tricky at first, but don’t worry—I’ll explain it in a way that’s super easy to follow.<br>
                Stick with me, and let’s dive in together! 🌟”`,
            thirdv_title: '<span class="accent-string">Instant</span> Trend Spotting',
            thirdv_item_1: `
                <h3><span class="accent-string">Quickly spot trends and reversals with ease</span></h3>
                <p>When you add this tool to your trading chart, it studies past price movements using a clever maths trick called linear regression.</p>
                <h3><span class="accent-string">Colourful lines to show price direction</span></h3>
                <p>It then draws colourful lines to show you the direction the price is moving...</p>`,
            cta_title: `<span class="accent-string">Start Trading</span> Smarter Today!`,
            last_view_text: `Alright then, ready to go?<br>Have an amazing adventure and make it the best one yet! Off we go!`
        },
        ja: {
            copy: '<span class="accent-string">シンプルな</span>分析で<br>トレンドを見極める',
            sub_copy: `
                <p>
                    このツールは、線形回帰と三角法を活用し、トレンドや反転ポイントを瞬時に見極めるのに役立ちます。
                    ダウ理論やグランビルの法則のような複雑な手法に頼る必要はありません。
                    シンプルで分かりやすく、迷わず自信を持ってトレードできるように設計されています。
                </p>`,
            linkUrl_mt5: "https://www.mql5.com/ja/market/product/128368?source=Site",
            btn_mt5: '<i class="fa-solid fa-rocket"></i> MT5で始める',
            linkUrl_mt4: "https://www.mql5.com/ja/market/product/128100?source=Site",
            btn_mt4: '<i class="fa-solid fa-rocket"></i> MT4で始める',
            second_view_text: `“こんにちは、トレーダーの皆さん！✨<br>
                今日はこうして出会えてとても嬉しいです！<br>
                これから、トレンドチェッカーの線形回帰の仕組みをご紹介します。<br>
                最初はちょっと難しく聞こえるかもしれませんが、心配しないでくださいね。とても分かりやすく説明します！<br>
                一緒に学んでいきましょう！🌟”`,
            thirdv_title: '<span class="accent-string">瞬時に</span>トレンドを見極める',
            thirdv_item_1: `
                <h3><span class="accent-string">トレンドや反転を素早く簡単に見極める</span></h3>
                <p>このツールをトレーディングチャートに追加すると...</p>`,
            cta_title: `今日からもっと賢く<span class="accent-string">トレードを始めよう！</span>`,
            last_view_text: `それでは、準備はいいですか？<br>素晴らしい冒険を楽しんで、これまでで最高のものにしましょう！さあ、出発です！`
        }
    };

    // 言語取得 (デフォルトは "en")
    let params = new URLSearchParams(window.location.search);
    let language = params.get("lang") || 'en';

    // すべての要素を一括更新
    const elementsToUpdate = [
        "copy", "sub-copy", "second-view-text", "thirdv-title", 
        "thirdv-item-1", "cta-title", "last-view-text"
    ];
    elementsToUpdate.forEach(id => {
        if (document.getElementById(id)) {
            document.getElementById(id).innerHTML = translations[language][id];
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
        if (element) {
            element.href = translations[language][urlKey];
            element.innerHTML = translations[language][textKey];
        }
    });
});
