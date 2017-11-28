package Model;


import Util.DatabaseValues;

public class Attachment extends IncidentElement
{
    public Attachment( )
    {
        this (
                "",
                ""
        );
    }

    public Attachment(
            String fileName,
            String fileId
    ) {
        super (
                DatabaseValues.Table.ATTACHMENT,
                new DatabaseValues.Column[]
                {
                        DatabaseValues.Column.FILE_NAME,
                        DatabaseValues.Column.FILE_ID
                }
        );

        updateAttributeValue(
                DatabaseValues.Column.FILE_NAME,
                fileName
        );

        updateAttributeValue(
                DatabaseValues.Column.FILE_ID,
                fileId
        );

    }
}
