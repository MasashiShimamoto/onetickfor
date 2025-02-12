document.getElementById("mt5-link-top").addEventListener("click", function() {
    gtag('event', 'cta_click', {
        'button_name': 'mt5-top',
        'location': 'first view'
    });
});
document.getElementById("mt4-link-top").addEventListener("click", function() {
    gtag('event', 'cta_click', {
        'button_name': 'mt4-top',
        'location': 'first view'
    });
});
document.getElementById("mt5-link-bottom").addEventListener("click", function() {
    gtag('event', 'cta_click', {
        'button_name': 'mt5-bottom',
        'location': 'CTA view'
    });
});
document.getElementById("mt4-link-bottom").addEventListener("click", function() {
    gtag('event', 'cta_click', {
        'button_name': 'mt4-bottom',
        'location': 'CTA view'
    });
});
document.getElementById("mt5-link-side").addEventListener("click", function() {
    gtag('event', 'cta_click', {
        'button_name': 'mt5-side',
        'location': 'side'
    });
});
document.getElementById("mt4-link-side").addEventListener("click", function() {
    gtag('event', 'cta_click', {
        'button_name': 'mt4-side',
        'location': 'side'
    });
});
document.getElementById("PrivacyPolicy").addEventListener("click", function() {
    gtag('event', 'PrivacyPolicy_click', {
        'button_name': 'Privacy-Policy',
        'location': 'CTA view'
    });
});