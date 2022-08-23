let cacheName = "quanto-custa";
let filesToCache = ["/", "/index.html", "/css/estilo.css", "/js/main.js"];

self.addEventListener("install", (e) =>{
    e.waitUntil(
        caches.open(cacheName).then(function (cache){
            return cache.addAll(filesToCache);
        })
    )
});

self.addEventListener("fetch", (e) =>{
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    )
});