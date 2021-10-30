from django.urls import path, include, re_path
from django.views.generic import TemplateView

urlpatterns = [
    path('auth/', include('djoser.urls')),
    #to get json token path
    path('auth/', include('djoser.urls.jwt')),
    path('heroes/', include('heroes.urls'))

]


#looks for URL patterns. 
urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name = 'index.html'))]