package UnitTests;

import Model.*;
import Util.DBHelper;
import Util.DatabaseValues;
import Util.DatabaseValues.Column;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.Random;

import org.junit.Assert;
import org.junit.Test;

public class TestIncident
{

    @Test
    public void testInsertIncident ()
    {
        IncidentElement[] categories = DBHelper.getIncidentElements( DatabaseValues.Table.INCIDENT_CATEGORY );
        Assert.assertTrue( categories.length > 0);

        Random rand = new Random();

        IncidentElement selectedCategory = categories[ rand.nextInt( categories.length-1 )];
        Assert.assertTrue( ( DatabaseValues.Table.INCIDENT_CATEGORY ).toString().contains( selectedCategory.getTable().toString() ) );

        String selectedCategoryId = selectedCategory.getAttributeValue( Column.CATEGORY_ID );
        Assert.assertTrue( !selectedCategoryId.isEmpty() );

        IncidentElement[] staffList = DBHelper.getIncidentElements( DatabaseValues.Table.STAFF );
        IncidentElement staff = staffList[ rand.nextInt( staffList.length ) ];

        Incident incident1 = new Incident();
        incident1.updateAttributeValue ( Column.REPORT_ID, null );
        incident1.updateAttributeValue ( Column.ACCOUNT_ID, staff.getAttributeValue( Column.ACCOUNT_ID ) );
        incident1.updateAttributeValue ( Column.CATEGORY_ID, selectedCategoryId );
        incident1.updateAttributeValue ( Column.DESCRIPTION, "TEST DESCRIPTION" );
        incident1.updateAttributeValue ( Column.EXECUTIVE_SUMMARY, "TEST SUMMARY" );
        incident1.updateAttributeValue ( Column.CLOSED, "0" );


        int elementCount = 0;


        incident1.addIncidentElement( selectedCategory );
        elementCount++;

        /***** STAFF *****/
        incident1.addIncidentElement( staff );
        elementCount++;

        /***** LOCATIONS *****/
        Location[] locations = DBHelper.getLocations();
        Assert.assertTrue( locations.length > 0);
        incident1.addIncidentElement( locations[ rand.nextInt( locations.length ) ] );
        elementCount++;

        Location duplicateLoc = locations[ rand.nextInt( locations.length ) ];
        incident1.addIncidentElement( duplicateLoc );
        elementCount++;

        // Add duplicate location. This should not be inserted in relation table
        incident1.addIncidentElement( duplicateLoc );


        /***** PERSONS *****/
        Person[] persons = DBHelper.getPersons();
        incident1.addIncidentElement( persons[ rand.nextInt(persons.length)] );
        elementCount++;

        Person duplicatePerson = persons[ rand.nextInt(persons.length)];
        incident1.addIncidentElement( duplicatePerson );
        elementCount++ ;

        // Add duplicate person. This should not be inserted in relation table
        incident1.addIncidentElement( duplicatePerson );

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

        incident1.addIncidentElement( newPerson1 );
        elementCount++;
        incident1.addIncidentElement( newPerson2 );
        elementCount++;

        int currentSize = getNumberOfIncidents ();
        String incidentString = "{ call dbo.insertIncident ( ? , ? , ? , ? , ? ) } ";
        DBHelper.insertIncident( incidentString,  incident1 );

        Incident [] incidents = DBHelper.getIncidents ();

        Assert.assertTrue( currentSize < incidents.length );

        Incident newlyInsertedIncident = getLastIncident();
        //Assert.assertTrue( elementCount == newlyInsertedIncident.numIncidentElements() );

        ArrayList<Person> _persons = new ArrayList<>();
        for (int i = 0; i < newlyInsertedIncident.numIncidentElements() ; i+=1 ) {
            if ( DatabaseValues.Table.PERSON.toString().toLowerCase()
                    .contains( newlyInsertedIncident.getIncidentElement(i).getTable().toString().toLowerCase() )
                ) {
                _persons.add( (Person)newlyInsertedIncident.getIncidentElement(i) );
            }
        }

        //Assert.assertTrue( _persons.size() > 0 );
        //Assert.assertTrue( newlyInsertedIncident.numIncidentElements() == elementCount);
        /*

        Assert.assertTrue( persons.size() == 2 );
        */
        Assert.assertTrue( newlyInsertedIncident.getAttributeValue( Column.CATEGORY_ID ).equals( selectedCategoryId ) );
        Assert.assertTrue( newlyInsertedIncident.numIncidentElements() > 0 );

        // incident1 has 1 extra (duplicate) location
        Assert.assertTrue( newlyInsertedIncident.numIncidentElements() < incident1.numIncidentElements() );
    }

    @Test
    public void testInsertWithoutCategoryId() {
        IncidentElement[] categories = DBHelper.getIncidentElements( DatabaseValues.Table.INCIDENT_CATEGORY );
        Assert.assertTrue( categories.length > 0);

        Random rand = new Random();

        IncidentElement[] staffList = DBHelper.getIncidentElements( DatabaseValues.Table.STAFF );
        IncidentElement staff = staffList[ rand.nextInt( staffList.length ) ];

        Incident incident1 = new Incident();
        incident1.updateAttributeValue ( Column.REPORT_ID, null );
        incident1.updateAttributeValue ( Column.ACCOUNT_ID, staff.getAttributeValue( Column.ACCOUNT_ID ) );
        incident1.updateAttributeValue ( Column.CATEGORY_ID, null ); // VALUE TO TEST
        incident1.updateAttributeValue ( Column.DESCRIPTION, "TEST DESCRIPTION" );
        incident1.updateAttributeValue ( Column.EXECUTIVE_SUMMARY, "TEST SUMMARY" );
        incident1.updateAttributeValue ( Column.CLOSED, "0" );

        int currentSize = getNumberOfIncidents ();
        String incidentString = "{ call dbo.insertIncident ( ? , ? , ? , ? , ? ) } ";
        DBHelper.insertIncident( incidentString,  incident1 );

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
        Assert.assertTrue( categories.length > 0);

        Random rand = new Random();

        IncidentElement[] staffList = DBHelper.getIncidentElements( DatabaseValues.Table.STAFF );
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

        incident1.addIncidentElement( selectedCategory );

        Assert.assertTrue( incident1.numIncidentElements() > 0 );

        int currentSize = getNumberOfIncidents ();
        String incidentString = "{ call dbo.insertIncident ( ? , ? , ? , ? , ? ) } ";
        DBHelper.insertIncident( incidentString,  incident1 );

        Incident [] incidents = DBHelper.getIncidents ();

        Assert.assertTrue( currentSize < incidents.length );

        Incident newlyAddedIncident = incidents[ incidents.length - 1 ];

        Assert.assertTrue( incident1.numIncidentElements() > 0 );

        IncidentElement incidentCategory = newlyAddedIncident.getIncidentElement( 0 );

        Assert.assertTrue( incidentCategory.getAttributeValue( Column.CATEGORY_ID ).toLowerCase()
                            .contains( selectedCategory.getAttributeValue( Column.CATEGORY_ID ).toLowerCase() ));

        Assert.assertTrue( incidentCategory.getAttributeValue( Column.CATEGORY_ID ).toLowerCase()
                            .contains( newlyAddedIncident.getAttributeValue( Column.CATEGORY_ID ).toLowerCase() ));
    }

    @Test
    public void testUpdateIncident ()
    {
        Incident [] incidents = DBHelper.getIncidents ();

        if ( incidents.length == 0 ) return;

        Incident incident = incidents [ incidents.length - 1 ];
        Assert.assertTrue( incident.getAttributeValue ( DatabaseValues.Column.REPORT_ID ) != null );

        String editedDescription = "EDITED DESCRIPTION";
        incident.updateAttributeValue ( DatabaseValues.Column.DESCRIPTION, editedDescription );

        int currentSize = getNumberOfIncidents ();
        DBHelper.updateIncident ( incident );
        incidents = DBHelper.getIncidents ();

        Assert.assertTrue ( currentSize == incidents.length );

        incident = incidents [ incidents.length - 1 ];
        Assert.assertTrue ( incident.getAttributeValue ( DatabaseValues.Column.DESCRIPTION )
                            .equals ( editedDescription ) );
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

                ArrayList < IncidentElement > incidentElementsList = DBHelper.getIncidentElements ( Integer.parseInt (incident.getAttributeValue ( DatabaseValues.Column.REPORT_ID ) ) );

                incident.changeIncidentElementList ( incidentElementsList );
                return incident;
            }
        }
        catch ( Exception e ) {
            e.printStackTrace ();
        }
        return null;
    }

}
