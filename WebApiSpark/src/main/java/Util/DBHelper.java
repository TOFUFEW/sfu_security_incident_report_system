package Util;

import DBConnector.Connector;
import Model.*;
import ViewModel.LocationViewModel;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class DBHelper {
    public DBHelper(){}

    public static LocationViewModel getLocation( int id ) {
        try
        {
            String query = "select * from location where location_id = " + id;
            ResultSet result = Connector.executeQuery ( query );

            while ( result.next() )
            {
                int locationId = result.getInt ( "location_id" );
                int campusId = result.getInt ( "campus_id" );
                String buildingName = result.getString ( "building_name" );
                int roomNumber = result.getInt ( "room_number" );
                String department = result.getString ( "department" );
                String city = result.getString( "city" );
                String address = result.getString( "address" );

                return new LocationViewModel (
                        locationId,
                        campusId,
                        buildingName,
                        roomNumber,
                        department,
                        city,
                        address
                );
            }
        }
        catch ( Exception e ) {
            e.printStackTrace();
        }
        return new LocationViewModel();
    }

    public static List < LocationViewModel > getLocations () {
        List < LocationViewModel > locationList = new ArrayList<>();

        try
        {
            ResultSet result = Connector.executeQuery ( buildGetLocationQuery() );

            while ( result.next() )
            {
                int locationId = result.getInt ( "location_id" );
                int campusId = result.getInt ( "campus_id" );
                String buildingName = result.getString ( "building_name" );
                int roomNumber = result.getInt ( "room_number" );
                String department = result.getString ( "department" );
                String city = result.getString( "city" );
                String address = result.getString( "address" );

                LocationViewModel loc = new LocationViewModel (
                        locationId,
                        campusId,
                        buildingName,
                        roomNumber,
                        department,
                        city,
                        address
                );
                locationList.add(loc);
            }
        }
        catch ( Exception e ) {
            e.printStackTrace();
        }

        return locationList;
    }

    public static LocationViewModel addLocation (
            LocationViewModel location
    ) {
        try
        {
            int i = Connector.executeUpdate ( buildAddLocationQuery( location ) );
            ResultSet result = Connector.executeQuery( "select top 1 * from location order by location_id desc" );
            while ( result.next() ) {
                int id = result.getInt( "location_id" );
                LocationViewModel loc = getLocation( id );
                return loc;
            }
        }
        catch ( Exception e ) {
            e.printStackTrace();
        }

        return new LocationViewModel();
    }

    public static int editLocation (
            Location location,
            List<Location> locationList /* remove this param when working with real db */
    ) {
        /* For testing purposes only. Replace this with code that does some database query */
        int currentSize = locationList.size();
        for ( int i = 0 ; i < currentSize ; i += 1 ) {
            if ( locationList.get( i ).getValue ( DatabaseValues.DatabaseColumn.LOCATION_ID ) ==
                    location.getValue ( DatabaseValues.DatabaseColumn.LOCATION_ID ) )
            {
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
            if ( locationList.get( i ).getValue ( DatabaseValues.DatabaseColumn.LOCATION_ID ) == ( "" + id ) )
            {
                locationList.remove( i );
                return currentSize > locationList.size();
            }
        }
        return false;
    }

    private static String buildGetLocationQuery() {
        return "select "
                    + "loc.LOCATION_ID,"
                    + "loc.CAMPUS_ID,"
                    + "loc.BUILDING_NAME,"
                    + "loc.DEPARTMENT,"
                    + "loc.ROOM_NUMBER,"
                    + "camp.CITY,"
                    + "camp.ADDRESS "
                + "from dbo.location as loc "
                + "inner join dbo.Campus as camp "
                + "on loc.CAMPUS_ID = camp.CAMPUS_ID";
    }

    private static String buildAddLocationQuery(LocationViewModel location) {
        // Check if campus exists
        try {
            int i = 0;

            String checkCampus = "select * from campus " +
                    "where campus.CITY = '" + location.CITY + "' ";
            ResultSet campusResult = Connector.executeQuery( checkCampus );

            if ( !campusResult.next() ) {
                // insert into campus db
                String insertCampus = "insert into campus (city) values ('" + location.CITY + "')";
                i = Connector.executeUpdate( insertCampus );
                campusResult = Connector.executeQuery( checkCampus );
            }

            int campusId = 0;
            while ( campusResult.next() ) {
                campusId = campusResult.getInt( "campus_id" );
            }

            return "insert into location (campus_id, building_name, room_number, department) "
                    + "values ('" + campusId + "', '"
                    + location.BUILDING_NAME + "', '"
                    + location.ROOM_NUMBER + "', '"
                    + location.DEPARTMENT + "')";
        }
        catch ( Exception e ) {
            e.printStackTrace();
        }
        return "";
    }


}
