package Util;

import DBConnector.Connector;
import Model.*;
import ViewModel.IncidentViewModel;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class DBHelper
{

    /* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; REFACTORED methods ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */

    public static Incident [] getIncidents () {
        ArrayList < Incident > incidentList = new ArrayList ();

        try
        {
            ResultSet resultSet = Connector.executeQuery ( "SELECT * FROM dbo.Incident" );

            while ( resultSet.next () )
            {
                Incident incident = new Incident ();

                incident.extractFromResultSet ( resultSet );

                incidentList.add ( incident );
            }
        }

        catch ( Exception e )
        {
            e.printStackTrace ();
        }

        return incidentList.toArray ( new Incident [ incidentList.size () ] );
    }

    public static boolean insertIncident ( Incident incident )
    {
        String incidentSQL = incident.toInsertSQL ();
        String [] incidentElementInsertSQL = incident.incidentElementsToInsertSQL ();

        // collect all sql in one array list to iterate
        ArrayList < String > sqlArrList = new ArrayList ( Arrays.asList ( incidentElementInsertSQL ) );
        sqlArrList.add ( incidentSQL );

        try {
            for ( String sql : sqlArrList )
            {
                Connector.execute ( sql );
            }
        }
        catch ( SQLException e )
        {
            e.printStackTrace ();
            return false;
        }
        return true;
    }

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

    public static IncidentElement selectIncidentElement ( IncidentElement incidentElement )
    {
        String sql = incidentElement.toSelectSQL ();

        if ( sql == null )
        {
            return null;
        }

        try {
            ResultSet resultSet = Connector.executeQuery ( sql );
            if ( resultSet.next () )
            {
                if ( incidentElement instanceof Location )
                {
                    Location location = new Location ();
                    location.extractFromResultSet ( resultSet );
                    return location;
                }
                else if ( incidentElement instanceof Staff )
                {
                    Staff staff = new Staff ();
                    staff.extractFromResultSet ( resultSet );
                    return staff;
                }
                else if ( incidentElement instanceof User)
                {
                    User user = new User ();
                    user.extractFromResultSet ( resultSet );
                    return user;
                }
                else
                {
                    return null;
                }
            }
            else
            {
                return null;
            }
        } catch ( SQLException e ) {
            e.printStackTrace();
            return null;
        }
    }

    public static Location [] getLocations ()
    {
        ArrayList < Location > locationList = new ArrayList ();

        try
        {
            ResultSet resultSet = Connector.executeQuery ( "SELECT * FROM " + DatabaseValues.DatabaseTable.LOCATION.toString () );

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
            ResultSet resultSet = Connector.executeQuery("SELECT MAX ( LOCATION_ID ) AS MaxLocationID FROM " + DatabaseValues.DatabaseTable.LOCATION.toString () );
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

    public static Staff [] getStaffs ()
    {
        ArrayList < Staff > staffList = new ArrayList ();

        try
        {
            ResultSet resultSet = Connector.executeQuery ( "SELECT * FROM " + DatabaseValues.DatabaseTable.STAFF.toString() );

            while ( resultSet.next () )
            {
                Staff staff = new Staff ();

                staff.extractFromResultSet ( resultSet );

                staffList.add ( staff );

            }
        }

        catch ( Exception e )
        {
            e.printStackTrace ();
        }

        return staffList.toArray ( new Staff [ staffList.size () ] );
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

   















    /* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; NOT REFACTORED! DO NOT USE! ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */

    public static Location getLocation (int id) {
        try {
            String query = "select * from dbo.Location where location_id = " + id;
            ResultSet result = Connector.executeQuery(query);

            Location location = new Location ();

            location.extractFromResultSet ( result );
            return location;

        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public static Location addLocation ( Location location ) {
        try {
            String query = location.toInsertSQL();
            ResultSet result = Connector.executeQuery(query);

            Location loc = new Location ();

            loc.extractFromResultSet ( result );
            return loc;

        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;

    }

    public static Location updateLocation ( Location location ) {
        try {
            String query = location.toUpdateSQL();
            ResultSet result = Connector.executeQuery(query);

            Location loc = new Location ();

            loc.extractFromResultSet ( result );
            return loc;

        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public static boolean deleteLocation ( Location location ) {
        try {
            String query = location.toDeleteSQL();
            ResultSet result = Connector.executeQuery(query);

            return result.next();

        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }

    public static boolean isExistingLocation( Location location ) {
        try {
            String query = "select * from location where location_id = " + location.getColumnValue( DatabaseValues.DatabaseColumn.LOCATION_ID );
            ResultSet result = Connector.executeQuery(query);
            if ( result.next() ) {
                return true;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
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
