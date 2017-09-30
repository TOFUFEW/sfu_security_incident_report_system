package Model;

import Util.DatabaseValues;

public class Location extends IncidentComponent
{
    public Location (
            String campus,
            String buildingNum,
            String roomNum,
            String department
    ) {
        super( DatabaseValues.DatabaseTable.LOCATION );

        initHashMap ();

        if ( validInput ( campus , DatabaseValues.DatabaseColumn.CAMPUS_ID.toString () ) )
        {
            putValue (
                    DatabaseValues.DatabaseColumn.CAMPUS_ID,
                    DatabaseValues.DatabaseColumn.CAMPUS_ID.getDefaultValue ()
            );
        }

        if ( validInput ( buildingNum , DatabaseValues.DatabaseColumn.BUILDING_NUMBER.toString () ) )
        {
            putValue (
                    DatabaseValues.DatabaseColumn.BUILDING_NUMBER,
                    DatabaseValues.DatabaseColumn.BUILDING_NUMBER.getDefaultValue ()
            );
        }

        if ( validInput ( roomNum , DatabaseValues.DatabaseColumn.ROOM_NUMBER.toString () ) )
        {
            putValue (
                    DatabaseValues.DatabaseColumn.ROOM_NUMBER,
                    DatabaseValues.DatabaseColumn.ROOM_NUMBER.getDefaultValue ()
            );
        }

        if ( validInput ( department , DatabaseValues.DatabaseColumn.DEPARTMENT.toString () ) )
        {
            putValue (
                    DatabaseValues.DatabaseColumn.DEPARTMENT,
                    DatabaseValues.DatabaseColumn.DEPARTMENT.getDefaultValue ()
            );
        }
    }

    public DatabaseValues.DatabaseTable getTable ()
    {
        return getTable ();
    }

    public DatabaseValues.DatabaseColumn [] getColumnKeySet ()
    {
        return getColumnKeySet ();
    }

    public String getValue ( DatabaseValues.DatabaseColumn column )
    {
        return getValue( column );
    }

    private void initHashMap ()
    {
        putValue (
                DatabaseValues.DatabaseColumn.CAMPUS_ID,
                DatabaseValues.DatabaseColumn.CAMPUS_ID.getDefaultValue ()
        );

        putValue (
                DatabaseValues.DatabaseColumn.BUILDING_NUMBER,
                DatabaseValues.DatabaseColumn.BUILDING_NUMBER.getDefaultValue ()
        );

        putValue (
                DatabaseValues.DatabaseColumn.ROOM_NUMBER,
                DatabaseValues.DatabaseColumn.ROOM_NUMBER.getDefaultValue ()
        );

        putValue (
                DatabaseValues.DatabaseColumn.DEPARTMENT,
                DatabaseValues.DatabaseColumn.DEPARTMENT.getDefaultValue ()
        );
    }

    private boolean validInput ( String input , String dataType )
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

}
