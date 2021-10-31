from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from accounts.views import *

urlpatterns = [
    path('auth/', include('djoser.urls')),
    #to get json token path
    path('auth/', include('djoser.urls.jwt')),
    path('heroes/', ReactView.as_view(), name="heroes"),

]


#looks for URL patterns. 
urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name = 'index.html'))]