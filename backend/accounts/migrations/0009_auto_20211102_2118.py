# Generated by Django 3.2.7 on 2021-11-02 21:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0008_alter_usersheroes_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usersheroes',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='usersheroes',
            name='race_type',
            field=models.IntegerField(choices=[('dragonborn', 'dragonborn'), ('dwarf', 'dwarf'), ('elf', 'elf'), ('gnome', 'gnome'), ('half-elf', 'half-elf'), ('half-orc', 'half-orc'), ('halfling', 'halfling'), ('human', 'human'), ('tiefling', 'tiefling')]),
        ),
    ]
