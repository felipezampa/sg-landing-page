from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.mail import send_mail
from .models import LandingPage
from landingpage import settings
@receiver(post_save, sender=LandingPage)
def enviar_email(sender, instance, created, **kwargs):
    if created:
        subject = 'Obrigado por cadastrar'
        message = 'Olá {},\n\nObrigado por se cadastrar em nosso site.'.format(instance.nome)
        from_email = settings.EMAIL_HOST_USER
        recipient_list = [instance.email]
        send_mail(subject, message, from_email, recipient_list)