from django.contrib import admin
from django.urls import path
import api.views   # views.py 에 작성한 hello 함수 불러오기

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', api.views.hello, name="hello"),
]