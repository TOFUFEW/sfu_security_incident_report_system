package UnitTests;

import Model.Location;
import Util.DBHelper;
import Util.DatabaseValues;
import com.google.gson.Gson;
import org.junit.Assert;
import org.junit.Test;
import org.junit.experimental.theories.suppliers.TestedOn;

import java.util.ArrayList;
import java.util.List;

public class TestIncidentElement
{

    @Test
    public void testValidLocation ()
    {
        Location location = new Location (
                null, // notice how this is null? Tells class to ignore the column and its value when creating Insert SQL
                "1",
                "Building E",
                "4000",
                "Arts"
        );

        String locationID = location.getColumnValue( DatabaseValues.DatabaseColumn.LOCATION_ID );
        String campusID = location.getColumnValue( DatabaseValues.DatabaseColumn.CAMPUS_ID );
        String buidingName = location.getColumnValue( DatabaseValues.DatabaseColumn.BUILDING_NAME );
        String roomNumber = location.getColumnValue( DatabaseValues.DatabaseColumn.ROOM_NUMBER );
        String department = location.getColumnValue( DatabaseValues.DatabaseColumn.DEPARTMENT );


        Assert.assertTrue ( locationID == null );
        Assert.assertTrue ( campusID.equals ( "1" ) );
        Assert.assertTrue ( buidingName.equals ( "Building E" ) );
        Assert.assertTrue ( roomNumber.equals ( "4000" ) );
        Assert.assertTrue ( department.equals ( "Arts" ) );
    }

    @Test
    public void testValidUpdateAllValuesLocation ()
    {
        Location location = new Location (
                null, // notice how this is null? Tells class to ignore the column and its value when creating Insert SQL
                "1",
                "Building E",
                "4000",
                "Arts"
        );

        // change all values
        location.editColumnValue (
                DatabaseValues.DatabaseColumn.CAMPUS_ID,
                "2"
        );
        location.editColumnValue (
                DatabaseValues.DatabaseColumn.BUILDING_NAME,
                "Building A"
        );
        location.editColumnValue (
                DatabaseValues.DatabaseColumn.ROOM_NUMBER,
                "2000"
        );
        location.editColumnValue (
                DatabaseValues.DatabaseColumn.DEPARTMENT,
                "Science"
        );

        String locationID = location.getColumnValue( DatabaseValues.DatabaseColumn.LOCATION_ID );
        String campusID = location.getColumnValue( DatabaseValues.DatabaseColumn.CAMPUS_ID );
        String buidingName = location.getColumnValue( DatabaseValues.DatabaseColumn.BUILDING_NAME );
        String roomNumber = location.getColumnValue( DatabaseValues.DatabaseColumn.ROOM_NUMBER );
        String department = location.getColumnValue( DatabaseValues.DatabaseColumn.DEPARTMENT );

        Assert.assertFalse ( campusID.equals ( "1" ) );
        Assert.assertFalse ( buidingName.equals ( "Building E" ) );
        Assert.assertFalse ( roomNumber.equals ( "4000" ) );
        Assert.assertFalse ( department.equals ( "Arts" ) );

        Assert.assertTrue ( locationID == null );
        Assert.assertTrue ( campusID.equals ( "2" ) );
        Assert.assertTrue ( buidingName.equals ( "Building A" ) );
        Assert.assertTrue ( roomNumber.equals ( "2000" ) );
        Assert.assertTrue ( department.equals ( "Science" ) );
    }

    @Test
    public void testInvalidUpdateValuesLocation ()
    {
        Location location = new Location (
                null, // notice how this is null? Tells class to ignore the column and its value when creating Insert SQL
                "1",
                "Building E",
                "4000",
                "Arts"
        );

        // change with invalid values per DatabaseColumn
        boolean updateCampusID = location.editColumnValue (
                DatabaseValues.DatabaseColumn.CAMPUS_ID, // only excepts ints
                "Burnaby"
        );

        boolean updateFirstName = location.editColumnValue (
                DatabaseValues.DatabaseColumn.FIRST_NAME, // Location is not associated with column FIRST_NAME
                "Spiderman"
        );

        boolean updateRoomNumber = location.editColumnValue (
                DatabaseValues.DatabaseColumn.ROOM_NUMBER, // only excepts ints
                "SUR-2300"
        );

        Assert.assertTrue ( !updateCampusID ); // failed
        Assert.assertTrue ( !updateFirstName ); // failed
        Assert.assertTrue ( !updateRoomNumber ); // failed

        String campusID = location.getColumnValue( DatabaseValues.DatabaseColumn.CAMPUS_ID );
        String firstName = location.getColumnValue( DatabaseValues.DatabaseColumn.FIRST_NAME );
        String roomNumber = location.getColumnValue( DatabaseValues.DatabaseColumn.ROOM_NUMBER );

        Assert.assertFalse ( campusID.equals ( "Burnaby" ) );
        Assert.assertFalse ( firstName != null && firstName.equals ( "Spiderman" ) );
        Assert.assertFalse ( roomNumber.equals ( "SUR-2300" ) );

        Assert.assertTrue ( campusID.equals ( DatabaseValues.DatabaseColumn.CAMPUS_ID.getDefaultValue () ) );
        Assert.assertTrue ( firstName == null );
        Assert.assertTrue ( roomNumber.equals ( DatabaseValues.DatabaseColumn.ROOM_NUMBER.getDefaultValue () ) );
    }

    @Test
    public void testNullColumnValueSQLLocation ()
    {
        Location location = new Location (
                null, // notice how this is null? Tells class to ignore the column and its value when creating Insert SQL
                "1",
                "Building E",
                "4000",
                "Arts"
        );

        String insertSQL = location.toInsertSQL ();
        Assert.assertTrue ( !insertSQL.contains (DatabaseValues.DatabaseColumn.LOCATION_ID.toString () ) );

        // Location's locationID is only useful for objects that are retrieved from the database and
        // brought to the front end, which are updated or deleted by the user. Thus:

        String updateSQL = location.toUpdateSQL ();
        Assert.assertTrue ( updateSQL.contains (DatabaseValues.DatabaseColumn.LOCATION_ID.toString () ) );

        String deleteSQL = location.toDeleteSQL ();
        Assert.assertTrue ( deleteSQL.contains (DatabaseValues.DatabaseColumn.LOCATION_ID.toString () ) );
    }

    @Test
    public void testToJsonLocation () {
        Location location1 = new Location(
                null, // notice how this is null? Tells class to ignore the column and its value when creating Insert SQL
                "1",
                "Building E",
                "4000",
                "Arts"
        );

        String json = location1.toJson ();
        Gson gson = new Gson ();

        Location location2 = gson.fromJson (
                json,
                Location.class
        );

        Assert.assertTrue ( location2.getTable().equals ( location1.getTable() ) );

        for ( DatabaseValues.DatabaseColumn column : location2.getColumnSet() )
        {
            Assert.assertTrue ( location2.getColumnValue ( column ).equals ( location1.getColumnValue ( column ) ) );
        }
    }

    @Test
    public void testInsertSQLLocation ()
    {
        Location location = new Location (
                null, // notice how this is null? Tells class to ignore the column and its value when creating Insert SQL
                "1",
                "Building E",
                "4000",
                "Arts"
        );

        Location [] locations = DBHelper.getLocations ();
        int initialNumRecords = locations.length;

        DBHelper.insertIncidentElement ( location );

        locations = DBHelper.getLocations ();
        int finalNumRecords = locations.length;

        Assert.assertTrue ( initialNumRecords < finalNumRecords );
    }

    @Test
    public void testUpdateSQLLocation ()
    {
        Location location = new Location (
                null, // notice how this is null? Tells class to ignore the column and its value when creating Insert SQL
                "1",
                "Building E",
                "4000",
                "Arts"
        );

        DBHelper.insertIncidentElement ( location );

        String locationID = DBHelper.DEBUG_getLargestLocationIDFromTable ();

        // add locationID
        location.editColumnValue (
                DatabaseValues.DatabaseColumn.LOCATION_ID, locationID
        );

        // update some value
        location.editColumnValue (
                DatabaseValues.DatabaseColumn.ROOM_NUMBER, "1000"
        );

        DBHelper.updateIncidentElement ( location );

        Location [] locations = DBHelper.getLocations ();
        for ( int i = 0 ; i < locations.length ; i++ )
        {
            if ( locationID.equals ( locations [ i ].getColumnValue ( DatabaseValues.DatabaseColumn.LOCATION_ID ) ) )
            {
                location = locations [ i ];
                i = locations.length;
            }
        }

        Assert.assertTrue ( !location.getColumnValue ( DatabaseValues.DatabaseColumn.ROOM_NUMBER ).equals ( "4000" ) );
        Assert.assertTrue ( location.getColumnValue ( DatabaseValues.DatabaseColumn.ROOM_NUMBER ).equals ( "1000" ) );
    }

    @Test
    public void testDeleteSQLLocation ()
    {
        Location location = new Location (
                null, // notice how this is null? Tells class to ignore the column and its value when creating Insert SQL
                "1",
                "Building E",
                "4000",
                "Arts"
        );

        DBHelper.insertIncidentElement ( location );

        Location [] locations = DBHelper.getLocations ();
        int initialNumRecords = locations.length;

        String locationID = DBHelper.DEBUG_getLargestLocationIDFromTable ();

        // add locationID
        location.editColumnValue (
                DatabaseValues.DatabaseColumn.LOCATION_ID, locationID
        );

        DBHelper.deleteIncidentElement ( location );

        locations = DBHelper.getLocations ();
        int finalNumRecords = locations.length;

        Assert.assertTrue ( initialNumRecords > finalNumRecords );
    }

    /* POTENTIAL PROBLEMS AND CONCERNS WITH DESIGN
         * Notice how locationID is null in the Location constructor?
         *
         * This is a subtle/sneaky mechanism which tells the class that the value should be ignored when creating
         * insert sql statements, because it will be an auto-incremented value by the database.
         *
         * The database will not permit an insertion sql statement for location that includes locationID, so we are
         * excluding it from the insert statement.
         *
         * DBHelper.insertIncidentElement ( location ); // works if locationID is set to null, else it will be rejected
         * by the database.
         *
         * update and delete would be called identically, however, this time, locationId must be included,
         * as it is the primary key of Location table. This probably won't be an issue, because the context is different.
         *
         * In insert, a Location object is created from scratch, and does not exist in the database.
         * In terms of update and delete, however, an existing Location record is pulled from the database, converted
         * into a Java Location object, and then sent to the UI, with its locationID. Thus, if it's sent back to the
         * server for an update or delete, it will still have its locationID. So this operation should be fine in theory.
         *
         * DBHelper.updateStorageObject ( location1 ); // doesn't work unless location1 has valid locationID
         * DBHelper.deleteStorageObject ( location1 ); // doesn't work unless location1 has valid locationID
         *
         */

}