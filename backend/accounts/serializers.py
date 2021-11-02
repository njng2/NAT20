from rest_framework import serializers
from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model
from . models import *
User = get_user_model()

class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'email', 'first_name', 'last_name', 'password')

class UsersHeroesSerializer(serializers.ModelSerializer):
    class Meta: 
        model = UsersHeroes
        fields = ['name', 'race_type', 'class_type', 
                'STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA']