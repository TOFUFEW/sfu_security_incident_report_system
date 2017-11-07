package Controller;

import org.eclipse.jetty.websocket.api.annotations.*;
import static spark.Spark.*;

public class WSController {

    public WSController() {
        setupEndPoints();
    }

    private void setupEndPoints() {
        webSocket("/chat", ChatWebSocketHandler.class);
        init();
    }

    @WebSocket
    public class ChatWebSocketHandler {

        @OnWebSocketConnect
        public void onConnect() throws Exception {

        }

        @OnWebSocketClose
        public void onClose() {

        }

        @OnWebSocketMessage
        public void onMessage() {

        }
    }

}
