package App;


import Controller.*;
import WebSocketHandlers.IncidentsWebSocketHandler;
import WebSocketHandlers.LoginWebSocketHandler;
import com.google.common.io.ByteStreams;

import java.io.InputStream;
import java.net.URL;
import java.nio.charset.StandardCharsets;

import static Util.PathStrings.INCIDENTS_WEB_SOCKET_PATH;
import static Util.PathStrings.LOGIN_WEB_SOCKET_PATH;
import static spark.Spark.*;

// Class that initializes each controller at start - up
public class Application
{

    public static void main ( String [] args )
    {
        // SETUP PORT
        port ( 4567 );

        // SETUP ENCRYPTION
        String keyStorePassword = "changeit";
        String trustoreStorePassword = "changeit";

        ClassLoader classLoader = Application.class.getClassLoader();
        URL keystoreURL = classLoader.getResource( "self_signed_certificate/keystore.jks");
        URL trustoreURL = classLoader.getResource("self_signed_certificate/cacerts.jks");

        secure (
                keystoreURL.toString(),
                keyStorePassword,
                trustoreURL.toString(),
                trustoreStorePassword
        );

        // SETUP STATIC FILE HOSTING FOR ANGULAR
        staticFiles.location("/public");
        notFound( ( request , response ) ->
        {
            InputStream in = classLoader.getResourceAsStream("public/index.html");
            byte[] encoded = ByteStreams.toByteArray(in);

            response.type ( "text/html" );
            response.body (
                    new String (
                            encoded,
                            StandardCharsets.UTF_8
                    )
            );

            return response.body ();
        } );
        //notFound("<html>AAAAHHH</html>");


        // SETUP WEB SOCKETS
        IncidentsWebSocketHandler incidentsWebSocketHandler = new IncidentsWebSocketHandler ();
        webSocket (
                INCIDENTS_WEB_SOCKET_PATH,
                incidentsWebSocketHandler
        );

        LoginWebSocketHandler loginWebSocketHandler = new LoginWebSocketHandler ();
        webSocket (
                LOGIN_WEB_SOCKET_PATH,
                loginWebSocketHandler
        );

        // STARTUP METHODS
        enableCORS (
                "*",
                "GET, POST, PUT, DELETE, OPTIONS, HEAD",
                "origin, content-type, accept, authorization"
        );

        LocationController locationController = new LocationController ();
        StaffController staffController = new StaffController();
        IncidentsController incidentsController = new IncidentsController(incidentsWebSocketHandler.getObservable ());
        LoginController loginController = new LoginController(loginWebSocketHandler.getObservable ());
        PersonController personController = new PersonController();
        IncidentCategoryController categoryController = new IncidentCategoryController();
        AttachmentController attachmentController = new AttachmentController();

        get("*", (request, response) -> {
            System.out.println ( "request.pathInfo().toString () = " + request.pathInfo().toString () );
            if ( !request.pathInfo().startsWith("/static") &&
                    !request.pathInfo().toString ().equals ( "/incidentsWebSocket" ) &&
                    !request.pathInfo().toString ().equals ( "/loginWebSocket" ) )
            {
                InputStream in = classLoader.getResourceAsStream("public/index.html");
                byte[] encoded = ByteStreams.toByteArray(in);

                response.type ( "text/html" );
                response.body (
                        new String (
                                encoded,
                                StandardCharsets.UTF_8
                        )
                );

                return response.body ();
            }
            return null;
        });
    }

    // CORS Filter
    private static void enableCORS (
            final String origin,
            final String methods,
            final String headers
    ) {
        options ( "/*" , ( request , response ) ->
            {
                String accessControlRequestHeaders = request.headers ( "Access-Control-Request-Headers" );
                if ( accessControlRequestHeaders != null )
                {
                    response.header (
                        "Access-Control-Allow-Headers",
                        accessControlRequestHeaders
                    );
                }

                String accessControlRequestMethod = request.headers ( "Access-Control-Request-Method" );
                if ( accessControlRequestMethod != null )
                {
                    response.header (
                        "Access-Control-Allow-Methods",
                        accessControlRequestMethod
                    );
                }
                return "OK";
            }
        );

        before ( ( request , response ) ->
            {
                response.header ( "Access-Control-Allow-Origin" , origin );
                response.header ( "Access-Control-Request-Method" , methods );
                response.header ( "Access-Control-Allow-Headers" , headers );
                // Note: this may or may not be necessary in your particular application
                response.type ("application/json" );
            }
        );
    }
}
