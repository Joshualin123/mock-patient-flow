from django.shortcuts import render
import requests
from dotenv import load_dotenv
import os
from django.http import HttpResponse
from django.views.decorators.http import require_http_methods
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.utils import timezone
import ast

# Create your views here.
CORS_ALLOW_ALL_ORIGINS = True
load_dotenv()

def index(request):
    
    return HttpResponse("Hello, world. You're at the polls index.")

#account authentication methods

@csrf_exempt
@require_http_methods(["POST"])
def authenticate_user(request):
    if request.method == "POST":
        data = json.loads(request.body)
        username = data[0]
        password = data[1]
        acc_type = data[2]

        user = authenticate(username=username, password=password)
        print(f'{username}, {password}')

        if user and user.account_type == acc_type:
            print("account exists")
            return JsonResponse({"status": "ok"})
        
        #if user doesn't exist or user doesn't exist under that specific account type:
        print("account doesnt exist")
        return JsonResponse({"status": "This account does not exist or the account type is wrong."})
        
@csrf_exempt
@require_http_methods(["POST"])
def create_user(request):
    if request.method == "POST":
        data = json.loads(request.body)
        username = data[0]
        password = data[1]
        acc_type = data[2]

        user = User.objects.filter(username=username, account_type = acc_type).exists()
        if user:
            print(f"account {username}, {password}, {acc_type} already in db")
            return JsonResponse({"status": "This username is already taken."})
        
        User.objects.create_user(username=username, password=password, account_type=acc_type)
        print(f"account {username}, {password}, {acc_type} created")
        return JsonResponse({"status": "ok"})

class chat_history(models.Model):

    account_choices = {
        ("patient", "Patient"),
        ("admin", "Admin")
    }

    username = models.CharField(max_length=20)
    message = models.CharField()
    created_at = models.DateTimeField(auto_now_add=True)
    account_type = models.CharField(choices=account_choices)

    def __str__(self):
        return self.username
