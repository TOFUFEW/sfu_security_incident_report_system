package App;


import Controller.*;
import static spark.Spark.*;

// Class that initializes each controller at start - up
public class Application
{

    public static void main ( String [] args )
    {
        // STARTUP METHODS
        enableCORS (
                "*",
                "GET, " + "POST, PUT, DELETE, OPTIONS, HEAD",
                "origin, content-type, accept, authorization"
        );

        LocationController locationController = new LocationController ();
        StaffController staffController = new StaffController();
        IncidentsController incidentsController = new IncidentsController();
        LoginController loginController = new LoginController();
        PersonController personController = new PersonController();

        // TEST CODE WITHOUT DATABASE


//        locationController.locationList.add( location1 );
//
//
//        Staff testStaff = new Staff (
//                Connector.getInstance (),
//                "100",
//                "1",
//                "Bob",
//                "B"
//
//        );
//
//
//        staffController.staffList.add(testStaff);


        // END TEST CODE

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
