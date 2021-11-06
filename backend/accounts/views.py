from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from . serializers import *
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
  
class ReactView(APIView):
    
    serializer_class = UsersHeroesSerializer

    @csrf_exempt
    def get(self, request):
        detail = [ {"name": detail.name,
        "race_type": detail.race_type, 
        "class_type": detail.class_type,
        "STR" : detail.STR, 
        "DEX" : detail.DEX,
        "CON" : detail.CON,
        "INT" : detail.INT,
        "WIS" : detail.WIS,
        "CHA" : detail.CHA,
        "hero": detail.hero
        } 
        for detail in UsersHeroes.objects.all()]
        return Response(detail)
  
    @csrf_exempt
    def post(self, request):
  
        serializer = UsersHeroesSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return  Response(serializer.data)

class UserView(APIView):
    
    serializer_class = UserCreateSerializer

    @csrf_exempt
    def get(self, request):
        detail = [ {"id": detail.request,
        "email": detail.email, 
        "first_name": detail.first_name,
        "last_name" : detail.last_name, 
        "password" : detail.password,
        } 
        for detail in UsersAccount.objects.all()]
        return Response(detail)
  
    @csrf_exempt
    def post(self, request):
  
        serializer = UsersCreateSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return  Response(serializer.data)