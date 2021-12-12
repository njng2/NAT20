
from django.http.response import Http404
from django.shortcuts import render
from rest_framework.serializers import Serializer
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from rest_framework import status
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
        "id": detail.id,
        } 
        for detail in UsersHeroes.objects.all()]
        # print(UsersHeroes.objects.get(id=3))
        return Response(detail)
  
    @csrf_exempt
    def post(self, request):
        serializer = UsersHeroesSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return  Response(serializer.data)
    
  
class ReactDetail(APIView):
    serializer_class = UsersHeroesSerializer
    # @csrf_exempt
    # def get_object(self, pk):
    #     try:
    #         return UsersHeroes.objects.get(id=pk)
    #     except UsersHeroes.DoesNotExist:
    #         raise Http404

    @csrf_exempt
    def get(self, request, pk, format=None):
        print("The pk is: ", pk)
        userHero= UsersHeroes.objects.get(id=pk)
        hero = {
            "name": userHero.name,
            "race_type": userHero.race_type, 
            "class_type": userHero.class_type,
            "STR" : userHero.STR, 
            "DEX" : userHero.DEX,
            "CON" : userHero.CON,
            "INT" : userHero.INT,
            "WIS" : userHero.WIS,
            "CHA" : userHero.CHA,
            "id"  : userHero.id,
        }
        return Response(hero)
        # serializer = UsersHeroesSerializer(hero, data=request.data)
        # if serializer.is_valid(raise_exception=True):
        #     serializer.save()
        #     return  Response(serializer.data)
        # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @csrf_exempt
    def delete(self, request, pk, format=None):
        print("Here is delete")
        hero = UsersHeroes.objects.get(id=pk)
        hero.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
                
