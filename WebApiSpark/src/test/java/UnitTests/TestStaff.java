//package UnitTests;
//
//import Model.Staff;
//import Util.DBHelper;
//import Util.DatabaseValues;
//import com.google.gson.Gson;
//import org.junit.Assert;
//import org.junit.Test;
//
//import java.sql.ResultSet;
//
//public class TestStaff
//{
//    @Test
//    public void testValidStaff ()
//    {
//        Staff staff = new Staff (
//                null, // notice how this is null? Tells class to ignore the column and its value when creating Insert SQL
//                "1",
//                "John",
//                "Doe"
//        );
//
//        String accountID = staff.getColumnValue ( DatabaseValues.DatabaseColumn.ACCOUNT_ID );
//        String campusID = staff.getColumnValue ( DatabaseValues.DatabaseColumn.CAMPUS_ID );
//        String firstName = staff.getColumnValue ( DatabaseValues.DatabaseColumn.FIRST_NAME );
//        String lastName = staff.getColumnValue ( DatabaseValues.DatabaseColumn.LAST_NAME );
//
//
//        Assert.assertTrue ( accountID == null );
//        Assert.assertTrue ( campusID.equals ( "1" ) );
//        Assert.assertTrue ( firstName.equals ( "John" ) );
//        Assert.assertTrue ( lastName.equals ( "Doe" ) );
//    }
//
//    @Test
//    public void testValidUpdateAllValuesStaff ()
//    {
//        Staff staff = new Staff (
//                null, // notice how this is null? Tells class to ignore the column and its value when creating Insert SQL
//                "1",
//                "John",
//                "Doe"
//        );
//
//        // change all values
//        staff.editColumnValue (
//                DatabaseValues.DatabaseColumn.CAMPUS_ID,
//                "2"
//        );
//        staff.editColumnValue (
//                DatabaseValues.DatabaseColumn.FIRST_NAME,
//                "Max"
//        );
//        staff.editColumnValue (
//                DatabaseValues.DatabaseColumn.LAST_NAME,
//                "Mustermann"
//        );
//
//        String accountID = staff.getColumnValue ( DatabaseValues.DatabaseColumn.ACCOUNT_ID );
//        String campusID = staff.getColumnValue ( DatabaseValues.DatabaseColumn.CAMPUS_ID );
//        String firstName = staff.getColumnValue ( DatabaseValues.DatabaseColumn.FIRST_NAME );
//        String lastName = staff.getColumnValue ( DatabaseValues.DatabaseColumn.LAST_NAME );
//
//        Assert.assertFalse ( campusID.equals ( "1" ) );
//        Assert.assertFalse ( firstName.equals ( "John" ) );
//        Assert.assertFalse ( lastName.equals ( "Doe" ) );
//
//        Assert.assertTrue ( accountID == null );
//        Assert.assertTrue ( campusID.equals ( "2" ) );
//        Assert.assertTrue ( firstName.equals ( "Max" ) );
//        Assert.assertTrue ( lastName.equals ( "Mustermann" ) );
//    }
//
//    @Test
//    public void testInvalidUpdateValuesStaff ()
//    {
//        Staff staff = new Staff (
//                null, // notice how this is null? Tells class to ignore the column and its value when creating Insert SQL
//                "1",
//                "John",
//                "Doe"
//        );
//
//        // change with invalid values per DatabaseColumn
//        boolean updateCampusID = staff.editColumnValue (
//                DatabaseValues.DatabaseColumn.CAMPUS_ID, // only excepts ints
//                "Burnaby"
//        );
//
//        boolean updateRoomNumber = staff.editColumnValue (
//                DatabaseValues.DatabaseColumn.ROOM_NUMBER, // // Staff is not associated with column Room Number
//                "2300"
//        );
//
//        Assert.assertTrue ( !updateCampusID ); // failed
//        Assert.assertTrue ( !updateRoomNumber ); // failed
//
//        String campusID = staff.getColumnValue ( DatabaseValues.DatabaseColumn.CAMPUS_ID );
//        String roomNumber = staff.getColumnValue ( DatabaseValues.DatabaseColumn.ROOM_NUMBER );
//
//        Assert.assertFalse ( campusID.equals ( "Burnaby" ) );
//        Assert.assertFalse ( roomNumber != null && roomNumber.equals (2300) );
//
//        Assert.assertTrue ( campusID.equals ( DatabaseValues.DatabaseColumn.CAMPUS_ID.getDefaultValue () ) );
//        Assert.assertTrue ( roomNumber == null );
//    }
//
//    @Test
//    public void testNullColumnValueSQLStaff ()
//    {
//        Staff staff = new Staff (
//                null, // notice how this is null? Tells class to ignore the column and its value when creating Insert SQL
//                "1",
//                "John",
//                "Doe"
//        );
//
//        String insertSQL = staff.toInsertSQL ();
//        Assert.assertTrue ( !insertSQL.contains ( DatabaseValues.DatabaseColumn.ACCOUNT_ID.toString () ) );
//
//        // Staff's accountID is only useful for objects that are retrieved from the database and
//        // brought to the front end, which are updated or deleted by the user. However, because it is null in value,
//        // it will be ignored when generating sql. Furthermore, update and delete require Primary Key info.
//        // because this staff object has null for a value, it cannot generate valid update and delete sql
//        // statements, so it returns null
//
//        String updateSQL = staff.toUpdateSQL ();
//        Assert.assertTrue ( updateSQL == null );
//
//        String deleteSQL = staff.toDeleteSQL ();
//        Assert.assertTrue ( deleteSQL == null );
//    }
//
//    @Test
//    public void testToJsonStaff ()
//    {
//        Staff staff1 = new Staff (
//                null, // notice how this is null? Tells class to ignore the column and its value when creating Insert SQL
//                "1",
//                "John",
//                "Doe"
//        );
//
//        String json = staff1.toJson ();
//        Gson gson = new Gson ();
//
//        Staff staff2 = gson.fromJson (
//                json,
//                Staff.class
//        );
//
//        Assert.assertTrue ( staff2.getTable().equals ( staff1.getTable() ) );
//
//        for ( DatabaseValues.DatabaseColumn column : staff2.getColumnSet() )
//        {
//            Assert.assertTrue ( staff2.getColumnValue ( column ).equals ( staff1.getColumnValue ( column ) ) );
//        }
//    }
//
//
//    private static String DEBUG_getLargestStaffIDFromTable ()
//    {
//        try
//        {
//            ResultSet resultSet = DBHelper.executeQuery ( "SELECT MAX ( ACCOUNT_ID ) AS MaxStaffID FROM " +
//                    DatabaseValues.DatabaseTable.STAFF.toString () );
//            while ( resultSet.next () )
//            {
//                return "" + resultSet.getInt ( "MaxStaffID" );
//            }
//        }
//        catch ( Exception e )
//        {
//            e.printStackTrace ();
//        }
//        return "-1";
//    }
//}