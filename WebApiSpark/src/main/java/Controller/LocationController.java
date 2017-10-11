package Controller;

import DBConnector.Connector;
import Model.Location;
import Util.DBHelper;
import Util.DatabaseValues;
import Util.JsonUtil;

import java.sql.ResultSet;

import static Util.JsonUtil.json;
import static spark.Spark.*;

public class LocationController {

    public LocationController ()
    {
        setupEndPoints();
    }

    private void setupEndPoints() {
        get ( "/locations" , ( request , response ) -> {
            return DBHelper.getLocations();
        }, json() );

        post( "/locations" , ( request , response ) -> {
            Location location = ( Location ) JsonUtil.fromJson ( request.body () , Location.class );

            if ( !DBHelper.selectIncidentElement(location, location.getColumnValue(DatabaseValues.DatabaseColumn.LOCATION_ID)) )
            {
                return DBHelper.insertIncidentElement ( location );
            }

            return DBHelper.updateIncidentElement( location );
        } );

        put ( "/locations" , ( request , response ) -> {
            Location location = ( Location ) JsonUtil.fromJson ( request.body () , Location.class );

            if ( !DBHelper.selectIncidentElement(location,location.getColumnValue(DatabaseValues.DatabaseColumn.LOCATION_ID)) )
            {
                return DBHelper.insertIncidentElement ( location );
            }
            return DBHelper.updateIncidentElement( location );
        } );

        delete ( "/locations/:id", ( request , response ) -> {
            Location location = ( Location ) JsonUtil.fromJson ( request.body () , Location.class );

            boolean delete = DBHelper.deleteIncidentElement ( location );
            return delete;
        } );

        get ( "/location/:id",  (request, response) -> {
            Location location = new Location();
            return DBHelper.selectIncidentElement (
                    location,
                    request.params(":id")
            );
        }, json () );

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
