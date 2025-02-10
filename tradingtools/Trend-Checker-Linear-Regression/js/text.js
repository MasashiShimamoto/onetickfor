document.addEventListener("DOMContentLoaded", function() {
    const selector = document.getElementById("language-selector");

    // 選択されたオプションの国旗を表示
    selector.addEventListener("change", function() {
        const selectedOption = selector.options[selector.selectedIndex];
        const flagCode = selectedOption.getAttribute("data-flag");
        selector.style.backgroundImage = `url("https://flagcdn.com/w40/${flagCode}.png")`;
    });

    // 初期値の国旗を設定
    const selectedOption = selector.options[selector.selectedIndex];
    const flagCode = selectedOption.getAttribute("data-flag");
    selector.style.backgroundImage = `url("https://flagcdn.com/w40/${flagCode}.png")`;
});
