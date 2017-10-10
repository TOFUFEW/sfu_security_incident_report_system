package Controller;

import DBConnector.Connector;
import Model.Location;
import Util.*;
import ViewModel.LocationViewModel;

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
            Location loc = ( Location ) parser.fromJson( request.body() , LocationViewModel.class );
            if ( !DBHelper.isExistingLocation ( loc ) )
                return DBHelper.addLocation ( loc );
            return loc.toUpdateSQL();
        } , json() );

        put( "/locations" , ( request , response ) -> {
            Location loc = ( Location ) parser.fromJson( request.body() , Location.class );
            Location ret = DBHelper.updateLocation ( loc ); // This code touches the database
            return ret;
        }, json());

        delete( "/locations/:id", ( request , response ) -> {
            int id = Integer.parseInt( request.params( ":id" ) );
            Location loc = DBHelper.getLocation( id );
            return dbHelper.deleteLocation ( loc );
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
