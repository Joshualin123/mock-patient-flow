from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

# Create your models here.
class User(AbstractUser):

    account_choices = [
        ("patient", "Patient"),
        ("admin", "Admin")
    ]

    account_type = models.CharField(max_length=7, choices=account_choices)