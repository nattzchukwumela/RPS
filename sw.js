self.addEventListener("install", e => {
    e.waitUntil(
      caches.open("static").then(cache => {
          return cache.addAll(["./", "./favicon"]);
      })
    );
   })
  
   self.addEventListener("fetch", e => {
    console.log(`intercepting fetch request ${e.request.url}` )
 })