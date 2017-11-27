package Model;


import Util.DBHelper;
import Util.DatabaseValues;

import java.util.List;

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
                DatabaseValues.Table.LOCATION,
                new DatabaseValues.Column[]
                {
                        DatabaseValues.Column.LOCATION_ID,
                        DatabaseValues.Column.CAMPUS_ID,
                        DatabaseValues.Column.BUILDING_NAME,
                        DatabaseValues.Column.ROOM_NUMBER,
                        DatabaseValues.Column.DEPARTMENT,
                }
        );

        updateAttributeValue(
                DatabaseValues.Column.LOCATION_ID,
                locationID
        );

        updateAttributeValue(
                DatabaseValues.Column.CAMPUS_ID,
                campusID
        );

        updateAttributeValue(
                DatabaseValues.Column.BUILDING_NAME,
                buildingName
        );

        updateAttributeValue(
                DatabaseValues.Column.ROOM_NUMBER,
                roomNumber
        );

        updateAttributeValue(
                DatabaseValues.Column.DEPARTMENT,
                department
        );
    }

    @Override
    public String toSearchString() {

        // HACK
        Campus[] campusList = DBHelper.getCampus();
        int index = Integer.parseInt(this.getAttributeValue( DatabaseValues.Column.CAMPUS_ID));
        String campusString = campusList[index - 1].getAttributeValue( DatabaseValues.Column.CITY);

        return campusString + " " +
                this.getAttributeValue( DatabaseValues.Column.BUILDING_NAME ) + " " +
                this.getAttributeValue( DatabaseValues.Column.ROOM_NUMBER ) + " " +
                this.getAttributeValue( DatabaseValues.Column.DEPARTMENT );
    }
}
