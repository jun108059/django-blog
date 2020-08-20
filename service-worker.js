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
    "revision": "8e6ef7bd166b3133ece7e495afdee084"
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
    "url": "assets/img/portfolio-01.0e607fa6.png",
    "revision": "0e607fa688b80c1622449bbfdd3d610b"
  },
  {
    "url": "assets/img/portfolio-02.35c789c8.png",
    "revision": "35c789c82a14a7ff08aabfb879eb6e12"
  },
  {
    "url": "assets/img/portfolio-03.c1d290bb.png",
    "revision": "c1d290bb4cddab59f90516d79e653578"
  },
  {
    "url": "assets/img/portfolio-04.e5c38f5b.png",
    "revision": "e5c38f5baf4d15502e44ee60e30c728e"
  },
  {
    "url": "assets/img/portfolio-05.8c018331.png",
    "revision": "8c0183310e1a85aea89816acab0da4c3"
  },
  {
    "url": "assets/img/portfolio-06.16dca172.png",
    "revision": "16dca1721c0add1d9b027d2be1eb1163"
  },
  {
    "url": "assets/img/portfolio-07.0e64dc5a.png",
    "revision": "0e64dc5a608c4682dbe7554d3823c80b"
  },
  {
    "url": "assets/img/portfolio-08.d8d33b95.png",
    "revision": "d8d33b9550ea2c6800d787e1d6aa87d9"
  },
  {
    "url": "assets/img/portfolio-09.725908e8.png",
    "revision": "725908e802657fb686f5668577d15818"
  },
  {
    "url": "assets/img/portfolio-10.f1c5c33b.png",
    "revision": "f1c5c33bfc97a8470d9eaf91d5e4ff50"
  },
  {
    "url": "assets/img/portfolio-11.96a28852.png",
    "revision": "96a28852f40d9fa817c69fe489242a50"
  },
  {
    "url": "assets/img/portfolio-12.57954cda.png",
    "revision": "57954cda5949d6fe29d701d9fbd4759d"
  },
  {
    "url": "assets/img/portfolio-13.f5e82165.png",
    "revision": "f5e82165d65bc6ae2f33c8d18849806b"
  },
  {
    "url": "assets/img/portfolio-14.7c598a93.png",
    "revision": "7c598a9305838d0d394d142903aa89b2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3dc13cda.js",
    "revision": "cb3b1be40169e38e7e78d3d873d058b0"
  },
  {
    "url": "assets/js/11.1f9efc95.js",
    "revision": "7f6670ece757065c9960e9d8ebbad762"
  },
  {
    "url": "assets/js/2.95df751a.js",
    "revision": "19ab7e2bce8944c8b405c76c26db56b2"
  },
  {
    "url": "assets/js/3.a1749530.js",
    "revision": "98fb041a84b92881c3d7bd9ea8facd9f"
  },
  {
    "url": "assets/js/4.f796462c.js",
    "revision": "2b149143b84b129897435ebfb9c11974"
  },
  {
    "url": "assets/js/5.bc6705b5.js",
    "revision": "d873d7844ed6a9ba6cd19dece3d3f0ac"
  },
  {
    "url": "assets/js/6.8eda8514.js",
    "revision": "1dc4589c9bc4a2c1d5736ab02d4efea8"
  },
  {
    "url": "assets/js/7.ad02f976.js",
    "revision": "facd52a3a85aebccc9783f7cf3dcc9e4"
  },
  {
    "url": "assets/js/8.3c104b66.js",
    "revision": "8e8ad59e89cbd51a6af3e12332d56e9d"
  },
  {
    "url": "assets/js/9.ee1564d0.js",
    "revision": "6c045c6cdb9da31148e66854897aa561"
  },
  {
    "url": "assets/js/app.b05dbbd8.js",
    "revision": "824288a2e554e7caa714a5cecbfa6dfe"
  },
  {
    "url": "Blogdjango/01.djangoblog.html",
    "revision": "8efcda7c1227d5c4780acc1df52a01bc"
  },
  {
    "url": "Blogdjango/02.djangoblog.html",
    "revision": "256dd9107e8d9341cbc0bf161cb03855"
  },
  {
    "url": "Blogdjango2/03.djangoblog.html",
    "revision": "73252b80b5eeee2f100b79fa75d0618a"
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
    "url": "images/django2/portfolio-01.png",
    "revision": "0e607fa688b80c1622449bbfdd3d610b"
  },
  {
    "url": "images/django2/portfolio-02.png",
    "revision": "35c789c82a14a7ff08aabfb879eb6e12"
  },
  {
    "url": "images/django2/portfolio-03.png",
    "revision": "c1d290bb4cddab59f90516d79e653578"
  },
  {
    "url": "images/django2/portfolio-04.png",
    "revision": "e5c38f5baf4d15502e44ee60e30c728e"
  },
  {
    "url": "images/django2/portfolio-05.png",
    "revision": "8c0183310e1a85aea89816acab0da4c3"
  },
  {
    "url": "images/django2/portfolio-06.png",
    "revision": "16dca1721c0add1d9b027d2be1eb1163"
  },
  {
    "url": "images/django2/portfolio-07.png",
    "revision": "0e64dc5a608c4682dbe7554d3823c80b"
  },
  {
    "url": "images/django2/portfolio-08.png",
    "revision": "d8d33b9550ea2c6800d787e1d6aa87d9"
  },
  {
    "url": "images/django2/portfolio-09.png",
    "revision": "725908e802657fb686f5668577d15818"
  },
  {
    "url": "images/django2/portfolio-10.png",
    "revision": "f1c5c33bfc97a8470d9eaf91d5e4ff50"
  },
  {
    "url": "images/django2/portfolio-11.png",
    "revision": "96a28852f40d9fa817c69fe489242a50"
  },
  {
    "url": "images/django2/portfolio-12.png",
    "revision": "57954cda5949d6fe29d701d9fbd4759d"
  },
  {
    "url": "images/django2/portfolio-13.png",
    "revision": "f5e82165d65bc6ae2f33c8d18849806b"
  },
  {
    "url": "images/django2/portfolio-14.png",
    "revision": "7c598a9305838d0d394d142903aa89b2"
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
    "revision": "bbc42d5f1050d4432864373d250bc412"
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
