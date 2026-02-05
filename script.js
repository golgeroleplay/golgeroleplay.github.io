/* =========================================
   1. BÖLÜM: KESİN GÜVENLİK DUVARI 🛡️
   (Sağ Tık ve Klavye Kısayolları Engeli)
   ========================================= */

// Sağ tık menüsünü açılmadan öldür
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    return false;
});

// Klavye kısayollarını (F12, CTRL+U vb.) engelle
document.addEventListener('keydown', function(event) {
    // F12 Tuşu
    if (event.key === 'F12' || event.keyCode === 123) {
        event.preventDefault();
        return false;
    }
    // CTRL + U (Kaynak Kod)
    if (event.ctrlKey && (event.key === 'u' || event.key === 'U' || event.keyCode === 85)) {
        event.preventDefault();
        return false;
    }
    // CTRL + SHIFT + I (İncele)
    if (event.ctrlKey && event.shiftKey && (event.key === 'i' || event.key === 'I' || event.keyCode === 73)) {
        event.preventDefault();
        return false;
    }
    // CTRL + SHIFT + C (Element Seç)
    if (event.ctrlKey && event.shiftKey && (event.key === 'c' || event.key === 'C' || event.keyCode === 67)) {
        event.preventDefault();
        return false;
    }
});

/* =========================================
   2. BÖLÜM: ANİMASYONLAR (SCROLL REVEAL)
   ========================================= */
function revealOnScroll() {
    var reveals = document.querySelectorAll("section, .reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
