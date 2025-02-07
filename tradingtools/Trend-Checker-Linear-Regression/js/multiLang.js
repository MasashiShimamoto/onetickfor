//sub-copy
let sub_copy_ja =  "このツールは、線形回帰と三角法を活用し、トレンドや反転ポイントを瞬時に見極めるのに役立ちます。ダウ理論やグランビルの法則のような複雑な手法に頼る必要はありません。シンプルで分かりやすく、迷わず自信を持ってトレードできるように設計されています。";
let sub_copy_en = "This tool uses linear regression and trigonometry to help you spot trends and reversal points in an instant. You won’t need to rely on complicated methods like Dow Theory or Granville’s Rules. It’s simple, clear, and designed to let you focus on confident trading without the guesswork.";


document.addEventListener("DOMContentLoaded",function(){
    let params = new URLSearchParams(window.location.search);
    let sub_copy = "";

    if(params.get("lang")==="ja"){
        sub_copy = sub_copy_ja;
    }else{
        sub_copy = sub_copy_en;
    }

    document.getElementById("sub-copy").textContent = sub_copy;
});