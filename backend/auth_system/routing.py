#This root routing configuration specifies that 
# when a connection is made to the Channels development 
# server, the ProtocolTypeRouter will first inspect the type 
# of connection. If it is a WebSocket connection (ws:// or wss://), 
# the connection will be given to the AuthMiddlewareStack.
import os
from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application
import chat.routing

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "mysite.settings")

application = ProtocolTypeRouter({
  "http": get_asgi_application(),
  "websocket": AuthMiddlewareStack(
        URLRouter(
            chat.routing.websocket_urlpatterns
        )
    ),
})