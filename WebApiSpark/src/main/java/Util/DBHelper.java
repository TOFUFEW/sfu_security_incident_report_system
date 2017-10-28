package Util;

import Model.Incident;
import Model.IncidentElement;
import Model.Location;
import Model.Staff;

import java.sql.*;
import java.util.ArrayList;

public class DBHelper
{
    private static final String USERNAME = "sa";
    private static final String PASSWORD = "CMPT373Alpha";
    private static final String URL = "jdbc:sqlserver://142.58.21.127:1433;DatabaseName=master;";

    private static Connection connection = null;

    /* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; REFACTORED methods ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */

    public static Incident [] getIncidents () {
        ArrayList < Incident > incidentList = new ArrayList <> ();

        try
        {
            ResultSet incidentResultSet = executeQuery ( "SELECT * FROM " + DatabaseValues.Table.INCIDENT.toString());

            fillListWithIncidentsFromResultSet ( incidentList , incidentResultSet );
        }

        catch ( Exception e )
        {
            e.printStackTrace ();
        }

        return incidentList.toArray ( new Incident [ incidentList.size () ] );
    }

    public static Incident [] getGuardIncidents ( int accountID ) {
        ArrayList < Incident > incidentList = new ArrayList <> ();

        try
        {
            ResultSet incidentResultSet = executeQuery( "SELECT Incident.*\n" +
                    "FROM Incident  INNER JOIN AssignedTo  ON Incident.REPORT_ID = AssignedTo.REPORT_ID\n" +
                    "WHERE AssignedTo.ACCOUNT_ID = " + accountID + " and Incident.CLOSED = 0" );

            fillListWithIncidentsFromResultSet ( incidentList , incidentResultSet );
        }
        catch ( Exception e)
        {
            e.printStackTrace ();
        }
        return incidentList.toArray ( new Incident [ incidentList.size () ] );
    }

    public static Incident getIncident( String reportId ) {
        ArrayList < Incident > incidentList = new ArrayList <> ();
        try {
            String query = "select top 1 * from Incident where REPORT_ID = '" + reportId + "';";
            ResultSet result = executeQuery( query );
            fillListWithIncidentsFromResultSet( incidentList, result );
            return incidentList.get(0);
        }
        catch ( Exception e ) {
            e.printStackTrace();
        }

        return null;
    }

    private static void fillListWithIncidentsFromResultSet ( ArrayList < Incident > list, ResultSet set) {
        try
        {
            while( set.next () )
            {
                Incident incident = new Incident ();
                incident.extractFromCurrentRow ( set );
                ArrayList < IncidentElement > incidentElementsList = getIncidentElements ( Integer.parseInt (incident.getAttributeValue ( DatabaseValues.Column.REPORT_ID ) ) );
                incident.changeIncidentElementList ( incidentElementsList );
                list.add ( incident );
            }
        }
        catch ( Exception e )
        {
            e.printStackTrace ();
        }
    }

    private static ArrayList < IncidentElement > getIncidentElements ( int reportID ) {
        ArrayList < IncidentElement > incidentElementsList = new ArrayList <> ();

        try {
            String getIncidentElementsQuery =
                    "SELECT Location.* FROM HappensAt INNER JOIN Location ON (HappensAt.LOCATION_ID = Location.LOCATION_ID) " +
                    "WHERE HappensAt.REPORT_ID = " + reportID + "; " +
                    "SELECT Staff.* FROM AssignedTo INNER JOIN Staff ON (AssignedTo.ACCOUNT_ID = Staff.ACCOUNT_ID) " +
                    "WHERE AssignedTo.REPORT_ID = " + reportID + "; " +
                    "SELECT Person.* FROM Involves INNER JOIN Person ON (Involves.PERSON_ID = Person.PERSON_ID)" +
                    "WHERE Involves.REPORT_ID = " + reportID + "; " +
                    "SELECT IncidentCategory.* FROM Incident INNER JOIN IncidentCategory ON (Incident.CATEGORY_ID = IncidentCategory.CATEGORY_ID) " +
                    "WHERE Incident.REPORT_ID = " + reportID + "; ";

            PreparedStatement stmt = connection.prepareStatement ( getIncidentElementsQuery );
            boolean hasResults = stmt.execute();
            int count = 0;
            while ( hasResults ) {
                ResultSet rs = stmt.getResultSet();
                while ( rs.next() ) {
                    IncidentElement incidentElement = null;
                    if ( count == 0 ) {
                        incidentElement = new Location ();
                    } else if ( count == 1 ) {
                        incidentElement = new Staff ();
                    } else if ( count == 2 ) {
//                        incidentElement = new Person();
                    } else if ( count == 3 ) {
//                        incidentElement = new IncidentCategory();
                    } else {
//                    throw new IllegalStateException ( table.toString () + " does not have its Model implemented yet" );'
                        break;
                    }
                    if ( incidentElement != null ) {
                        incidentElement.extractFromCurrentRow( rs );

                        incidentElementsList.add ( incidentElement );
                    }
                }
                count++;
                hasResults = stmt.getMoreResults();
            }
        } catch ( SQLException e ) {
            e.printStackTrace();
        }
        return incidentElementsList;
    }

    public static boolean selectIncident ( Incident incident ) {
        String query = incident.toSelectSQL ();

        try
        {
            return execute ( query );
        }
        catch ( SQLException e )
        {
            e.printStackTrace();
        }
        return false ;
    }

    public static boolean insertIncident ( String query , Incident incident ) {
        try {
            initDB ();
            String incidentString = "{ call dbo.insertIncident ( ? , ? , ? , ? , ? ) } ";
            CallableStatement stmt = connection.prepareCall ( query );
            stmt.setString (
                    1,
                    incident.getAttributeValue ( DatabaseValues.Column.ACCOUNT_ID )
            );
            stmt.setString (
                    2,
                    incident.getAttributeValue ( DatabaseValues.Column.CATEGORY_ID )
            );
            stmt.setString (
                    3,
                    incident.getAttributeValue ( DatabaseValues.Column.DESCRIPTION )
            );
            stmt.setString (
                    4,
                    incident.getAttributeValue ( DatabaseValues.Column.EXECUTIVE_SUMMARY )
            );

            stmt.registerOutParameter (
                    5,
                    Types.INTEGER
            );

            stmt.execute ();
            int output = stmt.getInt ( 5 );

            String relationSQL = "{ call dbo.insertRelation ( ? , ? , ? ) }";
            for ( int i = 0 ; i < incident.numIncidentElements () ; i++ )
            {
                insertIncidentRelation (
                        relationSQL,
                        incident.getIncidentElement ( i )
                );
            }
            if ( output != 0 )
            {
                return true;
            }
        } catch ( Exception e )
        {
            e.printStackTrace ();
        }
        return false;
    }

    private static boolean insertIncidentRelation (
            String query,
            IncidentElement incidentElement
    ) {
        try {
            initDB ();
            CallableStatement stmt = connection.prepareCall ( query );
            String tableName = incidentElement.getTable ().toString ().substring (4);
            if ( tableName.compareTo ( "Staff" ) == 0 )
            {
                stmt.setString (
                        1,
                        tableName
                );
                stmt.setString (
                        2,
                        incidentElement.getAttributeValue ( DatabaseValues.Column.ACCOUNT_ID )
                );
            }
            else if ( tableName.compareTo ( "Location" ) == 0 )
            {
                stmt.setString (
                        1,
                        tableName
                );
                stmt.setString (
                        2,
                        incidentElement.getAttributeValue ( DatabaseValues.Column.LOCATION_ID )
                );
            }
            else if ( tableName.compareTo ( "Person" ) == 0 )
            {
                stmt.setString (
                        1,
                        tableName
                );
                stmt.setString (
                        2,
                        incidentElement.getAttributeValue ( DatabaseValues.Column.PERSON_ID )
                );
            }
            stmt.registerOutParameter (
                    3,
                    Types.INTEGER
            );
            stmt.execute ();

            int output = stmt.getInt ( 3 );

            if ( output != 0 )
            {
                return true;
            }
        }
        catch ( Exception e )
        {
            e.printStackTrace ();
        }
        return false;
    }

    public static boolean updateIncident ( Incident incident ) {
        String incidentSQL = incident.toUpdateSQL ();
        try {
            return execute ( incidentSQL );
        }
        catch ( SQLException e )
        {
            e.printStackTrace ();
        }
        return false;
    }

    public static boolean insertIncidentElement ( IncidentElement incidentElement )
    {
        String sql = incidentElement.toInsertSQL ();
        try
        {
            execute ( sql );
        }
        catch ( SQLException e )
        {
            e.printStackTrace ();
            return false;
        }
        return true;
    }

    public static boolean updateIncidentElement ( IncidentElement incidentElement )
    {
        String sql = incidentElement.toUpdateSQL ();
        try
        {
            execute ( sql );
        }
        catch ( SQLException e )
        {
            e.printStackTrace ();
            return false;
        }
        return true;
    }

    public static boolean deleteIncidentElement ( IncidentElement incidentElement )
    {
        String sql = incidentElement.toDeleteSQL ();
        try
        {
            execute ( sql );
        }
        catch ( SQLException e )
        {
            e.printStackTrace ();
            return false;
        }
        return true;
    }

    public static boolean selectIncidentElement ( IncidentElement incidentElement)
    {
        String sql = incidentElement.toSelectSQL ();

        if ( sql == null )
        {
            return false;
        }

        try {
            ResultSet resultSet = executeQuery ( sql );
            if ( resultSet.next () )
            {
                incidentElement.extractFromCurrentRow ( resultSet );
                return true;

            }
        }
        catch ( SQLException e )
        {
            e.printStackTrace ();
        }
        return false;
    }

    public static IncidentElement [] getIncidentElements ( DatabaseValues.Table table )
    {
        ArrayList < IncidentElement > incidentElementList = new ArrayList ();

        try
        {
            ResultSet resultSet = executeQuery ( "SELECT * FROM " + table.toString () );

            while ( resultSet.next () )
            {
                IncidentElement incidentElement;
                if ( table == DatabaseValues.Table.LOCATION )
                {
                    incidentElement = new Location ();
                }
                else if ( table == DatabaseValues.Table.STAFF )
                {
                    incidentElement = new Staff ();
                }
                else
                {
                    throw new IllegalStateException ( table.toString () + " does not have its Model implemented yet" );
                }
//                else if ( table == DatabaseValues.Table.ACCOUNT )
//                {
//                    //incidentElement = new Account ();
//                }

                incidentElement.extractFromCurrentRow( resultSet );

                incidentElementList.add ( incidentElement );
            }
        }

        catch ( Exception e )
        {
            e.printStackTrace ();
        }

        return incidentElementList.toArray ( new IncidentElement [ incidentElementList.size () ] );
    }

    public static Location [] getLocations ()
    {
        ArrayList < Location > locationList = new ArrayList <> ();

        try
        {
            ResultSet resultSet = executeQuery ( "SELECT * FROM " + DatabaseValues.Table.LOCATION.toString () );

            while ( resultSet.next () )
            {
                Location location = new Location ();

                location.extractFromCurrentRow ( resultSet );

                locationList.add ( location );
            }
        }

        catch ( Exception e )
        {
            e.printStackTrace ();
        }

        return locationList.toArray ( new Location [ locationList.size () ] );
    }


    // staff code
    public static Staff [] getStaffs ()
    {
        ArrayList < Staff > staffList = new ArrayList ();

        try
        {
            ResultSet resultSet = executeQuery ( "SELECT * FROM " + DatabaseValues.Table.STAFF.toString () );

            while ( resultSet.next () )
            {
                Staff staff = new Staff ();

                staff.extractFromCurrentRow ( resultSet );

                staffList.add ( staff );

            }
        }

        catch ( Exception e )
        {
            e.printStackTrace ();
        }

        return staffList.toArray ( new Staff [ staffList.size () ] );
    }

    public static boolean execute ( String query ) throws SQLException
    {
        initDB ();
        Statement stmt = connection.createStatement ();
        return stmt.execute ( query );
    }

    public static int executeUpdate ( String query ) throws SQLException
    {
        initDB ();
        Statement stmt = connection.createStatement( );
        return stmt.executeUpdate ( query );
    }

    public static ResultSet executeQuery ( String query ) throws SQLException
    {
        initDB ();
        Statement stmt = connection.createStatement ();
        return stmt.executeQuery ( query );
    }

    private static void initDB ()
    {
        if ( connection != null )
        {
            return;
        }

        try
        {
            Class.forName ( "com.microsoft.sqlserver.jdbc.SQLServerDriver" );
            connection = DriverManager.getConnection (
                    URL,
                    USERNAME,
                    PASSWORD
            );
        }

        catch ( Exception e )
        {
            e.printStackTrace ();
            connection = null;
        }
    }
}
