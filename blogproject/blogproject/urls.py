from django.contrib import admin
from django.urls import path
import blog.views
import portfolio.views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', blog.views.home, name="home"),
    path('<int:post_id>/', blog.views.detail, name="detail"),
    path('blog/new/', blog.views.new, name='new'),
    path('blog/create/', blog.views.create, name='create'),
    path('<int:post_id>/delete', blog.views.delete, name="delete"),

    path('portfolio/', portfolio.views.portfolio, name='portfolio'),
]
