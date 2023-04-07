from rest_framework.viewsets import ModelViewSet
from django.contrib.auth.hashers import make_password
from users.models import User
#Se import el permiso (middleware) isAdmin
from rest_framework.permissions import IsAdminUser,IsAuthenticated
#se import el serializser de user
from users.api.serializer import UserSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

class UserApiViewSet(ModelViewSet):
    permission_classes = [IsAdminUser]
    serializer_class =  UserSerializer
    queryset = User.objects.all()

    def create(self, request, *args, **kwargs):
        request.data['password'] = make_password(request.data['password'])
        return super().create(request, *args, **kwargs)
    
    def partial_update(self, request, *args, **kwargs):
        password = request.data['password']
        if password:
            request.data['password'] = make_password(password)
        else:
            request.data['password'] = request.user.password
        return super().update(request, *args, **kwargs)

class UserView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)
