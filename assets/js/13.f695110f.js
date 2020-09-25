(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{333:function(t,s,a){t.exports=a.p+"assets/img/DRFlogo.37921ea7.png"},435:function(t,s,a){t.exports=a.p+"assets/img/DRF01.7482b316.png"},436:function(t,s,a){t.exports=a.p+"assets/img/DRF02.92aef40d.png"},437:function(t,s,a){t.exports=a.p+"assets/img/DRF03.44ef042f.png"},463:function(t,s,a){"use strict";a.r(s);var n=a(27),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"django-rest-framework"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#django-rest-framework"}},[t._v("#")]),t._v(" Django Rest Framework?")]),t._v(" "),n("p",[n("img",{attrs:{src:a(333),alt:"img"}})]),t._v(" "),n("h4",{attrs:{id:"🧱preference"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#🧱preference"}},[t._v("#")]),t._v(" 🧱Preference")]),t._v(" "),n("blockquote",[n("p",[t._v("Windows10"),n("br"),t._v("\npython 3.7 이상"),n("br"),t._v("\nGit Bash"),n("br"),t._v("\nDjango 기본적인 개념"),n("br"),t._v("\nHTTP Method")])]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("앞서 설명한 REST의 장점과 필요성을 어느정도 이해하였으면, 실제로 사용해보아야겠죠.")]),t._v(" "),n("h2",{attrs:{id:"_1-drf-django-rest-framework-란"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-drf-django-rest-framework-란"}},[t._v("#")]),t._v(" 1. DRF(Django Rest Framework)란?")]),t._v(" "),n("p",[t._v("Django 안에서 RESTful API 서버를 쉽게 구축할 수 있도록 도와주는 오픈소스 라이브러리입니다.")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://www.django-rest-framework.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("공식문서"),n("OutboundLink")],1),t._v("에서 설명하는 Django REST Framework를 사용하는 이유는 아래와 같다.")]),t._v(" "),n("ul",[n("li",[t._v("웹 브라우저 API는 개발자에게 큰 사용성을 즉 개발을 쉽게 만들어 준다.")]),t._v(" "),n("li",[t._v("인증 정책에 OAuth1, OAuth2를 위한 추가적인 패키지가 추가 되어 있는 경우")]),t._v(" "),n("li",[t._v("시리얼라이즈 기능을 제공을 해준다. (DB data -> JSON)")]),t._v(" "),n("li",[t._v("문서화 및 커뮤니티 지원이 잘 되어있다.")])]),t._v(" "),n("hr"),t._v(" "),n("h2",{attrs:{id:"_2-django-기본-app-만들기"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-django-기본-app-만들기"}},[t._v("#")]),t._v(" 2. Django 기본 app 만들기")]),t._v(" "),n("p",[t._v("DRF를 사용하기 앞서 기본 구조를 만들기 위해 "),n("a",{attrs:{href:"https://jun108059.github.io/django-blog/Blogdjango/01.djangoblog.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("이전 세션"),n("OutboundLink")],1),t._v("의 내용을 참고해서 다음과 같은 구조를 만들어봅시다.")]),t._v(" "),n("div",{staticClass:"language-shell script extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[t._v("rest_tutorial\n├── api\n│   ├── __init__.py\n│   ├── admin.py\n│   ├── apps.py\n│   ├── migrations\n│   │   └── __init__.py\n│   ├── models.py\n│   ├── tests.py\n│   ├── urls.py\n│   └── views.py\n├── db.sqlite3\n├── manage.py\n└── tutorial\n    ├── __init__.py\n    ├── settings.py\n    ├── urls.py\n    └── wsgi.py\n")])])]),n("div",{staticClass:"language-shell script extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[t._v("$ python -m venv myvenv "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 가상환경 생성")]),t._v("\n\n$ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" myvenv/scripts/activate "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 가상환경 실행")]),t._v("\n\n$ pip "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" django "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# django 설치")]),t._v("\n\n$ django-admin startproject tutorial "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#프로젝트 생성")]),t._v("\n\n$ python manage.py startapp api "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# app 생성")]),t._v("\n")])])]),n("hr"),t._v(" "),n("h3",{attrs:{id:"⏹-2-1-app-기본-mapping"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#⏹-2-1-app-기본-mapping"}},[t._v("#")]),t._v(" ⏹ 2.1 app 기본 mapping")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://jun108059.github.io/django-blog/Blogdjango/01.djangoblog.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("이전 세션"),n("OutboundLink")],1),t._v("에서 했던 내용과 거의 동일하기 때문에 참고하시려면 아래 버튼을 눌러서 보시면 됩니다.")]),t._v(" "),n("details",[n("summary",[t._v("✍ 기본 설정 살펴보기")]),t._v(" "),n("h4",{attrs:{id:"_2-1-1-settings-py-설정"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-settings-py-설정"}},[t._v("#")]),t._v(" 2.1.1. settings.py 설정")]),t._v(" "),n("p",[n("code",[t._v("rest_tutorial/tutorial/settings.py")])]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("INSTALL_APPS "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'api'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# add")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),n("h4",{attrs:{id:"_2-1-2-views-py-설정"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-views-py-설정"}},[t._v("#")]),t._v(" 2.1.2 views.py 설정")]),t._v(" "),n("p",[n("code",[t._v("rest_tutorial/api/views.py")])]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" django"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shortcuts "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" render\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" django"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("http "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" HttpResponse\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("hello")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" HttpResponse"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<h1>Hello, world!</h1>"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("h4",{attrs:{id:"_2-1-3-urls-py-설정"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-3-urls-py-설정"}},[t._v("#")]),t._v(" 2.1.3 urls.py 설정")]),t._v(" "),n("p",[n("code",[t._v("rest_tutorial/tutorial/urls.py")])]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" django"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contrib "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" admin\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" django"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("urls "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" path\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("views   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# views.py 에 작성한 hello 함수 불러오기")]),t._v("\n\nurlpatterns "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'admin/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" admin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("site"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("urls"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("views"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hello"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),n("h4",{attrs:{id:"_2-1-4-model-생성"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-4-model-생성"}},[t._v("#")]),t._v(" 2.1.4 Model 생성")]),t._v(" "),n("p",[n("code",[t._v("rest_tutorial/api/models.py")])]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" django"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("db "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" models\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Post")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("models"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Model"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    title "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CharField"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("max_length"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    pub_date "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DateTimeField"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'date published'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    body "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TextField"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("__str__")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title\n\n")])])]),n("p",[n("strong",[t._v("Migration")])]),t._v(" "),n("div",{staticClass:"language-shell script extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[t._v("$ python manage.py makemigrations\n$ python manage.py migrate\n")])])]),n("h4",{attrs:{id:"_2-1-5-admin-생성"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-5-admin-생성"}},[t._v("#")]),t._v(" 2.1.5 Admin 생성")]),t._v(" "),n("div",{staticClass:"language-shell script extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[t._v("$ python manage.py createsuperuser\n")])])]),n("h4",{attrs:{id:"_2-1-6-admin에-model-등록"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-6-admin에-model-등록"}},[t._v("#")]),t._v(" 2.1.6 Admin에 model 등록")]),t._v(" "),n("p",[n("code",[t._v("rest_tutorial/api/admin.py")])]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" django"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contrib "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" admin\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("models "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Post\n\nadmin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("site"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("register"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Post"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("기본적인 Setting은 이정도만 해도 좋습니다.")])]),t._v(" "),n("hr"),t._v(" "),n("h2",{attrs:{id:"_3-django-rest-framework-설치"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-django-rest-framework-설치"}},[t._v("#")]),t._v(" 3. Django Rest Framework 설치")]),t._v(" "),n("p",[t._v("Python 가상환경을 실행시켜주고 "),n("code",[t._v("pip")]),t._v("로 간단하게 설치해줄 수 있습니다.")]),t._v(" "),n("div",{staticClass:"language-shell script extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[t._v("pip "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" djangorestframework\n")])])]),n("h3",{attrs:{id:"⏹-3-1-setting-py-설정에-추가하기"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#⏹-3-1-setting-py-설정에-추가하기"}},[t._v("#")]),t._v(" ⏹ 3.1 setting.py 설정에 추가하기")]),t._v(" "),n("p",[n("code",[t._v("rest_tutorial/tutorial/settings.py")])]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("INSTALL_APPS "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'api'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rest_framework'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# add")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),n("hr"),t._v(" "),n("h2",{attrs:{id:"_4-drf의-핵심-기능-serializer-란"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-drf의-핵심-기능-serializer-란"}},[t._v("#")]),t._v(" 4. DRF의 핵심 기능 - Serializer 란")]),t._v(" "),n("p",[t._v("지난 포스팅에서 알아본 Web이 아닌 Android App과 같은 멀티 플랫폼을 전부 하나의 "),n("code",[t._v("back-end")]),t._v("에서 처리할 수 있는 REST의 장점을 그대로 사용하려면 "),n("code",[t._v("JSON")]),t._v(" 등의 데이터 형식을 사용하는게 좋다고 했었죠!")]),t._v(" "),n("p",[n("strong",[t._v("Serializer")]),t._v("가 "),n("code",[t._v("queryset")]),t._v("과 "),n("code",[t._v("모델 인스턴스")]),t._v("와 같은 복잡한 데이터를 "),n("code",[t._v("JSON")]),t._v(", "),n("code",[t._v("XML")]),t._v(" 또는 다른 콘텐츠 유형으로 쉽게 변환할 수 있는 기능을 제공합니다.")]),t._v(" "),n("p",[t._v("받은 데이터의 유효성을 검사한 다음, 복잡한 타입으로 형 변환할 수 있도록 "),n("code",[t._v("serializeation")]),t._v("을 제공하기 때문에 가능합니다.")]),t._v(" "),n("blockquote",[n("p",[t._v("물론 SErializer를 통해 모델 인스턴스가 JSON 또는 Dictionary 형태로 "),n("code",[t._v("직렬화")]),t._v("되면 좋은 점은 더 많습니다!")])]),t._v(" "),n("hr"),t._v(" "),n("h3",{attrs:{id:"⏹-4-1-serializers-py-생성"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#⏹-4-1-serializers-py-생성"}},[t._v("#")]),t._v(" ⏹ 4.1 serializers.py 생성")]),t._v(" "),n("p",[t._v("api 폴더 아래에 다음 python 파일을 추가해주세요.")]),t._v(" "),n("p",[n("code",[t._v("rest_tutorial/api/serializers.py")])]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" rest_framework "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" serializers\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("models "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Post\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PostSerializer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("serializers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ModelSerializer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Meta")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        model "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Post  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 모델 설정")]),t._v("\n        fields "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'title'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pub_date'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'body'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 필드 설정")]),t._v("\n")])])]),n("h3",{attrs:{id:"⏹-4-2-views-py-작성"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#⏹-4-2-views-py-작성"}},[t._v("#")]),t._v(" ⏹ 4.2 views.py 작성")]),t._v(" "),n("p",[t._v("DRF는 보통 사람들이 자주 사용하는 공통적인 view 로직을 그룹화 한 "),n("code",[t._v("viewset")]),t._v("을 제공합니다.")]),t._v(" "),n("p",[n("code",[t._v("viewset")]),t._v("을 사용하게 되면 CRUD 로직을 직접 짜지 않아도 이 기능들이 사용 가능해집니다.")]),t._v(" "),n("p",[n("s",[t._v("아무코토")]),t._v(" 하지 않아도 CRUD 기능이 다 된다는 거죠!")]),t._v(" "),n("p",[n("code",[t._v("rest_tutorial/api/views.py")])]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" rest_framework "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" viewsets\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("serializers "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ApiSerializer\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("models "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Post\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApiViewSet")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("viewsets"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ModelViewSet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    queryset "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Post"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("all")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    serializer_class "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ApiSerializer\n")])])]),n("h3",{attrs:{id:"⏹-4-3-urls-py-작성"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#⏹-4-3-urls-py-작성"}},[t._v("#")]),t._v(" ⏹ 4.3 urls.py 작성")]),t._v(" "),n("p",[t._v("DRF는 url을 자동으로 맵핑해주는 router를 제공합니다. 앞서 생성한 viewset을 router에 연결하게 되면 자동으로 url을 맵핑해주어 사용자가 직접 url을 맵핑하지 않아도 됩니다.")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" django"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contrib "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" admin\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" django"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("urls "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" include\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" rest_framework "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" routers\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" api "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" views\n\nrouter "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" routers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DefaultRouter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrouter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("register"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("r'posts'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" views"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PostViewSet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# prefix = posts, viewSet = PostViewSet")]),t._v("\n\nurlpatterns "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'admin/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" admin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("site"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("urls"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" include"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("router"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("urls"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),n("p",[t._v("위에서 router.register로  prefix를 'posts'로 설정을 해주었습니다.")]),t._v(" "),n("p",[t._v("router는 이를 바탕으로 url을 맵핑하게 됩니다.")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("URL pattern"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v("posts"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("$ Name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'post-list'")]),t._v("\n")])])]),n("hr"),t._v(" "),n("h2",{attrs:{id:"_5-실행하기"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-실행하기"}},[t._v("#")]),t._v(" 5. 실행하기")]),t._v(" "),n("div",{staticClass:"language-shell script extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[t._v("$ python manage.py runserver\n")])])]),n("h3",{attrs:{id:"⏹-5-1-완성"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#⏹-5-1-완성"}},[t._v("#")]),t._v(" ⏹ 5.1 완성!")]),t._v(" "),n("p",[t._v("만든 "),n("code",[t._v("api")]),t._v("로 "),n("code",[t._v("CRUD")]),t._v(" 요청을 해봅시다.")]),t._v(" "),n("p",[t._v("api 요청 uri과 method를 정리해보면 다음과 같습니다.")]),t._v(" "),n("p",[n("code",[t._v("GET /posts/")]),t._v(" : 게시글 리스트 조회")]),t._v(" "),n("p",[n("code",[t._v("POST /posts/")]),t._v(" : 게시글 추가")]),t._v(" "),n("p",[n("code",[t._v("PUT /posts/")]),t._v(" : 게시글 수정")]),t._v(" "),n("p",[n("code",[t._v("DELETE /posts/")]),t._v(" : 게시글 삭제")]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("먼저 "),n("code",[t._v("localhost:8000")]),t._v(" 으로 들어가게 되면 해당 화면이 보일 거에요.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(435),alt:"img"}})]),t._v(" "),n("p",[t._v("posts 링크로 들어가봅시다.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(436),alt:"img"}})]),t._v(" "),n("p",[n("code",[t._v("GET /posts/")]),t._v("는 게시글 리스트를 요청하는 uri이다.")]),t._v(" "),n("p",[t._v("아래 "),n("code",[t._v("form")]),t._v("으로 게시글 정보를 입력해보세요.")]),t._v(" "),n("p",[t._v("입력 하고 "),n("code",[t._v("post")]),t._v(" 버튼을 누르면 POST 메소드로 "),n("code",[t._v("/posts/")]),t._v(" uri에 요청이 가고, 해당 정보가 저장됩니다.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(437),alt:"img"}})]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("나머지 기능도 한번 테스트 해보세요!")]),t._v(" "),n("p",[t._v("DRF는 더욱 많은 기능을 제공하고 커스텀할 수 있게 제공되니까\n프로젝트를 진행할 때 활용하면 더욱 편리하게 만들 수 있겠죠!")]),t._v(" "),n("hr"),t._v(" "),n("h4",{attrs:{id:"reference"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),n("ul",[n("li",[t._v("https://jamanbbo.tistory.com/43")]),t._v(" "),n("li",[t._v("https://www.django-rest-framework.org/tutorial/quickstart/")])]),t._v(" "),n("hr")])}),[],!1,null,null,null);s.default=e.exports}}]);