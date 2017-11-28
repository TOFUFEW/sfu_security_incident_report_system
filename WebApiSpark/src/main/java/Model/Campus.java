package Model;


import Util.DatabaseValues;

public class Campus extends IncidentElement
{
    public Campus ( )
    {
        this (
                "",
                "",
                ""
        );
    }

    public Campus (
            String campusID,
            String city,
            String address
    ) {
        super (
                DatabaseValues.Table.CAMPUS,
                new DatabaseValues.Column[]
                        {
                                DatabaseValues.Column.CAMPUS_ID,
                                DatabaseValues.Column.CITY,
                                DatabaseValues.Column.ADDRESS,
                        }
        );

        updateAttributeValue(
                DatabaseValues.Column.CAMPUS_ID,
                campusID
        );

        updateAttributeValue(
                DatabaseValues.Column.CITY,
                city
        );

        updateAttributeValue(
                DatabaseValues.Column.ADDRESS,
                address
        );
    }

}
