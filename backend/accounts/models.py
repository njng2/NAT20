from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.db.models.fields import CharField
from django.conf import settings
# from django.contrib.auth import get_user_model



class UserAccountManager(BaseUserManager):
    def create_user(self, email, name, chat_pass, password=None): #allows you to create user 
        if not email: 
            raise ValueError("Adventurers must have an email address or you shall not pass.")

            
        email = self.normalize_email(email) #normalize is a built in function to normalize email
        user = self.model(email = email, name = name, chat_pass = chat_pass) #normalizes capital to lowercase

        user.set_password(password) #hashes password for security and sets database 
        # if hacker hacks database you see it 
        user.save() #saves the user

        return user

    def create_superuser(self, email, name, password=None ):
        u = self.create_user(email, name, password)
        u.is_staff = True
        u.is_active = True
        u.is_superuser = True
        u.save(using=self._db)

        return u


class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length = 255, unique = True)
    name = models.CharField(max_length = 255)
    password = models.CharField(max_length = 255)
    chat_pass = models.CharField(max_length = 255, default='password')
    is_active = models.BooleanField(default = True)
    is_staff = models.BooleanField(default = False)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name', 'password', 'chat_pass']

    def get_fullname(self):
        return self.name 
    
    def get_short_name(self): 
        return self.name

    # def get_chat_pass(self):
    #     return self.chat_pass
        
    def __str__(self): 
        return self.email

print("The User Name: ", settings.AUTH_USER_MODEL)

class UsersHeroes(models.Model):
    name = models.CharField(max_length = 255)

    race_type = models.CharField(max_length= 255, default="")
    class_type = models.CharField(max_length= 255, default="")
    #do we need to replace 8 with the variable name from front end??
    STR = models.IntegerField()
    DEX = models.IntegerField()
    CON = models.IntegerField()
    INT = models.IntegerField()
    WIS = models.IntegerField()
    CHA = models.IntegerField()

    def get_heroname(self):
        return self.name 

    def get_race(self):
        return self.race_type

    def get_class(self):
        return self.class_type

    def get_str(self):
        return self.STR   
    
    def get_dex(self):
        return self.DEX

    def get_con(self):
        return self.CON

    def get_int(self):
        return self.INT

    def get_wis(self):
        return self.WIS

    def get_cha(self):
        return self.CHA
        
    hero = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, default=1)    
# Create your models here.

