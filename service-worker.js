/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "200818/01.django-blog.html",
    "revision": "9f03e7b20c7d919de29c24b4c795efd1"
  },
  {
    "url": "404.html",
    "revision": "8e216366f4bcff9b01b54625b3f41963"
  },
  {
    "url": "assets/css/0.styles.4d0a66ea.css",
    "revision": "6205f4c6a3032c33e9bd391575704c7f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.3f64f512.js",
    "revision": "10ce5ec37f0f4e95eedd893173b76c5d"
  },
  {
    "url": "assets/js/3.eec624d7.js",
    "revision": "41d5dd693562897bb142490d87da1381"
  },
  {
    "url": "assets/js/4.b05b62f3.js",
    "revision": "34a3600f157ff7508e99b0159a423b5a"
  },
  {
    "url": "assets/js/5.a60a95b1.js",
    "revision": "dcb368822452254194c3ec5b826bb5c9"
  },
  {
    "url": "assets/js/6.f09d0c59.js",
    "revision": "e106cda525c14dd0cf8179f891afb88b"
  },
  {
    "url": "assets/js/7.55eeb3f3.js",
    "revision": "fcf52431459a6a9f7ec39e0ed0e83e76"
  },
  {
    "url": "assets/js/8.3d7a2469.js",
    "revision": "97bf10e13a5e2cb188ec27710b71b3f7"
  },
  {
    "url": "assets/js/9.9987b7a3.js",
    "revision": "43766908c6a8f38bcdb68ffed5c499ee"
  },
  {
    "url": "assets/js/app.1b7544b9.js",
    "revision": "c9125ec80f5d1e7969e3c15c3473de4b"
  },
  {
    "url": "images/Likelion-HUFS.png",
    "revision": "26186207fc4a9263d1b11f9a396b3c12"
  },
  {
    "url": "images/logo-144.png",
    "revision": "32e3f1d2ed6e2f2c59c391a430861f16"
  },
  {
    "url": "images/Logo.png",
    "revision": "4d9cc0a7f24c251d7349e5055038ffd5"
  },
  {
    "url": "index.html",
    "revision": "446e3faf884f558f8d865ce64711bf83"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
