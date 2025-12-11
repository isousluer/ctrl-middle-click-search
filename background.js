// Content script'ten gelen mesajları dinle
browser.runtime.onMessage.addListener((message, sender) => {
	if (message.action === "openAndFocus") {
		// Yeni sekme aç ve otomatik olarak o sekmeye geç
		browser.tabs.create({
			url: message.url,
			active: true, // Bu, yeni sekmeye otomatik geçişi sağlar
		});
	}
});
