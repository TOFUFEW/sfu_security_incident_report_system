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
            super.putValue (
                    DatabaseValues.DatabaseColumn.CAMPUS_ID,
                    campus
            );
        }

        if ( validInput ( buildingNum , DatabaseValues.DatabaseColumn.BUILDING_NUMBER.toString () ) )
        {
            super.putValue (
                    DatabaseValues.DatabaseColumn.BUILDING_NUMBER,
                    buildingNum
            );
        }

        if ( validInput ( roomNum , DatabaseValues.DatabaseColumn.ROOM_NUMBER.toString () ) )
        {
            super.putValue (
                    DatabaseValues.DatabaseColumn.ROOM_NUMBER,
                    roomNum
            );
        }

        if ( validInput ( department , DatabaseValues.DatabaseColumn.DEPARTMENT.toString () ) )
        {
            super.putValue (
                    DatabaseValues.DatabaseColumn.DEPARTMENT,
                    department
            );
        }
    }

    public DatabaseValues.DatabaseTable getTable ()
    {
        return super.getTable ();
    }

    public DatabaseValues.DatabaseColumn [] getColumnKeySet ()
{
    return super.getColumnKeySet ();
}

    public String getValue ( DatabaseValues.DatabaseColumn column )
    {
        return super.getValue( column );
    }

    private void initHashMap ()
    {
        super.putValue (
                DatabaseValues.DatabaseColumn.CAMPUS_ID,
                DatabaseValues.DatabaseColumn.CAMPUS_ID.getDefaultValue ()
        );

        super.putValue (
                DatabaseValues.DatabaseColumn.BUILDING_NUMBER,
                DatabaseValues.DatabaseColumn.BUILDING_NUMBER.getDefaultValue ()
        );

        super.putValue (
                DatabaseValues.DatabaseColumn.ROOM_NUMBER,
                DatabaseValues.DatabaseColumn.ROOM_NUMBER.getDefaultValue ()
        );

        super.putValue (
                DatabaseValues.DatabaseColumn.DEPARTMENT,
                DatabaseValues.DatabaseColumn.DEPARTMENT.getDefaultValue ()
        );
    }
}
