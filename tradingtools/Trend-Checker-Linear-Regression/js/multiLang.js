document.addEventListener("DOMContentLoaded", function () {
    // 言語データを格納
    const translations = {
        en: {
            copy: `<span class="accent-string">Simplified</span> analysis<br>Stay on top of trends`,
            sub_copy: `<p> This tool uses linear regression and trigonometry to help you spot trends and reversal points in an instant. You won’t need to rely on complicated methods like Dow Theory or Granville’s Rules. It’s simple, clear, and designed to you focus on confident trading without the guesswork. </p>`,
            linkUrl_mt5: `https://www.mql5.com/en/market/product/128368?source=Site`,
            btn_mt5: `<i class="fa-solid fa-rocket"></i> Get started with MT5`,
            linkUrl_mt4: `https://www.mql5.com/en/market/product/128100?source=Site`,
            btn_mt4: `<i class="fa-solid fa-rocket"></i> Get started with MT4`,
            second_view_text: `“Hey there, traders! ✨<br> I’m so glad we’ve crossed paths today!<br> Let me show you how Trend Checker Linear Regression works.<br> It might sound a little tricky at first, but don’t worry—I’ll explain it in a way that’s super easy to follow.<br> Stick with me, and let’s dive in together! 🌟”`,
            thirdv_title: `<span class="accent-string">Instant</span> Trend Spotting`,
            thirdv_item_1: `<h3><span class="accent-string">Quickly spot trends and reversals with ease</span></h3><p>When you add this tool to your trading chart, it studies past price movements using a clever maths trick called linear regression.</p><h3><span class="accent-string">Colourful lines to show price direction</span></h3><p>It then draws colourful lines to show you the direction the price is moving. You’ll even see the angle of these lines, so you’ll instantly know if the price is going up, down, or staying steady.</p><h3><span class="accent-string">Easy to understand trend changes</span></h3><p>The best bit? The colour of the line changes based on the trend, making it easy to understand what’s happening – no guesswork required!</p>`,
            thirdv_title2: `<span class="accent-string">Say goodbye</span> to complex trading techniques`,
            thirdv_item_2_text1: `Struggling with all those complicated trading techniques? Things like Dow Theory, Elliott Waves, or chart patterns – no matter how much you practise, it just doesn’t seem to get easier, does it? Or maybe you’ve tried to analyse charts like your favourite YouTuber, but end up guessing instead? And backtests might look great, but real trading often feels like everything falls apart because the chart keeps changing!`,
            problem_text1: `<p>Dow Theory and Elliott Waves still confuse me. Am I doing this right?</p>`,
            problem_text2: `I've tried chart analysis like my favourite YouTuber, but in the end, I just go with my gut.`,
            problem_text3: `Is traditional chart analysis even reliable? Practising more isn’t helping.`,
            thirdv_item_2_text2: `Here’s the thing: traditional chart analysis isn’t as reliable as people say, and practising more won’t fix it. But with <span class="accent-string">Trend Checker Linear Regression</span>, you don’t need to worry about any of that! It does all the hard work for you, so you can focus on trading without the stress. It’s like having a smart, reliable friend guiding you at every step!`,
            solve_text: `The Trend Checker Linear Regression<br>will <span class="accent-string">solve</span> your problem!`,
            encouragement_text: `Don't worry! I'm with you, so there's nothing to fear!<br> Leave the market stuff to me!`,
            thirdv_title3: `<span class="accent-string">Confident</span> Trading Made Simple`,
            thirdv_item_3: `<h3><span class="accent-string">Identifying the trend vs timing the trade</span></h3><p>Did you know that there are two main parts to technical analysis? The first is understanding what's happening in the market right now — this is the analysis that helps you spot the current trend. The second is timing the best moments to buy or sell. The problem is, many traders confuse these two, and as a result, even the smartest strategies can go wrong.</p><h3><span class="accent-string">Gain the Edge</span></h3><p>That's where <span class="accent-string">Trend Checker Linear Regression</span> comes in as a game-changer! It makes spotting trends so easy, it feels like having an unfair advantage. In just a few seconds, you'll be able to understand exactly what's happening in the market. Once you have that clear picture of the current market situation, you can confidently apply your own buy-and-sell strategy without second-guessing. It’s like having a best friend who’s always there to guide you in the right direction. What do you think? Pretty amazing, right?</p>`,
            cta_title: `<span class="accent-string">Start Trading</span> Smarter Today!`,
            cta_description: `<h3><i class="fa-regular fa-circle-check"></i> Unlimited Access!</h3><p>Make a one-time payment and get lifetime access. No subscriptions, no recurring payments — just pure trend analysis, forever.</p><h3><i class="fa-regular fa-circle-check"></i> Rent for Only $30.99 (3 months)</h3><p>For the price of a pack of cigarettes, you get full access to all the features and can start spotting trends with ease.</p><h3><i class="fa-regular fa-circle-check"></i> Try It Free!</h3><p>Get a taste of how Trend Checker can transform your trading. Experience the power of simplified trend spotting for free!</p>`,
            cta_buttons_top: `Lifetime access!`,
            accessforever: `No subscriptions, no hidden fees – just lifetime access to powerful trend analysis.`,
            cta_buttons_full: `<span class="accent-string">Forever</span> full access`,
            privacy_policy: `<p>By using our tools, you agree to our <a href="https://onetickfor.win/privacy-policy/" class="text-Privacy-Policy">Privacy Policy</a>.</p>`,
            last_view_text: `Alright then, ready to go?<br>Have an amazing adventure and make it the best one yet! Off we go!`
        },
        ja: {
            copy: `<span class="accent-string">シンプルな</span>分析で<br>トレンドを見極める`,
            sub_copy: `<p>このツールは、線形回帰と三角法を活用し、トレンドや反転ポイントを瞬時に見極めるのに役立ちます。ダウ理論やグランビルの法則のような複雑な手法に頼る必要はありません。シンプルで分かりやすく、迷わず自信を持ってトレードできるように設計されています。</p>`,
            linkUrl_mt5: `https://www.mql5.com/ja/market/product/128368?source=Site`,
            btn_mt5: `<i class="fa-solid fa-rocket"></i> MT5で始める`,
            linkUrl_mt4: `https://www.mql5.com/ja/market/product/128100?source=Site`,
            btn_mt4: `<i class="fa-solid fa-rocket"></i> MT4で始める`,
            second_view_text: `“こんにちは、トレーダーの皆さん！✨<br>今日はこうして出会えてとても嬉しいです！<br>これから、トレンドチェッカーの線形回帰の仕組みをご紹介します。<br>最初はちょっと難しく聞こえるかもしれませんが、心配しないでくださいね。とても分かりやすく説明します！<br>一緒に学んでいきましょう！🌟”`,
            thirdv_title: `<span class="accent-string">瞬時に</span>トレンドを見極める`,
            thirdv_item_1: `<h3><span class="accent-string">トレンドや反転を素早く簡単に見極める</span></h3><p>このツールをトレーディングチャートに追加すると、過去の価格の動きを「線形回帰」と呼ばれる巧妙な数学的手法を使って分析します。</p><h3><span class="accent-string">価格の方向を示すカラフルなライン</span></h3><p>その後、価格の動きの方向を示すカラフルなラインを描画します。これらのラインの角度も見ることができるので、価格が上昇しているのか、下降しているのか、または横ばいなのかを瞬時に把握できます。</p><h3><span class="accent-string">トレンドの変化が簡単に理解できる</span></h3><p>一番のポイントは？ラインの色がトレンドに基づいて変わるため、何が起きているのかを簡単に理解でき、推測する必要はありません！</p>`,
            thirdv_title2: `複雑なトレード技法に<span class="accent-string">さようなら</span>`,
            thirdv_item_2_text1: `複雑なトレード技法に苦しんでいませんか？  ダウ理論やエリオット波動、チャートパターンなど、どれだけ練習しても、なかなか簡単にはならないですよね？  それとも、お気に入りのYouTuberみたいにチャートを分析しようとしたけれど、結局は推測で終わってしまっていませんか？  バックテストはうまくいっても、実際のトレードではチャートがどんどん変わって、すべてが崩れてしまうように感じませんか？`,
            problem_text1: `ダウ理論とエリオット波動、まだよくわかんない。これで合ってるのかな？`,
            problem_text2: `お気に入りのYouTuberみたいにチャート分析してみたけど、結局いつも感頼りになっちゃうなぁ。`,
            problem_text3: `伝統的なチャート分析って、信頼できるんだろうか？もっと練習しても、あんまり効果ないなぁ。`,
            thirdv_item_2_text2: `実は、従来のチャート分析は言われているほど信頼できるものではなく、もっと練習したところで解決するわけではありません。  でも、<span class="accent-string">Trend Checker Linear Regression</span> があれば、そんな心配は無用です！  このツールがすべての面倒な作業を代わりにやってくれるので、ストレスなくトレードに集中できます。  まるで、賢くて信頼できる友達が、あなたを一歩一歩サポートしてくれるようなものです！`,
            solve_text: `The Trend Checker Linear Regression<br>があなたの問題を<span class="accent-string">解決</span>します！`,
            encouragement_text: `心配しないで！私がついてるから、怖がることなんてないよ！<br>市場分析のことは私に任せて！`,
            thirdv_title3: `<span class="accent-string">自信</span>を持てるトレードをシンプルに`,
            thirdv_item_3: `<h3><span class="accent-string">トレンドの識別とトレードのタイミング</span></h3><p>テクニカル分析には大きく分けて2つあることをご存知ですか？  まず一つは、今市場で何が起こっているのかを把握すること — これが現在発生しているトレンドを見極める分析です。  もう一つは、買うべき時や売るべき時のタイミングを図る分析です。  問題なのは、多くのトレーダーがこの2つを混同してしまい、その結果、どんなに賢い戦略でも上手くいかなくなることがあるということです。</p><h3><span class="accent-string">優位性を手に入れる</span></h3><p>そこで、 <span class="accent-string">Trend Checker Linear Regression</span> がゲームチェンジャーとなります！トレンドを見つけるのがとても簡単になるので、まるで反則的な優位性を持っているかのような感覚になります。たった数秒で、市場で何が起こっているのかを正確に把握できるようになります。今の市場の明確な状況がわかれば、自分の売買戦略を正しく使うことができ、二度と迷うことはありません。まるで、いつでも正しい方向に導いてくれる親友がいるようなものです。どう思いますか？素晴らしいでしょう？</p>`,
            cta_title: `今日からもっと賢く<span class="accent-string">トレードを始めよう！</span>`,
            cta_description: `<h3><i class="fa-regular fa-circle-check"></i> 無制限アクセス！</h3><p>一度きりの支払いで生涯アクセスが手に入ります。サブスクリプションや繰り返しの支払いはなし — ただ純粋なトレンド分析を永遠に利用できます。</p><h3><i class="fa-regular fa-circle-check"></i> たったの$30.99で3ヶ月間レンタルできます。</h3><p>たばこを買う程度の値段ですべての機能に完全アクセスでき、簡単にトレンドを見つけ始めることができます。</p><h3><i class="fa-regular fa-circle-check"></i> 無料でお試しください！</h3><p>Trend Checkerがあなたのトレードをどのように変えるかを体験してみてください。簡単にトレンドを見つける力を無料で試してみましょう！</p>`,
            cta_buttons_top: `生涯アクセス！`,
            accessforever: `サブスクリプションなし、隠れた料金なし — 強力なトレンド分析に生涯アクセスできます。`,
            cta_buttons_full: `<span class="accent-string">永遠</span>の完全アクセス`,
            privacy_policy: `<p>当社のツールを使用することで、<a href="/privacy-policy/" class="text-Privacy-Policy">プライバシーポリシー</a>に同意したことになります。</p>`,
            last_view_text: `それでは、準備はいいですか？<br>素晴らしい冒険を楽しんで、これまでで最高のものにしましょう！さあ、出発です！`
            }
    };

    // 言語取得 (デフォルトは "en")
    let params = new URLSearchParams(window.location.search);
    let language = params.get("lang") || 'en';

    // すべての要素を一括更新
    const elementsToUpdate = [
        "copy", "sub-copy", "second-view-text", "thirdv-title", 
        "thirdv-item-1","thirdv-title2", "thirdv-item_2-text1","problem-text1","problem-text2",
        "problem-text3","thirdv-item-2-text2","solve-text","encouragement-text","thirdv-title3",
        "thirdv-item-3","cta-title","cta-description","cta-buttons-top","accessforever","cta-buttons-full",
        "privacy-policy","last-view-text"
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
