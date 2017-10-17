//package UnitTests;
//
//import Model.Location;
//import Util.DBHelper;
//import Util.DatabaseValues;
//import com.google.gson.Gson;
//import org.junit.Assert;
//import org.junit.Test;
//
//import java.sql.ResultSet;
//
//public class TestLocation
//{
//    @Test
//    public void testValidLocation ()
//    {
//        Location location = new Location (
//                null, // notice how this is null? Tells class to ignore the column and its value when creating Insert SQL
//                "1",
//                "Building E",
//                "4000",
//                "Arts"
//        );
//
//        String locationID = location.getAttributeValue( DatabaseValues.Column.LOCATION_ID );
//        String campusID = location.getAttributeValue( DatabaseValues.Column.CAMPUS_ID );
//        String buidingName = location.getAttributeValue( DatabaseValues.Column.BUILDING_NAME );
//        String roomNumber = location.getAttributeValue( DatabaseValues.Column.ROOM_NUMBER );
//        String department = location.getAttributeValue( DatabaseValues.Column.DEPARTMENT );
//
//
//        Assert.assertTrue ( locationID == null );
//        Assert.assertTrue ( campusID.equals ( "1" ) );
//        Assert.assertTrue ( buidingName.equals ( "Building E" ) );
//        Assert.assertTrue ( roomNumber.equals ( "4000" ) );
//        Assert.assertTrue ( department.equals ( "Arts" ) );
//    }
//
//    @Test
//    public void testValidUpdateAllValuesLocation ()
//    {
//        Location location = new Location (
//                null, // notice how this is null? Tells class to ignore the column and its value when creating Insert SQL
//                "1",
//                "Building E",
//                "4000",
//                "Arts"
//        );
//
//        // change all values
//        location.updateAttributeValue(
//                DatabaseValues.Column.CAMPUS_ID,
//                "2"
//        );
//        location.updateAttributeValue(
//                DatabaseValues.Column.BUILDING_NAME,
//                "Building A"
//        );
//        location.updateAttributeValue(
//                DatabaseValues.Column.ROOM_NUMBER,
//                "2000"
//        );
//        location.updateAttributeValue(
//                DatabaseValues.Column.DEPARTMENT,
//                "Science"
//        );
//
//        String locationID = location.getAttributeValue( DatabaseValues.Column.LOCATION_ID );
//        String campusID = location.getAttributeValue( DatabaseValues.Column.CAMPUS_ID );
//        String buidingName = location.getAttributeValue( DatabaseValues.Column.BUILDING_NAME );
//        String roomNumber = location.getAttributeValue( DatabaseValues.Column.ROOM_NUMBER );
//        String department = location.getAttributeValue( DatabaseValues.Column.DEPARTMENT );
//
//        Assert.assertFalse ( campusID.equals ( "1" ) );
//        Assert.assertFalse ( buidingName.equals ( "Building E" ) );
//        Assert.assertFalse ( roomNumber.equals ( "4000" ) );
//        Assert.assertFalse ( department.equals ( "Arts" ) );
//
//        Assert.assertTrue ( locationID == null );
//        Assert.assertTrue ( campusID.equals ( "2" ) );
//        Assert.assertTrue ( buidingName.equals ( "Building A" ) );
//        Assert.assertTrue ( roomNumber.equals ( "2000" ) );
//        Assert.assertTrue ( department.equals ( "Science" ) );
//    }
//
//    @Test
//    public void testInvalidUpdateValuesLocation ()
//    {
//        Location location = new Location (
//                null, // notice how this is null? Tells class to ignore the column and its value when creating Insert SQL
//                "1",
//                "Building E",
//                "4000",
//                "Arts"
//        );
//
//        // change with invalid values per Column
//        boolean updateCampusID = location.updateAttributeValue(
//                DatabaseValues.Column.CAMPUS_ID, // only excepts ints
//                "Burnaby"
//        );
//
//        boolean updateFirstName = location.updateAttributeValue(
//                DatabaseValues.Column.FIRST_NAME, // Location is not associated with column FIRST_NAME
//                "Spiderman"
//        );
//
//        boolean updateRoomNumber = location.updateAttributeValue(
//                DatabaseValues.Column.ROOM_NUMBER, // only excepts ints
//                "SUR-2300"
//        );
//
//        Assert.assertTrue ( !updateCampusID ); // failed
//        Assert.assertTrue ( !updateFirstName ); // failed
//        Assert.assertTrue ( !updateRoomNumber ); // failed
//
//        String campusID = location.getAttributeValue( DatabaseValues.Column.CAMPUS_ID );
//        String firstName = location.getAttributeValue( DatabaseValues.Column.FIRST_NAME );
//        String roomNumber = location.getAttributeValue( DatabaseValues.Column.ROOM_NUMBER );
//
//        Assert.assertFalse ( campusID.equals ( "Burnaby" ) );
//        Assert.assertFalse ( firstName != null && firstName.equals ( "Spiderman" ) );
//        Assert.assertFalse ( roomNumber.equals ( "SUR-2300" ) );
//
//        Assert.assertTrue ( campusID.equals ( DatabaseValues.Column.CAMPUS_ID.getDefaultValue () ) );
//        Assert.assertTrue ( firstName == null );
//        Assert.assertTrue ( roomNumber.equals ( DatabaseValues.Column.ROOM_NUMBER.getDefaultValue () ) );
//    }
//
//    @Test
//    public void testNullColumnValueSQLLocation ()
//    {
//        Location location = new Location (
//                null, // notice how this is null? Tells class to ignore the column and its value when creating Insert SQL
//                "1",
//                "Building E",
//                "4000",
//                "Arts"
//        );
//
//        String insertSQL = location.toInsertSQL ();
//        Assert.assertTrue ( !insertSQL.contains ( DatabaseValues.Column.LOCATION_ID.toString () ) );
//
//        // Location's locationID is only useful for objects that are retrieved from the database and
//        // brought to the front end, which are updated or deleted by the user. However, because it is null in value,
//        // it will be ignored when generating sql. Furthermore, update and delete require Primary Key info.
//        // because this location object has null for a value, it cannot generate valid update and delete sql
//        // statements, so it returns null
//
//        String updateSQL = location.toUpdateSQL ();
//        Assert.assertTrue ( updateSQL == null );
//
//        String deleteSQL = location.toDeleteSQL ();
//        Assert.assertTrue ( deleteSQL == null );
//    }
//
//    @Test
//    public void testToJsonLocation ()
//    {
//        Location location1 = new Location (
//                null, // notice how this is null? Tells class to ignore the column and its value when creating Insert SQL
//                "1",
//                "Building E",
//                "4000",
//                "Arts"
//        );
//
//        String json = location1.toJson ();
//        Gson gson = new Gson ();
//
//        Location location2 = gson.fromJson (
//                json,
//                Location.class
//        );
//
//        Assert.assertTrue ( location2.getTable().equals ( location1.getTable() ) );
//
//        for ( DatabaseValues.Column column : location2.getColumnSet() )
//        {
//            Assert.assertTrue ( location2.getAttributeValue( column ).equals ( location1.getAttributeValue( column ) ) );
//        }
//    }
//
//    @Test
//    public void testInsertSQLLocation ()
//    {
//        Location location = new Location (
//                null, // notice how this is null? Tells class to ignore the column and its value when creating Insert SQL
//                "1",
//                "Building E",
//                "4000",
//                "Arts"
//        );
//
//        Location [] locations = DBHelper.getLocations ();
//        int initialNumRecords = locations.length;
//
//        Assert.assertTrue ( DBHelper.insertIncidentElement ( location ) );
//
//        locations = DBHelper.getLocations ();
//        int finalNumRecords = locations.length;
//
//        Assert.assertTrue ( initialNumRecords < finalNumRecords );
//
//        // clean up after test
//        String locationID = DEBUG_getLargestLocationIDFromTable ();
//
//        // add locationID
//        location.updateAttributeValue(
//                DatabaseValues.Column.LOCATION_ID, locationID
//        );
//
//        Assert.assertTrue ( DBHelper.deleteIncidentElement ( location ) );
//    }
//
//    @Test
//    public void testUpdateSQLLocation ()
//    {
//        Location location = new Location (
//                null, // notice how this is null? Tells class to ignore the column and its value when creating Insert SQL
//                "1",
//                "Building E",
//                "4000",
//                "Arts"
//        );
//
//        Assert.assertTrue ( DBHelper.insertIncidentElement ( location ) );
//
//        String locationID = DEBUG_getLargestLocationIDFromTable ();
//
//        // add locationID
//        location.updateAttributeValue(
//                DatabaseValues.Column.LOCATION_ID, locationID
//        );
//
//        // update some value
//        location.updateAttributeValue(
//                DatabaseValues.Column.ROOM_NUMBER, "1000"
//        );
//
//        Assert.assertTrue ( DBHelper.updateIncidentElement ( location ) );
//
//        Location [] locations = DBHelper.getLocations ();
//        for ( int i = 0 ; i < locations.length ; i++ )
//        {
//            if ( locationID.equals ( locations [ i ].getAttributeValue( DatabaseValues.Column.LOCATION_ID ) ) )
//            {
//                location = locations [ i ];
//                i = locations.length;
//            }
//        }
//
//        Assert.assertTrue ( !location.getAttributeValue( DatabaseValues.Column.ROOM_NUMBER ).equals ( "4000" ) );
//        Assert.assertTrue ( location.getAttributeValue( DatabaseValues.Column.ROOM_NUMBER ).equals ( "1000" ) );
//
//        // clean up after test
//        // add locationID
//        location.updateAttributeValue(
//                DatabaseValues.Column.LOCATION_ID, locationID
//        );
//
//        Assert.assertTrue ( DBHelper.deleteIncidentElement ( location ) );
//    }
//
//    @Test
//    public void testDeleteSQLLocation ()
//    {
//        Location location = new Location (
//                null, // notice how this is null? Tells class to ignore the column and its value when creating Insert SQL
//                "1",
//                "Building E",
//                "4000",
//                "Arts"
//        );
//
//        Assert.assertTrue ( DBHelper.insertIncidentElement ( location ) );
//
//        Location [] locations = DBHelper.getLocations ();
//        int initialNumRecords = locations.length;
//
//        String locationID = DEBUG_getLargestLocationIDFromTable ();
//
//        // add locationID
//        location.updateAttributeValue(
//                DatabaseValues.Column.LOCATION_ID, locationID
//        );
//
//        Assert.assertTrue ( DBHelper.deleteIncidentElement ( location ) );
//
//        locations = DBHelper.getLocations ();
//        int finalNumRecords = locations.length;
//
//        Assert.assertTrue ( initialNumRecords > finalNumRecords );
//    }
//
//    @Test
//    public void testSelectSQLLocation () {
//        Location location1 = new Location (
//                null, // notice how this is null? Tells class to ignore the column and its value when creating Insert SQL
//                "1",
//                "Building E",
//                "4000",
//                "Arts"
//        );
//
//        Assert.assertTrue ( DBHelper.insertIncidentElement ( location1 ) );
//
//        String locationID = DEBUG_getLargestLocationIDFromTable ();
//
//        Location location2 = new Location ();
//        location2.updateAttributeValue(
//                DatabaseValues.Column.LOCATION_ID,
//                locationID
//        );
//
//        Assert.assertTrue( DBHelper.selectIncidentElement ( location2 ) );
//        Assert.assertTrue ( location2.getAttributeValue( DatabaseValues.Column.LOCATION_ID )
//                .equals ( locationID )
//        );
//
//        // clean up after test
//        // add locationID
//        location1.updateAttributeValue(
//                DatabaseValues.Column.LOCATION_ID, locationID
//        );
//
//        Assert.assertTrue ( DBHelper.deleteIncidentElement ( location1 ) );
//    }
//
//    private static String DEBUG_getLargestLocationIDFromTable ()
//    {
//        try
//        {
//            ResultSet resultSet = DBHelper.executeQuery ( "SELECT MAX ( LOCATION_ID ) AS MaxLocationID FROM " +
//                    DatabaseValues.Table.LOCATION.toString () );
//            while ( resultSet.next () )
//            {
//                return "" + resultSet.getInt ( "MaxLocationID" );
//            }
//        }
//        catch ( Exception e )
//        {
//            e.printStackTrace ();
//        }
//        return "-1";
//    }
//}