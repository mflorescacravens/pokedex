from django.urls import path
from . import views

urlpatterns = [
    path('pokemon/', views.pokemon_list, name='pokemon_list'),
    # path('pokemon/<int:pk>/', views.pokemon_detail, name='pokemon_detail'),
]