# Generated by Django 3.2.7 on 2021-11-17 18:15

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0009_auto_20211105_2108'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usersheroes',
            name='hero',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
