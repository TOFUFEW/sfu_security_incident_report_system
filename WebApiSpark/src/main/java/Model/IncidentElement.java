package Model;

import Util.DatabaseValues;

public class IncidentElement extends StorageObject
{
    protected IncidentElement(DatabaseValues.DatabaseTable table, DatabaseValues.DatabaseColumn[] requiredColumns) {
        super (
                table,
                requiredColumns
        );
    }
}
