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
    "url": "404.html",
    "revision": "169dad98715e1510221986ca1289dc29"
  },
  {
    "url": "assets/css/0.styles.4d0a66ea.css",
    "revision": "6205f4c6a3032c33e9bd391575704c7f"
  },
  {
    "url": "assets/img/django-02.421836a6.png",
    "revision": "421836a61becec790e634ce4b70a6898"
  },
  {
    "url": "assets/img/django-05.453fd89b.png",
    "revision": "453fd89bcbe2c8ccc06a22b810714998"
  },
  {
    "url": "assets/img/django-07.afbee674.png",
    "revision": "afbee674e424150dbafd2be4e25362dc"
  },
  {
    "url": "assets/img/django-08.a98716ae.png",
    "revision": "a98716ae188d697d53b5da075544607f"
  },
  {
    "url": "assets/img/django-09.df6f5be1.png",
    "revision": "df6f5be1ed62dc468038682d25bb8622"
  },
  {
    "url": "assets/img/django-10.72ab77b4.png",
    "revision": "72ab77b4cb6116117c055f6fe80f4390"
  },
  {
    "url": "assets/img/django-11.1b807689.png",
    "revision": "1b807689210835230cb80481f824badb"
  },
  {
    "url": "assets/img/django-12.760e0ade.png",
    "revision": "760e0ade12ed01feba108a71a907af41"
  },
  {
    "url": "assets/img/django-13.86d5f020.png",
    "revision": "86d5f0206181adcf4bc8735af43c34a4"
  },
  {
    "url": "assets/img/django-14.48a196fc.png",
    "revision": "48a196fc920a79c0a7f9b802fd383391"
  },
  {
    "url": "assets/img/django-15.1c067931.png",
    "revision": "1c06793105541f6177b8afcd2a36ccec"
  },
  {
    "url": "assets/img/django-16.1ebd3d56.png",
    "revision": "1ebd3d564b02fd41fa7e1ee783aa2abf"
  },
  {
    "url": "assets/img/django-17.7eb764d3.png",
    "revision": "7eb764d3e8860a891c83f79126ffe2f2"
  },
  {
    "url": "assets/img/django-18.7c9db1ef.png",
    "revision": "7c9db1efc55ea44e57406618a483c2d4"
  },
  {
    "url": "assets/img/django-19.dcfbb7e2.png",
    "revision": "dcfbb7e2dabc649fc9691bd323958428"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c7119b38.js",
    "revision": "60e498b7900e312e0cfb6c76844028e1"
  },
  {
    "url": "assets/js/2.c8232523.js",
    "revision": "495ac5e0c509c05dfc5278261779e833"
  },
  {
    "url": "assets/js/3.fdebfad1.js",
    "revision": "36a10c7b323a7f8fe7e5c7fb1e1bdf0b"
  },
  {
    "url": "assets/js/4.895013ce.js",
    "revision": "1fe675e08f07e2acb6033c35e45f1b9a"
  },
  {
    "url": "assets/js/5.5346d2e1.js",
    "revision": "25f58a554b9af0a66614e4447c15a2ed"
  },
  {
    "url": "assets/js/6.39988f24.js",
    "revision": "caec9c53f20c813c166a1ba2f4bf03e3"
  },
  {
    "url": "assets/js/7.01f8a184.js",
    "revision": "a7c605f8cb6d8b35b4fc2f885eebac82"
  },
  {
    "url": "assets/js/8.1740776b.js",
    "revision": "836f385b52d3323a7508c5313524d5b3"
  },
  {
    "url": "assets/js/9.f32b6e2d.js",
    "revision": "5a661c61aab29714c40624cd95473ba4"
  },
  {
    "url": "assets/js/app.e8caac2f.js",
    "revision": "f716f8cc9da539e750769aabac82beac"
  },
  {
    "url": "Blogdjango/01.djangoblog.html",
    "revision": "6a17498f483a991772f6deaa6a3ced50"
  },
  {
    "url": "Blogdjango/02.djangoblog.html",
    "revision": "d9596749973dbd688fcc0b7a3daef5ca"
  },
  {
    "url": "images/django1/django-02.png",
    "revision": "421836a61becec790e634ce4b70a6898"
  },
  {
    "url": "images/django1/django-05.png",
    "revision": "453fd89bcbe2c8ccc06a22b810714998"
  },
  {
    "url": "images/django1/django-06.png",
    "revision": "e6dbccae7a5b72a5dbf7f47aec67eedd"
  },
  {
    "url": "images/django1/django-07.png",
    "revision": "afbee674e424150dbafd2be4e25362dc"
  },
  {
    "url": "images/django1/django-08.png",
    "revision": "a98716ae188d697d53b5da075544607f"
  },
  {
    "url": "images/django1/django-09.png",
    "revision": "df6f5be1ed62dc468038682d25bb8622"
  },
  {
    "url": "images/django1/django-10.png",
    "revision": "72ab77b4cb6116117c055f6fe80f4390"
  },
  {
    "url": "images/django1/django-11.png",
    "revision": "1b807689210835230cb80481f824badb"
  },
  {
    "url": "images/django1/django-12.png",
    "revision": "760e0ade12ed01feba108a71a907af41"
  },
  {
    "url": "images/django1/django-13.png",
    "revision": "86d5f0206181adcf4bc8735af43c34a4"
  },
  {
    "url": "images/django1/django-14.png",
    "revision": "48a196fc920a79c0a7f9b802fd383391"
  },
  {
    "url": "images/django1/django-15.png",
    "revision": "1c06793105541f6177b8afcd2a36ccec"
  },
  {
    "url": "images/django1/django-16.png",
    "revision": "1ebd3d564b02fd41fa7e1ee783aa2abf"
  },
  {
    "url": "images/django1/django-17.png",
    "revision": "7eb764d3e8860a891c83f79126ffe2f2"
  },
  {
    "url": "images/django1/django-18.png",
    "revision": "7c9db1efc55ea44e57406618a483c2d4"
  },
  {
    "url": "images/django1/django-19.png",
    "revision": "dcfbb7e2dabc649fc9691bd323958428"
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
    "revision": "a0a71132d063530645165a7742c68a1f"
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
