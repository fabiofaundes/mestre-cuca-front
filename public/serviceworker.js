const CACHE_NAME = "new-cache-1"

const urlsToCache = ["index.html", "offline.html"]

const self = this

//Install SW
self.addEventListener('install', (event) => {    
    event.waitUntill(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache')
                return cache.addAll(urlsToCache)
            })
    )
});

//Listen for requests
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(() => {
                return fetch(event.request)
                    .catch(() => caches.match('index.html'))
            })
    )
});

//Activate SW
self.addEventListener('activate', (event) => {    
    const cacheWhiteList = []
    cacheWhiteList.push(CACHE_NAME);
    event.waitUntill(
        caches.keys()
            .then((cacheNames) => Promise.all(
                cacheNames.map((cacheName) => {
                    if(!cacheWhiteList.includes(cacheName))
                        return caches.delete(cacheName)
                })
            ))
    )    
});