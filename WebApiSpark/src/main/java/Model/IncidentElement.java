package Model;

import Util.DatabaseValues;

import java.util.HashMap;

public class IncidentElement {
    private DatabaseValues.DatabaseTable table;
    private HashMap < DatabaseValues.DatabaseColumn , String > columnValue = new HashMap ();

    protected IncidentElement(DatabaseValues.DatabaseTable table )
    {
        this.table = table;
    }

    public DatabaseValues.DatabaseTable getTable ()
    {
        return table;
    }

    public DatabaseValues.DatabaseColumn [] getColumnKeySet ()
    {
        return columnValue.keySet ().toArray( new DatabaseValues.DatabaseColumn [ columnValue.size () ] );
    }

    public void putValue (
            DatabaseValues.DatabaseColumn column,
            String value
    ) {
        if ( validInput ( column , value ) )
        {
            columnValue.put (
                    column,
                    value
            );
        }
        else {
            columnValue.put (
                    column,
                    column.getDefaultValue()
            );
        }
    }

    public String getValue ( DatabaseValues.DatabaseColumn column )
    {
        return columnValue.get ( column );
    }

    private boolean validInput (DatabaseValues.DatabaseColumn column , String input )
    {
        if ( input == null ) return false;

        if ( column.getDataType ().equals ( "INT" ) ) {
            try
            {
                int testNum = Integer.parseInt ( input );
            }
            catch ( Exception e )
            {
                return false;
            }
        }

        return true;
    }
}
