package Controller;

import Util.ChatWebSocketHandler;
import static spark.Spark.*;


public class WSController {

    public WSController() {
        setupEndPoints();
    }

    private void setupEndPoints() {
        webSocket("/ws", ChatWebSocketHandler.class);
        init();
    }
}
