# Generated by Django 3.2.7 on 2021-10-27 15:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_auto_20210924_2059'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='useraccount',
            name='date_of_birth',
        ),
    ]
