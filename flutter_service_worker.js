'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js": "14d9d55c91fea7c4d591e989f612f196",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"manifest.json": "17aeaea92a0317ff034d811371e8738c",
"index.html": "88857ce541ab7400dcdd07bf68405074",
"/": "88857ce541ab7400dcdd07bf68405074",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"icons/Icon-maskable-192.png": "a834a628eb0eaa3cdc853bceff2d4fd6",
"icons/Icon-192.png": "a834a628eb0eaa3cdc853bceff2d4fd6",
"icons/Icon-maskable-512.png": "686fda68a2ccd75bc7b13c770aea2b9e",
"icons/Icon-512.png": "686fda68a2ccd75bc7b13c770aea2b9e",
"assets/NOTICES": "8211acaee2ad7c8d03fd75cdfa55eb74",
"assets/AssetManifest.bin.json": "6ea45e7b1a73a428f53ef88159b57f5a",
"assets/fonts/HorseAndRiderIcons.ttf": "6bc2296516b14d7f0d5489bdef67c285",
"assets/fonts/MaterialIcons-Regular.otf": "f717fef3808a2fdfd559bfa2b7d6f17c",
"assets/FontManifest.json": "007eda13ee547f6caf3571af05b47349",
"assets/assets/horse_text.png": "8d97145c26a9d9085258bd3c79cae7ff",
"assets/assets/horse_icon_02.png": "0fd2656041d9c4009d1bf993acfb69e8",
"assets/assets/horse_logo_and_text_light.png": "f0b2db0cd722d9f60ff2fec21f9726cf",
"assets/assets/horse_background.png": "9075b7098dc22a4c0c955a8d1f4f9222",
"assets/assets/horse_icon_01.png": "7c3b7ca681728bc4b284a621b7f20afa",
"assets/assets/horse_icon_dark.png": "4083007fd116df6b7aa93141b63accfa",
"assets/assets/google_icon.png": "436ca9fffb5a0c47761a1fef94addb07",
"assets/assets/splash_image_light.png": "d1963c9513895230c80d9fca6a6c1835",
"assets/assets/error_color.png": "c172048117faa3188bc7f53c4aba917e",
"assets/assets/Error.png": "f2902e8b5e479ab4eaeedcffe0c78440",
"assets/assets/horse_logo_and_text_dark%2520copy.png": "4c52bbd98f91e05dc40f9a6a493c569d",
"assets/assets/horse_icon.png": "63a54aa747f7dee5f3a4e5f9d45d8451",
"assets/assets/horse_logo.png": "7b2f968db23ecfe6a04ce40c1e6ad849",
"assets/assets/splash_image_dark.png": "4f90d8a8ba2e43f21723f0e104221af0",
"assets/assets/horse_icon_03.png": "1a9f96d6feb7cca2a63f273814d41e1c",
"assets/assets/horse_logo_and_text_dark.png": "4c52bbd98f91e05dc40f9a6a493c569d",
"assets/assets/horse_icon_circle_dark.png": "f899d75b141a902e4c38650f6855304c",
"assets/assets/horse_icon_circle.png": "716860a66308a082d1a099cd722b7fd8",
"assets/assets/horse_logo_and_text_002.png": "f0b2db0cd722d9f60ff2fec21f9726cf",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/AssetManifest.json": "72ec0146e89a272865daafb842a71bae",
"assets/AssetManifest.bin": "74971c81a0ba2e33af68dd671010533d",
"version.json": "c035b3e6b0118b91e5724d62cac7ae37",
"favicon.png": "cce095affa0bd227331ee5f8eec29e62",
"splash/img/light-1x.png": "b0fca34651e7af562eb07fb9b2a40d1c",
"splash/img/dark-3x.png": "de66e1462afbf926a0261638a3d6b8bf",
"splash/img/dark-1x.png": "186338a1fff2c32decfd0c5b6fd08392",
"splash/img/light-3x.png": "7351caa74454d76ed0d515cced47f758",
"splash/img/dark-4x.png": "80246b4c4ba954eb69aaf65bb0d8371d",
"splash/img/light-2x.png": "3305a5095c44a6f17860c9827f1e5e8b",
"splash/img/dark-2x.png": "74ed8c4bf894184dfca0926aefd0f495",
"splash/img/light-4x.png": "44dfa1b2283cf7add5cbd45ef7e972d7",
"splash/style.css": "d16cab7d4fe8235011399e5e38f05cee",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
