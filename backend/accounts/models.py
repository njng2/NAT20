from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.db.models.fields import CharField

class UserAccountManager(BaseUserManager):
    def create_user(self, email, name, password=None): #allows you to create user 
        if not email: 
            raise ValueError("Adventurers must have an email address or you shall not pass.")

            
        email = self.normalize_email(email) #normalize is a built in function to normalize email
        user = self.model(email = email, name = name) #normalizes capital to lowercase

        user.set_password(password) #hashes password for security and sets database 
        # if hacker hacks database you see it 
        user.save() #saves the user

        return user

class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length = 255, unique = True)
    name = models.CharField(max_length = 255)
    # date_of_birth = models.DateField(max_length=8)
    is_active = models.BooleanField(default = True)
    is_staff = models.BooleanField(default = False)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def get_fullname(self):
        return self.name 
    
    def get_short_name(self): 
        return self.name

    # def get_DOB(self):
    #     return self.date_of_birth

    def __str__(self): 
        return self.email


class UsersHeroes(models.Model):
    name = models.CharField(max_length = 255)
    RACE_TYPES = (
        (0, 'dragonborn'),
        (1, 'dwarf'),
        (1, 'elf'),
        (3, 'gnome'),
        (4, 'half-elf'),
        (5, 'half-orc'),
        (6, 'halfling'),
        (7, 'human'),
        (8, 'tiefling'),
    )
    CLASS_TYPES = (
        (0, 'barbarian'),
        (1, 'bard'),
        (1, 'clerif'),
        (3, 'druid'),
        (4, 'fighter'),
        (5, 'monk'),
        (6, 'paladin'),
        (7, 'ranger'),
        (8, 'rogue'),
        (9, 'sorcerer'),
        (10, 'warlock'),
        (11, 'wizard'),
    )
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
        return self.RACE_TYPES

    def get_class(self):
        return self.CLASS_TYPES

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

    hero = models.ForeignKey(UserAccount, on_delete=models.CASCADE)    
# Create your models here.

