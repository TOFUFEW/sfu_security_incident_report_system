package Controller;

import DBConnector.Connector;
import Model.Location;
import Util.*;

import java.sql.ResultSet;
import java.util.*;
import static Util.JsonUtil.json;
import static spark.Spark.*;

public class LocationController {
    JsonUtil parser = new JsonUtil();
    DBHelper dbHelper = new DBHelper();
    public List<Location> locationList = new ArrayList<>();

    public LocationController ()
    {
        setupEndPoints();
    }

    private void setupEndPoints() {
        get( "/locations" , ( request , response ) -> {
            return dbHelper.getLocations();
        }, json() );

        post( "/locations" , ( request , response ) -> {
            Location loc = ( Location ) parser.fromJson( request.body() , Location.class );
            int i = dbHelper.addLocation( loc , locationList ); // This code touches the database
            return i >= 0 ? locationList.get( i ) : null;
        } , json() );

        put( "/locations" , ( request , response ) -> {
            Location loc = ( Location ) parser.fromJson( request.body() , Location.class );
            int i = dbHelper.editLocation( loc , locationList ); // This code touches the database
            return i >= 0 ? locationList.get( i ) : null;
        }, json());

        delete( "/locations/:id", ( request , response ) -> {
            int id = Integer.parseInt( request.params( ":id" ) );
            return dbHelper.deleteLocation( id , locationList );
        } , json() );

        get( "/test" , ( request , response ) -> getClichedMessage() );
    }

    public String getClichedMessage ()
    {
        try
        {
            String query = "select * from employee";
            ResultSet myRs = Connector.executeQuery ( query );

            while( myRs.next () )
            {
                String fname = myRs.getString ( "fname" );
                String lname = myRs.getString ( "lname" );
                System.out.println ( fname + ' ' + lname );
                String namePair = fname + ' ' + lname;
                return namePair;
            }
        }
        catch ( Exception e )
        {
            e.printStackTrace ();
        }
        return "Hello World";
    }
}
