package app;

import Controller.LocationController;
import Controller.StaffController;
import DBConnector.Connector;
import Model.Location;
import Model.Staff;

import java.sql.DriverManager;
import java.util.Date;

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

        DBinit ();

        LocationController locationController = new LocationController ();
        StaffController staffController = new StaffController();

        // TEST CODE WITHOUT DATABASE
        Location location1 = new Location (
                1,
                "Surrey",
                "SURR-301",
                "3200",
                "Cmpt"
        );

        Location location2 = new Location (
                2,
                "Burnaby",
                "BUR-800",
                "9808",
                "Ensc"
        );

        locationController.locationList.add( location1 );
        locationController.locationList.add( location2 );

        Staff testStaff = new Staff(
                "Bob",
                "Ross",
                "Surrey Central Skytrain",
                "6043883838",
                new Date("09/10/1993"),
                1
        );

        Staff testStaff2 = new Staff(
                "Bill",
                "Bob",
                "Surrey Central Skytrain",
                "6043883668",
                new Date("09/12/1993"),
                1
        );
        staffController.staffList.add(testStaff);
        staffController.staffList.add(testStaff2);
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

    private static void DBinit ()
    {
        Connector.Username = "cmpt373alpha";
        Connector.Password = "cmpt373alpha";
        Connector.URL = "jdbc:sqlserver://sfuirsdb.czoee5rkbxlk.us-west-1.rds.amazonaws.com:1433;DatabaseName=IRS;";

        try
        {
            Class.forName ( "com.microsoft.sqlserver.jdbc.SQLServerDriver" );
            Connector.Instance = DriverManager.getConnection (
                    Connector.URL,
                    Connector.Username,
                    Connector.Password
            );
        }

        catch ( Exception e )
        {
            e.printStackTrace ();
            Connector.Instance = null;
        }
    }
}
