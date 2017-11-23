package Model;


import Util.DatabaseValues;

public class Attachment extends IncidentElement
{
    public Attachment( )
    {
        this ("");
    }

    public Attachment( String filename ) {
        super (
                DatabaseValues.Table.LOCATION,
                new DatabaseValues.Column[]
                {
                        DatabaseValues.Column.FILE_NAME,
                }
        );

        updateAttributeValue(
                DatabaseValues.Column.FILE_NAME,
                filename
        );
    }
}
