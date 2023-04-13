from django.db import models
from django.utils import timezone
import datetime

SEGMENTOS_CHOICES = (
    ('Comércio','Comércio'),
    ('Indústria','Indústria'),
    ('Serviços','Serviços')
)


FATURAMENTO_CHOICES = (
        ('Ainda não faturamos', 'Ainda não faturamos'),
        ('Até R$500 mil ao ano', 'Até R$500 mil ao ano'),
        ('De R$500 mil a R$1 milhão ao ano', 'De R$500 mil a R$1 milhão ao ano'),
        ('De R$1 milhão a R$5 milhões ao ano', 'De R$1 milhão a R$5 milhões ao ano'),
        ('De R$5 a R$10 milhões ao ano', 'De R$5 a R$10 milhões ao ano'),
        ('De R$10 a R$50 milhões ao ano', 'De R$10 a R$50 milhões ao ano'),
        ('De R$50 a R$500 milhões ao ano', 'De R$50 a R$500 milhões ao ano'),
        ('Acima de R$500 milhões', 'Acima de R$500 milhões'),
    )

CARGO_CHOICES = (
    ('Analista','Analista'),
    ('Supervisor','Supervisor'),
    ('Coordenador','Coordenador'),
    ('Gerente','Gerente'),
    ('Coordenador','Coordenador'),
    ('Diretor','Diretor'),
    ('Vice-presidente ou C-Level','Vice-presidente ou C-Level'),
    ('Presidente ou CEO','Presidente ou CEO'),
    ('Sócio ou Fundador','Sócio ou Fundador'),

)

class LandingPage(models.Model):
    nome = models.CharField(max_length=255, blank=True, null=True)
    email = models.CharField(max_length=255, blank=True, null=True)
    telefone = models.CharField(max_length=255, blank=True, null=True)
    cargo = models.CharField(max_length=255, blank=True, null=True)
    segmento_empresa = models.CharField(max_length=255, blank=True, null=True)
    faturamento = models.CharField(max_length=255, blank=True, null=True)
    data_post = models.DateTimeField(auto_now_add=True)
    


    class Meta:
        managed = False
        db_table = 'landing_page'

    def __str__(self):
        return '{}  / {}'.format(self.nome, self.email)
    
