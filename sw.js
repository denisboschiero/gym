self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('ripetizioni-app').then(function(cache) {
        return cache.addAll([
          '/',
          '/manifest.json',
          '/piramid.png',
          '/index.html',          
          '/sw.js'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });