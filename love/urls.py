from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("message/", views.message, name="message"),
    path("surprise/", views.surprise, name="surprise"),
    path("gallery/", views.gallery, name="gallery"),
    path("propose/", views.propose, name="propose"),
    path("yes/", views.yes, name="yes"),
    path("no/", views.no, name="no"),
    path("unlock/", views.unlock, name="unlock"),
]
