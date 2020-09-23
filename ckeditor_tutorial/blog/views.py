from django.shortcuts import render
from .models import Post

def home(request):
    posts = Post.objects
    return render(request, 'home.html', {'posts':posts})