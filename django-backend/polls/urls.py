from django.urls import path
from . import views

#django api section

urlpatterns = [
    path("", views.index, name="index"),
    path("authenticate-user/", views.authenticate_user, name="authenticate_user"),
    path("create-user/", views.create_user, name="create_user"),

]   #defining api urls

