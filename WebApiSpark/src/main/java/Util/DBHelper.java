package Util;

import Model.Incident;
import Model.IncidentElement;
import Model.Location;
import Model.Staff;

import java.sql.*;
import java.util.ArrayList;
import java.util.Arrays;

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
            ResultSet resultSet = executeQuery ( "SELECT * FROM " + DatabaseValues.DatabaseTable.INCIDENT.toString() );

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

    public static boolean selectIncident ( Incident incident ) {
        String query = incident.toSelectSQL();

        try {
            return execute(query);
        }
        catch ( SQLException e ) {
            e.printStackTrace();
        }
        return false ;
    }

    public static boolean insertIncident ( String query , Incident incident ) {
//        String [] incidentElementInsertSQL = incident.incidentElementsToInsertSQL ();
        try {
            initDB();
            String incidentString = "{ call dbo.insertIncident ( ? , ? , ? , ? , ? ) } ";
            CallableStatement stmt = connection.prepareCall ( query );
            stmt.setString ( 1 , incident.getColumnValue(DatabaseValues.DatabaseColumn.ACCOUNT_ID ) );
            stmt.setString ( 2 , incident.getColumnValue(DatabaseValues.DatabaseColumn.CATEGORY_ID ) );
            stmt.setString ( 3 , incident.getColumnValue(DatabaseValues.DatabaseColumn.DESCRIPTION ) );
            stmt.setString ( 4 , incident.getColumnValue(DatabaseValues.DatabaseColumn.EXECUTIVE_SUMMARY ) );
            System.out.println(incident.getColumnValue(DatabaseValues.DatabaseColumn.ACCOUNT_ID));
            System.out.println(incident.getColumnValue(DatabaseValues.DatabaseColumn.CATEGORY_ID));
            System.out.println(incident.getColumnValue(DatabaseValues.DatabaseColumn.DESCRIPTION));
            System.out.println(incident.getColumnValue(DatabaseValues.DatabaseColumn.EXECUTIVE_SUMMARY));
            stmt.registerOutParameter ( 5 , Types.INTEGER );
            System.out.println("Rdy TO RUN");
            stmt.execute();
            int output = stmt.getInt(5);
            System.out.println("HELLO!!!!");
            System.out.println (output);
            System.out.println("HELLO!");
            String relationSQL = "{ call dbo.insertRelation ( ? , ? , ? ) }";
            for ( int i = 0 ; i < incident.getIncidentElements().size() ; i++ ) {
                insertIncidentRelation ( relationSQL , incident.getIncidentElements().get (i) );
            }
            if ( output != 0 ) {
                return true;
            }
        } catch ( Exception e ) {
//            return false;
            e.printStackTrace();
        }
        return false;
    }

    private static boolean insertIncidentRelation (String query, IncidentElement incidentElement) {
        try {
            initDB();
            CallableStatement stmt = connection.prepareCall ( query );
            String tableName = incidentElement.getTable().toString().substring(4);
            System.out.println(tableName);
            if ( tableName.compareTo ( "Staff" ) == 0) {
                stmt.setString (1,  tableName);
                System.out.println( incidentElement.getColumnValue ( DatabaseValues.DatabaseColumn.ACCOUNT_ID ) );
                stmt.setString ( 2, incidentElement.getColumnValue ( DatabaseValues.DatabaseColumn.ACCOUNT_ID ) );
            } else if ( tableName.compareTo ( "Location" ) == 0) {
                System.out.println("HELLO!!!");
                System.out.println("IM INSIDE LOCATION");
                stmt.setString (1,  tableName);
                System.out.println( incidentElement.getColumnValue ( DatabaseValues.DatabaseColumn.LOCATION_ID ) );
                stmt.setString ( 2, incidentElement.getColumnValue ( DatabaseValues.DatabaseColumn.LOCATION_ID ) );
            } else if ( tableName.compareTo ( "Person" ) == 0 ) {
                stmt.setString (1,  tableName);
                System.out.println( incidentElement.getColumnValue ( DatabaseValues.DatabaseColumn.PERSON_ID ) );
                stmt.setString ( 2, incidentElement.getColumnValue ( DatabaseValues.DatabaseColumn.PERSON_ID ) );
            }
            stmt.registerOutParameter ( 3 , Types.INTEGER );
            stmt.execute();
            System.out.println("HELLO!!!");
            int output = stmt.getInt(3 );
            System.out.println(output);
            if ( output != 0 ) {
                return true;
            }
        } catch ( Exception e ) {
//            return false;
            e.printStackTrace();
        }
        return false;
    }

    public static boolean updateIncident ( Incident incident ) {
        String incidentSQL = incident.toUpdateSQL();
        try {
            return execute( incidentSQL );
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
        try {
            execute ( sql );
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
            execute ( sql );
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
            execute ( sql );
        } catch ( SQLException e ) {
            e.printStackTrace();
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
                incidentElement.extractFromResultSet ( resultSet );
                return true;

            }
            else
            {
                return false;
            }
        } catch ( SQLException e ) {
            e.printStackTrace();
            return false;
        }
    }

    public static IncidentElement [] getIncidentElements ( DatabaseValues.DatabaseTable table )
    {
        ArrayList < IncidentElement > incidentElementList = new ArrayList ();

        try
        {
            ResultSet resultSet = executeQuery ( "SELECT * FROM " + table.toString () );

            while ( resultSet.next () )
            {
                IncidentElement incidentElement;
                if ( table == DatabaseValues.DatabaseTable.LOCATION )
                {
                    incidentElement = new Location ();
                }
                else if ( table == DatabaseValues.DatabaseTable.STAFF )
                {
                    incidentElement = new Staff ();
                }
                else
                {
                    throw new IllegalStateException ( table.toString () + " does not have its Model implemented yet" );
                }
//                else if ( table == DatabaseValues.DatabaseTable.ACCOUNT )
//                {
//                    //incidentElement = new Account ();
//                }

                incidentElement.extractFromResultSet ( resultSet );

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
            ResultSet resultSet = executeQuery ( "SELECT * FROM " + DatabaseValues.DatabaseTable.LOCATION.toString () );

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


    // staff code
    public static Staff [] getStaffs ()
    {
        ArrayList < Staff > staffList = new ArrayList ();

        try
        {
            ResultSet resultSet = executeQuery ( "SELECT * FROM " + DatabaseValues.DatabaseTable.STAFF.toString() );

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
