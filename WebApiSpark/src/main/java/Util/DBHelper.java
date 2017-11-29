package Util;

import Model.*;

import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class DBHelper
{
    private static final String USERNAME = "sa";
    private static final String PASSWORD = "CMPT373Alpha";
    private static final String URL = "jdbc:sqlserver://142.58.21.127:1433;DatabaseName=hibernatedb;";
    private static Connection connection = null;

    /* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; REFACTORED methods ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */

    public static Incident[] getIncidents () {
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

    public static Incident[] CTSearchIncidents (int userId, String searchString) throws SQLException {
        ArrayList < Incident > incidentList = new ArrayList <> ();

        try
        {
            initDB ();
            String query = "{ call dbo.CTSearchIncidents ( ?, ? ) } ";
            CallableStatement stmt = connection.prepareCall ( query );

            stmt.setInt (
                    1,
                    userId
            );

            stmt.setString (
                    2,
                    searchString
            );

            ResultSet incidentResultSet = stmt.executeQuery();
            fillListWithIncidentsFromResultSet( incidentList , incidentResultSet );
        }
        catch ( Exception e )
        {
            e.printStackTrace();
            throw e;
        }

        return incidentList.toArray ( new Incident [ incidentList.size () ] );
    }

    public static Incident[] FTSearchIncidents (int userId, String searchString) throws SQLException {

        ArrayList < Incident > incidentList = new ArrayList <> ();

        try
        {
            initDB ();
            String query = "{ call dbo.FTSearchIncidents ( ?, ? ) } ";
            CallableStatement stmt = connection.prepareCall ( query );

            stmt.setInt (
                    1,
                    userId
            );

            stmt.setString (
                    2,
                    searchString
            );

            ResultSet incidentResultSet = stmt.executeQuery();
            fillListWithIncidentsFromResultSet( incidentList , incidentResultSet );
        }
        catch ( Exception e )
        {
            e.printStackTrace();
        }

        return incidentList.toArray ( new Incident [ incidentList.size () ] );
    }



    public static Incident [] getIncidents ( String userID ) {
        ArrayList < Incident > incidentList = new ArrayList <> ();

        try
        {
            initDB();
            System.out.println(userID);
            String query = "{ call dbo.getIncidents ( ? )}";
            CallableStatement stmt = connection.prepareCall ( query );
            stmt.setString (
                    1,
                    userID
            );
            ResultSet incidentResultSet = stmt.executeQuery();
            fillListWithIncidentsFromResultSet ( incidentList , incidentResultSet );
        }

        catch ( Exception e )
        {
            e.printStackTrace ();
        }

        return incidentList.toArray ( new Incident [ incidentList.size () ] );
    }

    public static Incident [] getCreatedByIncidents ( int accountID ) {
        ArrayList < Incident > incidentList = new ArrayList<>();

        try
        {
            ResultSet incidentResultSet = executeQuery ( "SELECT *\n" +
                    "FROM Incident\n" +
                    "WHERE ACCOUNT_ID = " + accountID + " AND TEMPORARY_REPORT = 1 AND STATUS <= 3\n" +
                    "ORDER BY REPORT_ID DESC;" );
            fillListWithIncidentsFromResultSet ( incidentList, incidentResultSet );
        }
        catch ( Exception e)
        {
            e.printStackTrace();
        }
        return incidentList.toArray ( new Incident [ incidentList.size () ] );
    }

    public static Incident getIncident( String reportId ) {
        ArrayList < Incident > incidentList = new ArrayList <> ();
        try {
            String query = "select * from Incident where REPORT_ID = '" + reportId + "';";
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
                HashMap < String , ArrayList < IncidentElement > > incidentElementsList = getIncidentElements ( Integer.parseInt (incident.getAttributeValue ( DatabaseValues.Column.REPORT_ID ) ) );
                incident.changeIncidentElements ( incidentElementsList );
                list.add ( incident );
                System.out.println("report id = " + incident.getAttributeValue( DatabaseValues.Column.REPORT_ID ) );
            }
        }
        catch ( Exception e )
        {
            e.printStackTrace ();
        }
    }

    public static HashMap < String , ArrayList < IncidentElement > > getIncidentElements ( int reportID ) {
        HashMap < String , ArrayList < IncidentElement > > incidentElements = new HashMap <> ();
        incidentElements.put ( DatabaseValues.IncidentElementKey.INCIDENT_CATEGORY.toString(), new ArrayList < IncidentElement > () );
        incidentElements.put ( DatabaseValues.IncidentElementKey.LOCATION.toString(), new ArrayList < IncidentElement > () );
        incidentElements.put ( DatabaseValues.IncidentElementKey.STAFF.toString(), new ArrayList < IncidentElement > () );
        incidentElements.put ( DatabaseValues.IncidentElementKey.PERSON.toString() , new ArrayList < IncidentElement > () );
        incidentElements.put ( DatabaseValues.IncidentElementKey.ATTACHMENT.toString() , new ArrayList < IncidentElement > () );
        incidentElements.put ( DatabaseValues.IncidentElementKey.GENERIC_ELEMENT.toString() , new ArrayList < IncidentElement > () );


        try {
            String getIncidentElementsQuery =
                    "SELECT Location.* FROM HappensAt INNER JOIN Location ON (HappensAt.LOCATION_ID = Location.LOCATION_ID) " +
                            "WHERE HappensAt.REPORT_ID = " + reportID + "; " +
                            "SELECT Staff.* FROM AssignedTo INNER JOIN Staff ON (AssignedTo.ACCOUNT_ID = Staff.ACCOUNT_ID) " +
                            "WHERE AssignedTo.REPORT_ID = " + reportID + "; " +
                            "SELECT Person.* FROM Involves INNER JOIN Person ON (Involves.PERSON_ID = Person.PERSON_ID)" +
                            "WHERE Involves.REPORT_ID = " + reportID + "; " +
                            "SELECT IncidentCategory.* FROM Incident INNER JOIN IncidentCategory ON (Incident.CATEGORY_ID = IncidentCategory.CATEGORY_ID) " +
                            "WHERE Incident.REPORT_ID = " + reportID + "; " +
                            "SELECT GenericElement.* FROM GenericElement WHERE GenericElement.REPORT_ID = " + reportID + "; " +
                            "SELECT Attachment.* FROM Attachment " +
                            "WHERE Attachment.REPORT_ID = " + reportID + "; ";

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
                    } else if ( count == 4 ) {
                        incidentElement = new GenericElement();
                    } else if ( count == 5 ) {
                        incidentElement = new Attachment();
                    } else {
//                    throw new IllegalStateException ( table.toString () + " does not have its Model implemented yet" );'
                        break;
                    }
                    if ( incidentElement != null ) {
                        incidentElement.extractFromCurrentRow( rs );
                        incidentElements.get ( incidentElement.getTable().toString().substring (4) ).add ( incidentElement );
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

    public static boolean insertIncident ( Incident incident ) {

        ArrayList<Incident> incidentList = new ArrayList<>();

        inspectFields( incident );
        if ( incident.getAttributeValue( DatabaseValues.Column.CATEGORY_ID ) == null ) {
            String categoryId = getCategoryId( incident );
            if ( categoryId != null ) incident.updateAttributeValue( DatabaseValues.Column.CATEGORY_ID, categoryId );

        }

        String creatorID = incident.getAttributeValue( DatabaseValues.Column.ACCOUNT_ID );
        if ( creatorID == null ) return false;


        if ( getAccountType( creatorID ) == DatabaseValues.AccountType.GUARD )
            incident.updateAttributeValue( DatabaseValues.Column.TEMPORARY_REPORT, "0" );

        incident.updateSearchString();

        try {
            initDB();
            String query = "{ call dbo.insertIncident ( ? , ? , ? , ? , ? , ? , ? , ? ) } ";
            CallableStatement stmt = connection.prepareCall( query );

            stmt.setString( 1, incident.getAttributeValue( DatabaseValues.Column.ACCOUNT_ID ) );

            stmt.setString( 2, incident.getAttributeValue( DatabaseValues.Column.CATEGORY_ID ) );

            stmt.setString( 3, incident.getAttributeValue( DatabaseValues.Column.DESCRIPTION ) );

            stmt.setString( 4, incident.getAttributeValue( DatabaseValues.Column.EXECUTIVE_SUMMARY ) );

            stmt.setString( 5, incident.getAttributeValue( DatabaseValues.Column.SEARCH_TEXT ) );

            stmt.setString( 6, incident.getAttributeValue( DatabaseValues.Column.TIMER_START ) );

            stmt.setString( 7, incident.getAttributeValue( DatabaseValues.Column.TIMER_END ) );

            stmt.registerOutParameter( 8, Types.INTEGER );

            stmt.execute();
            insertRelations( null, incident.getIncidentElements() );
            int output = stmt.getInt( 8 );



            if ( output != 0 ) {
                return true;
            }

        } catch ( Exception e ) {
            e.printStackTrace();
        }

        return false;
    }


    private static void insertRelations( String reportID, HashMap<String, ArrayList<IncidentElement>> incidentElements ) {
        if (reportID == null) {
            String relationSQL = "{ call dbo.insertRelation ( ? , ? , ? ) }";

            for ( Map.Entry < String , ArrayList < IncidentElement > > entry : incidentElements.entrySet() ) {
                ArrayList < IncidentElement > incidentElementsList = entry.getValue();

                for ( IncidentElement incidentElement : incidentElementsList ) {
                    boolean hasAttributes = incidentElement.getColumnSet().length > 0;

                    if ( incidentElement.getTable() == DatabaseValues.Table.GENERIC_ELEMENT ) {
                        String reportId = getLastInsertedIncidentID();
                        relationSQL = "{ call dbo.insertRelationWithTableName ( ? , ? , ? , ? ) }";
                        insertIncidentRelation(
                                relationSQL,
                                incidentElement,
                                reportId
                        );
                    } else if ( DatabaseValues.Table.ATTACHMENT == incidentElement.getTable() ) {
                        String reportId = getLastInsertedIncidentID();
                        insertAttachment(
                                reportId,
                                incidentElement.getAttributeValue( DatabaseValues.Column.FILE_NAME ),
                                incidentElement.getAttributeValue( DatabaseValues.Column.FILE_ID )
                        );
                    } else if ( hasAttributes ) {
                        debug_printInsertRelationLog( incidentElement );
                        insertIncidentRelation(
                                relationSQL,
                                incidentElement
                        );
                    }
                }
            }
        } else {

            String relationSQL = "{ call dbo.insertRelationWithTableName ( ? , ? , ? , ? ) }";

            for ( Map.Entry < String , ArrayList < IncidentElement > > entry : incidentElements.entrySet() ) {
                ArrayList < IncidentElement > incidentElementsList = entry.getValue();

                for ( IncidentElement incidentElement : incidentElementsList ) {
                    boolean hasAttributes = incidentElement.getColumnSet().length > 0;
                        System.out.println(incidentElement);
                    if ( hasAttributes && !relationExists( reportID , incidentElement ) ) {
                        debug_printInsertRelationLog( incidentElement );
                        insertIncidentRelation(
                                relationSQL,
                                incidentElement,
                                reportID
                        );
                    }
                }
            }
        }
    }

    private static DatabaseValues.AccountType getAccountType( String accountId ) {
        try {
            String query = "select * from account where ACCOUNT_ID = " + accountId ;
            ResultSet result = executeQuery( query );
            if (result.next()) {
                String accountType = result.getString( "ACCOUNT_TYPE" );
                if ( accountType.equals( DatabaseValues.AccountType.ADMIN.toString() ) )
                    return DatabaseValues.AccountType.ADMIN;
                else return DatabaseValues.AccountType.GUARD;
            }
        }
        catch( Exception e ) {
            e.printStackTrace();
        }
        return null;
    }

    private static String getCategoryId( Incident incident ) {
        System.out.println( "Attempting to find IncidentCategory in incidentElements array...");

        HashMap<String, ArrayList<IncidentElement> > map = incident.getIncidentElements();
        ArrayList<IncidentElement> categoryList = map.get( DatabaseValues.IncidentElementKey.INCIDENT_CATEGORY.toString() );

        IncidentElement category = null;
        if ( categoryList != null && !categoryList.isEmpty() ) {
            category = categoryList.get(0);
        }

        if ( category != null && DatabaseValues.Table.INCIDENT_CATEGORY == category.getTable() ) {
            String id = category.getAttributeValue( DatabaseValues.Column.CATEGORY_ID );

            if (id != null && !id.isEmpty()) {
                //incident.updateAttributeValue( DatabaseValues.Column.CATEGORY_ID , id);
                System.out.println("IncidentCategory FOUND! CATEGORY_ID: " + id);
                return id;
            }
        }
        System.out.println("ERROR: IncidentCategory NOT FOUND");
        return null;
    }


    private static String getPersonIdFromDb( IncidentElement incidentElement ) {
        try {
            String first = incidentElement.getAttributeValue( DatabaseValues.Column.FIRST_NAME );
            String last = incidentElement.getAttributeValue( DatabaseValues.Column.LAST_NAME );
            String number = incidentElement.getAttributeValue( DatabaseValues.Column.PHONE_NUMBER );
            String query = "select top 1 * from Person where FIRST_NAME = '" + first + "' AND " +
                    "LAST_NAME = '" + last + "' AND PHONE_NUMBER = '" + number + "'";

            ResultSet result = executeQuery( query );

            if ( result.next() ) {
                return result.getString("PERSON_ID");
            }
        }
        catch (Exception e ) {
            e.printStackTrace();
        }

        return null;
    }

     private static boolean insertInvolvesRelation(String reportId, String personId) {
        try {
            String query = "insert into Involves (REPORT_ID, PERSON_ID) values ('" + reportId + "', '" + personId + "');";
            return execute(query);
        }
        catch(Exception e) {
            e.printStackTrace();
        }
        return false;
    }

    public static boolean assignToGuard( String reportID, String accountID ) {
        String query = "INSERT INTO AssignedTo (REPORT_ID, ACCOUNT_ID) " +
                "VALUES (" + reportID + ", " + accountID + ")";
        try
        {
            return execute ( query );
        }
        catch ( Exception e ) {
            e.printStackTrace();
        }
        return false;
    }

    private static boolean insertAttachment(String reportId, String fileName, String fileId) {
        System.out.println("Inserting Attachment: " + fileName);
        try {
            String query = "insert into Attachment (REPORT_ID, FILE_NAME, FILE_ID) values ('" +
                    reportId + "', '" + fileName + "', '" + fileId + "');";
            return executeUpdate(query) > 0;
        }
        catch(Exception e) {
            e.printStackTrace();
        }
        return false;
    }

    /* Validate incidents attributes */
    private static void inspectFields( Incident incident ) {
        if ( incident.getAttributeValue(DatabaseValues.Column.DESCRIPTION ) == null ||
                incident.getAttributeValue(DatabaseValues.Column.DESCRIPTION ).isEmpty() )
            System.out.println( "*** WARNING: Description is empty...");

        if ( incident.getAttributeValue(DatabaseValues.Column.EXECUTIVE_SUMMARY) == null ||
                incident.getAttributeValue(DatabaseValues.Column.EXECUTIVE_SUMMARY).isEmpty() )
            System.out.println("*** WARNING: Executive Summary is empty...");

        String searchText = incident.getAttributeValue( DatabaseValues.Column.SEARCH_TEXT ) ;
        if ( searchText == null || searchText.isEmpty() ) {
            System.out.println( "*** WARNING: SEARCH_TEXT cannot be null.");
        }

        String categoryId = incident.getAttributeValue( DatabaseValues.Column.CATEGORY_ID ) ;
        if ( categoryId == null || categoryId.isEmpty() ) {
            System.out.println( "*** WARNING: CATEGORY_ID cannot be null.");
        }

        String accountId = incident.getAttributeValue( DatabaseValues.Column.ACCOUNT_ID );
        if ( accountId == null || accountId.isEmpty() ) {
            System.out.println("*** WARNING: ACCOUNT_ID is not set.");
        }
    }

    private static boolean relationExists( String reportId, IncidentElement incidentElement ) {
        System.out.println("");
        System.out.println("Checking if relation already exists for " + incidentElement.getTable().toString() + "... ");
        try {
            initDB();
            DatabaseValues.Table table = incidentElement.getTable() ;
            System.out.println(table.toString());
            System.out.println(DatabaseValues.Table.LOCATION.toString());
            String query = "select * from ";

            String relationTable = "";
            String idString = " where REPORT_ID = '" + reportId + "' AND ";
            if ( DatabaseValues.Table.INCIDENT_CATEGORY == table )
                return false;

            if ( DatabaseValues.Table.LOCATION == table ) {
                relationTable = DatabaseValues.Table.HAPPENS_AT.toString();
                String id = incidentElement.getAttributeValue( DatabaseValues.Column.LOCATION_ID );
                if (id == null || id.equals("null"))
                    return true; // location not in db
                idString += "LOCATION_ID = '" + id + "';";
            }
            else if ( DatabaseValues.Table.PERSON == table ) {
                relationTable = DatabaseValues.Table.INVOLVES.toString();
                String id = incidentElement.getAttributeValue( DatabaseValues.Column.PERSON_ID );
                if ( id == null )
                    return false;
                idString += "PERSON_ID = '" + id + "';";

            }
            else if ( DatabaseValues.Table.ACCOUNT == table ){
                relationTable = DatabaseValues.Table.ASSIGNED_TO.toString();
                String id = incidentElement.getAttributeValue( DatabaseValues.Column.ACCOUNT_ID );
                if (id == null || id.equals("null"))
                    return true; // account not in db
                idString += "ACCOUNT_ID = '" + id + "';";
            }
            else if ( DatabaseValues.Table.GENERIC_ELEMENT == table ) {
                relationTable = DatabaseValues.Table.GENERIC_ELEMENT.toString();
                String id = incidentElement.getAttributeValue( DatabaseValues.Column.GENERIC_ELEMENT_ID );
                if ( id == null )
                    return false;
                idString += "GENERIC_ELEMENT_ID = '" + id + "';";
            }
            else if ( DatabaseValues.Table.ATTACHMENT == table ){
                relationTable = "Attachment";
                String id = incidentElement.getAttributeValue( DatabaseValues.Column.FILE_ID);
                if (id == null || id.equals("null"))
                    return true;
                idString += "FILE_ID = '" + id + "';";
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
                System.out.println(incidentElement.getAttributeValue ( DatabaseValues.Column.ACCOUNT_ID ));
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
                System.out.println("TRUE");
                return true;
//                stmt.setString (
//                        1,
//                        tableName
//                );
//                stmt.setString (
//                        2,
//                        incidentElement.getAttributeValue ( DatabaseValues.Column.CATEGORY_ID )
//                );
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

            if ( tableName.compareTo( "GenericElement")  == 0 ) {
                insertGenericElement( incidentElement, reportID );
                return true;
            }
            else if ( tableName.compareTo( "Attachment")  == 0 ) {
                insertAttachment( reportID,
                        incidentElement.getAttributeValue( DatabaseValues.Column.FILE_NAME ),
                        incidentElement.getAttributeValue( DatabaseValues.Column.FILE_ID )
                );
                return true;
            }
            else if ( tableName.compareTo ( "Staff" ) == 0 )
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
                System.out.println( incidentElement.getAttributeValue ( DatabaseValues.Column.PERSON_ID ));
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
                System.out.println ("TRUE");
                return true;
//                stmt.setString (
//                        1,
//                        reportID
//                );
//                stmt.setString (
//                        2,
//                        tableName
//
//                );
//                stmt.setString (
//                        3,
//                        incidentElement.getAttributeValue ( DatabaseValues.Column.CATEGORY_ID )
//                );
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

    // return the id
    private static void insertGenericElement( IncidentElement element, String reportID ) {
        if ( reportID == null || element == null ) {
            System.out.println("*****ERROR: Cannot insert generic element.");
            return;
        }
        if ( relationExists( reportID, element ) ) {
            return;
        }
        try {
            String query = "insert into GenericElement (TYPE, DESCRIPTION, REPORT_ID)"
                    + " values ('" + element.getAttributeValue( DatabaseValues.Column.TYPE ) + "', '"
                    + element.getAttributeValue( DatabaseValues.Column.DESCRIPTION ) + "', "
                    + reportID + ");";
            execute( query );
        }
        catch ( Exception e ) {
            e.printStackTrace();
        }
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
            deleteGenericElementRelation( reportID );
            deleteAttachments( reportID );
            return;
        } catch ( Exception e ) {
            e.printStackTrace();
        }
    }

    private static void deleteGenericElementRelation( String reportID ) {
        try {
            String query = "delete from GenericElement where REPORT_ID = " + reportID + ";";
            execute(query);
            return;
        } catch ( Exception e ) {
            e.printStackTrace();
        }
    }

    private static void deleteAttachments( String reportID ) {
        try {
            String query = "delete from Attachment where REPORT_ID = " + reportID + ";";
            execute(query);
            return;
        } catch ( Exception e ) {
            e.printStackTrace();
        }
    }

    public static boolean updateIncident ( Incident incident ) {

        inspectFields(incident);
        if ( incident.getAttributeValue( DatabaseValues.Column.CATEGORY_ID ) == null ) {
            String categoryId = getCategoryId( incident );
            if ( categoryId != null )
                incident.updateAttributeValue( DatabaseValues.Column.CATEGORY_ID, categoryId );
        }

        String creatorID = incident.getAttributeValue(DatabaseValues.Column.ACCOUNT_ID);
        if ( creatorID == null ) {
            return false;
        }

        incident.updateSearchString();

        try {
            initDB ();
            String query = "{ call dbo.updateIncident ( ? , ? , ? , ? , ? ," +
                    " ? , ? , ? , ? , ? ) } ";
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
                    incident.getAttributeValue ( DatabaseValues.Column.STATUS )
            );
            stmt.setString (
                    6,
                    incident.getAttributeValue( DatabaseValues.Column.TEMPORARY_REPORT )
            );
            stmt.setString (
                    7,
                    incident.getAttributeValue( DatabaseValues.Column.SEARCH_TEXT )
            );
            stmt.setString (
                    8,
                    incident.getAttributeValue( DatabaseValues.Column.TIMER_START )
            );
            stmt.setString (
                    9,
                    incident.getAttributeValue( DatabaseValues.Column.TIMER_END )
            );

            stmt.registerOutParameter (
                    10,
                    Types.INTEGER
            );
            stmt.execute();

            String reportId = incident.getAttributeValue ( DatabaseValues.Column.REPORT_ID );
            deleteAllRelations ( reportId );
            insertRelations( reportId, incident.getIncidentElements() );
            return true;
        } catch ( Exception e ) {
            e.printStackTrace();
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

    public static boolean selectIncidentElement ( IncidentElement incidentElement )
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
                else if ( table == DatabaseValues.Table.CAMPUS )
                {
                    incidentElement = new Campus();
                }
                else if ( table == DatabaseValues.Table.ATTACHMENT )
                {
                    incidentElement = new Attachment();
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

    public static Campus[] getCampus ()
    {
        ArrayList < Campus > campusList = new ArrayList <> ();

        try
        {
            ResultSet resultSet = executeQuery ( "SELECT * FROM " + DatabaseValues.Table.CAMPUS.toString () );

            while ( resultSet.next () )
            {
                Campus campus = new Campus ();

                campus.extractFromCurrentRow ( resultSet );

                campusList.add ( campus );
            }
        }

        catch ( Exception e )
        {
            e.printStackTrace ();
        }

        return campusList.toArray ( new Campus [ campusList.size () ] );
    }

    public static Attachment [] getAttachments ()
    {
        ArrayList < Attachment > attachmentList = new ArrayList <> ();

        try
        {
            ResultSet resultSet = executeQuery ( "SELECT * FROM " + DatabaseValues.Table.ATTACHMENT.toString () );

            while ( resultSet.next () )
            {
                Attachment attachment = new Attachment();

                attachment.extractFromCurrentRow ( resultSet );

                attachmentList.add ( attachment );
            }
        }

        catch ( Exception e )
        {
            e.printStackTrace ();
        }

        return attachmentList.toArray ( new Attachment [ attachmentList.size () ] );
    }

    public static String getLastInsertedIncidentID() {
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

    /* DEBUG CODE */
    private static void debug_printInsertRelationLog( IncidentElement incidentElement ) {
        if ( incidentElement == null ) return;

        DatabaseValues.Table table = incidentElement.getTable();
        String msg = "Inserting relation for " + table.toString() ;
        if ( DatabaseValues.Table.PERSON == table) {
            msg += " where FIRST_NAME = " + incidentElement.getAttributeValue( DatabaseValues.Column.FIRST_NAME ) +
                    " , LAST_NAME = " + incidentElement.getAttributeValue( DatabaseValues.Column.LAST_NAME ) +
                    " , PHONE_NUMBER = " + incidentElement.getAttributeValue( DatabaseValues.Column.PHONE_NUMBER ) +
                    " , PERSON_ID = " + incidentElement.getAttributeValue(DatabaseValues.Column.PERSON_ID);
        }
        else if ( DatabaseValues.Table.LOCATION == table ) {
            msg += " where CAMPUS_ID = " + incidentElement.getAttributeValue( DatabaseValues.Column.CAMPUS_ID ) +
                    " , BUILDING_NAME = " + incidentElement.getAttributeValue( DatabaseValues.Column.BUILDING_NAME ) +
                    " , ROOM_NUMBER = " + incidentElement.getAttributeValue( DatabaseValues.Column.ROOM_NUMBER ) +
                    " , LOCATION_ID = " + incidentElement.getAttributeValue(DatabaseValues.Column.LOCATION_ID);
        }
        else if ( DatabaseValues.Table.INCIDENT_CATEGORY == table ) {
            msg += " where MAIN_CATEGORY = " + incidentElement.getAttributeValue( DatabaseValues.Column.MAIN_CATEGORY ) +
                    " , SUB_CATEGORY = " + incidentElement.getAttributeValue( DatabaseValues.Column.SUB_CATEGORY ) +
                    " , INCIDENT_TYPE = " + incidentElement.getAttributeValue( DatabaseValues.Column.INCIDENT_TYPE ) +
                    " , CATEGORY_ID = " + incidentElement.getAttributeValue(DatabaseValues.Column.CATEGORY_ID);
        }
        else if ( DatabaseValues.Table.ATTACHMENT == table ) {
            msg += "where FILE_ID = " + incidentElement.getAttributeValue(DatabaseValues.Column.FILE_ID);
        }


        System.out.println( msg );
    }

    public static Person personExists( Person person ){
        try
        {
            String query = "SELECT * FROM " + DatabaseValues.Table.PERSON.toString() +
                    " WHERE FIRST_NAME = '" + person.getAttributeValue( DatabaseValues.Column.FIRST_NAME ) + "' AND "
                    + "LAST_NAME = '" + person.getAttributeValue( DatabaseValues.Column.LAST_NAME ) + "' AND "
                    + "PHONE_NUMBER = '" + person.getAttributeValue( DatabaseValues.Column.PHONE_NUMBER ) + "';";
            ResultSet resultSet = executeQuery ( query );

            if ( resultSet.next () )
            {
                Person p = new Person();
                p.extractFromCurrentRow( resultSet );
                return p;
            }
        }
        catch ( Exception e )
        {
            e.printStackTrace ();
        }
        return null;
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

    public static boolean createAccount ( User user, Staff staff ) {
        if ( user == null || staff == null || !validateNewAccount( user, staff ) )
            return false;
        try {
            String username = user.getAttributeValue( DatabaseValues.Column.USERNAME ).trim();
            String password = user.getAttributeValue( DatabaseValues.Column.PASSWORD ).trim();
            String accountType = user.getAttributeValue( DatabaseValues.Column.ACCOUNT_TYPE ).trim();
            if ( getUserId( username ) == null ) {
                String query = "insert into Account ( username, password, account_type ) " +
                        "values ('" + username + "', '"
                        + password + "', '"
                        + accountType + "');";

                execute( query );
                String newUserId = getUserId( username );

                if ( newUserId != null ) {
                    setStaffData( newUserId, staff );
                    return true;
                }
            }
        }
        catch ( Exception e ) {
            e.printStackTrace();
        }
        return false;
    }

    private static boolean setStaffData( String accountId, Staff staff ) {
        if (staff == null )
            return false;
        try {
            String query = "update Staff set FIRST_NAME = '" + staff.getAttributeValue( DatabaseValues.Column.FIRST_NAME ).trim()
                            + "', LAST_NAME = '" + staff.getAttributeValue( DatabaseValues.Column.LAST_NAME ).trim()
                            + "', CAMPUS_ID = " + staff.getAttributeValue( DatabaseValues.Column.CAMPUS_ID ).trim()
                            + " where ACCOUNT_ID = " + accountId + ";";
            boolean res = execute( query );
            return res ;
        }
        catch ( Exception e ) {
            e.printStackTrace();
        }
        return false;
    }

    private static boolean validateNewAccount( User user, Staff staff ) {
        String username = user.getAttributeValue( DatabaseValues.Column.USERNAME );
        String password = user.getAttributeValue( DatabaseValues.Column.PASSWORD );
        String accountType = user.getAttributeValue( DatabaseValues.Column.ACCOUNT_TYPE );
        String first = staff.getAttributeValue( DatabaseValues.Column.FIRST_NAME );
        String last = staff.getAttributeValue( DatabaseValues.Column.LAST_NAME );
        boolean valid = true ;

        if ( ! ( valid = username != null && username.length() > 0 ) )
            System.out.println("Username cannot be null.");
        if ( ! ( valid = password != null && password.length() > 0 && valid ) )
            System.out.println("Password cannot be null.");
        if ( ! ( valid = accountType != null && accountType.length() > 0 && valid ) )
            System.out.println("Account Type cannot be null.");

        // SET RESTRICTIONS ON FIRST AND LAST
        if ( ! ( valid = first != null /*&& first.length() > 0*/ && valid ) )
            System.out.println("First name cannot be null.");
        if ( ! ( valid = last != null /*&& last.length() > 0*/ && valid ) )
            System.out.println("Last name cannot be null.");

        return valid;
    }

    public static String getUserId( String username ) {
        try {
            String query = "select top 1 ACCOUNT_ID from Account where username = '" + username + "';";
            ResultSet res = executeQuery( query );
            if ( res.next() ) {
                return res.getString("ACCOUNT_ID");
            }
        }
        catch ( Exception e ) {
            e.printStackTrace();
        }
        return null;
    }

    public static boolean debug_removeAccountAndStaff( String accountId ) {
        try {
            String query = "delete from account where account_id = " + accountId + ";";
            execute(query);
            return true;
        }
        catch( Exception e ) {
            e.printStackTrace();
        }
        return false;
    }

    public static User authorizeAccount ( User user ) {
        try {
            String query = "" +
                    "select * from account acc" +
                    " where acc.USERNAME = '" + user.getAttributeValue( DatabaseValues.Column.USERNAME ) + "'" +
                    " AND acc.PASSWORD = '" + user.getAttributeValue( DatabaseValues.Column.PASSWORD ) + "'";
            ResultSet myRs = DBHelper.executeQuery ( query );

            if ( myRs.next () )
            {
                user.updateAttributeValue(
                        DatabaseValues.Column.ACCOUNT_TYPE,
                        myRs.getString ( DatabaseValues.Column.ACCOUNT_TYPE.toString () )
                );

                user.updateAttributeValue(
                        DatabaseValues.Column.ACCOUNT_ID,
                        myRs.getString ( DatabaseValues.Column.ACCOUNT_ID.toString() )
                );
            }

            else
            {
                return null;
            }

        }
        catch ( Exception e )
        {
            e.printStackTrace ();
        }

        return user;
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

    public static boolean executeProcedure (String query, Incident incident) {
        try {
            initDB ();
            CallableStatement stmt = connection.prepareCall ( query );
            stmt.setString ( 1 , incident.getAttributeValue ( DatabaseValues.Column.REPORT_ID ) );
            stmt.setString ( 2 , incident.getAttributeValue (DatabaseValues.Column.CATEGORY_ID) );
            stmt.setString ( 3 , incident.getAttributeValue (DatabaseValues.Column.DESCRIPTION) );
            stmt.setString ( 4 , incident.getAttributeValue (DatabaseValues.Column.EXECUTIVE_SUMMARY) );
            stmt.setString ( 5 , incident.getAttributeValue (DatabaseValues.Column.STATUS) );
            stmt.registerOutParameter ( 6 , Types.INTEGER );
            stmt.execute();
            int output = stmt.getInt (6);
            System.out.println( output );
            return true;
        } catch ( Exception e ) {
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
