from djoser.serializers import UserCreateSerializer
from django.contribu.auth import get_user_model

User = get_user_model()

class UserCreateSerializer(UserCreateSeralizer):
    class Meta(UserCreateSerializer.Meta): 
        model = User 
        fields ('id','email', 'name', 'password') #overwriting serializer in settings