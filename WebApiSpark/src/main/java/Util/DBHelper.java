package Util;

import DBConnector.Connector;
import Model.*;
import ViewModel.IncidentViewModel;
import ViewModel.LocationViewModel;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class DBHelper {
    public DBHelper() {
    }

    /* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; REFACTORED methods ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */

    public static boolean insertIncidentElement ( IncidentElement incidentElement )
    {
        String sql = incidentElement.toInsertSQL ();
        try {
            Connector.execute ( sql );
        } catch ( SQLException e ) {
            e.printStackTrace();
            return false;
        }
        return true;
    }

    public static boolean updateIncidentElement ( IncidentElement incidentElement )
    {
        String sql = incidentElement.toUpdateSQL ();
        try {
            Connector.execute ( sql );
        } catch ( SQLException e ) {
            e.printStackTrace();
            return false;
        }
        return true;
    }

    public static boolean deleteIncidentElement ( IncidentElement incidentElement )
    {
        String sql = incidentElement.toDeleteSQL ();
        try {
            Connector.execute ( sql );
        } catch ( SQLException e ) {
            e.printStackTrace();
            return false;
        }
        return true;
    }

    public static Location [] getLocations ()
    {
        ArrayList < Location > locationList = new ArrayList ();

        try
        {
            ResultSet resultSet = Connector.executeQuery ( "SELECT * FROM dbo.Location" );

            while ( resultSet.next () )
            {
                Location location = new Location ();

                location.extractFromResultSet ( resultSet );

                locationList.add ( location );
            }
        }

        catch ( Exception e )
        {
            e.printStackTrace ();
        }

        return locationList.toArray ( new Location [ locationList.size () ] );
    }

    public static String DEBUG_getLargestLocationIDFromTable ()
    {
        try
        {
            ResultSet resultSet = Connector.executeQuery("SELECT MAX ( LOCATION_ID ) AS MaxLocationID FROM dbo.Location");
            while ( resultSet.next () )
            {
                return "" + resultSet.getInt ( "MaxLocationID" );
            }
        }
        catch ( Exception e )
        {
            e.printStackTrace ();
        }
        return "-1";
    }

    /* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; NOT REFACTORED! ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */

    public static LocationViewModel getLocation(int id) {
        try {
            String query = "select "
                    + "loc.LOCATION_ID, "
                    + "loc.CAMPUS_ID, "
                    + "loc.BUILDING_NAME, "
                    + "loc.DEPARTMENT, "
                    + "loc.ROOM_NUMBER, "
                    + "camp.CITY, "
                    + "camp.ADDRESS "
                    + "from dbo.location as loc "
                    + "inner join dbo.Campus as camp "
                    + "on loc.CAMPUS_ID = camp.CAMPUS_ID "
                    + "where loc.location_id = " + id;
            ResultSet result = Connector.executeQuery(query);

            while (result.next()) {
                int locationId = result.getInt("location_id");
                int campusId = result.getInt("campus_id");
                String buildingName = result.getString("building_name");
                int roomNumber = result.getInt("room_number");
                String department = result.getString("department");
                String city = result.getString("city");
                String address = result.getString("address");

                return new LocationViewModel(
                        locationId,
                        campusId,
                        buildingName,
                        roomNumber,
                        department,
                        city,
                        address
                );
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new LocationViewModel();
    }

    public static LocationViewModel addLocation(LocationViewModel location) {
        try {
            int i = Connector.executeUpdate(buildAddLocationQuery(location));

            String query = "select top 1 " +
                    "loc.LOCATION_ID, " +
                    "loc.CAMPUS_ID, " +
                    "loc.BUILDING_NAME, " +
                    "loc.DEPARTMENT, " +
                    "loc.ROOM_NUMBER, " +
                    "camp.CITY, " +
                    "camp.ADDRESS  " +
                    "from dbo.location as loc  " +
                    "inner join dbo.Campus as camp " +
                    "on loc.CAMPUS_ID = camp.CAMPUS_ID " +
                    "order by location_id desc";
            ResultSet result = Connector.executeQuery(query);
            while (result.next()) {
                int locationId = result.getInt("location_id");
                int campusId = result.getInt("campus_id");
                String buildingName = result.getString("building_name");
                int roomNumber = result.getInt("room_number");
                String department = result.getString("department");
                String city = result.getString("city");
                String address = result.getString("address");

                LocationViewModel loc = new LocationViewModel(
                        locationId,
                        campusId,
                        buildingName,
                        roomNumber,
                        department,
                        city,
                        address
                );
                return loc;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return new LocationViewModel();
    }

    public static LocationViewModel editLocation(LocationViewModel location)
    {
        try {
            // Check if campus exists. If not, create one and insert into the database
            int id = getCampusId (location.CITY);

            String query = "update location " +
                    "set building_name = '" + location.BUILDING_NAME +
                    "', room_number = " + location.ROOM_NUMBER +
                    ", department = '" + location.DEPARTMENT +
                    "', campus_id = " + id +
                    " where location_id = " + location.LOCATION_ID;
            int i = Connector.executeUpdate (query);
            return getLocation(location.LOCATION_ID);
        } catch (Exception e) {
            e.printStackTrace();
        }

        return new LocationViewModel();
    }

    public static boolean deleteLocation(int id) {
        try {
            String query = "delete from location where location_id = " + id;
            int i = Connector.executeUpdate(query);
            return i > 0;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }

    public static boolean isExistingLocation(int id) {
        try {
            String query = "select * from location where location_id = " + id;
            ResultSet result = Connector.executeQuery(query);
            while (result.next()) {
                return true;
            }
        } catch (Exception e) {
            e.printStackTrace();
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
            int campusId = getCampusId (location.CITY);
            return "insert into location (campus_id, building_name, room_number, department) "
                    + "values ('" + campusId + "', '"
                    + location.BUILDING_NAME + "', '"
                    + location.ROOM_NUMBER + "', '"
                    + location.DEPARTMENT + "')";
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "";
    }

    public static int getCampusId(String city) {
        try {
            String checkCampus = "select * from campus " +
                    "where campus.CITY = '" + city + "' ";
            ResultSet campusResult = Connector.executeQuery(checkCampus);

            int i = 0;
            if (!campusResult.next()) {
                // insert into campus db
                String insertCampus = "insert into campus (city) values ('" + city + "')";
                i = Connector.executeUpdate(insertCampus);
            }

            campusResult = Connector.executeQuery(checkCampus);

            while (campusResult.next()) {
                int id = campusResult.getInt("campus_id");
                System.out.println(id);
                return id;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return 0;
    }

    //staff functions

    public static List < Staff > getStaff () {
        List<Staff> staffList = new ArrayList<>();

        try {
            ResultSet result = Connector.executeQuery("select * from Staff");

            while ( result.next () )
            {
                String id = result.getString ( "account_id" );
                String campusId = result.getString ( "campus_id" );
                String firstName = result.getString ( "first_name" );
                String lastName = result.getString ( "last_name" );

                Staff staff = new Staff (
                        id,
                        campusId,
                        firstName,
                        lastName
                );
                staffList.add ( staff );
            }

        }

        catch ( Exception e )
        {
            e.printStackTrace ();
        }
        return staffList;
    }


//    public static Staff addStaff( Staff staff ) {
//        try {
//            String insertStaff = "insert into staff "
//                    + "values (" + staff.getAccountId() + ", "
//                    + staff.getCampusId() + ", "
//                    + staff.getFirstName() + ", "
//                    + staff.getLastName() + ")";
//
//            Connector.executeUpdate(insertStaff);
//
//        } catch ( Exception e ){
//            e.printStackTrace();
//        }
//        return staff;
//    }

    public static boolean staffExists( String id ) {

        try {
            String existsQuery = "select 1 from Staff where account_id = " + id;
            ResultSet result = Connector.executeQuery((existsQuery));
            while ( result.next() ){
                return true;
            }
        } catch ( Exception e ){
            e.printStackTrace();
        }
        return false;
    }


    public static Staff editStaff( Staff staff ) {
        try {
            if ( !staffExists ( staff.getColumnValue ( DatabaseValues.DatabaseColumn.ACCOUNT_ID ) ) )
            {
                String editQuery = "update staff set "
                        + "campus_id = " + staff.getColumnValue( DatabaseValues.DatabaseColumn.CAMPUS_ID ) + ", "
                        + "first_name = " + staff.getColumnValue( DatabaseValues.DatabaseColumn.FIRST_NAME ) + ", "
                        + "last_name = " + staff.getColumnValue( DatabaseValues.DatabaseColumn.LAST_NAME ) + " "
                        + "where account_id = " + staff.getColumnValue( DatabaseValues.DatabaseColumn.ACCOUNT_ID ) + ";";
                Connector.executeUpdate(editQuery);
            } else {
                return null;
            }
        } catch ( Exception e ){
        e.printStackTrace();
    }
        return staff;
    }

    public static boolean deleteStaff (
            String id
    ) {
        try {
            if (staffExists(id)) {
                String deleteQuery = "delete from staff where account_id = " + id + ";";
                Connector.executeUpdate(deleteQuery);
                return true;
            } else {
                return false;
            }
        } catch (Exception e){
            e.printStackTrace();
        }
        return true;
    }

    public static List<IncidentViewModel> getIncidents () {
        List<IncidentViewModel> incidentList = new ArrayList<>();
        try
        {
            ResultSet results = Connector.executeQuery ( "SELECT * FROM Incident" );
            while ( results.next() )
            {
                int reportID = results.getInt ( "report_id" );
                int accountID = results.getInt ( "account_id" );
                int categoryID = results.getInt ( "category_id" );
                String description = results.getString ( "description" );
                String execSummary = results.getString ( "executive_summary" );
                boolean closed = results.getBoolean ("closed");
                IncidentViewModel incident = new IncidentViewModel (
                        reportID,
                        accountID,
                        categoryID,
                        description,
                        execSummary,
                        closed,
                        null
                );
                incidentList.add(incident);
            }
        }
        catch ( Exception e )
        {
            e.printStackTrace();
        }
        return incidentList;
    }

    public static IncidentViewModel addIncident (
            IncidentViewModel incidentToAdd
    ) {
        String query =  "EXEC dbo.createIncident " +
                        "@creator_id = 1, " +
                        "@category_id = 1, " +
                        "@description = '" + incidentToAdd.DESCRIPTION + "', " +
                        "@executive_summary = '" + incidentToAdd.EXECUTIVE_SUMMARY + "', " +
                        "@location_id = 1, " +
                        "@person_id = 1, " +
                        "@staff_id = 1";
        try
        {
            int i = Connector.executeUpdate ( query );

            ResultSet results = Connector.executeQuery ( "SELECT TOP 1 FROM Incident"
            );
            while ( results.next() ) {
                System.out.println("query result " + results.getString("executive_summary"));
                int reportID = results.getInt("report_id");
                int accountID = results.getInt("account_id");
                int categoryID = results.getInt( "category_id");
                String description = results.getString("description");
                String execSummary = results.getString("executive_summary");
                boolean closed = results.getBoolean("closed");
                IncidentViewModel incident = new IncidentViewModel(
                        reportID,
                        accountID,
                        categoryID,
                        description,
                        execSummary,
                        closed,
                        null

                );
                return new IncidentViewModel();
            }
        }
        catch ( Exception e )
        {
            e.printStackTrace();
        }
        return incidentToAdd;
    }
}
