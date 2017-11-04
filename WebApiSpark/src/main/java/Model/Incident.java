package Model;

import Util.DatabaseValues;

import java.util.ArrayList;

public class Incident extends StorageObject
{
    private ArrayList< IncidentElement > incidentElements = new ArrayList ();

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
                ""
        );
    }

    public Incident (
            String reportID,
            String accountID,
            String categoryID,
            String description,
            String executiveSummary,
            String status,
            String startTime,
            String endTime
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
                        DatabaseValues.Column.STATUS,
                        DatabaseValues.Column.START_TIME,
                        DatabaseValues.Column.END_TIME
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

        updateAttributeValue(
                DatabaseValues.Column.START_TIME,
                startTime
        );

        updateAttributeValue(
                DatabaseValues.Column.END_TIME,
                endTime
        );
    }

    public void changeIncidentElementList ( ArrayList < IncidentElement > incidentElementsList ) {
        this.incidentElements = incidentElementsList;
    }

    public boolean addIncidentElement ( IncidentElement incidentElement )
    {
        if ( incidentElement == null)
        {
            return false;
        }
        incidentElements.add ( incidentElement );
        return true;
    }

    public String [] incidentElementsToInsertSQL ()
    {
        ArrayList < String > sqlStatements = new ArrayList ();
        for ( IncidentElement incidentElement : incidentElements )
        {
            if ( incidentElement instanceof StorageObject ) {
                sqlStatements.add ( ( ( StorageObject ) incidentElement ).toInsertSQL () );
            }
        }

        return sqlStatements.toArray ( new String [ incidentElements.size () ] );
    }

    public String [] incidentElementsToUpdateSQL ()
    {
        ArrayList < String > sqlStatements = new ArrayList ();
        for ( IncidentElement incidentElement : incidentElements )
        {
            if ( incidentElement instanceof StorageObject ) {
                sqlStatements.add ( ( ( StorageObject ) incidentElement ).toUpdateSQL () );
            }
        }

        return sqlStatements.toArray ( new String [ incidentElements.size () ] );
    }

    public String [] incidentElementsToDeleteSQL ()
    {
        ArrayList < String > sqlStatements = new ArrayList ();
        for ( IncidentElement incidentElement : incidentElements )
        {
            if ( incidentElement instanceof StorageObject ) {
                sqlStatements.add ( ( ( StorageObject ) incidentElement ).toDeleteSQL () );
            }
        }

        return sqlStatements.toArray ( new String [ incidentElements.size () ] );
    }

    public int numIncidentElements ()
    {
        return incidentElements.size ();
    }

    public IncidentElement getIncidentElement ( int i )
    {
        if ( i < incidentElements.size () )
        {
            return incidentElements.get ( i );
        }
        return null;
    }
}
