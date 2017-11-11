package App;


import Controller.*;
import com.google.common.base.Charsets;
import spark.Spark;
import spark.utils.IOUtils;

import java.io.File;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import java.io.File;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import static spark.Spark.*;
import static spark.Spark.notFound;
import static spark.Spark.before;
import static spark.Spark.options;
import static spark.Spark.staticFileLocation;

// Class that initializes each controller at start - up
public class Application
{

    public static void main ( String [] args )
    {
        // STARTUP METHODS
        //staticFileLocation("/public");
        staticFiles.location("/public");

        notFound ( ( request , response ) -> {

            final File indexHTML = new File(
                    Paths.get("").toAbsolutePath() +
                            "/src/main/resources/public/index.html"
            );

            Path path = Paths.get ( indexHTML.toURI () );
            byte[] encoded = Files.readAllBytes ( path );

            response.type ( "text/html" );
            response.body (
                    new String (
                            encoded,
                            StandardCharsets.UTF_8
                    )
            );

            return response.body();
        } );

        enableCORS (
                "*",
                "GET, " + "POST, PUT, DELETE, OPTIONS, HEAD",
                "origin, content-type, accept, authorization"
        );

        // redirects any request back to index.html
        notFound ( ( request , response ) -> {

            final File indexHTML = new File(
                    Paths.get("").toAbsolutePath() +
                            "/src/main/resources/public/index.html"
            );

            Path path = Paths.get ( indexHTML.toURI () );
            byte[] encoded = Files.readAllBytes ( path );

            response.type ( "text/html" );
            response.body (
                    new String (
                            encoded,
                            Charsets.UTF_8
                    )
            );

            return response.body();
        } );

        LocationController locationController = new LocationController ();
        StaffController staffController = new StaffController();
        IncidentsController incidentsController = new IncidentsController();
        LoginController loginController = new LoginController();
        PersonController personController = new PersonController();
        IncidentCategoryController categoryController = new IncidentCategoryController();
        AttachmentController attachmentController = new AttachmentController();
        GuardIncidentsController guardIncidentsController = new GuardIncidentsController();
        AssignGuardController assignGuardController = new AssignGuardController();
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
