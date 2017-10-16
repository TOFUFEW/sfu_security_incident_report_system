package Model;

import Util.DatabaseValues;

public class IncidentElement extends StorageObject
{
    protected IncidentElement (
            DatabaseValues.Table table,
            DatabaseValues.Column[] requiredColumns
    ) {
        super (
                table,
                requiredColumns
        );
    }
}
