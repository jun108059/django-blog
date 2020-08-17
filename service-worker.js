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
    "revision": "2a6e6ed66ced5e1ccc98c0314a97d43e"
  },
  {
    "url": "404.html",
    "revision": "71d7dbb508e11b1a918c953801bc265a"
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
    "url": "assets/js/4.540e19f5.js",
    "revision": "e8603692fb0eba559e451fff4683dd79"
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
    "url": "assets/js/7.35a28aa6.js",
    "revision": "5dcbc2224397be6be1fc6654112724f8"
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
    "url": "assets/js/app.52de8b53.js",
    "revision": "b28b966f3a403d1a4df6c107917c0c4b"
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
    "revision": "22003ac19ce214e7201ffecf7f9978de"
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
