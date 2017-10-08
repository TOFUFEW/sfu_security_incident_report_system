package Model;


import DBConnector.Connector;
import Util.DatabaseValues;

public class Location extends IncidentElement
{
    public Location ( )
    {
        this (
                "",
                "",
                "",
                "",
                ""

        );
    }

    public Location (
            String locationID,
            String campusID,
            String buildingName,
            String roomNumber,
            String department
    ) {
        super (
                DatabaseValues.DatabaseTable.LOCATION,
                new DatabaseValues.DatabaseColumn []
                {
                        DatabaseValues.DatabaseColumn.LOCATION_ID,
                        DatabaseValues.DatabaseColumn.CAMPUS_ID,
                        DatabaseValues.DatabaseColumn.BUILDING_NAME,
                        DatabaseValues.DatabaseColumn.ROOM_NUMBER,
                        DatabaseValues.DatabaseColumn.DEPARTMENT,
                }
        );

        editColumnValue (
                DatabaseValues.DatabaseColumn.LOCATION_ID,
                locationID
        );

        editColumnValue (
                DatabaseValues.DatabaseColumn.CAMPUS_ID,
                campusID
        );

        editColumnValue (
                DatabaseValues.DatabaseColumn.BUILDING_NAME,
                buildingName
        );

        editColumnValue (
                DatabaseValues.DatabaseColumn.ROOM_NUMBER,
                roomNumber
        );

        editColumnValue (
                DatabaseValues.DatabaseColumn.DEPARTMENT,
                department
        );
    }
}
