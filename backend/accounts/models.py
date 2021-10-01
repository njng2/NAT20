from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.db.models.fields import CharField

class UserAccountManager(BaseUserManager):
    def create_user(self, email, name, date_of_birth, password=None): #allows you to create user 
        if not email: 
            raise ValueError("Adventurers must have an email address or you shall not pass.")

            
        email = self.normalize_email(email) #normalize is a built in function to normalize email
        user = self.model(email = email, name = name, date_of_birth = date_of_birth) #normalizes capital to lowercase

        user.set_password(password) #hashes password for security and sets database 
        # if hacker hacks database you see it 
        user.save() #saves the user

        return user

class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length = 255, unique = True)
    name = models.CharField(max_length = 255)
    date_of_birth = models.DateField(max_length=8)
    is_active = models.BooleanField(default = True)
    is_staff = models.BooleanField(default = False)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name', 'date_of_birth']

    def get_fullname(self):
        return self.name 
    
    def get_short_name(self): 
        return self.name

    def get_DOB(self):
        return self.date_of_birth

    def __str__(self): 
        return self.email

class UserHeroes(models.Model):
    RACE_TYPES = (
        (1, 'Dragonborn')
        (2, 'Dwarf')
        (3, 'Elf')
        (4, 'Gnome')
        (5, 'Half-Elf')
        (6, 'Half-Orc')
        (7, 'Hafling')
        (8, 'Human')
        (9, 'Tiefling')
    )
    CLASS_TYPES = (
        (1, 'Barbarian')
        (2, 'Bard')
        (3, 'Cleric')
        (4, 'Druid')
        (5, 'Fighter')
        (6, 'Monk')
        (7, 'Paladin')
        (8, 'Ranger')
        (9, 'Rogue')
        (10, 'Sorcerer')
        (11, 'Warlock')
        (12, 'Wizard')
    )
    #This update says that every hero must now be associated with a user
    race_type = models.IntegerField(choices=RACE_TYPES, default=1)
    class_type = models.IntegerField(choices=CLASS_TYPES, default=1)
    hero = models.ForeignKey(UserAccount, on_delete=models.CASCADE)

# Create your models here.

