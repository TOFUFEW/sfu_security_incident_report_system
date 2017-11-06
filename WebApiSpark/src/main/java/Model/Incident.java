package Model;

import Util.DatabaseValues;

import java.util.ArrayList;
import java.util.HashMap;

public class Incident extends StorageObject
{
    private HashMap < String , ArrayList < IncidentElement > > incidentElements = new HashMap <> ();

    public Incident ( )
    {
        this (
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
            String status
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
                        DatabaseValues.Column.STATUS
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
                DatabaseValues.Column.STATUS,
                status
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
        incidentElements.get( key ).add ( incidentElement );
        return true;
    }

    public int size ( String key ) {
        return incidentElements.get( key ).size();
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
