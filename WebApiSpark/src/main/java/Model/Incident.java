package Model;

import Util.DatabaseValues;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

public class Incident extends StorageObject
{
    private HashMap<String, ArrayList<IncidentElement>> incidentElements = new HashMap <> ();

    public Incident ( )
    {
        this (
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                ""
        );
    }

    public Incident (
            String reportID,
            String accountID,
            String categoryID,
            String description,
            String executiveSummary,
            String searchText,
            String status,
            String startTime,
            String endTime,
            String temporaryReport,
            String timerStart,
            String timerEnd
    ) {
        super (
                DatabaseValues.Table.INCIDENT,
                new DatabaseValues.Column[]
                {
                        DatabaseValues.Column.REPORT_ID,
                        DatabaseValues.Column.ACCOUNT_ID,
                        DatabaseValues.Column.CATEGORY_ID,
                        DatabaseValues.Column.DESCRIPTION,
                        DatabaseValues.Column.EXECUTIVE_SUMMARY,
                        DatabaseValues.Column.SEARCH_TEXT,
                        DatabaseValues.Column.STATUS,
                        DatabaseValues.Column.START_TIME,
                        DatabaseValues.Column.END_TIME,
                        DatabaseValues.Column.TEMPORARY_REPORT,
                        DatabaseValues.Column.TIMER_START,
                        DatabaseValues.Column.TIMER_END
                }
        );

        updateAttributeValue(
                DatabaseValues.Column.REPORT_ID,
                reportID
        );

        updateAttributeValue(
                DatabaseValues.Column.ACCOUNT_ID,
                accountID
        );


        updateAttributeValue(
                DatabaseValues.Column.CATEGORY_ID,
                categoryID
        );

        updateAttributeValue(
                DatabaseValues.Column.DESCRIPTION,
                description
        );

        updateAttributeValue(
                DatabaseValues.Column.EXECUTIVE_SUMMARY,
                executiveSummary
        );

        updateAttributeValue(
                DatabaseValues.Column.SEARCH_TEXT,
                searchText
        );

        updateAttributeValue(
                DatabaseValues.Column.STATUS,
                status
        );

        updateAttributeValue(
                DatabaseValues.Column.START_TIME,
                startTime
        );

        updateAttributeValue(
                DatabaseValues.Column.END_TIME,
                endTime
        );

        updateAttributeValue(
                DatabaseValues.Column.TEMPORARY_REPORT,
                temporaryReport
        );

        updateAttributeValue(
                DatabaseValues.Column.TIMER_START,
                timerStart
        );

        updateAttributeValue(
                DatabaseValues.Column.TIMER_END,
                timerEnd
        );
//        incidentElementsHash.put ("Location" , new ArrayList <> () );
//        incidentElementsHash.put ("Staff" , new ArrayList <> () );
//        incidentElementsHash.put ("Person" , new ArrayList <> () );

    }

    public void changeIncidentElements ( HashMap < String , ArrayList < IncidentElement > > incidentElements) {
        this.incidentElements = incidentElements;
    }

    public HashMap < String , ArrayList < IncidentElement > > getIncidentElements () {
        return this.incidentElements;
    }

    public boolean addIncidentElement ( String key , IncidentElement incidentElement )
    {
        if ( incidentElement == null)
        {
            return false;
        }

        if ( ( !incidentElements.keySet().contains( key ) ) && DatabaseValues.IncidentElementKey.contains( key )) {
            incidentElements.put( key, new ArrayList<>() );
        }

        ArrayList<IncidentElement> list = incidentElements.get( key );
        list.add ( incidentElement );
        return true;
    }

    public int size ( String key ) {
        return incidentElements.get( key ).size();
    }

    public int numIncidentElements() {
        int total = 0;
        Iterator it = incidentElements.entrySet().iterator();
        while ( it.hasNext() ) {
            Map.Entry pair = (Map.Entry)it.next();
            total += size( pair.getKey().toString() );
        }

        return total;
    }

    public void updateSearchString() {
        StringBuilder sb = new StringBuilder();

        sb.append(this.getAttributeValue(DatabaseValues.Column.DESCRIPTION));
        sb.append(" ");
        sb.append(this.getAttributeValue(DatabaseValues.Column.EXECUTIVE_SUMMARY));

        for( Map.Entry< String, ArrayList< IncidentElement > > entry : this.incidentElements.entrySet() ) {
            ArrayList< IncidentElement > list = entry.getValue();
            System.out.println( entry.getKey() );
            for( IncidentElement element : list ) {
                if( entry.getKey().equals( "Location" ) ) {
                    Location location = new Location();
                    location.updateAttributeValue( DatabaseValues.Column.BUILDING_NAME, element.getAttributeValue( DatabaseValues.Column.BUILDING_NAME) );
                    location.updateAttributeValue( DatabaseValues.Column.ROOM_NUMBER, element.getAttributeValue( DatabaseValues.Column.ROOM_NUMBER ) );
                    location.updateAttributeValue( DatabaseValues.Column.DEPARTMENT, element.getAttributeValue( DatabaseValues.Column.DEPARTMENT ) );
                    sb.append(" ");
                    sb.append(location.toSearchString());
                } else if ( entry.getKey().equals( "IncidentCategory" ) ) {
                    IncidentCategory category = new IncidentCategory();
                    category.updateAttributeValue( DatabaseValues.Column.MAIN_CATEGORY, element.getAttributeValue( DatabaseValues.Column.MAIN_CATEGORY) );
                    category.updateAttributeValue( DatabaseValues.Column.SUB_CATEGORY, element.getAttributeValue( DatabaseValues.Column.SUB_CATEGORY ) );
                    category.updateAttributeValue( DatabaseValues.Column.INCIDENT_TYPE, element.getAttributeValue( DatabaseValues.Column.INCIDENT_TYPE ) );
                    sb.append(" ");
                    sb.append(category.toSearchString());
                } else if ( entry.getKey().equals( "Person" ) ) {
                    Person person = new Person();
                    person.updateAttributeValue( DatabaseValues.Column.FIRST_NAME, element.getAttributeValue( DatabaseValues.Column.FIRST_NAME ) );
                    person.updateAttributeValue( DatabaseValues.Column.LAST_NAME, element.getAttributeValue( DatabaseValues.Column.LAST_NAME ) );
                    person.updateAttributeValue( DatabaseValues.Column.PHONE_NUMBER, element.getAttributeValue( DatabaseValues.Column.PHONE_NUMBER ) );
                    sb.append(" ");
                    sb.append(person.toSearchString());
                } else if ( entry.getKey().equals( "Staff" ) ) {
                    Staff staff = new Staff();
                    staff.updateAttributeValue( DatabaseValues.Column.FIRST_NAME, element.getAttributeValue( DatabaseValues.Column.FIRST_NAME ) );
                    staff.updateAttributeValue( DatabaseValues.Column.LAST_NAME, element.getAttributeValue( DatabaseValues.Column.LAST_NAME ) );
                    sb.append(" ");
                    sb.append(staff.toSearchString());
                }
            }
        }


        this.updateAttributeValue( DatabaseValues.Column.SEARCH_TEXT, sb.toString() );
    }
//    public String [] incidentElementsToInsertSQL ()
//    {
//        ArrayList < String > sqlStatements = new ArrayList ();
//        for ( IncidentElement incidentElement : incidentElements )
//        {
//            if ( incidentElement instanceof StorageObject ) {
//                sqlStatements.add ( ( ( StorageObject ) incidentElement ).toInsertSQL () );
//            }
//        }
//
//        return sqlStatements.toArray ( new String [ incidentElements.size () ] );
//    }
//
//    public String [] incidentElementsToUpdateSQL ()
//    {
//        ArrayList < String > sqlStatements = new ArrayList ();
//        for ( IncidentElement incidentElement : incidentElements )
//        {
//            if ( incidentElement instanceof StorageObject ) {
//                sqlStatements.add ( ( ( StorageObject ) incidentElement ).toUpdateSQL () );
//            }
//        }
//
//        return sqlStatements.toArray ( new String [ incidentElements.size () ] );
//    }
//
//    public String [] incidentElementsToDeleteSQL ()
//    {
//        ArrayList < String > sqlStatements = new ArrayList ();
//        for ( IncidentElement incidentElement : incidentElements )
//        {
//            if ( incidentElement instanceof StorageObject ) {
//                sqlStatements.add ( ( ( StorageObject ) incidentElement ).toDeleteSQL () );
//            }
//        }
//
//        return sqlStatements.toArray ( new String [ incidentElements.size () ] );
//    }d
}
