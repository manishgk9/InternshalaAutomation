from django.urls import path
from . import views
urlpatterns = [
    path('', views.api),
    path('api/', views.automate),
]
