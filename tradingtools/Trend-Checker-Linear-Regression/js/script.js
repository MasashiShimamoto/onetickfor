/* scroll down
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function scrollDown() {
  window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
}

/* 追従ボタン
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
window.addEventListener('scroll', () => {
  document.querySelector('.fixed-btn').classList.toggle('show', window.scrollY > 100);
});



/* フェードイン（スクロールしたら要素を動かす）
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("active");
          }
      });
  });

  fadeElements.forEach(el => observer.observe(el));
});


/* TOPへ戻る・スムーススクロール
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
document.querySelector(".scroll-to-top").addEventListener("click", function() {
  window.scrollTo({top: 0, behavior: "smooth"});
});