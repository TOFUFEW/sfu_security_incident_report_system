package WebSocketHandlers;

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
        System.out.println ( "Sending Message: " + message );   // Print message

        session.getRemote ().sendString (  JsonUtil.toJson ( message ) );
    }

    // Sends a message from one user to all users, along with a list of current usernames
    public void broadcastMessage ( String message )
    {
        System.out.println ( "sessions.size () = " + sessions.size () );
        for ( Session session : sessions )
        {
            try
            {
                message ( session , message );
            }

            catch ( Exception e )
            {
                e.printStackTrace ();
            }
        }
    }

    public Observable getObservable ()
    {
        return new Observable ()
        {
            @Override
            public void sendMessage ( String message )
            {
                broadcastMessage ( message );
            }
        };
    }
}
