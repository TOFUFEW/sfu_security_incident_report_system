package Model;

import Util.DatabaseValues;

public class Staff extends IncidentElement
{
//    public int ACCOUNT_ID;
//    public int CAMPUS_ID;
//    public String FIRST_NAME;
//    public String LAST_NAME;

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
        super (
                DatabaseValues.DatabaseTable.STAFF,
                new DatabaseValues.DatabaseColumn []
                {
                        DatabaseValues.DatabaseColumn.ACCOUNT_ID,
                        DatabaseValues.DatabaseColumn.CAMPUS_ID,
                        DatabaseValues.DatabaseColumn.FIRST_NAME,
                        DatabaseValues.DatabaseColumn.LAST_NAME,

                }
        );

        editColumnValue (
                DatabaseValues.DatabaseColumn.ACCOUNT_ID,
                accountId
        );

        editColumnValue (
                DatabaseValues.DatabaseColumn.CAMPUS_ID,
                campusId
        );


        editColumnValue (
                DatabaseValues.DatabaseColumn.FIRST_NAME,
                firstName
        );

        editColumnValue (
                DatabaseValues.DatabaseColumn.LAST_NAME,
                lastName
        );

//        this.ACCOUNT_ID = Integer.getInteger(accountId);
//        this.CAMPUS_ID = Integer.getInteger(campusId);
//        this.FIRST_NAME = firstName;
//        this.LAST_NAME = lastName;
    }
}
