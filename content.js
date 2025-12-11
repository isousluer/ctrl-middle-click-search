// Fare orta tuşu tıklamasını dinle
document.addEventListener(
	"mousedown",
	function (e) {
		// Orta tuş + Ctrl kontrolü (button === 1 ve ctrlKey === true)
		if (e.button === 1 && e.ctrlKey) {
			// Seçili metni al
			const selectedText = window.getSelection().toString().trim();

			// Eğer seçili metin varsa
			if (selectedText) {
				// Varsayılan orta tuş davranışını engelle (yeni sekmede açma)
				e.preventDefault();

				// Google arama URL'sini oluştur
				const searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(selectedText);

				// Background script'e mesaj gönder
				browser.runtime.sendMessage({
					action: "openAndFocus",
					url: searchUrl,
				});
			}
		}
	},
	true
);
