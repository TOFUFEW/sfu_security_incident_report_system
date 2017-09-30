package Model;

import Util.DatabaseValues;

import java.util.HashMap;

public class IncidentComponent {
    private DatabaseValues.DatabaseTable table;
    private HashMap < DatabaseValues.DatabaseColumn , String > columValue = new HashMap ();

    protected IncidentComponent ( DatabaseValues.DatabaseTable table )
    {
        this.table = table;
    }

    protected boolean validInput ( String input , String dataType )
    {
        if ( input == null ) return false;

        if ( dataType.equals ( "INT" ) ) {
            try
            {
                Integer.parseInt ( input );
            }
            catch ( Exception e )
            {
                return false;
            }
        }

        return true;
    }

    public DatabaseValues.DatabaseTable getTable ()
    {
        return table;
    }

    public DatabaseValues.DatabaseColumn [] getColumnKeySet ()
    {
        return columValue.keySet ().toArray( new DatabaseValues.DatabaseColumn [ columValue.size () ] );
    }

    public String putValue (
            DatabaseValues.DatabaseColumn column,
            String value
    ) {
        return columValue.put ( column , value );
    }

    public String getValue ( DatabaseValues.DatabaseColumn column )
    {
        return columValue.get ( column );
    }

}
