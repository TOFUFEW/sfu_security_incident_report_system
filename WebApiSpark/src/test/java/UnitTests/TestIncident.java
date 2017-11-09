package UnitTests;

import Model.Incident;
import Model.IncidentElement;
import Model.Location;
import Model.Person;
import Util.DBHelper;
import Util.DatabaseValues;
import Util.DatabaseValues.Column;
import org.junit.Assert;
import org.junit.Test;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Random;

public class TestIncident
{

    @Test
    public void testInsertIncident ()
    {
        IncidentElement[] categories = DBHelper.getIncidentElements( DatabaseValues.Table.INCIDENT_CATEGORY );
        IncidentElement[] staffList = DBHelper.getIncidentElements( DatabaseValues.Table.STAFF );
        if ( categories.length == 0 || staffList.length == 0 )
            return; // Nothing to test. Can't insert incident without CATEGORY_ID or ACCOUNT_ID

        Random rand = new Random();

        IncidentElement selectedCategory = categories[ rand.nextInt( categories.length-1 )];
        Assert.assertTrue( ( DatabaseValues.Table.INCIDENT_CATEGORY ).toString().contains( selectedCategory.getTable().toString() ) );

        String selectedCategoryId = selectedCategory.getAttributeValue( Column.CATEGORY_ID );
        Assert.assertTrue( !selectedCategoryId.isEmpty() );

        IncidentElement staff = staffList[ rand.nextInt( staffList.length ) ];

        Incident incident1 = new Incident();
        incident1.updateAttributeValue ( Column.REPORT_ID, null );
        incident1.updateAttributeValue ( Column.ACCOUNT_ID, staff.getAttributeValue( Column.ACCOUNT_ID ) );
        incident1.updateAttributeValue ( Column.CATEGORY_ID, selectedCategoryId );
        incident1.updateAttributeValue ( Column.DESCRIPTION, "TEST DESCRIPTION" );
        incident1.updateAttributeValue ( Column.EXECUTIVE_SUMMARY, "TEST SUMMARY" );
        incident1.updateAttributeValue ( Column.CLOSED, "0" );


        int elementCount = 0;

        incident1.addIncidentElement( DatabaseValues.IncidentElementKey.INCIDENT_CATEGORY.toString(), selectedCategory );
        elementCount++;

        /***** STAFF *****/
        incident1.addIncidentElement( DatabaseValues.IncidentElementKey.STAFF.toString(), staff );
        elementCount++;

        /***** LOCATIONS *****/
        Location[] locations = DBHelper.getLocations();
        if ( locations.length > 0 ) {
            incident1.addIncidentElement( DatabaseValues.IncidentElementKey.LOCATION.toString(), locations[ rand.nextInt( locations.length ) ] );
            elementCount++;

            Location duplicateLoc = locations[ rand.nextInt( locations.length ) ];
            incident1.addIncidentElement( DatabaseValues.IncidentElementKey.LOCATION.toString(), duplicateLoc );
            elementCount++;

            // Add duplicate location. This should not be inserted in relation table
            incident1.addIncidentElement( DatabaseValues.IncidentElementKey.LOCATION.toString(), duplicateLoc );
        }

        /***** PERSONS *****/
        Person[] persons = DBHelper.getPersons();
        if ( persons.length > 0 ) {
            incident1.addIncidentElement( DatabaseValues.IncidentElementKey.PERSON.toString(), persons[ rand.nextInt(persons.length)] );
            elementCount++;

            Person duplicatePerson = persons[ rand.nextInt(persons.length)];
            incident1.addIncidentElement( DatabaseValues.IncidentElementKey.PERSON.toString(), duplicatePerson );
            elementCount++ ;

            // Add duplicate person. This should not be inserted in relation table
            incident1.addIncidentElement( DatabaseValues.IncidentElementKey.PERSON.toString(), duplicatePerson );
        }

        Person newPerson1 = new Person();
        newPerson1.updateAttributeValue( Column.PERSON_ID, null );
        newPerson1.updateAttributeValue( Column.FIRST_NAME, "Ralph");
        newPerson1.updateAttributeValue( Column.LAST_NAME, "G1");
        newPerson1.updateAttributeValue( Column.PHONE_NUMBER, "7788899393");

        Person newPerson2 = new Person();
        newPerson2.updateAttributeValue( Column.PERSON_ID, null );
        newPerson2.updateAttributeValue( Column.FIRST_NAME, "Ralph");
        newPerson2.updateAttributeValue( Column.LAST_NAME, "G2");
        newPerson2.updateAttributeValue( Column.PHONE_NUMBER, "6049989898");

        incident1.addIncidentElement( DatabaseValues.IncidentElementKey.PERSON.toString(), newPerson1 );
        elementCount++;
        incident1.addIncidentElement( DatabaseValues.IncidentElementKey.PERSON.toString(), newPerson2 );
        elementCount++;

        int currentSize = getNumberOfIncidents ();
        Assert.assertTrue( DBHelper.insertIncident( incident1 ) );

        Incident [] incidents = DBHelper.getIncidents ();

        Assert.assertTrue( currentSize < incidents.length );

        Incident newlyInsertedIncident = getLastIncident();

        Assert.assertTrue( newlyInsertedIncident != null );

        HashMap< String, ArrayList<IncidentElement> > newMap = newlyInsertedIncident.getIncidentElements();
        Assert.assertTrue( !newMap.isEmpty() );
        Assert.assertTrue( newMap.get( DatabaseValues.IncidentElementKey.INCIDENT_CATEGORY.toString() ) != null );
        Assert.assertTrue( !newMap.get( DatabaseValues.IncidentElementKey.INCIDENT_CATEGORY.toString() ).isEmpty() );
        IncidentElement newCategory = newMap.get( DatabaseValues.IncidentElementKey.INCIDENT_CATEGORY.toString() ).get(0);

        Assert.assertTrue( incident1.getAttributeValue( Column.CATEGORY_ID )
                            .equals( newCategory.getAttributeValue( Column.CATEGORY_ID ) ));
        Assert.assertTrue( newCategory.getAttributeValue( Column.CATEGORY_ID ).equals( selectedCategoryId ) );

        Assert.assertTrue( newlyInsertedIncident.numIncidentElements() > 0 );

        // incident1 has 1 extra (duplicate) location
        if ( locations.length > 0 )
            Assert.assertTrue( newlyInsertedIncident.numIncidentElements() < incident1.numIncidentElements() );
    }

    @Test
    public void testInsertWithoutCategoryId() {
        IncidentElement[] categories = DBHelper.getIncidentElements( DatabaseValues.Table.INCIDENT_CATEGORY );
        IncidentElement[] staffList = DBHelper.getIncidentElements( DatabaseValues.Table.STAFF );

        if ( categories.length == 0 || staffList.length == 0 )
            return; // Nothing to test. Can't insert incident without CATEGORY_ID or ACCOUNT_ID

        Random rand = new Random();

        IncidentElement staff = staffList[ rand.nextInt( staffList.length ) ];

        Incident incident1 = new Incident();
        incident1.updateAttributeValue ( Column.REPORT_ID, null );
        incident1.updateAttributeValue ( Column.ACCOUNT_ID, staff.getAttributeValue( Column.ACCOUNT_ID ) );
        incident1.updateAttributeValue ( Column.CATEGORY_ID, null ); // VALUE TO TEST
        incident1.updateAttributeValue ( Column.DESCRIPTION, "TEST DESCRIPTION" );
        incident1.updateAttributeValue ( Column.EXECUTIVE_SUMMARY, "TEST SUMMARY" );
        incident1.updateAttributeValue ( Column.CLOSED, "0" );

        int currentSize = getNumberOfIncidents ();
        DBHelper.insertIncident( incident1 );

        Incident [] incidents = DBHelper.getIncidents ();

        Assert.assertTrue( currentSize == incidents.length );

        IncidentElement selectedCategory = categories[ rand.nextInt( categories.length-1 )];
        Assert.assertTrue( ( DatabaseValues.Table.INCIDENT_CATEGORY ).toString().contains( selectedCategory.getTable().toString() ) );

        String selectedCategoryId = selectedCategory.getAttributeValue( Column.CATEGORY_ID );
        Assert.assertTrue( !selectedCategoryId.isEmpty() );
    }

    @Test
    public void testInsertWithoutCategoryIdButCategoryInsideArray() {
        IncidentElement[] categories = DBHelper.getIncidentElements( DatabaseValues.Table.INCIDENT_CATEGORY );
        IncidentElement[] staffList = DBHelper.getIncidentElements( DatabaseValues.Table.STAFF );

        if ( categories.length == 0 || staffList.length == 0 )
            return; // Nothing to test. Can't insert incident without CATEGORY_ID or ACCOUNT_ID

        Random rand = new Random();

        IncidentElement staff = staffList[ rand.nextInt( staffList.length ) ];

        Incident incident1 = new Incident();
        incident1.updateAttributeValue ( Column.REPORT_ID, null );
        incident1.updateAttributeValue ( Column.ACCOUNT_ID, staff.getAttributeValue( Column.ACCOUNT_ID ) );
        incident1.updateAttributeValue ( Column.CATEGORY_ID, null ); // VALUE TO TEST
        incident1.updateAttributeValue ( Column.DESCRIPTION, "TEST DESCRIPTION" );
        incident1.updateAttributeValue ( Column.EXECUTIVE_SUMMARY, "TEST SUMMARY" );
        incident1.updateAttributeValue ( Column.CLOSED, "0" );

        IncidentElement selectedCategory = categories[ rand.nextInt( categories.length-1 )];
        Assert.assertTrue( ( DatabaseValues.Table.INCIDENT_CATEGORY ).toString().contains( selectedCategory.getTable().toString() ) );

        incident1.addIncidentElement( DatabaseValues.IncidentElementKey.INCIDENT_CATEGORY.toString(), selectedCategory );

        Assert.assertTrue( incident1.numIncidentElements() > 0 );

        int currentSize = getNumberOfIncidents ();
        Assert.assertTrue ( DBHelper.insertIncident( incident1 ) );

        Incident [] incidents = DBHelper.getIncidents ();

        Assert.assertTrue( currentSize < incidents.length );

        Incident newlyInsertedIncident = getLastIncident();

        Assert.assertTrue( newlyInsertedIncident != null );

        HashMap< String, ArrayList<IncidentElement> > newMap = newlyInsertedIncident.getIncidentElements();
        Assert.assertTrue( !newMap.isEmpty() );
        Assert.assertTrue( newMap.get( DatabaseValues.IncidentElementKey.INCIDENT_CATEGORY.toString() ) != null );
        Assert.assertTrue( !newMap.get( DatabaseValues.IncidentElementKey.INCIDENT_CATEGORY.toString() ).isEmpty() );
        IncidentElement newCategory = newMap.get( DatabaseValues.IncidentElementKey.INCIDENT_CATEGORY.toString() ).get(0);

        Assert.assertTrue( newCategory.getAttributeValue( Column.CATEGORY_ID ).toLowerCase()
                            .contains( selectedCategory.getAttributeValue( Column.CATEGORY_ID ).toLowerCase() ));

        Assert.assertTrue( newCategory.getAttributeValue( Column.CATEGORY_ID ).toLowerCase()
                            .contains( newlyInsertedIncident.getAttributeValue( Column.CATEGORY_ID ).toLowerCase() ));
    }

    @Test
    public void testUpdateIncident ()
    {
        Incident[] incidents = DBHelper.getIncidents();
        IncidentElement[] categories = DBHelper.getIncidentElements( DatabaseValues.Table.INCIDENT_CATEGORY );
        IncidentElement[] staffList = DBHelper.getIncidentElements( DatabaseValues.Table.STAFF );

        if ( categories.length == 0 || staffList.length == 0 )
            return; // Nothing to test. Can't insert incident without CATEGORY_ID or ACCOUNT_ID

        Random rand = new Random();

        IncidentElement selectedCategory = categories[ rand.nextInt( categories.length-1 )];
        Assert.assertTrue( ( DatabaseValues.Table.INCIDENT_CATEGORY ).toString().contains( selectedCategory.getTable().toString() ) );

        String selectedCategoryId = selectedCategory.getAttributeValue( Column.CATEGORY_ID );
        Assert.assertTrue( !selectedCategoryId.isEmpty() );

        IncidentElement staff = staffList[ rand.nextInt( staffList.length ) ];

        String reportId = incidents[ rand.nextInt( incidents.length - 1 )].getAttributeValue( Column.REPORT_ID );

        Incident incident1 = new Incident();
        incident1.updateAttributeValue ( Column.REPORT_ID, reportId );
        incident1.updateAttributeValue ( Column.ACCOUNT_ID, staff.getAttributeValue( Column.ACCOUNT_ID ) );
        incident1.updateAttributeValue ( Column.CATEGORY_ID, selectedCategoryId );
        incident1.updateAttributeValue ( Column.DESCRIPTION, "TEST DESCRIPTION" );
        incident1.updateAttributeValue ( Column.EXECUTIVE_SUMMARY, "TEST SUMMARY" );
        incident1.updateAttributeValue ( Column.CLOSED, "0" );


        int elementCount = 0;


        incident1.addIncidentElement( DatabaseValues.IncidentElementKey.INCIDENT_CATEGORY.toString(), selectedCategory );
        elementCount++;

        /***** STAFF *****/
        incident1.addIncidentElement( DatabaseValues.IncidentElementKey.STAFF.toString(), staff );
        elementCount++;

        /***** LOCATIONS *****/
        Location[] locations = DBHelper.getLocations();
        if ( locations.length > 0 ) {
            incident1.addIncidentElement( DatabaseValues.IncidentElementKey.LOCATION.toString(), locations[ rand.nextInt( locations.length ) ] );
            elementCount++;

            Location duplicateLoc = locations[ rand.nextInt( locations.length ) ];
            incident1.addIncidentElement( DatabaseValues.IncidentElementKey.LOCATION.toString(), duplicateLoc );
            elementCount++;

            // Add duplicate location. This should not be inserted in relation table
            incident1.addIncidentElement( DatabaseValues.IncidentElementKey.LOCATION.toString(), duplicateLoc );
        }

        /***** PERSONS *****/
        Person[] persons = DBHelper.getPersons();
        if ( persons.length > 0 ) {
            incident1.addIncidentElement( DatabaseValues.IncidentElementKey.PERSON.toString(), persons[ rand.nextInt(persons.length)] );
            elementCount++;

            Person duplicatePerson = persons[ rand.nextInt(persons.length)];
            incident1.addIncidentElement( DatabaseValues.IncidentElementKey.PERSON.toString(), duplicatePerson );
            elementCount++ ;

            // Add duplicate person. This should not be inserted in relation table
            incident1.addIncidentElement( DatabaseValues.IncidentElementKey.PERSON.toString(), duplicatePerson );
        }

        Person newPerson1 = new Person();
        newPerson1.updateAttributeValue( Column.PERSON_ID, null );
        newPerson1.updateAttributeValue( Column.FIRST_NAME, "Ralph");
        newPerson1.updateAttributeValue( Column.LAST_NAME, "G1");
        newPerson1.updateAttributeValue( Column.PHONE_NUMBER, "7788899393");

        Person newPerson2 = new Person();
        newPerson2.updateAttributeValue( Column.PERSON_ID, null );
        newPerson2.updateAttributeValue( Column.FIRST_NAME, "Ralph");
        newPerson2.updateAttributeValue( Column.LAST_NAME, "G2");
        newPerson2.updateAttributeValue( Column.PHONE_NUMBER, "6049989898");

        incident1.addIncidentElement( DatabaseValues.IncidentElementKey.PERSON.toString(), newPerson1 );
        elementCount++;
        incident1.addIncidentElement( DatabaseValues.IncidentElementKey.PERSON.toString(), newPerson2 );
        elementCount++;

        int currentSize = getNumberOfIncidents ();
        Assert.assertTrue( DBHelper.updateIncident( incident1 ) );

        Assert.assertTrue( currentSize == getNumberOfIncidents() );

        Incident newlyInsertedIncident = DBHelper.getIncident( reportId );

        Assert.assertTrue( newlyInsertedIncident != null );

        Assert.assertTrue( incident1.getAttributeValue( Column.CATEGORY_ID )
                .equals( newlyInsertedIncident.getAttributeValue( Column.CATEGORY_ID )));

        Assert.assertTrue( newlyInsertedIncident.getAttributeValue( Column.CATEGORY_ID ).equals( selectedCategoryId ) );
        Assert.assertTrue( newlyInsertedIncident.numIncidentElements() > 0 );

        // incident1 has 1 extra (duplicate) location
        if ( locations.length > 0 )
            Assert.assertTrue( newlyInsertedIncident.numIncidentElements() < incident1.numIncidentElements() );
    }

    @Test
    public void testAssignGuardToExistingIncident() {
        Incident[] incidents = DBHelper.getIncidents();
        IncidentElement[] staffList = DBHelper.getIncidentElements( DatabaseValues.Table.STAFF );

        if ( incidents.length == 0 || staffList.length == 0 )
            return; // Nothing to test. Can't insert incident without CATEGORY_ID or ACCOUNT_ID


        Random rand = new Random();

        IncidentElement staff = staffList[ rand.nextInt( staffList.length ) ];
        String staffID = staff.getAttributeValue( Column.ACCOUNT_ID );

        Incident incident = incidents[ rand.nextInt( incidents.length - 1 )];
        incident.addIncidentElement( DatabaseValues.IncidentElementKey.STAFF.toString(), staff );
        String reportID = incident.getAttributeValue( Column.REPORT_ID );

        int currentSize = getNumberOfIncidents();
        Assert.assertTrue( DBHelper.updateIncident( incident ) );
        Assert.assertTrue( currentSize == getNumberOfIncidents() );

        Incident updatedIncident = DBHelper.getIncident( reportID );
        Assert.assertTrue( updatedIncident != null );

        HashMap< String, ArrayList<IncidentElement> > newMap = updatedIncident.getIncidentElements();
        Assert.assertTrue( !newMap.isEmpty() );

        IncidentElement updatedStaff = newMap.get( DatabaseValues.IncidentElementKey.STAFF.toString() ).get(0);
        Assert.assertTrue( updatedStaff != null );
        Assert.assertTrue( updatedStaff.getAttributeValue( Column.ACCOUNT_ID ).equals( staffID ) );

    }

    @Test
    public void testAssignGuardToNewIncident() {
        Incident newIncident = new Incident();
        Random rand = new Random();

        IncidentElement[] categories = DBHelper.getIncidentElements( DatabaseValues.Table.INCIDENT_CATEGORY );
        IncidentElement[] staffList = DBHelper.getIncidentElements( DatabaseValues.Table.STAFF );

        if ( categories.length == 0 || staffList.length == 0 ) {
            System.out.println( "***** WARNING: Database table is empty.");
            return; // Nothing to test. Can't insert incident without CATEGORY_ID or ACCOUNT_ID
        }

        IncidentElement selectedCategory = categories[ rand.nextInt( categories.length-1 )];
        Assert.assertTrue( ( DatabaseValues.Table.INCIDENT_CATEGORY ).toString().contains( selectedCategory.getTable().toString() ) );

        String selectedCategoryId = selectedCategory.getAttributeValue( Column.CATEGORY_ID );
        Assert.assertTrue( !selectedCategoryId.isEmpty() );

        IncidentElement staff = staffList[ rand.nextInt( staffList.length ) ];
        IncidentElement assignStaff = staffList[ rand.nextInt( staffList.length ) ];

        if ( staffList.length > 1 ) {
            while ( staff.getAttributeValue( Column.ACCOUNT_ID ).equals( assignStaff.getAttributeValue( Column.ACCOUNT_ID ) )) {
                assignStaff = staffList[ rand.nextInt( staffList.length ) ];
            }
            Assert.assertTrue( staff != assignStaff );
        }

        String staffID = assignStaff.getAttributeValue( Column.ACCOUNT_ID );

        newIncident.updateAttributeValue ( Column.REPORT_ID, null );
        newIncident.updateAttributeValue ( Column.ACCOUNT_ID, staff.getAttributeValue( Column.ACCOUNT_ID ) );
        newIncident.updateAttributeValue ( Column.CATEGORY_ID, selectedCategoryId );
        newIncident.updateAttributeValue ( Column.DESCRIPTION, "TEST DESCRIPTION" );
        newIncident.updateAttributeValue ( Column.EXECUTIVE_SUMMARY, "TEST SUMMARY" );

        newIncident.addIncidentElement( DatabaseValues.IncidentElementKey.STAFF.toString(), assignStaff );

        int currentSize = getNumberOfIncidents();

        Assert.assertTrue( DBHelper.insertIncident( newIncident ));
        Assert.assertTrue( currentSize < getNumberOfIncidents() );

        Incident newlyInsertedIncident = getLastIncident();
        Assert.assertTrue( newlyInsertedIncident != null );

        HashMap< String, ArrayList<IncidentElement> > newMap = newlyInsertedIncident.getIncidentElements();
        Assert.assertTrue( !newMap.isEmpty() );

        IncidentElement insertedStaff = newMap.get( DatabaseValues.IncidentElementKey.STAFF.toString()).get(0);
        Assert.assertTrue( insertedStaff != null );
        Assert.assertTrue( insertedStaff.getAttributeValue( Column.ACCOUNT_ID ).equals( staffID ) );
    }

    @Test
    public void testRemoveGuardFromIncident() {
        Incident[] incidents = DBHelper.getIncidents();
        IncidentElement[] staffList = DBHelper.getIncidentElements( DatabaseValues.Table.STAFF );

        if ( incidents.length == 0 || staffList.length == 0 )
            return; // Nothing to test

        Random rand = new Random();

        Incident incident = incidents[ rand.nextInt( incidents.length - 1 ) ];
        IncidentElement staff = staffList[ rand.nextInt( staffList.length - 1 ) ];
        Assert.assertTrue( staff != null );
        String reportID = incident.getAttributeValue( Column.REPORT_ID );

        incident.addIncidentElement( DatabaseValues.IncidentElementKey.STAFF.toString(), staff );
        Assert.assertTrue( DBHelper.updateIncident( incident ) );

        Incident updatedIncident = DBHelper.getIncident( reportID );
        Assert.assertTrue( updatedIncident != null );

        HashMap< String, ArrayList<IncidentElement> > newMap = updatedIncident.getIncidentElements();
        Assert.assertTrue( newMap != null && !newMap.isEmpty() );

        Assert.assertTrue( ! ( newMap.get( DatabaseValues.IncidentElementKey.STAFF.toString() ).isEmpty() ) );
        newMap.get( DatabaseValues.IncidentElementKey.STAFF.toString() ).remove(0  ); // Remove staff
        incident.changeIncidentElements( newMap );

        Assert.assertTrue( DBHelper.updateIncident( incident ) );

        Incident updatedIncident2 = DBHelper.getIncident( reportID );
        Assert.assertTrue( updatedIncident2 != null );

        HashMap< String, ArrayList<IncidentElement> > updatedMap = updatedIncident2.getIncidentElements();
        if ( updatedMap.containsKey( DatabaseValues.IncidentElementKey.STAFF.toString() ) )
            Assert.assertTrue( updatedMap.get( DatabaseValues.IncidentElementKey.STAFF.toString() ).isEmpty() );
    }

    @Test
    public void testInsertWithNonExistingAccountId() {
        IncidentElement[] categories = DBHelper.getIncidentElements( DatabaseValues.Table.INCIDENT_CATEGORY );
        if ( categories.length == 0 )
            return; // Nothing to test

        Random rand = new Random();

        IncidentElement selectedCategory = categories[ rand.nextInt( categories.length-1 )];
        Assert.assertTrue( ( DatabaseValues.Table.INCIDENT_CATEGORY ).toString().contains( selectedCategory.getTable().toString() ) );

        String selectedCategoryId = selectedCategory.getAttributeValue( Column.CATEGORY_ID );
        Assert.assertTrue( !selectedCategoryId.isEmpty() );

        Incident incident1 = new Incident();
        incident1.updateAttributeValue ( Column.REPORT_ID, null );
        incident1.updateAttributeValue ( Column.ACCOUNT_ID, null );
        incident1.updateAttributeValue ( Column.CATEGORY_ID, selectedCategoryId );
        incident1.updateAttributeValue ( Column.DESCRIPTION, "TEST DESCRIPTION" );
        incident1.updateAttributeValue ( Column.EXECUTIVE_SUMMARY, "TEST SUMMARY" );
        incident1.updateAttributeValue ( Column.CLOSED, "0" );

        Assert.assertFalse( DBHelper.insertIncident( incident1 ) );
    }

    @Test
    public void testSelectIncident ()
    {
        Incident [] incidents = DBHelper.getIncidents ();

        if ( incidents.length == 0 ) return;

        Incident incident = incidents [ incidents.length - 1 ];

        Assert.assertTrue( DBHelper.selectIncident( incident ) );
    }

    private int getNumberOfIncidents ()
    {
        String query = "SELECT COUNT (distinct REPORT_ID) as 'size' FROM dbo.Incident";
        try {
            ResultSet result = DBHelper.executeQuery ( query );
            while ( result.next() )
            {
                return result.getInt ("size");
            }
        }
        catch ( Exception e ) {
            e.printStackTrace ();
        }
        return 0;
    }

    private Incident getLastIncident() {
        String query = "SELECT top 1 * FROM dbo.Incident order by REPORT_ID desc;";
        try {
            ResultSet result = DBHelper.executeQuery ( query );
            while ( result.next() )
            {
                Incident incident = new Incident ();
                incident.extractFromCurrentRow ( result );
                HashMap < String , ArrayList < IncidentElement > > incidentElementsList = DBHelper.getIncidentElements ( Integer.parseInt (incident.getAttributeValue ( DatabaseValues.Column.REPORT_ID ) ) );
                incident.changeIncidentElements ( incidentElementsList );
                return incident;
            }
        }
        catch ( Exception e ) {
            e.printStackTrace ();
        }
        return null;
    }

}
