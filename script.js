/* -------------------------------------------------------
   GÜVENLİK DUVARI (SAĞ TIK VE TUŞLAR)
------------------------------------------------------- */

// 1. Sağ Tık Menüsünü Komple Öldür
document.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Menünün açılmasını engelle
    return false;
});

// 2. Yasaklı Tuşları (F12, CTRL+U vs.) Engelle
document.addEventListener('keydown', function(event) {
    
    // F12 Tuşu
    if (event.key === 'F12' || event.keyCode === 123) {
        event.preventDefault();
        return false;
    }

    // CTRL + U (Kaynak Kodunu Gör)
    if (event.ctrlKey && (event.key === 'u' || event.key === 'U' || event.keyCode === 85)) {
        event.preventDefault();
        return false;
    }

    // CTRL + SHIFT + I (İncele)
    if (event.ctrlKey && event.shiftKey && (event.key === 'i' || event.key === 'I' || event.keyCode === 73)) {
        event.preventDefault();
        return false;
    }

    // CTRL + SHIFT + C (Öğe Seç)
    if (event.ctrlKey && event.shiftKey && (event.key === 'c' || event.key === 'C' || event.keyCode === 67)) {
        event.preventDefault();
        return false;
    }

    // CTRL + SHIFT + J (Konsol)
    if (event.ctrlKey && event.shiftKey && (event.key === 'j' || event.key === 'J' || event.keyCode === 74)) {
        event.preventDefault();
        return false;
    }
});

/* -------------------------------------------------------
   KAYDIRMA ANİMASYONU (REVEAL)
------------------------------------------------------- */
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
