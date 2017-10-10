package Controller;

import DBConnector.Connector;
import Model.Location;
import Model.StorageObject;
import Util.*;
import ViewModel.LocationViewModel;
import com.google.gson.Gson;

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
            Location location = ( Location ) parser.fromJson ( request.body () , Location.class );

            if ( DBHelper.selectIncidentElement ( location ) == null )
            {
                return DBHelper.insertIncidentElement ( location );
            }
            return DBHelper.updateIncidentElement( location );
        } );

        put ( "/locations" , ( request , response ) -> {
            Location location = ( Location ) parser.fromJson ( request.body () , Location.class );

            if ( DBHelper.selectIncidentElement ( location ) == null ) {
                return DBHelper.insertIncidentElement ( location );
            }
            return DBHelper.updateIncidentElement( location );
        } );

        delete ( "/locations", ( request , response ) -> {
            Location location = ( Location ) parser.fromJson ( request.body () , Location.class );

            boolean delete = DBHelper.deleteIncidentElement ( location );
            return delete;
        } );

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
