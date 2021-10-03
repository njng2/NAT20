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

# Create your models here.

