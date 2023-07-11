from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.mail import send_mail
from .models import LandingPage
from landingpage import settings
from django.core.mail import EmailMessage

@receiver(post_save, sender=LandingPage)
def enviar_email(sender, instance, created, **kwargs):
    if created:
        subject = 'Obrigado por cadastrar'
        message = 'Olá {},\n\nObrigado por se cadastrar em nosso site.'.format(instance.nome)
        from_email = settings.EMAIL_HOST_USER
        recipient_list = [instance.email]
        
        # Cria um objeto EmailMessage com o anexo PDF
        pdf_path = 'C:/Users/GABRIELA/Desktop/landing_page/sg-landing-page/Cepea_B3_Metodologia_Indicador_BOI_02_01_2020.pdf'
        pdf_file = open(pdf_path, 'rb')
        email = EmailMessage(subject, message, from_email, recipient_list)
        email.attach('Cepea_B3_Metodologia_Indicador_BOI_02_01_2020.pdf', pdf_file.read(), 'application/pdf')
        
        # Envia o e-mail
        email.send()