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
        } 
        for detail in UsersHeroes.objects.all()]
        return Response(detail)
  
    @csrf_exempt
    def post(self, request):
  
        serializer = UsersHeroesSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return  Response(serializer.data)
    
    @csrf_exempt
    def delete(self, idNum): 
        print(idNum)
       
        # try: 
        #     character = UsersHeroes.objects.get(id = idNum)
        #     character.delete()
        #     print("Record deleted")
        # # serializer = UsersHeroesSerializer(data=request.data)
        # except: 
        #     print("record does not exist")
        