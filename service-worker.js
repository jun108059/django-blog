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
    "revision": "52d568e323ea3f1ffcfc2ff89e0ef1f1"
  },
  {
    "url": "404.html",
    "revision": "31b01376308c77fe372d0b2fb66c40fc"
  },
  {
    "url": "assets/css/0.styles.5908354f.css",
    "revision": "6205f4c6a3032c33e9bd391575704c7f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.7cdb2163.js",
    "revision": "5683f991355d69a091bd5bd688780b18"
  },
  {
    "url": "assets/js/3.c835e226.js",
    "revision": "2c4f451250997486ac436b91dfbdd039"
  },
  {
    "url": "assets/js/4.6e1a700d.js",
    "revision": "4c679e0035bb789901974825e9224a2c"
  },
  {
    "url": "assets/js/5.d4aa2b81.js",
    "revision": "73d9e963f669d685c23896945cb0af3d"
  },
  {
    "url": "assets/js/6.2d4b2fdd.js",
    "revision": "55f07ae4b6dc9a2f80ecae213020bfde"
  },
  {
    "url": "assets/js/7.da350833.js",
    "revision": "99a98279b49fd67a626d598bca642430"
  },
  {
    "url": "assets/js/8.807c07a7.js",
    "revision": "beb82880396dfbb7aec9482550bd3c47"
  },
  {
    "url": "assets/js/9.9992e406.js",
    "revision": "16d6c3000ea3592bf62d3d6894e69329"
  },
  {
    "url": "assets/js/app.12459e62.js",
    "revision": "4bc98e2eb6853d889082803ad628c106"
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
    "revision": "9df15e5953f4899dff3e8f8fdcaf0dce"
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
