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
    "revision": "100f37c25e5fd2dd2a3a1a2ba740162f"
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
    "url": "assets/js/10.bfecdf54.js",
    "revision": "abc40fc188b9ddb7f5d7ba6804c9809f"
  },
  {
    "url": "assets/js/11.0454fc6d.js",
    "revision": "403a820222483e8567a895c2e93b2912"
  },
  {
    "url": "assets/js/12.23aefdb8.js",
    "revision": "b291f9adcc2a04839751e888ea500dfc"
  },
  {
    "url": "assets/js/13.25d59a57.js",
    "revision": "2593b8989a41d03a6ac15ea459311991"
  },
  {
    "url": "assets/js/14.c9349d4c.js",
    "revision": "f38ca1aeeac51511e909d14479d06afd"
  },
  {
    "url": "assets/js/15.6d8baf6b.js",
    "revision": "78e83efec158303e198c9006e8c102ba"
  },
  {
    "url": "assets/js/16.7ae2db58.js",
    "revision": "38a202484f6210c7428fd9fd0d3d6173"
  },
  {
    "url": "assets/js/2.e4a304df.js",
    "revision": "c577d6d28d4bbe114aaa4da690b8ac61"
  },
  {
    "url": "assets/js/3.b3fa4607.js",
    "revision": "f072dd763af0dc21d050a7786062c712"
  },
  {
    "url": "assets/js/4.a5adcf6f.js",
    "revision": "ffdabf35defc75293b6359da0d4f490b"
  },
  {
    "url": "assets/js/5.22805bd8.js",
    "revision": "ea062d36ea21906949102437d3c8695e"
  },
  {
    "url": "assets/js/6.86703b10.js",
    "revision": "dbc2edb384f93fa325f825eab7f6dc19"
  },
  {
    "url": "assets/js/7.61cb9752.js",
    "revision": "51c337e9ed22ed3a387d9442091f0623"
  },
  {
    "url": "assets/js/8.c5078573.js",
    "revision": "5b6f63123f696b738eca8552a073d6a3"
  },
  {
    "url": "assets/js/9.f15be461.js",
    "revision": "ddf361dd9f22c187532775aaa3a75378"
  },
  {
    "url": "assets/js/app.e440f9b6.js",
    "revision": "3bfa289d7a34c53adf3d7641090a9ffb"
  },
  {
    "url": "Blogdjango/01.djangoblog.html",
    "revision": "af9bbbe467c3cfa253fe730f104534a3"
  },
  {
    "url": "Blogdjango/02.djangoblog.html",
    "revision": "f899873bbb1b39f8696fea32b6c82923"
  },
  {
    "url": "Blogdjango2/03.djangoblog.html",
    "revision": "a334a16c7227605d46582cf288a41bf5"
  },
  {
    "url": "Blogdjango2/04.djangoblog.html",
    "revision": "124693ac6ef6f39f38b7ec5ab88fb188"
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
    "url": "images/Rest/simple-API.png",
    "revision": "842d466661adf957f9f4a1cd82be7492"
  },
  {
    "url": "index.html",
    "revision": "f77513f63959819a1ccfaea0a9374568"
  },
  {
    "url": "RestFramework1/01.restframework.html",
    "revision": "cbfce50132b3ae91f5dc634a0979f385"
  },
  {
    "url": "RestFramework1/02.restframework.html",
    "revision": "15a175788dc6bcc4a5cb374159332225"
  },
  {
    "url": "RestFramework1/httpRequestStatus.html",
    "revision": "a7bf300afcad194d39a76faf5d1a93df"
  },
  {
    "url": "RestFramework1/keyWordContents.html",
    "revision": "cd45a289ca7991d1c103b42aa00d1601"
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
