package Parser;

import Model.Location;
import DBConnector.Connector;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class SqlUtil {

    public static List < Location > getLocations () {
        List < Location > locationList = new ArrayList <> ();

        try {
            ResultSet result = Connector.executeQuery ("select * from Location");

            while (result.next()) {
                String campus = result.getString ( "campus" );
                String building_num = result.getString ( "building_num" );
                String room_num = result.getString ( "room_num" );
                String department = result.getString ( "department" );

                Location loc = new Location (
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
}
