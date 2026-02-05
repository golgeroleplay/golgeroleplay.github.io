// --- IP KOPYALAMA İŞLEVİ ---
function copyIP() {
    /* AYAR: Kendi sunucu IP adresini buraya yaz */
    const serverIP = "185.34.101.108:30120"; 
    
    navigator.clipboard.writeText("connect " + serverIP).then(() => {
        const toast = document.getElementById("toast");
        toast.classList.add("show");
        setTimeout(() => {
            toast.classList.remove("show");
        }, 2500);
    });
}

// --- OYUNCU SAYISI ÇEKME (PROXY YÖNTEMİ) ---
async function updateStats() {
    const countElement = document.getElementById('player-count');
    
    /* ÖNEMLİ AYAR:
       Buraya sunucunun IP adresini ve Portunu yaz.
       Örnek: "193.164.6.10:30120"
    */
    const ipAddress = "185.34.101.108:30120"; 

    try {
        // 1. Yöntem: 'dynamic.json' dosyasını Proxy üzerinden çekiyoruz
        // Bu yöntem CORS ve HTTPS engellerini aşar.
        const proxyUrl = "https://api.allorigins.win/raw?url=";
        const targetUrl = `http://${ipAddress}/dynamic.json`;
        
        const response = await fetch(proxyUrl + encodeURIComponent(targetUrl));
        
        if (!response.ok) throw new Error('Sunucuya ulaşılamadı');

        const data = await response.json();
        
        // Oyuncu sayısını yazdır
        if (data) {
            countElement.innerText = data.clients;
            countElement.style.color = "#00f2ff"; // Aktif renk
        } else {
            countElement.innerText = "0";
        }

    } catch (error) {
        console.error("Veri çekme hatası (1. Yöntem):", error);
        
        // Eğer ilk yöntem çalışmazsa 2. Yöntem (players.json) denenir
        try {
            const targetUrl2 = `http://${ipAddress}/players.json`;
            const response2 = await fetch("https://api.allorigins.win/raw?url=" + encodeURIComponent(targetUrl2));
            const data2 = await response2.json();
            
            if(Array.isArray(data2)) {
                countElement.innerText = data2.length;
                countElement.style.color = "#00f2ff";
            }
        } catch (err2) {
            console.error("Tüm yöntemler başarısız:", err2);
            countElement.innerText = "OFFLINE";
            countElement.style.color = "red";
        }
    }
}

// Sayfa yüklendiğinde çalıştır
document.addEventListener('DOMContentLoaded', () => {
    updateStats();
    setInterval(updateStats, 15000); // 15 saniyede bir güncelle
});
// --- PRELOADER KAPATMA ---
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
});

// --- SCROLL ANIMASYONLARI (REVEAL) ---
function revealOnScroll() {
    var reveals = document.querySelectorAll("section"); // Tüm sectionları seçer

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150; // Görünme payı

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
            // Sectionlara 'reveal' sınıfını biz ekleyelim
            reveals[i].classList.add("reveal"); 
        }
    }
}

window.addEventListener("scroll", revealOnScroll);
// Sayfa açıldığında da bir kere kontrol et

revealOnScroll();
/* --- Sağ Tık ve İncele Yasağı --- */
document.addEventListener('contextmenu', event => event.preventDefault());

document.onkeydown = function(e) {
    if(event.keyCode == 123) { // F12
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { // Ctrl+Shift+I
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) { // Ctrl+Shift+C
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { // Ctrl+Shift+J
        return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { // Ctrl+U
        return false;
    }
}
