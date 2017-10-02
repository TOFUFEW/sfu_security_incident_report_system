package Util;

import DBConnector.Connector;
import Model.*;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class DBHelper {
    public DBHelper(){}

    public static List<Location> getLocations() {
        List<Location> locationList = new ArrayList<>();
        try
        {
            String query = "select * from locations";
            ResultSet myRs = Connector.executeQuery ( query );

            while( myRs.next () )
            {
                int id = myRs.getInt("id");
                String campus = myRs.getString ( "campus" );
                String buildingNumber = myRs.getString ( "buildingnumber" );
                String roomNumber = myRs.getString ( "roomnumber" );
                String department = myRs.getString ( "department" );
                locationList.add( new Location(
                        id,
                        campus,
                        buildingNumber,
                        roomNumber,
                        department ) );

            }
            return locationList;
        }
        catch ( Exception e )
        {
            e.printStackTrace ();
        }
        return locationList;
    }

    public static int addLocation (
            Location location,
            List<Location> locationList /* remove this param when working with real db */
    ) {
        /* For testing purposes only. Replace this with code that does some database query */
        int currentSize = locationList.size();
        int id = new Random().nextInt( 1000000+1 ); // for testing only
        location.setId( id );
        locationList.add( location );
        return locationList.size() > currentSize ? locationList.size() - 1 : -1; // return the index of the new location
    }

    public static int editLocation (
            Location location,
            List<Location> locationList /* remove this param when working with real db */
    ) {
        /* For testing purposes only. Replace this with code that does some database query */
        int currentSize = locationList.size();
        for ( int i = 0 ; i < currentSize ; i += 1 ) {
            if ( locationList.get( i ).getId() == location.getId() ) {
                locationList.set( i , location );
                return i; // return the index of the edited location
            }
        }
        return -1;
    }

    public static boolean deleteLocation (
            int id,
            List<Location> locationList /* remove this param when working with real db */
    ) {
        /* For testing purposes only. Replace this with code that does some database query */
        int currentSize = locationList.size();
        for ( int i = 0 ; i < currentSize ; i += 1 ) {
            if ( locationList.get( i ).getId() == id ) {
                locationList.remove( i );
                return currentSize > locationList.size();
            }
        }
        return false;
    }
}
