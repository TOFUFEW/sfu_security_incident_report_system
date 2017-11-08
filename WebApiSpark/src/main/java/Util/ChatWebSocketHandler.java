package Util;

import org.eclipse.jetty.websocket.api.Session;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketClose;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketConnect;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketMessage;
import org.eclipse.jetty.websocket.api.annotations.WebSocket;

@WebSocket
public class ChatWebSocketHandler {

    @OnWebSocketConnect
    public void onConnect(Session session) throws Exception {
        System.out.println("User connected ");
    }

    @OnWebSocketClose
    public void onClose(Session session, int statusCode, String reason) {

    }

    @OnWebSocketMessage
    public void onMessage(String message) {
        System.out.println("Message recieved from client: " + message);
    }
}
