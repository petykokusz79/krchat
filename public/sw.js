const cacheName = "v1";

async function impl(e) {
	let cache = await caches.open(cacheName); // Cache megnyitása, async
	let cacheResponse = await cache.match(e.request); // Lookup
	if (cacheResponse) // Ha megvan
		return cacheResponse // Visszadjuk
	else {
		let networkResponse = await fetch(e.request); // Ha nincs meg, akkor elindítjuk a tényleges hálózati lekérdezést
		cache.put(e.request, networkResponse.clone()) // Eltároljuk
		return networkResponse; // Visszadjuk
	}
}

async function push(e) {
	message = e.data?.text() ?? "Empty"
	if (message) {
		e.WaitUntil(self.registration.showNotification("Chat Notification", { body: message }));
	}
}

self.addEventListener("fetch", e => e.respondWith(impl(e))); // Eseményre feliratkozás
self.addEventListener("push", e => e.respondWith(push(e)));
