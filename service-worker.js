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
    "revision": "837f23a3e1ad66bce06fc9f7f839789c"
  },
  {
    "url": "assets/css/0.styles.5908354f.css",
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
    "url": "assets/img/django-06.e6dbccae.png",
    "revision": "e6dbccae7a5b72a5dbf7f47aec67eedd"
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
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.61fc9e9a.js",
    "revision": "008711579b9edc15c1a9362b235d1867"
  },
  {
    "url": "assets/js/11.b16a7399.js",
    "revision": "c9fc685427a9ad5d3ba2adfe647d83c9"
  },
  {
    "url": "assets/js/2.21f26c92.js",
    "revision": "719a39e84ca6d4068afef47eeb39ffaa"
  },
  {
    "url": "assets/js/3.8b274298.js",
    "revision": "48d5a788d66655e48e92571c4207d1e2"
  },
  {
    "url": "assets/js/4.883ee90c.js",
    "revision": "c3dc7c03263eab96d19eb42b0a628ad6"
  },
  {
    "url": "assets/js/5.97dfe23f.js",
    "revision": "f84347ae7ab3939e772aa0cb25dffcce"
  },
  {
    "url": "assets/js/6.5f0c627b.js",
    "revision": "0458447564107081a85e371b04928fe3"
  },
  {
    "url": "assets/js/7.9c4b3756.js",
    "revision": "d1b814caa56222613ee4cec4211e9920"
  },
  {
    "url": "assets/js/8.25c1be59.js",
    "revision": "d6b612ad42b2f4fae4fb280fb5b58549"
  },
  {
    "url": "assets/js/9.b7cd55c7.js",
    "revision": "9e2cb94d469db5766dd6d3e3af823f5a"
  },
  {
    "url": "assets/js/app.bbcc6cb2.js",
    "revision": "9402d8d77774c8c9ab82a838ed0e20a3"
  },
  {
    "url": "Blogdjango/01.djangoblog.html",
    "revision": "ae0141fa3e960742e91d42ecaf52062d"
  },
  {
    "url": "Blogdjango/02.djangoblog.html",
    "revision": "7fda00cddce251d3573f90970094db9f"
  },
  {
    "url": "Blogdjango/03.djangoblog.html",
    "revision": "da9f0ffd3fdcedb1889cd88422154f18"
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
    "revision": "fc296f0a1473d421500998af674983d7"
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
