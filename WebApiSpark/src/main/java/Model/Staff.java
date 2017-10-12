package Model;

import Util.DatabaseValues;

public class Staff extends IncidentElement
{
    public Staff ( )
    {
        this (
                "",
                "",
                "",
                ""
        );
    }

    public Staff (
            String accountId,
            String campusId,
            String firstName,
            String lastName
    ) {
        super(
                DatabaseValues.DatabaseTable.STAFF,
                new DatabaseValues.DatabaseColumn[]
                        {
                                DatabaseValues.DatabaseColumn.ACCOUNT_ID,
                                DatabaseValues.DatabaseColumn.CAMPUS_ID,
                                DatabaseValues.DatabaseColumn.FIRST_NAME,
                                DatabaseValues.DatabaseColumn.LAST_NAME,

                        }
        );

        editColumnValue(
                DatabaseValues.DatabaseColumn.ACCOUNT_ID,
                accountId
        );

        editColumnValue(
                DatabaseValues.DatabaseColumn.CAMPUS_ID,
                campusId
        );


        editColumnValue(
                DatabaseValues.DatabaseColumn.FIRST_NAME,
                firstName
        );

        editColumnValue(
                DatabaseValues.DatabaseColumn.LAST_NAME,
                lastName
        );
    }

    public DatabaseValues.DatabaseColumn getIDColumn () {
        return DatabaseValues.DatabaseColumn.ACCOUNT_ID ;
    }
}
