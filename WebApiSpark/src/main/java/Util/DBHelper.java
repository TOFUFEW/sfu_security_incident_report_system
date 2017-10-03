package Util;

import DBConnector.Connector;
import Model.*;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class DBHelper {
    public DBHelper(){}

    public static int addLocation (
            Location location,
            List<Location> locationList /* remove this param when working with real db */
    ) {
        /* For testing purposes only. Replace this with code that does some database query */
        int currentSize = locationList.size();
        int id = new Random().nextInt( 1000000+1 ); // for testing only
        location.putValue( DatabaseValues.DatabaseColumn.LOCATION_ID , "" + id );
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

    public static List < Location > getLocations () {
        List < Location > locationList = new ArrayList<>();

        try
        {
            ResultSet result = Connector.executeQuery ( "select * from Location" );

            while ( result.next() )
            {
                String locationId = result.getString ( "location_id" );
                String campus = result.getString ( "campus" );
                String building_num = result.getString ( "building_num" );
                String room_num = result.getString ( "room_num" );
                String department = result.getString ( "department" );

                Location loc = new Location (
                        locationId,
                        campus,
                        building_num,
                        room_num,
                        department
                );
                locationList.add(loc);
            }
        }
        catch ( Exception e ) {
            e.printStackTrace();
        }

        return locationList;
    }



    public static int addStaff (
            Staff staff,
            List<Staff> staffList
    ) {
        int currentSize = staffList.size();
        int id = new Random().nextInt(100000 + 1);
        staff.putValue( DatabaseValues.DatabaseColumn.ACCOUNT_ID , "" + id );
        staffList.add( staff );
        return staffList.size() > currentSize ? staffList.size() - 1 : -1;
    }

    public static int editStaff (
            Staff staff,
            List<Staff> staffList
    ) {
        int currentSize = staffList.size();
        for ( int i = 0 ; i < currentSize ; i += 1 ) {
            if ( staffList.get( i ).getValue ( DatabaseValues.DatabaseColumn.ACCOUNT_ID ) ==
                    staff.getValue ( DatabaseValues.DatabaseColumn.ACCOUNT_ID ) )
            {
                staffList.set( i , staff );
                return i; // return the index of the edited location
            }
        }

        return -1;
    }

    public static boolean deleteStaff (
            int id,
            List<Staff> staffList
    ) {
        /* For testing purposes only. Replace this with code that does some database query */
        int currentSize = staffList.size();
        for ( int i = 0; i < currentSize; i++ ) {
            if (staffList.get(i).getValue(DatabaseValues.DatabaseColumn.ACCOUNT_ID) == ("" + id)) {
                staffList.remove(i);
                return currentSize > staffList.size();
            }
        }

        return false;
    }
    
    
    public static List < Staff > getStaff () {
        List < Staff > staffList = new ArrayList<>();

        try
        {
            ResultSet result = Connector.executeQuery ( "select * from Staff" );

            while ( result.next() )
            {
                String id = result.getString ( "ACCOUNT_ID" );
                String campusId = result.getString ( "CAMPUS_ID");
                String firstName = result.getString ( "FIRST_NAME");
                String lastName = result.getString("LAST_NAME");

                Staff staff = new Staff (
                        id,
                        campusId,
                        firstName,
                        lastName
                );
                staffList.add(staff);
            }
        }
        catch ( Exception e ) {
            e.printStackTrace();
        }

        return staffList;
    }


}
