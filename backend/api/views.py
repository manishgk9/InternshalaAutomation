import time
from django.http import HttpResponse
from rest_framework import viewsets
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import json
from . import internsala
from selenium import webdriver
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
import time
import random


def api(request):
    return HttpResponse("Welcome to the ending point of api...")


# class InternshipViewSet(viewsets.ModelViewSet):
    # queryset = Internship.objects.all()
    # serializer_class = InternshipSerializer


@csrf_exempt
def automate(request):
    if request.method == 'POST':
        data = request.body
        data = json.loads(data)
        username = data['username']
        password = data['password']
        keyword = data['keyword']
        location = data['location']
        try:
            internsala.Automation(username, password, keyword, location)
        except Exception as e:
            error_message = f'Error occurred: {str(e)}'
            return JsonResponse({'error': error_message})

        finally:
            # Close the browser after completing actions
            print("restart your server if not working..")

    else:
        return JsonResponse({'error': 'POST method required'})
