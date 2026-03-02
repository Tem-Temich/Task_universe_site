from django.views.generic import ListView
from .models import Slider


class SliderListView(ListView):
    model = Slider
    template_name = "landing/index_page.html"
    context_object_name = "slides"