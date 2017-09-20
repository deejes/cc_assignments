from django.conf.urls import include, url
from django.views.generic import ListView, DetailView
from django.contrib import admin
from . import views
from blog.models import Post
urlpatterns = [
    url(r'^$', ListView.as_view(queryset=Post.objects.all().order_by("-date"), template_name="blog/blog.html" ))]
