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
    "revision": "5e53921b698b9bd2de7bac71d636bd88"
  },
  {
    "url": "assets/css/0.styles.829866b3.css",
    "revision": "87ee49decafcbdd38c280821ef1b7955"
  },
  {
    "url": "assets/img/ckeditor01.a51b7b25.png",
    "revision": "a51b7b2511f2da74220ae26a5b16ab0b"
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
    "url": "assets/img/test01.ce695e50.png",
    "revision": "ce695e5083aaef628e186fe2b9817902"
  },
  {
    "url": "assets/img/test02.d46d491d.png",
    "revision": "d46d491d11d77ad154c646052707c896"
  },
  {
    "url": "assets/img/test03.d1301b8c.png",
    "revision": "d1301b8c06e4cf5c88d6242b01dc24ef"
  },
  {
    "url": "assets/img/test04.6e1a0a8b.png",
    "revision": "6e1a0a8be2202e15217e88c013b0317d"
  },
  {
    "url": "assets/img/test05.5b9a62a4.png",
    "revision": "5b9a62a4a30fa48d4cdff4a13fe45bf7"
  },
  {
    "url": "assets/img/test06.792e6d46.png",
    "revision": "792e6d4614746b59866a9f390620c6e4"
  },
  {
    "url": "assets/img/test07.6aa08bcc.png",
    "revision": "6aa08bcc59037927bee0f0ebedd77a99"
  },
  {
    "url": "assets/img/test08.2bcd1d39.png",
    "revision": "2bcd1d39f5853c2b0e74f252f3c8ffb6"
  },
  {
    "url": "assets/img/test09.7b04a09a.png",
    "revision": "7b04a09aa16fc2529d6cdd679e383847"
  },
  {
    "url": "assets/img/test10.0248b3ed.png",
    "revision": "0248b3ed2cde3a84fe3b3cb39b9cc306"
  },
  {
    "url": "assets/img/test11.69de2a72.png",
    "revision": "69de2a72f55b0b87f430c0fdceb627c7"
  },
  {
    "url": "assets/img/test12.cda9b305.png",
    "revision": "cda9b30595499483a68a335fe20c0f03"
  },
  {
    "url": "assets/img/test13.b25cd763.png",
    "revision": "b25cd763c9fe0734fce428752889803b"
  },
  {
    "url": "assets/img/test14.7ffeaa91.png",
    "revision": "7ffeaa91be27e8c445bb454450949349"
  },
  {
    "url": "assets/img/test15.b182207b.png",
    "revision": "b182207beea436c3516b3e14c07133f2"
  },
  {
    "url": "assets/img/test16.f221953a.png",
    "revision": "f221953a84fb606ab8b64053252744a4"
  },
  {
    "url": "assets/img/test17.9a8cfc05.png",
    "revision": "9a8cfc05dcfccc8779666c6da037dc7d"
  },
  {
    "url": "assets/img/test18.79bee832.png",
    "revision": "79bee832c462c43772ce674237fd0836"
  },
  {
    "url": "assets/img/test20.faa5553c.png",
    "revision": "faa5553c7046ed28338fa74a4fd6a8c2"
  },
  {
    "url": "assets/img/test22.895c2db4.png",
    "revision": "895c2db41382e84e383f14ca1be2d51c"
  },
  {
    "url": "assets/img/test23.c2e14d12.png",
    "revision": "c2e14d12b2d92250180086649705db64"
  },
  {
    "url": "assets/img/test24.f119b334.png",
    "revision": "f119b334caf38c6fd5d644b258d05c86"
  },
  {
    "url": "assets/img/test25.0a20e6de.png",
    "revision": "0a20e6deca3b6741f29ea290e9e66307"
  },
  {
    "url": "assets/img/test26.de9c1404.png",
    "revision": "de9c1404cd3f789e003b1e5de6dc6b16"
  },
  {
    "url": "assets/img/test27.f0d480b8.png",
    "revision": "f0d480b8b5690a867ee5bec4edb2db59"
  },
  {
    "url": "assets/img/test29.6914628f.png",
    "revision": "6914628f4426aae38da7ab5e0ede6afc"
  },
  {
    "url": "assets/img/test30.5742419b.png",
    "revision": "5742419b059217ffe008ce17e0afd75d"
  },
  {
    "url": "assets/img/test31.2dde8a11.png",
    "revision": "2dde8a110b83257ff74933fd20df74f1"
  },
  {
    "url": "assets/js/10.15214cae.js",
    "revision": "f2743af36cea8c7592e2ad296955e150"
  },
  {
    "url": "assets/js/11.759fd2cd.js",
    "revision": "9950afb06bd1659a68d2177429d8f1d5"
  },
  {
    "url": "assets/js/12.5ae8b0e1.js",
    "revision": "4b629658ea15eed06e8fed80a03edee8"
  },
  {
    "url": "assets/js/13.f695110f.js",
    "revision": "e3a5c07fc0f37eb2c4a4464e296776a8"
  },
  {
    "url": "assets/js/14.4eb92bfa.js",
    "revision": "c0ec08ecc42e22a019c1835f9f3d95a2"
  },
  {
    "url": "assets/js/15.aac8ce92.js",
    "revision": "65266039c0c67206e10b481455604d0b"
  },
  {
    "url": "assets/js/16.7654c9ca.js",
    "revision": "ebbdeed7e8bdd9212bb041a709a6d503"
  },
  {
    "url": "assets/js/17.8fd0f2b8.js",
    "revision": "471bb24329e2df6e53d89d71cc4b0ab6"
  },
  {
    "url": "assets/js/18.a7b2b44c.js",
    "revision": "457fa3d98e76010e133c2cfdb42e9c11"
  },
  {
    "url": "assets/js/19.8ceb9435.js",
    "revision": "7eb9c55f29c935089dfb9499a280923d"
  },
  {
    "url": "assets/js/2.44d61a62.js",
    "revision": "0323b6bcedd284f2189dd5ba7beb1a70"
  },
  {
    "url": "assets/js/20.9e7db912.js",
    "revision": "b9ffbabd0b30bf3c4f4bf4f6fad8bfd7"
  },
  {
    "url": "assets/js/21.0bdaaa36.js",
    "revision": "a23c19262aa03fa26f63c47510683808"
  },
  {
    "url": "assets/js/22.885de2e2.js",
    "revision": "185638806f3df9b7712167c23c02042a"
  },
  {
    "url": "assets/js/23.a278e534.js",
    "revision": "d4ecff22bf51a76e776553cae0fb5b28"
  },
  {
    "url": "assets/js/3.525667ea.js",
    "revision": "2c6526566a840c797d6e2968f9ed7768"
  },
  {
    "url": "assets/js/4.c880d02c.js",
    "revision": "f1fcecda77d1ac6612dcea761e905191"
  },
  {
    "url": "assets/js/5.5394f542.js",
    "revision": "27c6920ad575c3fba08f181dddc22e0b"
  },
  {
    "url": "assets/js/6.1a167852.js",
    "revision": "192cb44e16ec478d0436e293da908305"
  },
  {
    "url": "assets/js/7.a087f3fd.js",
    "revision": "410a62903e9027adc86b228256887681"
  },
  {
    "url": "assets/js/8.acca5ddf.js",
    "revision": "b6b3a4dc203b837a3d46d79bc5d95950"
  },
  {
    "url": "assets/js/9.3ecc871d.js",
    "revision": "9f02bdd4502d6b7445641071dc4560c0"
  },
  {
    "url": "assets/js/app.134d9462.js",
    "revision": "483049bb0c2492395fd0a3b083b473a0"
  },
  {
    "url": "Blogdjango/01.djangoblog.html",
    "revision": "cafb47118cf1a597808c88d6af78e5c6"
  },
  {
    "url": "Blogdjango/02.djangoblog.html",
    "revision": "e361f3ee5cd757297465efeec4509105"
  },
  {
    "url": "Blogdjango2/03.djangoblog.html",
    "revision": "f783832bc1b37175307c51674107653b"
  },
  {
    "url": "Blogdjango2/04.djangoblog.html",
    "revision": "6fe4f454bb21dd9069340255ec9f9909"
  },
  {
    "url": "CKEditor/00.ckeditor.html",
    "revision": "dbc36a48f82e6ca105d4368839b259d9"
  },
  {
    "url": "CKEditor/01.ckeditor.html",
    "revision": "9615f64d2494c262dde7b48ea98c9edf"
  },
  {
    "url": "CKEditor/02.ckeditor.html",
    "revision": "6d85f8c4d03f98447b210e1dbe41eea1"
  },
  {
    "url": "CKEditor/03.ckeditor.html",
    "revision": "01419a6bd76a4f44c2c510bdc7e52e31"
  },
  {
    "url": "CKEditor/04.ckeditor.html",
    "revision": "96fe0e137c2e5862e3be5f6d08170804"
  },
  {
    "url": "images/ckeditor/ckeditor01.png",
    "revision": "a51b7b2511f2da74220ae26a5b16ab0b"
  },
  {
    "url": "images/ckeditor/ckeditor02.png",
    "revision": "d6ed0c4e96bdeea66d1eda2454436856"
  },
  {
    "url": "images/ckeditor/ckeditor03.png",
    "revision": "69e8fbae87f3391af1e36cc50a6c8c52"
  },
  {
    "url": "images/ckeditor/test01.png",
    "revision": "ce695e5083aaef628e186fe2b9817902"
  },
  {
    "url": "images/ckeditor/test02.png",
    "revision": "d46d491d11d77ad154c646052707c896"
  },
  {
    "url": "images/ckeditor/test03.png",
    "revision": "d1301b8c06e4cf5c88d6242b01dc24ef"
  },
  {
    "url": "images/ckeditor/test04.png",
    "revision": "6e1a0a8be2202e15217e88c013b0317d"
  },
  {
    "url": "images/ckeditor/test05.png",
    "revision": "5b9a62a4a30fa48d4cdff4a13fe45bf7"
  },
  {
    "url": "images/ckeditor/test06.png",
    "revision": "792e6d4614746b59866a9f390620c6e4"
  },
  {
    "url": "images/ckeditor/test07.png",
    "revision": "6aa08bcc59037927bee0f0ebedd77a99"
  },
  {
    "url": "images/ckeditor/test08.png",
    "revision": "2bcd1d39f5853c2b0e74f252f3c8ffb6"
  },
  {
    "url": "images/ckeditor/test09.png",
    "revision": "7b04a09aa16fc2529d6cdd679e383847"
  },
  {
    "url": "images/ckeditor/test10.png",
    "revision": "0248b3ed2cde3a84fe3b3cb39b9cc306"
  },
  {
    "url": "images/ckeditor/test11.png",
    "revision": "69de2a72f55b0b87f430c0fdceb627c7"
  },
  {
    "url": "images/ckeditor/test12.png",
    "revision": "cda9b30595499483a68a335fe20c0f03"
  },
  {
    "url": "images/ckeditor/test13.png",
    "revision": "b25cd763c9fe0734fce428752889803b"
  },
  {
    "url": "images/ckeditor/test14.png",
    "revision": "7ffeaa91be27e8c445bb454450949349"
  },
  {
    "url": "images/ckeditor/test15.png",
    "revision": "b182207beea436c3516b3e14c07133f2"
  },
  {
    "url": "images/ckeditor/test16.png",
    "revision": "f221953a84fb606ab8b64053252744a4"
  },
  {
    "url": "images/ckeditor/test17.png",
    "revision": "9a8cfc05dcfccc8779666c6da037dc7d"
  },
  {
    "url": "images/ckeditor/test18.png",
    "revision": "79bee832c462c43772ce674237fd0836"
  },
  {
    "url": "images/ckeditor/test19.png",
    "revision": "26755c7af7e5ab7127f71922c7f88e45"
  },
  {
    "url": "images/ckeditor/test20.png",
    "revision": "faa5553c7046ed28338fa74a4fd6a8c2"
  },
  {
    "url": "images/ckeditor/test21.png",
    "revision": "c845a03d018c732d7d2f817d4a0ae327"
  },
  {
    "url": "images/ckeditor/test22.png",
    "revision": "895c2db41382e84e383f14ca1be2d51c"
  },
  {
    "url": "images/ckeditor/test23.png",
    "revision": "c2e14d12b2d92250180086649705db64"
  },
  {
    "url": "images/ckeditor/test24.png",
    "revision": "f119b334caf38c6fd5d644b258d05c86"
  },
  {
    "url": "images/ckeditor/test25.png",
    "revision": "0a20e6deca3b6741f29ea290e9e66307"
  },
  {
    "url": "images/ckeditor/test26.png",
    "revision": "de9c1404cd3f789e003b1e5de6dc6b16"
  },
  {
    "url": "images/ckeditor/test27.png",
    "revision": "f0d480b8b5690a867ee5bec4edb2db59"
  },
  {
    "url": "images/ckeditor/test28.png",
    "revision": "792e6d4614746b59866a9f390620c6e4"
  },
  {
    "url": "images/ckeditor/test29.png",
    "revision": "6914628f4426aae38da7ab5e0ede6afc"
  },
  {
    "url": "images/ckeditor/test30.png",
    "revision": "5742419b059217ffe008ce17e0afd75d"
  },
  {
    "url": "images/ckeditor/test31.png",
    "revision": "2dde8a110b83257ff74933fd20df74f1"
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
    "revision": "e3fb20a1deda2de04fd48989f9b3c0c4"
  },
  {
    "url": "RestFramework1/01.restframework.html",
    "revision": "2181acd707caea5accf7d4f217cd8c1b"
  },
  {
    "url": "RestFramework1/02.restframework.html",
    "revision": "66c125a0d750ba195ce50b7a91db9aa7"
  },
  {
    "url": "RestFramework1/httpRequestStatus.html",
    "revision": "c5e00d8b7a81ba01b5250222550d5a24"
  },
  {
    "url": "RestFramework1/keyWordContents.html",
    "revision": "9e50a0a520be1274b3f31d2da647276c"
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
