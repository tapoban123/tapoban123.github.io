'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "122ba0fccc2090332d1069d66e3975c1",
"index.html": "9f883476853f59c3e8ad75b32a21d296",
"/": "9f883476853f59c3e8ad75b32a21d296",
"main.dart.js": "ed512836c174c8aea5bd53b8ba94083b",
"version.json": "9b818ca9511483c901bed1545384376c",
"assets/assets/images/mobile.png": "63b6c869be2d02c92b8e3e1cce660804",
"assets/assets/images/desktop.png": "6a0c46e4bf9f4582953dca8650ba67e0",
"assets/assets/images/web.png": "fdff6feca26e6f410e48b5771e41f710",
"assets/assets/images/instagram.png": "5c570427ee23f69853d28aec805eee79",
"assets/assets/images/twitter.png": "5e50007c58f3521b7fd6470e6af616c6",
"assets/assets/images/linkedin.png": "b286b20d8e9a8122d2a13caa6b795146",
"assets/assets/images/chatbot.png": "a91153334d29dba576fdc238c06017c7",
"assets/assets/images/insta_qr.png": "47967794573c1b5451a39af2e76eb8b9",
"assets/assets/images/twitter_qr.png": "9d3795421db28d38225dc15e8f527c82",
"assets/assets/images/linkedin_qr.png": "3d76fa6879f1cf3cd22bb77ea3478e7d",
"assets/assets/images/chat_icon.png": "9500b685571925719ab6906aa6f82e07",
"assets/assets/images/side-bar.png": "28a1c1a259295c02036c2a305452e791",
"assets/assets/images/my_logo.jpg": "0074550cea6eda5997d7a4d1cfc970c9",
"assets/assets/images/github.png": "b37b05a713d8eebcbb475119e587859b",
"assets/assets/images/gifs/thumbs_up.gif": "ada6bb05d39d4a4702e55a68d044b7f6",
"assets/assets/images/gifs/sad_face.gif": "a63d1cdcedda89d807864b656a666aea",
"assets/assets/images/project_banners/music_app.png": "ed5a819d01f5002e02b8bd8033d004fc",
"assets/assets/images/project_banners/todo_list.png": "5bb0d8e362e450302ad38ee5efba5373",
"assets/assets/images/project_banners/home_decor.png": "d4c155d0643c3c79354886355d81cbdf",
"assets/assets/images/project_banners/hackathon.png": "3abad9accc4c3abd57107cffca4ef1ee",
"assets/assets/images/project_banners/weather.png": "b254ad9f07fbb55e8f8b88fa8c73695f",
"assets/assets/images/project_banners/blockchain.png": "f48e3e988637f5cd89cf9496d3d7b550",
"assets/assets/images/project_banners/e_commerce.png": "578ce0fd228561096d0b9bd0b2c4e7d0",
"assets/assets/images/project_banners/image_editing.png": "12e4379feefc1f40dd42833910e5ed88",
"assets/assets/images/education_icon.png": "94ebcfe92beef8e8f2f9291dcf065446",
"assets/assets/images/certificates/ciem_ncc.png": "fb31988a943ce017f7c797e3e02524c4",
"assets/assets/images/certificates/iem.png": "16a3314fe93d010d1b7477e6a1e38e48",
"assets/assets/images/certificates/bp_poddar.png": "080e9b8ea81c57f727ac02257989babd",
"assets/assets/images/certificates/amity.png": "53e51d5c05d10f0af13b564e56aee771",
"assets/assets/images/certificates/iem_edtech.png": "b428c79a70b602cff6ce1c65fcb2fcbb",
"assets/assets/images/certificates/iem_ml.png": "debf83c0773107562e7d1fc9b3269adf",
"assets/assets/images/certificates/iem_overall.png": "e681d96412abbfe5628fed7f2246a172",
"assets/assets/images/certificates/ciem_hackathon.png": "c6800327a3d4530dcc1433771d03448d",
"assets/assets/images/certificates/sih_internal.png": "df43343509a793906a31d1b1f9bdc310",
"assets/assets/images/mobile_appbar_icons/tech-stack.png": "cd26016eb68d9cd2d5cb1de43002cff6",
"assets/assets/images/mobile_appbar_icons/projects.png": "37a0e6947b18a507aa7f4eff946f27d0",
"assets/assets/images/mobile_appbar_icons/contact-me.png": "0e648be85c98dc190775726e20d7f2cd",
"assets/assets/images/mobile_appbar_icons/about-me.png": "b1c8447e00f1cd51f68883b22b8a80fa",
"assets/assets/images/mobile_appbar_icons/services-2.png": "b9e1766a41c01803dc16024a294da74c",
"assets/assets/images/mobile_appbar_icons/services.png": "71d177d628bca6aff2813176cba0c18f",
"assets/assets/images/side-bar-icon.png": "7777bd0a549e245607ebc0cad73cb093",
"assets/assets/fonts/inter/Inter_18pt-SemiBold.ttf": "e5532d993e2de30fa92422df0a8849dd",
"assets/assets/fonts/inter/Inter_24pt-SemiBold.ttf": "c77560a8441d664af3e65dd57026dff9",
"assets/assets/fonts/inter/Inter_28pt-SemiBold.ttf": "70c03908b3ab82969b38ba14745f3a54",
"assets/assets/fonts/inter/Inter-Italic-VariableFont_opsz,wght.ttf": "6dce17792107f0321537c2f1e9f12866",
"assets/assets/fonts/inter/Inter-VariableFont_opsz,wght.ttf": "0a77e23a8fdbe6caefd53cb04c26fabc",
"assets/assets/fonts/inter/Inter_24pt-Medium.ttf": "4591e900425d177e6ba268d165bf12e8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "ffd617ae4ff1e6672fe67116e6b60b14",
"assets/fonts/MaterialIcons-Regular.otf": "e5b5cbbe261e1685a983cf053352487b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "20605967459bc1fa4d324272d974312b",
"assets/AssetManifest.bin": "af2609ae4314f491b8235bcb1531a333",
"assets/AssetManifest.bin.json": "89a02eb2ed551590022274d19be586fc",
"assets/FontManifest.json": "76e7f2f2d70d951cb9255af63e2f7dfe",
"assets/NOTICES": "bfb65535363e6e8346b903b3578de226",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
