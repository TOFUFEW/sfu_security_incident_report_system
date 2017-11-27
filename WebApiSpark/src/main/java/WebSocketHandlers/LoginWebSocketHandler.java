package WebSocketHandlers;

import Util.JsonUtil;
import org.eclipse.jetty.websocket.api.Session;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketClose;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketConnect;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketMessage;
import org.eclipse.jetty.websocket.api.annotations.WebSocket;

import java.io.IOException;
import java.util.ArrayList;

@WebSocket
public class LoginWebSocketHandler
{
    // Store sessions if you want to, for example, broadcast a message to all users
    static ArrayList < Session > sessions = new ArrayList <> ();

    @OnWebSocketConnect
    public void connected ( Session session )
    {
        sessions.add ( session );
        System.out.println ( "Connected to Login Web Socket" );
        System.out.println ( "sessions.size () = " + sessions.size () );

        try {
            message ( session, "Login Web Socket: connected");
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

        session.getRemote ().sendString (  JsonUtil.toJson ( message ) ); // and send it back
    }

    //Sends a message from one user to all users, along with a list of current usernames
    public void broadcastMessage ( String message )
    {
        System.out.println ( "sending broadcast" );
        System.out.println ( "sessions.size () = " + sessions.size () );

        for ( Session session : sessions ) {
            try {
                message ( session, message);
            }
            catch (Exception e) {
                e.printStackTrace();
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
