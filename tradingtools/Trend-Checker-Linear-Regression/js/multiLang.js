//First view
//copy
let copy_ja = '<span class="accent-string">シンプルな</span>分析で<br>トレンドを見極める';
let copy_en = '<span class="accent-string">Simplified</span> analysis<br>Stay on top of trends';
//sub-copy
let sub_copy_ja = `
<p>
    このツールは、線形回帰と三角法を活用し、トレンドや反転ポイントを瞬時に見極めるのに役立ちます。
    ダウ理論やグランビルの法則のような複雑な手法に頼る必要はありません。
    シンプルで分かりやすく、迷わず自信を持ってトレードできるように設計されています。
</p>`;
let sub_copy_en = `
<p>
    This tool uses linear regression and trigonometry to help you spot trends and reversal points in an instant. 
    You won’t need to rely on complicated methods like Dow Theory or Granville’s Rules. 
    It’s simple, clear, and designed to let you focus on confident trading without the guesswork.
</p>`;
//top-btn-mt5
let linkUrl_mt5 = "";
let btn_mt5_ja = '<i class="fa-solid fa-rocket"></i> MT5で始める';
let btn_mt5_en = '<i class="fa-solid fa-rocket"></i> Get started with MT5';
//top-btn-mt4
let linkUrl_mt4 = "";
let btn_mt4_ja = '<i class="fa-solid fa-rocket"></i> MT4で始める';
let btn_mt4_en = '<i class="fa-solid fa-rocket"></i> Get started with MT4';
//2nd view
//3rd view
let thirdv_title_ja = '<span class="accent-string">瞬時に</span>トレンドを見極める';
let thirdv_title_en = '<span class="accent-string">Instant</span> Trend Spotting';
let thirdv_item_1_ja = `
    <h3><span class="accent-string">トレンドや反転を素早く簡単に見極める</span></h3>
    <p>このツールをトレーディングチャートに追加すると、過去の価格の動きを「線形回帰」と呼ばれる巧妙な数学的手法を使って分析します。</p>
    <h3><span class="accent-string">価格の方向を示すカラフルなライン</span></h3>
    <p>その後、価格の動きの方向を示すカラフルなラインを描画します。これらのラインの角度も見ることができるので、価格が上昇しているのか、下降しているのか、または横ばいなのかを瞬時に把握できます。</p>
    <h3><span class="accent-string">トレンドの変化が簡単に理解できる</span></h3>
    <p>一番のポイントは？ラインの色がトレンドに基づいて変わるため、何が起きているのかを簡単に理解でき、推測する必要はありません！</p>`;
let thirdv_item_1_en = `
    <h3><span class="accent-string">Quickly spot trends and reversals with ease</span></h3>
    <p>When you add this tool to your trading chart, it studies past price movements using a clever maths trick called linear regression.</p>
    <h3><span class="accent-string">Colourful lines to show price direction</span></h3>
    <p>It then draws colourful lines to show you the direction the price is moving. You’ll even see the angle of these lines, so you’ll instantly know if the price is going up, down, or staying steady.</p>
    <h3><span class="accent-string">Easy to understand trend changes</span></h3>
    <p>The best bit? The colour of the line changes based on the trend, making it easy to understand what’s happening – no guesswork required!</p>`;
let thirdv_title2_ja =`複雑なトレード技法に<span class="accent-string">さようなら</span>`;
let thirdv_title2_en =`<span class="accent-string">Say goodbye</span> to complex trading techniques`;
let thirdv_item_2_text1_ja = `
    複雑なトレード技法に苦しんでいませんか？  
    ダウ理論やエリオット波動、チャートパターンなど、どれだけ練習しても、なかなか簡単にはならないですよね？  
    それとも、お気に入りのYouTuberみたいにチャートを分析しようとしたけれど、結局は推測で終わってしまっていませんか？  
    バックテストはうまくいっても、実際のトレードではチャートがどんどん変わって、すべてが崩れてしまうように感じませんか？`;
let thirdv_item_2_text1_en = `
    Struggling with all those complicated trading techniques? 
    Things like Dow Theory, Elliott Waves, or chart patterns – no matter how much you practise, it just doesn’t seem to get easier, does it? 
    Or maybe you’ve tried to analyse charts like your favourite YouTuber, but end up guessing instead? 
    And backtests might look great, but real trading often feels like everything falls apart because the chart keeps changing!`;
let thirdv_item_2_text2_ja = `
    実は、従来のチャート分析は言われているほど信頼できるものではなく、もっと練習したところで解決するわけではありません。  
    でも、<span class="accent-string">Trend Checker Linear Regression</span> があれば、そんな心配は無用です！  
    このツールがすべての面倒な作業を代わりにやってくれるので、ストレスなくトレードに集中できます。  
    まるで、賢くて信頼できる友達が、あなたを一歩一歩サポートしてくれるようなものです！`;
let thirdv_item_2_text2_en = `
    Here’s the thing: traditional chart analysis isn’t as reliable as people say, and practising more won’t fix it. 
    But with <span class="accent-string">Trend Checker Linear Regression</span>, you don’t need to worry about any of that! 
    It does all the hard work for you, so you can focus on trading without the stress. 
    It’s like having a smart, reliable friend guiding you at every step!`;
let solve_text_ja =`The Trend Checker Linear Regression<br>があなたの問題を<span class="accent-string">解決</span>します！`;
let solve_text_en =`The Trend Checker Linear Regression<br>will <span class="accent-string">solve</span> your problem!`;
let thirdv_title3_ja =`<span class="accent-string">自信</span>を持てるトレードをシンプルに`;
let thirdv_title3_en =`<span class="accent-string">Confident</span> Trading Made Simple`;
let thirdv_item_3_ja =`
    <h3><span class="accent-string">トレンドの識別とトレードのタイミング</span></h3>
    <p>
        テクニカル分析には大きく分けて2つあることをご存知ですか？  
        まず一つは、今市場で何が起こっているのかを把握すること — これが現在発生しているトレンドを見極める分析です。  
        もう一つは、買うべき時や売るべき時のタイミングを図る分析です。  
        問題なのは、多くのトレーダーがこの2つを混同してしまい、その結果、どんなに賢い戦略でも上手くいかなくなることがあるということです。
    </p>
    <h3><span class="accent-string">優位性を手に入れる</span></h3>
    <p>
        そこで、 <span class="accent-string">Trend Checker Linear Regression</span> がゲームチェンジャーとなります！
        トレンドを見つけるのがとても簡単になるので、まるで反則的な優位性を持っているかのような感覚になります。
        たった数秒で、市場で何が起こっているのかを正確に把握できるようになります。
        今の市場の明確な状況がわかれば、自分の売買戦略を正しく使うことができ、二度と迷うことはありません。
        まるで、いつでも正しい方向に導いてくれる親友がいるようなものです。
        どう思いますか？素晴らしいでしょう？
    </p>`;
let thirdv_item_3_en =`
    <h3><span class="accent-string">Identifying the trend vs timing the trade</span></h3>
    <p>
        Did you know that there are two main parts to technical analysis?  
        The first is understanding what's happening in the market right now — this is the analysis that helps you spot the current trend.  
        The second is timing the best moments to buy or sell.  
        The problem is, many traders confuse these two, and as a result, even the smartest strategies can go wrong.
    </p>
    <h3><span class="accent-string">Gain the Edge</span></h3>
    <p>
        That's where <span class="accent-string">Trend Checker Linear Regression</span> comes in as a game-changer!
        It makes spotting trends so easy, it feels like having an unfair advantage.
        In just a few seconds, you'll be able to understand exactly what's happening in the market.
        Once you have that clear picture of the current market situation, you can confidently apply your own buy-and-sell strategy without second-guessing.
        It’s like having a best friend who’s always there to guide you in the right direction.
        What do you think? Pretty amazing, right?
    </p>`;
//Final Call to Action Section
let cta_title_ja = `今日からもっと賢く<span class="accent-string">トレードを始めよう！</span>`;
let cta_title_en = `<span class="accent-string">Start Trading</span> Smarter Today!`;
let cta_description_ja = `
    <h3><i class="fa-regular fa-circle-check"></i> 無制限アクセス！</h3>
    <p>一度きりの支払いで生涯アクセスが手に入ります。サブスクリプションや繰り返しの支払いはなし — ただ純粋なトレンド分析を永遠に利用できます。</p>
    <h3><i class="fa-regular fa-circle-check"></i> たったの$30.99で3ヶ月間レンタルできます。</h3>
    <p>たばこを買う程度の値段ですべての機能に完全アクセスでき、簡単にトレンドを見つけ始めることができます。</p>
    <h3><i class="fa-regular fa-circle-check"></i> 無料でお試しください！</h3>
    <p>Trend Checkerがあなたのトレードをどのように変えるかを体験してみてください。簡単にトレンドを見つける力を無料で試してみましょう！</p>`;
let cta_description_en = `
    <h3><i class="fa-regular fa-circle-check"></i> Unlimited Access!</h3>
    <p>Make a one-time payment and get lifetime access. No subscriptions, no recurring payments — just pure trend analysis, forever.</p>
    <h3><i class="fa-regular fa-circle-check"></i> Rent for Only $30.99 (3 months)</h3>
    <p>For the price of a pack of cigarettes, you get full access to all the features and can start spotting trends with ease.</p>
    <h3><i class="fa-regular fa-circle-check"></i> Try It Free!</h3>
    <p>Get a taste of how Trend Checker can transform your trading. Experience the power of simplified trend spotting for free!</p>`;
let cta_buttons_top_ja =`生涯アクセス！`;
let cta_buttons_top_en =`Lifetime access!`;
let accessforever_ja = `サブスクリプションなし、隠れた料金なし — 強力なトレンド分析に生涯アクセスできます。`;
let accessforever_en = `No subscriptions, no hidden fees – just lifetime access to powerful trend analysis.`;
let cta_buttons_full_ja=`<span class="accent-string">永遠</span>の完全アクセス`;
let cta_buttons_full_en=`<span class="accent-string">Forever</span> full access`;
let privacy_policy_ja=`<p>当社のツールを使用することで、<a href="/privacy-policy/" class="text-Privacy-Policy">プライバシーポリシー</a>に同意したことになります。</p>`;
let privacy_policy_en=`<p>By using our tools, you agree to our <a href="https://onetickfor.win/privacy-policy/" class="text-Privacy-Policy">Privacy Policy</a>.</p>`;



document.addEventListener("DOMContentLoaded",function(){
    let params = new URLSearchParams(window.location.search);
    //First view
    let copy = "";
    let sub_copy = "";
    let btn_mt5 = "";
    let btn_mt4 = "";
    //2nd view
    //3rd view
    let thirdv_title = '';
    let thirdv_item_1 = '';
    let thirdv_title2 =``;
    let thirdv_item_2_text1 = ``;
    let thirdv_item_2_text2 = ``;
    let solve_text = '';
    let thirdv_title3 =``;
    let thirdv_item_3 =``;
    //Final Call to Action Section
    let cta_title = ``;
    let cta_description = ``;
    let cta_buttons_top =``;
    let accessforever = ``;
    let cta_buttons_full=``;
    let privacy_policy=``;
    

    if(params.get("lang")==="ja"){
        //First view
        copy = copy_ja;
        sub_copy = sub_copy_ja;
        linkUrl_mt5 = "https://www.mql5.com/ja/market/product/128368?source=Site";
        linkUrl_mt4 = "https://www.mql5.com/ja/market/product/128100?source=Site";
        btn_mt5 = btn_mt5_ja;
        btn_mt4 = btn_mt4_ja;
        //2nd view
        //3rd view
        thirdv_title = thirdv_title_ja;
        thirdv_item_1 = thirdv_item_1_ja;
        thirdv_title2 =thirdv_title2_ja;
        thirdv_item_2_text1 = thirdv_item_2_text1_ja;
        thirdv_item_2_text2 = thirdv_item_2_text2_ja;
        solve_text = solve_text_ja;
        thirdv_title3 =thirdv_title3_ja;
        thirdv_item_3 =thirdv_item_3_ja;
        //Final Call to Action Section
        cta_title = cta_title_ja;
        cta_description = cta_description_ja;
        cta_buttons_top =cta_buttons_top_ja;
        accessforever = accessforever_ja;
        cta_buttons_full=cta_buttons_full_ja;
        privacy_policy=privacy_policy_ja;
    }else{
        //First view
        copy = copy_en;
        sub_copy = sub_copy_en;
        linkUrl_mt5 = "https://www.mql5.com/en/market/product/128368?source=Site";
        linkUrl_mt4 = "https://www.mql5.com/en/market/product/128100?source=Site";
        btn_mt5 = btn_mt5_en;
        btn_mt4 = btn_mt4_en;
        //2nd view
        //3rd view
        thirdv_title = thirdv_title_en;
        thirdv_item_1 = thirdv_item_1_en;
        thirdv_title2 =thirdv_title2_en;
        thirdv_item_2_text1 = thirdv_item_2_text1_en;
        thirdv_item_2_text2 = thirdv_item_2_text2_en;
        solve_text = solve_text_en;
        thirdv_title3 =thirdv_title3_en;
        thirdv_item_3 =thirdv_item_3_en;
        //Final Call to Action Section
        cta_title = cta_title_en;
        cta_description = cta_description_en;
        cta_buttons_top =cta_buttons_top_en;
        accessforever = accessforever_en;
        cta_buttons_full=cta_buttons_full_en;
        privacy_policy=privacy_policy_en;
    }

    //First view
    document.getElementById("copy").innerHTML = copy;
    document.getElementById("sub-copy").innerHTML = sub_copy;
    document.getElementById("mt5-link-top").href = linkUrl_mt5;
    document.getElementById("mt4-link-top").href = linkUrl_mt4;
    document.getElementById("mt5-link-top").innerHTML = btn_mt5;
    document.getElementById("mt4-link-top").innerHTML = btn_mt4;
    //2nd view
    //3rd view
    document.getElementById("thirdv-title").innerHTML = thirdv_title;
    document.getElementById("thirdv-item-1").innerHTML = thirdv_item_1;
    document.getElementById("thirdv-title2").innerHTML = thirdv_title2;
    document.getElementById("thirdv-item-2-text1").innerHTML = thirdv_item_2_text1;
    document.getElementById("thirdv-item-2-text2").innerHTML = thirdv_item_2_text2;
    document.getElementById("solve-text").innerHTML = solve_text;
    document.getElementById("thirdv-title3").innerHTML = thirdv_title3;
    document.getElementById("thirdv-item-3").innerHTML = thirdv_item_3;
    //Final Call to Action Section
    document.getElementById("cta-title").innerHTML = cta_title;
    document.getElementById("cta-description").innerHTML = cta_description;
    document.getElementById("cta-buttons-top").innerHTML = cta_buttons_top;
    document.getElementById("accessforever").innerHTML = accessforever;
    document.getElementById("cta-buttons-full").innerHTML = cta_buttons_full;
    document.getElementById("privacy-policy").innerHTML = privacy_policy;
    document.getElementById("mt5-link-bottom").href = linkUrl_mt5;
    document.getElementById("mt4-link-bottom").href = linkUrl_mt4;
    document.getElementById("mt5-link-bottom").innerHTML = btn_mt5;
    document.getElementById("mt4-link-bottom").innerHTML = btn_mt4;
    document.getElementById("mt5-link-side").href = linkUrl_mt5;
    document.getElementById("mt4-link-side").href = linkUrl_mt4;
    document.getElementById("mt5-link-side").innerHTML = btn_mt5;
    document.getElementById("mt4-link-side").innerHTML = btn_mt4;
});