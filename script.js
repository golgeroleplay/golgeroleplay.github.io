/* -----------------------------------------------
   1. BÖLÜM: GÜVENLİK (SAĞ TIK VE F12 ENGELLEME)
   Hata riskine karşı en başta çalıştırıyoruz.
----------------------------------------------- */
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

document.onkeydown = function(e) {
    // F12
    if(e.keyCode == 123) { return false; }
    // Ctrl+Shift+I (İncele)
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { return false; }
    // Ctrl+Shift+C (Element Seç)
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) { return false; }
    // Ctrl+Shift+J (Konsol)
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { return false; }
    // Ctrl+U (Kaynak Kodu)
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { return false; }
};

/* -----------------------------------------------
   2. BÖLÜM: KAYDIRMA ANİMASYONU (REVEAL)
----------------------------------------------- */
function revealOnScroll() {
    // "section" etiketlerini veya "reveal" sınıfı olanları bul
    var reveals = document.querySelectorAll("section, .reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
            reveals[i].classList.add("reveal"); // CSS için gerekliyse
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", revealOnScroll);
// Sayfa yüklenince animasyonu tetikle
revealOnScroll();
