package Model;

import Util.DatabaseValues;

public class Location extends IncidentElement
{
    public Location (
            String locationID,
            String campusID,
            String buildingNumber,
            String roomNumber,
            String department
    ) {
        super(DatabaseValues.DatabaseTable.LOCATION);

        super.putValue(
                DatabaseValues.DatabaseColumn.LOCATION_ID,
                locationID
        );

        super.putValue(
                DatabaseValues.DatabaseColumn.CAMPUS_ID,
                campusID
        );

        super.putValue(
                DatabaseValues.DatabaseColumn.BUILDING_NUMBER,
                buildingNumber
        );

        super.putValue(
                DatabaseValues.DatabaseColumn.ROOM_NUMBER,
                roomNumber
        );

        super.putValue(
                DatabaseValues.DatabaseColumn.DEPARTMENT,
                department
        );
    }
}
