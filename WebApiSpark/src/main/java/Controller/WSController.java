package Controller;


import WebSocketHandlers.IncidentsWebSocketHandler;

import static spark.Spark.*;

public class WSController {

    public WSController() {
        setupEndPoints();
    }
    private void setupEndPoints() {
        webSocket("/ws", IncidentsWebSocketHandler.class);
        init();
    }
}
