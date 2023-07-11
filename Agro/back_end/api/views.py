from django.shortcuts import render
from api import models
from rest_framework import viewsets, generics
from api import serializers
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters
# Create your views here.



class LandingPageViewSet(viewsets.ModelViewSet):
    queryset = models.LandingPage.objects.all()
    serializer_class = serializers.LandingPageSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['id','nome','email','telefone','faturamento','cargo','segmento_empresa']
    