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
    "revision": "c5bfd85778fe24df50b585c8f0e27a70"
  },
  {
    "url": "assets/css/0.styles.d7a6f782.css",
    "revision": "567c01580e221809b439336f2be26ca1"
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
    "url": "assets/img/DRF01.7482b316.png",
    "revision": "7482b316c157e6080688aef33cac620a"
  },
  {
    "url": "assets/img/DRF02.92aef40d.png",
    "revision": "92aef40d257d820e81235a4082e33af1"
  },
  {
    "url": "assets/img/DRF03.44ef042f.png",
    "revision": "44ef042f4eae2236b6d459d0c75e29cf"
  },
  {
    "url": "assets/img/DRFlogo.37921ea7.png",
    "revision": "37921ea75c0963589780cce91f1cc4f3"
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
    "url": "assets/img/portfolio-15.975892aa.png",
    "revision": "975892aaa4dfb50503c0dec6e2b7c450"
  },
  {
    "url": "assets/img/portfolio-16.0b96b3e6.png",
    "revision": "0b96b3e625e5b68d1cb235c2aea6e587"
  },
  {
    "url": "assets/img/portfolio-17.5b144c60.png",
    "revision": "5b144c6063e4549494edea5c40011157"
  },
  {
    "url": "assets/img/portfolio-18.261dbc63.png",
    "revision": "261dbc63c0cef18f2f4259dfd22a9f3f"
  },
  {
    "url": "assets/img/portfolio-19.af07911c.png",
    "revision": "af07911cab79f534f3a55a299d81588d"
  },
  {
    "url": "assets/img/portfolio-20.50860d9c.png",
    "revision": "50860d9c4aa9fa3b83973ac109267d27"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/simple-API.842d4666.png",
    "revision": "842d466661adf957f9f4a1cd82be7492"
  },
  {
    "url": "assets/js/10.a0450512.js",
    "revision": "3e53b2c9d3114f72a6079335b8a0bb33"
  },
  {
    "url": "assets/js/11.3dafa25d.js",
    "revision": "1ccd44d25ad7a75085a21d8ee0f4063a"
  },
  {
    "url": "assets/js/12.5228b161.js",
    "revision": "c619515b0e3901ccf50b926b868f516e"
  },
  {
    "url": "assets/js/13.5b636985.js",
    "revision": "61a948705d918a9ddc7eaec7cf16a573"
  },
  {
    "url": "assets/js/14.a56528c3.js",
    "revision": "f92211b562fc3301d153d8aa913c5d23"
  },
  {
    "url": "assets/js/15.247b117c.js",
    "revision": "aceb62ed35a620b16747837bddcb8c03"
  },
  {
    "url": "assets/js/16.ea2fed4f.js",
    "revision": "c0edfafcb2a34ea1d3db9bc72644cadd"
  },
  {
    "url": "assets/js/2.ac97b42c.js",
    "revision": "99118d73183cea49ca3eea5708de6391"
  },
  {
    "url": "assets/js/3.d5192306.js",
    "revision": "db7a94be07b2cecf476a2dfe25d085d3"
  },
  {
    "url": "assets/js/4.1701b37d.js",
    "revision": "80a959084191f3a0c33838b86217b764"
  },
  {
    "url": "assets/js/5.fc184768.js",
    "revision": "0f6067a51113cb774f22f73ec6537dc3"
  },
  {
    "url": "assets/js/6.699afda2.js",
    "revision": "190fb6bbeef749acf5caf574f16d5b23"
  },
  {
    "url": "assets/js/7.b0e24087.js",
    "revision": "e0bb7c2f505ba2958dcc206a94738c56"
  },
  {
    "url": "assets/js/8.6a59bf97.js",
    "revision": "4790bdb52318ffc03e3cfeec895d1350"
  },
  {
    "url": "assets/js/9.431622b1.js",
    "revision": "b00219efeffee703635d6bf317cfb758"
  },
  {
    "url": "assets/js/app.15d47f02.js",
    "revision": "3bb211efad3de05f7deb291584c92585"
  },
  {
    "url": "Blogdjango/01.djangoblog.html",
    "revision": "206ec410da67eb12ea11df3259551c76"
  },
  {
    "url": "Blogdjango/02.djangoblog.html",
    "revision": "a158c0be3e12031a7d87faf8de3afe22"
  },
  {
    "url": "Blogdjango2/03.djangoblog.html",
    "revision": "ac642f57138cf1c03bfd457bd8d7ae8f"
  },
  {
    "url": "Blogdjango2/04.djangoblog.html",
    "revision": "78cebc4b4199fc45a7a9f9f0521dce91"
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
    "url": "images/django2/portfolio-15.png",
    "revision": "975892aaa4dfb50503c0dec6e2b7c450"
  },
  {
    "url": "images/django2/portfolio-16.png",
    "revision": "0b96b3e625e5b68d1cb235c2aea6e587"
  },
  {
    "url": "images/django2/portfolio-17.png",
    "revision": "5b144c6063e4549494edea5c40011157"
  },
  {
    "url": "images/django2/portfolio-18.png",
    "revision": "261dbc63c0cef18f2f4259dfd22a9f3f"
  },
  {
    "url": "images/django2/portfolio-19.png",
    "revision": "af07911cab79f534f3a55a299d81588d"
  },
  {
    "url": "images/django2/portfolio-20.png",
    "revision": "50860d9c4aa9fa3b83973ac109267d27"
  },
  {
    "url": "images/DRFlogo.png",
    "revision": "37921ea75c0963589780cce91f1cc4f3"
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
    "url": "images/Rest/DRF01.png",
    "revision": "7482b316c157e6080688aef33cac620a"
  },
  {
    "url": "images/Rest/DRF02.png",
    "revision": "92aef40d257d820e81235a4082e33af1"
  },
  {
    "url": "images/Rest/DRF03.png",
    "revision": "44ef042f4eae2236b6d459d0c75e29cf"
  },
  {
    "url": "images/Rest/simple-API.png",
    "revision": "842d466661adf957f9f4a1cd82be7492"
  },
  {
    "url": "index.html",
    "revision": "0e3f178fb4dbe59144d447c5e34597c3"
  },
  {
    "url": "RestFramework1/01.restframework.html",
    "revision": "52124681658da28adcb3ffc0be131885"
  },
  {
    "url": "RestFramework1/02.restframework.html",
    "revision": "de2754a0f0d2c464577f5bc072db81d8"
  },
  {
    "url": "RestFramework1/httpRequestStatus.html",
    "revision": "ef4507c0ac3a6a046876191be27c0955"
  },
  {
    "url": "RestFramework1/keyWordContents.html",
    "revision": "605b9f3fae5987d939b90a7be64159e0"
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
