from django.urls import path
from app_toc.views import Dashboard, Sub01, Sub02, Sub03, Sub04, Sub05


urlpatterns = [
    path('Dashboard/', Dashboard.as_view(), name="Dashboard"),
    path('Sub01/', Sub01.as_view(), name="Sub01"),
    path('Sub02/', Sub02.as_view(), name="Sub02"),
    path('Sub03/', Sub03.as_view(), name="Sub03"),
    path('Sub04/', Sub04.as_view(), name="Sub04"),
    path('Sub05/', Sub05.as_view(), name="Sub05"),
]