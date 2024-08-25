"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
"""

from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from rest_framework_simplejwt.views import TokenObtainPairView
from backend.api.auth_views import UpdateUserView
from backend.api.views import index_view, MessageViewSet
from backend.api.auth_views import RegisterView, LoginView

router = routers.DefaultRouter()
router.register(r'messages', MessageViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/auth/register/', RegisterView.as_view(), name='register'),
    path('api/auth/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('', index_view, name='index'),
    path('auth/user/', UpdateUserView.as_view(), name='update_user'),
]



