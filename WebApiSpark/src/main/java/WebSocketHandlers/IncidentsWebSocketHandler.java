package App;

import Util.JsonUtil;
import org.eclipse.jetty.websocket.api.Session;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketClose;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketConnect;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketMessage;
import org.eclipse.jetty.websocket.api.annotations.WebSocket;

import java.io.IOException;
import java.util.Queue;
import java.util.concurrent.ConcurrentLinkedQueue;

@WebSocket
public class IncidentsWebSocketHandler
{
    // Store sessions if you want to, for example, broadcast a message to all users
    private static final Queue < Session > sessions = new ConcurrentLinkedQueue <> ();

    @OnWebSocketConnect
    public void connected ( Session session )
    {
        sessions.add ( session );
        System.out.println ( "connected" );

        try {
            message ( session, "true");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @OnWebSocketClose
    public void closed (
            Session session,
            int statusCode,
            String reason
    ) {
        sessions.remove ( session );
        System.out.println ( "closed" );
    }

    @OnWebSocketMessage
    public void message (
            Session session,
            String message
    ) throws IOException {
        System.out.println ( "Got: " + message );   // Print message

        session.getRemote ().sendString (  JsonUtil.toJson ( "test message" ) ); // and send it back
    }
}
