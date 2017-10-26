package UnitTests;

import Model.*;
import Util.DBHelper;
import Util.DatabaseValues;
import Util.DatabaseValues.Column;

import java.sql.ResultSet;
import java.util.ArrayList;

import org.junit.Assert;
import org.junit.Test;

public class TestIncident
{

    @Test
    public void testInsertIncident ()
    {
        Location[] locations = DBHelper.getLocations();
        Assert.assertTrue( locations.length > 0);

        IncidentElement[] categories = DBHelper.getIncidentElements( DatabaseValues.Table.INCIDENT_CATEGORY );
        Assert.assertTrue( categories.length > 0);

        IncidentElement selectedCategory = categories[categories.length-1];
        Assert.assertTrue( ( DatabaseValues.Table.INCIDENT_CATEGORY ).toString().contains( selectedCategory.getTable().toString() ) );

        String selectedCategoryId = selectedCategory.getAttributeValue( Column.CATEGORY_ID );
        Assert.assertTrue( !selectedCategoryId.isEmpty() );

        Incident incident1 = new Incident();
        incident1.updateAttributeValue ( Column.REPORT_ID, null );
        incident1.updateAttributeValue ( Column.ACCOUNT_ID, "1" );
        incident1.updateAttributeValue ( Column.CATEGORY_ID, selectedCategoryId );
        incident1.updateAttributeValue ( Column.DESCRIPTION, "TEST DESCRIPTION" );
        incident1.updateAttributeValue ( Column.EXECUTIVE_SUMMARY, "TEST SUMMARY" );
        incident1.updateAttributeValue ( Column.CLOSED, "0" );

        incident1.addIncidentElement( selectedCategory );
        incident1.addIncidentElement( locations[0] );

        if ( !( locations.length == 1 )) {
            incident1.addIncidentElement( locations[ locations.length-1 ]);
        }

        // Add duplicate location. This should not be inserted in relation table
        incident1.addIncidentElement( locations[0] );

        int currentSize = getNumberOfIncidents ();
        String incidentString = "{ call dbo.insertIncident ( ? , ? , ? , ? , ? ) } ";
        DBHelper.insertIncident(
                incidentString,
                incident1
        );
        Incident [] incidents = DBHelper.getIncidents ();

        Assert.assertTrue( currentSize < incidents.length );

        Incident newlyInsertedIncident = incidents[ incidents.length - 1 ];
        Assert.assertTrue( newlyInsertedIncident.getAttributeValue( Column.CATEGORY_ID ).equals( selectedCategoryId ) );
        Assert.assertTrue( newlyInsertedIncident.numIncidentElements() > 0 );

        // incident1 has 1 extra (duplicate) location
        Assert.assertTrue( newlyInsertedIncident.numIncidentElements() < incident1.numIncidentElements() );



        /*
        Location location1 = new Location (
                null, // notice how this is null? Tells class to ignore the column and its value when creating Insert SQL
                "1",
                "TEST BLDG 1",
                "4000",
                "SOSY"
        );

        Assert.assertTrue ( DBHelper.insertIncidentElement ( location1 ) );
        String location1ID = TestLocation.DEBUG_getLargestLocationIDFromTable ();
        location1.updateAttributeValue (
                Column.LOCATION_ID,
                location1ID
        );

        Location location2 = new Location (
                null, // notice how this is null? Tells class to ignore the column and its value when creating Insert SQL
                "1",
                "TEST BLDG 2",
                "4000",
                "CMPT"
        );

        Assert.assertTrue ( DBHelper.insertIncidentElement ( location2 ) );
        String location2ID = TestLocation.DEBUG_getLargestLocationIDFromTable ();
        location2.updateAttributeValue (
                Column.LOCATION_ID,
                location2ID
        );

        IncidentElement [] staff = DBHelper.getIncidentElements ( DatabaseValues.Table.STAFF );
        Assert.assertTrue ( staff.length > 0 );


        Incident incident = new Incident ();
        incident.updateAttributeValue ( Column.REPORT_ID, null );
        incident.updateAttributeValue ( DatabaseValues.Column.ACCOUNT_ID, "1" );
        incident.updateAttributeValue ( Column.CATEGORY_ID, "1" );
        incident.updateAttributeValue ( DatabaseValues.Column.DESCRIPTION, "TEST DESCRIPTION" );
        incident.updateAttributeValue ( DatabaseValues.Column.EXECUTIVE_SUMMARY, "TEST SUMMARY" );
        incident.updateAttributeValue ( DatabaseValues.Column.CLOSED, "0" );
        incident.addIncidentElement( location1 );
        incident.addIncidentElement( location2 );
        incident.addIncidentElement( location1 ); // Duplicate location

        int currentSize = getNumberOfIncidents ();
        String incidentString = "{ call dbo.insertIncident ( ? , ? , ? , ? , ? ) } ";
        DBHelper.insertIncident(
                incidentString,
                incident
        );
        Incident [] incidents = DBHelper.getIncidents ();

        Assert.assertTrue( currentSize < incidents.length );
        */
    }

    /*
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
*/
    public int getNumberOfIncidents ()
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
}
