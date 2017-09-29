package Util;

import Model.*;
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
        int id = new Random().nextInt(1000000+1); // for testing only
        location.setId(id);
        locationList.add(location);
        if (locationList.size() > currentSize)
            return currentSize;
        return -1;
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
                return locationList.size();
            }
        }
        return -1;
    }

    public static int deleteLocation (
            int id,
            List<Location> locationList /* remove this param when working with real db */
    ) {
        /* For testing purposes only. Replace this with code that does some database query */
        int currentSize = locationList.size();
        for ( int i = 0 ; i < currentSize ; i += 1 ) {
            if ( locationList.get( i ).getId() == id ) {
                locationList.remove( i );
                return currentSize > locationList.size() ? locationList.size() : -1;
            }
        }
        return -1;
    }
}
