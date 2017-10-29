package UnitTests;

import Model.*;
import Util.DBHelper;
import Util.DatabaseValues;
import org.junit.Assert;
import org.junit.Test;

import java.util.ArrayList;

public class TestDBHelper {
/*
    @Test
    public void testGetLastIncident(){
        Incident[] incidents = DBHelper.getIncidents();
        if ( incidents.length == 0 )
            return;

        Incident incident1 = incidents[ incidents.length - 1];

        Incident incident2 = DBHelper.getLastIncident();

        Assert.assertTrue( incident1.getAttributeValue( DatabaseValues.Column.REPORT_ID )
                            .equals( incident2.getAttributeValue( DatabaseValues.Column.REPORT_ID ) ));
    }

    @Test
    public void testRelationExists() {
        Incident incident = DBHelper.getLastIncident();

        if (incident == null)
            return;

        String reportId = incident.getAttributeValue( DatabaseValues.Column.REPORT_ID );
        ArrayList<Location> locations = new ArrayList<>();
        ArrayList<Person> persons = new ArrayList<>();

        for (int i = 0; i < incident.numIncidentElements() ; i += 1 ) {
            IncidentElement ie = incident.getIncidentElement(i);
            String table = ie.getTable().toString();

            if ( DatabaseValues.Table.LOCATION.toString().contains( table ) ) {
                Assert.assertTrue( DBHelper.relationExists( reportId, ie ) );
                locations.add( (Location) ie );
            }
            else if ( DatabaseValues.Table.PERSON.toString().contains( table ) ) {
                Assert.assertTrue( DBHelper.relationExists( reportId, ie ) );
                persons.add( (Person) ie);
            }
        }

        Location[] allLocations = DBHelper.getLocations();

        for( Location loc : allLocations) {
            if ( inLocationList( locations, loc ) ) {
                Assert.assertTrue( DBHelper.relationExists( reportId, loc ));
            }
            else {
                Assert.assertFalse( DBHelper.relationExists( reportId, loc ));
            }
        }


        Person[] allPersons = DBHelper.getPersons();
        Person person = new Person();


    }
*/
    private boolean inLocationList( ArrayList<Location> locations, Location location ) {
        String id = location.getAttributeValue( DatabaseValues.Column.LOCATION_ID );
        for( Location loc : locations ) {
            if ( loc.getAttributeValue(DatabaseValues.Column.LOCATION_ID).equals( id ))
                return true;
        }
        return false;
    }

    private boolean inPersonList( ArrayList<Person> persons, Person person) {
        String id = person.getAttributeValue( DatabaseValues.Column.PERSON_ID );
        for( Person per : persons ) {
            if ( per.getAttributeValue(DatabaseValues.Column.PERSON_ID).equals( id ))
                return true;
        }
        return false;
    }
}
