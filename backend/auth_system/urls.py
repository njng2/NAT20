from django.contrib import admin
from django.urls import path, include, re_path

urlpatterns = [
    path(r'^auth/', include('djoser.urls')),
    path(r'^auth/', include('djoser.urls.jwt')),
]
