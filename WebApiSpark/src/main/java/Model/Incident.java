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
                ""
        );
    }

    public Incident (
            String reportID,
            String accountID,
            String categoryID,
            String description,
            String executiveSummary,
            String closed
    ) {
        super (
                DatabaseValues.DatabaseTable.INCIDENT,
                new DatabaseValues.DatabaseColumn []
                {
                        DatabaseValues.DatabaseColumn.REPORT_ID,
                        DatabaseValues.DatabaseColumn.ACCOUNT_ID,
                        DatabaseValues.DatabaseColumn.CATEGORY_ID,
                        DatabaseValues.DatabaseColumn.DESCRIPTION,
                        DatabaseValues.DatabaseColumn.EXECUTIVE_SUMMARY,
                        DatabaseValues.DatabaseColumn.CLOSED
                }
        );

        editColumnValue (
                DatabaseValues.DatabaseColumn.REPORT_ID,
                reportID
        );

        editColumnValue (
                DatabaseValues.DatabaseColumn.ACCOUNT_ID,
                accountID
        );


        editColumnValue (
                DatabaseValues.DatabaseColumn.CATEGORY_ID,
                categoryID
        );

        editColumnValue (
                DatabaseValues.DatabaseColumn.DESCRIPTION,
                description
        );

        editColumnValue (
                DatabaseValues.DatabaseColumn.EXECUTIVE_SUMMARY,
                executiveSummary
        );

        editColumnValue (
                DatabaseValues.DatabaseColumn.CLOSED,
                closed
        );
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

    public ArrayList <IncidentElement> getIncidentElements() {
        return this.incidentElements;
    }
}
