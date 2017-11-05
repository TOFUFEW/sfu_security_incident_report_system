package Util;

import Model.*;

import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class DBHelper
{
    /*
    private static final String USERNAME = "cmpt373alpha";
    private static final String PASSWORD = "cmpt373alpha";
    private static final String URL = "jdbc:sqlserver://sfuirsdb.czoee5rkbxlk.us-west-1.rds.amazonaws.com:1433;DatabaseName=IRS;";
    */
    private static final String LOCATIONS = "Location";
    private static final String STAFFS = "Staff";
    private static final String PERSONS = "Person";
    private static final String USERNAME = "sa";
    private static final String PASSWORD = "CMPT373Alpha";
    private static final String URL = "jdbc:sqlserver://142.58.21.127:1433;DatabaseName=master;";

    private static Connection connection = null;

    /* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; REFACTORED methods ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */

    public static Incident [] getIncidents () {
        ArrayList < Incident > incidentList = new ArrayList <> ();

        try
        {
            ResultSet incidentResultSet = executeQuery ( "SELECT * FROM " + DatabaseValues.Table.INCIDENT.toString() + " ORDER BY REPORT_ID DESC");

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

    public static HashMap < String , ArrayList < IncidentElement > > getIncidentElements ( int reportID ) {
        HashMap < String , ArrayList < IncidentElement > > incidentElements = new HashMap <> ();
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
                        incidentElement = new Person();
                    } else if ( count == 3 ) {
                        incidentElement = new IncidentCategory();
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
        return incidentElements;
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
        if ( !allFieldsValid( incident ) ) {
            System.out.println( "Attempting to find IncidentCategory in incidentElements array...");

//            for ( int i = 0; i < incident.numIncidentElements() ; i += 1 ) {
//                IncidentElement ie = incident.getIncidentElement( i );
//
//                if (DatabaseValues.Table.INCIDENT_CATEGORY.toString().toLowerCase()
//                        .contains( ie.getTable().toString().toLowerCase() ) ) {
//
//                    String id = ie.getAttributeValue( DatabaseValues.Column.CATEGORY_ID );
//                    if ( id != null && !id.isEmpty() ) {
//                        incident.updateAttributeValue( DatabaseValues.Column.CATEGORY_ID, id );
//                        System.out.println("IncidentCategory FOUND! CATEGORY_ID: " + id );
//                    }
//                }
//            }

            if ( incident.getAttributeValue( DatabaseValues.Column.CATEGORY_ID ) == null ) {
                System.out.println("***** ERROR: IncidentCategory not found. Exiting...");
                return false;
            }
        }

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

            String before_lastIncidentId = ""; // debug
            String lastIncidentId = "";
            int maxTries = 5;
            int tries = 0;
            do {
                before_lastIncidentId = debug_getLastIncidentId();
                System.out.println( "Last Report ID before insert: " + before_lastIncidentId );

                stmt.execute ();
                tries++;

                lastIncidentId = debug_getLastIncidentId(); // debug
                System.out.println( "Last Report ID after insert: " + lastIncidentId );

                if ( lastIncidentId != null && lastIncidentId.equals( before_lastIncidentId ) )
                    System.out.println( "ERROR: Incident insert failed" );

                if ( tries >= maxTries ) {
                    return false;
                }
            } while ( lastIncidentId != null && lastIncidentId.equals( before_lastIncidentId ) );

            int output = stmt.getInt ( 5 );

            String relationSQL = "{ call dbo.insertRelation ( ? , ? , ? ) }";

//            for ( int i = 0 ; i < incident.numIncidentElements () ; i++ )
//            {
//                IncidentElement incidentElement = incident.getIncidentElement( i );
//                System.out.println( "\nColumnSet length for table " + incidentElement.getTable().toString() + ": " + (incidentElement.getColumnSet().length ) );
//                boolean hasAttributes = incidentElement.getColumnSet().length > 0;
//
//                if ( hasAttributes && !relationExists( lastIncidentId , incidentElement ) ) {
//                    debug_printInsertRelationLog( incidentElement );
//                    insertIncidentRelation(
//                            relationSQL,
//                            incident.getIncidentElement(i)
//                    );
//                }
//            }
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

    /* Validate incidents attributes */
    private static boolean allFieldsValid( Incident incident ) {
        if ( incident.getAttributeValue(DatabaseValues.Column.DESCRIPTION ) == null ||
                incident.getAttributeValue(DatabaseValues.Column.DESCRIPTION ).isEmpty() )
            System.out.println( "*** WARNING: Description is empty...");

        if ( incident.getAttributeValue(DatabaseValues.Column.EXECUTIVE_SUMMARY) == null ||
        incident.getAttributeValue(DatabaseValues.Column.EXECUTIVE_SUMMARY).isEmpty() )
            System.out.println("*** WARNING: Executive Summary is empty...");

        String categoryId = incident.getAttributeValue( DatabaseValues.Column.CATEGORY_ID ) ;
        if ( categoryId == null || categoryId.isEmpty() ) {
            System.out.println( "*** WARNING: CATEGORY_ID cannot be null.");
            return false;
        }

        String accountId = incident.getAttributeValue( DatabaseValues.Column.ACCOUNT_ID );
         if ( accountId == null || accountId.isEmpty() )
             System.out.println("*** WARNING: ACCOUNT_ID is not set.");

        return true;
    }

    private static boolean relationExists( String reportId, IncidentElement incidentElement ) {
        System.out.println("");
        System.out.println("Checking if relation already exists for " + incidentElement.getTable().toString() + "... ");
        try {
            initDB();
            String tableName = incidentElement.getTable().toString().toLowerCase();
            String query = "select * from ";

            String relationTable = "";
            String idString = " where REPORT_ID = '" + reportId + "' AND ";
            if (DatabaseValues.Table.INCIDENT_CATEGORY.toString().toLowerCase().contains(tableName))
                return false;

            if ( DatabaseValues.Table.LOCATION.toString().toLowerCase().contains( tableName ) ) {
                relationTable = "HappensAt";
                String id = incidentElement.getAttributeValue( DatabaseValues.Column.LOCATION_ID );
                if (id == null || id.equals("null"))
                    return false;
                idString += "LOCATION_ID = '" + id + "';";
            }
            else if ( DatabaseValues.Table.PERSON.toString().toLowerCase().contains( tableName ) ) {
                relationTable = "Involves";
                String id = incidentElement.getAttributeValue( DatabaseValues.Column.PERSON_ID );
                if (id == null || id.equals("null"))
                    return false;
                idString += "PERSON_ID = '" + id + "';";
            }
            else if ( DatabaseValues.Table.ACCOUNT.toString().toLowerCase().contains( tableName ) ){
                relationTable = "AssignedTo";
                String id = incidentElement.getAttributeValue( DatabaseValues.Column.ACCOUNT_ID );
                if (id == null || id.equals("null"))
                    return true;
                idString += "PERSON_ID = '" + id + "';";
            }
            else
                return false;

            query += relationTable + idString;
            System.out.println("Query: " + query );
            ResultSet result = executeQuery( query );
            while( result.next() ) {
                System.out.println("****** WARNING -- DUPLICATE DETECTED: ");
                System.out.println(query);
                return true;
            }

            System.out.println(" false. Ok to insert relation...");
        }
        catch ( Exception e ) {
            e.printStackTrace();
        }
        System.out.println("");
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
            else if ( tableName.compareTo ( "IncidentCategory" ) == 0 )
            {
                stmt.setString (
                        1,
                        tableName
                );
                stmt.setString (
                        2,
                        incidentElement.getAttributeValue ( DatabaseValues.Column.CATEGORY_ID )
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

    private static boolean insertIncidentRelation (
            String query,
            IncidentElement incidentElement,
            String reportID
    ) {
        try {
            initDB ();
            CallableStatement stmt = connection.prepareCall ( query );
            String tableName = incidentElement.getTable ().toString ().substring (4);
            if ( tableName.compareTo ( "Staff" ) == 0 )
            {
                stmt.setString (
                        1,
                        reportID
                );
                stmt.setString (
                        2,
                        tableName

                );
                stmt.setString (
                        3,
                        incidentElement.getAttributeValue ( DatabaseValues.Column.ACCOUNT_ID )
                );
            }
            else if ( tableName.compareTo ( "Location" ) == 0 )
            {
                stmt.setString (
                        1,
                        reportID
                );
                stmt.setString (
                        2,
                        tableName

                );
                stmt.setString (
                        3,
                        incidentElement.getAttributeValue ( DatabaseValues.Column.LOCATION_ID )
                );
            }
            else if ( tableName.compareTo ( "Person" ) == 0 )
            {
                stmt.setString (
                        1,
                        reportID
                );
                stmt.setString (
                        2,
                        tableName

                );
                stmt.setString (
                        3,
                        incidentElement.getAttributeValue ( DatabaseValues.Column.PERSON_ID )
                );
            }
            else if ( tableName.compareTo ( "IncidentCategory" ) == 0 )
            {
                stmt.setString (
                        1,
                        reportID
                );
                stmt.setString (
                        2,
                        tableName

                );
                stmt.setString (
                        3,
                        incidentElement.getAttributeValue ( DatabaseValues.Column.CATEGORY_ID )
                );
            }
            stmt.registerOutParameter (
                    4,
                    Types.INTEGER
            );
            stmt.execute ();

            int output = stmt.getInt ( 4 );

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

    private static void deleteAllRelations ( String reportID ) {
        try {
            initDB();
            String query = "{ call dbo.deleteAllRelations ( ? ) }";
            CallableStatement stmt = connection.prepareCall ( query );
            stmt.setString (
                    1,
                    reportID
            );
            stmt.execute();
            return;
        } catch ( Exception e ) {
            e.printStackTrace();
        }
    }

    public static boolean updateIncident ( Incident incident ) {
        if ( !allFieldsValid( incident ) ) {
            System.out.println( "Attempting to find IncidentCategory in incidentElements array...");

//            for ( int i = 0; i < incident.numIncidentElements() ; i += 1 ) {
//                IncidentElement ie = incident.getIncidentElement( i );
//
//                if (DatabaseValues.Table.INCIDENT_CATEGORY.toString().toLowerCase()
//                        .contains( ie.getTable().toString().toLowerCase() ) ) {
//
//                    String id = ie.getAttributeValue( DatabaseValues.Column.CATEGORY_ID );
//                    if ( id != null && !id.isEmpty() ) {
//                        incident.updateAttributeValue( DatabaseValues.Column.CATEGORY_ID, id );
//                        System.out.println("IncidentCategory FOUND! CATEGORY_ID: " + id );
//                    }
//                }
//            }

            if ( incident.getAttributeValue( DatabaseValues.Column.CATEGORY_ID ) == null ) {
                System.out.println("***** ERROR: IncidentCategory not found. Exiting...");
                return false;
            }
        }

        try {
            initDB ();
            String query = "{ call dbo.updateIncident ( ? , ? , ? , ? , ? , ? ) } ";
            CallableStatement stmt = connection.prepareCall ( query );
            stmt.setString (
                    1,
                    incident.getAttributeValue ( DatabaseValues.Column.REPORT_ID )
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
            stmt.setString (
                    5,
                    incident.getAttributeValue ( DatabaseValues.Column.CLOSED )
            );

            stmt.registerOutParameter (
                    6,
                    Types.INTEGER
            );
            stmt.execute();

            String reportId = incident.getAttributeValue ( DatabaseValues.Column.REPORT_ID );
            deleteAllRelations ( reportId );
            String relationSQL = "{ call dbo.insertRelationWithTableName ( ? , ? , ? , ? ) }";

            for ( Map.Entry < String , ArrayList < IncidentElement > > entry : incident.getIncidentElements().entrySet() ) {
                ArrayList < IncidentElement > incidentElementsList = entry.getValue();
                for ( IncidentElement incidentElement : incidentElementsList ) {
                    boolean hasAttributes = incidentElement.getColumnSet().length > 0;

                    if ( hasAttributes && !relationExists( reportId , incidentElement ) ) {
                        debug_printInsertRelationLog( incidentElement );
                        insertIncidentRelation(
                                relationSQL,
                                incidentElement,
                                reportId
                        );
                    }
                }
            }
            return true;
        } catch ( Exception e ) {
            e.printStackTrace();
        }
        return false;
    }

    public static boolean assignIncident( Incident incident ) {
        try {
            String query = "update Incident set account_id = '" + incident.getAttributeValue( DatabaseValues.Column.ACCOUNT_ID )
                    + "' where report_id = " + incident.getAttributeValue( DatabaseValues.Column.REPORT_ID );

            boolean success = execute( query );

            Incident updatedIncident = getIncident( incident.getAttributeValue( DatabaseValues.Column.REPORT_ID ));
            return updatedIncident.getAttributeValue( DatabaseValues.Column.ACCOUNT_ID ).equals( incident.getAttributeValue( DatabaseValues.Column.ACCOUNT_ID ));
        }
        catch ( Exception e ) {
            e.printStackTrace();
        }

        return false;
    }

//    public static boolean updateIncident ( Incident incident ) {
//        String incidentSQL = incident.toUpdateSQL ();
//        try {
//            return execute ( incidentSQL );
//        }
//        catch ( SQLException e )
//        {
//            e.printStackTrace ();
//        }
//        return false;
//    }

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
                } else if ( table == DatabaseValues.Table.PERSON )
                {
                    incidentElement = new Person ();
                }
                else if ( table == DatabaseValues.Table.INCIDENT_CATEGORY )
                {
                    incidentElement = new IncidentCategory();
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


    /* DEBUG CODE */
    private static String debug_getLastIncidentId() {
        try {
            initDB();
            String query = "select top (1) * from Incident order by report_id desc;";
            ResultSet result = DBHelper.executeQuery( query );
            while ( result.next() ) {

                return result.getString("REPORT_ID");
            }
        }
        catch ( Exception e ) {

        }
        return null;
    }

    private static void debug_printInsertRelationLog( IncidentElement incidentElement ) {
        if ( incidentElement == null ) return;

        String tableName = incidentElement.getTable().name().toLowerCase();

        String msg = "Inserting relation for " + tableName ;
        if ( DatabaseValues.Table.PERSON.toString().toLowerCase().contains( tableName ) ) {
            msg += " where FIRST_NAME = " + incidentElement.getAttributeValue( DatabaseValues.Column.FIRST_NAME ) +
                    " , LAST_NAME = " + incidentElement.getAttributeValue( DatabaseValues.Column.LAST_NAME ) +
                    " , PHONE_NUMBER = " + incidentElement.getAttributeValue( DatabaseValues.Column.PHONE_NUMBER ) +
                    " , PERSON_ID = " + incidentElement.getAttributeValue(DatabaseValues.Column.PERSON_ID);
        }
        else if ( DatabaseValues.Table.LOCATION.toString().toLowerCase().contains( tableName) ) {
            msg += " where CAMPUS_ID = " + incidentElement.getAttributeValue( DatabaseValues.Column.CAMPUS_ID ) +
                    " , BUILDING_NAME = " + incidentElement.getAttributeValue( DatabaseValues.Column.BUILDING_NAME ) +
                    " , ROOM_NUMBER = " + incidentElement.getAttributeValue( DatabaseValues.Column.ROOM_NUMBER ) +
                    " , LOCATION_ID = " + incidentElement.getAttributeValue(DatabaseValues.Column.LOCATION_ID);
        }
        else if ( DatabaseValues.Table.INCIDENT_CATEGORY.toString().toLowerCase().contains( tableName ) ) {
            msg += " where MAIN_CATEGORY = " + incidentElement.getAttributeValue( DatabaseValues.Column.MAIN_CATEGORY ) +
                    " , SUB_CATEGORY = " + incidentElement.getAttributeValue( DatabaseValues.Column.SUB_CATEGORY ) +
                    " , INCIDENT_TYPE = " + incidentElement.getAttributeValue( DatabaseValues.Column.INCIDENT_TYPE ) +
                    " , CATEGORY_ID = " + incidentElement.getAttributeValue(DatabaseValues.Column.CATEGORY_ID);
        }

        System.out.println( msg );
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

    public static Person [] getPersons ()
    {
        ArrayList < Person > personList = new ArrayList ();

        try
        {
            ResultSet resultSet = executeQuery ( "SELECT * FROM " + DatabaseValues.Table.PERSON.toString() );
            while(resultSet.next () )
            {
                Person person = new Person();
                person.extractFromCurrentRow( resultSet );
                personList.add (person);
            }
        }
        catch ( Exception e )
        {
            e.printStackTrace ();
        }
        return personList.toArray(new Person [ personList.size () ]);
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

    /* FOR DEVELOPMENT ONLY */
    private static boolean deleteAllIncidents() {
        try {
            initDB();
            String query = "delete from HappensAt;";
            boolean deleted = execute( query );
            query =  "delete from Involves;";
            deleted = execute( query );
            query = "delete from Incident";
            deleted = execute( query );
            Incident[] result = getIncidents();
            return result.length == 0;
        }
        catch( Exception e ) {
            e.printStackTrace();
        }

        return false;
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
