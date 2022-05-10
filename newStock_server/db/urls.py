from django.urls import path

from . import views

urlpatterns = [
    # /db/
    path('keywords', views.getKeywordDatabaseJson, name='getKeywordDatabaseJson')
]
