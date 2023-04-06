from rest_framework.viewsets import ModelViewSet
from django.contrib.auth.hashers import make_password
from users.models import User
#Se import el permiso (middleware) isAdmin
from rest_framework.permissions import IsAdminUser
#se import el serializser de user
from users.api.serializer import UserSerializer

class UserApiViewSet(ModelViewSet):
    permission_classes = [IsAdminUser]
    serializer_class =  UserSerializer
    queryset = User.objects.all()

    def create(self, request, *args, **kwargs):
        request.data['password'] = make_password(request.data['password'])
        return super().create(request, *args, **kwargs)