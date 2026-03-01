from django.db import models
from filer.fields.image import FilerImageField
# Create your models here.

class Slider(models.Model):
    name=models.CharField(max_length=100,verbose_name="Название " )
    image=FilerImageField(on_delete=models.SET_NULL,null=True, blank=True,related_name='slider_images', verbose_name="Изображение")
    position=models.PositiveIntegerField(default=0,db_index=True,verbose_name="Позиция")
    class Meta:
        ordering=("position",)
        verbose_name = 'Слайд'
        verbose_name_plural='Слайды'

    def __str__(self):
        return self.name


