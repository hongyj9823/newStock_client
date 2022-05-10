# Generated by Django 4.0.4 on 2022-05-08 08:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Keywords',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('keywords_text', models.CharField(max_length=30)),
                ('importance', models.FloatField()),
                ('related_stocks', models.CharField(max_length=30)),
                ('summarized_text', models.CharField(max_length=200)),
                ('news_title_1', models.CharField(blank=True, default=None, max_length=100, null=True)),
                ('news_url_1', models.CharField(blank=True, default=None, max_length=100, null=True)),
                ('news_title_2', models.CharField(blank=True, default=None, max_length=100, null=True)),
                ('news_url_2', models.CharField(blank=True, default=None, max_length=100, null=True)),
                ('news_title_3', models.CharField(blank=True, default=None, max_length=100, null=True)),
                ('news_url_3', models.CharField(blank=True, default=None, max_length=100, null=True)),
            ],
        ),
    ]