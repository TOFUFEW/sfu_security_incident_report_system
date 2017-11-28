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
                DatabaseValues.Table.STAFF,
                new DatabaseValues.Column[]
                        {
                                DatabaseValues.Column.ACCOUNT_ID,
                                DatabaseValues.Column.CAMPUS_ID,
                                DatabaseValues.Column.FIRST_NAME,
                                DatabaseValues.Column.LAST_NAME,

                        }
        );

        updateAttributeValue(
                DatabaseValues.Column.ACCOUNT_ID,
                accountId
        );

        updateAttributeValue(
                DatabaseValues.Column.CAMPUS_ID,
                campusId
        );


        updateAttributeValue(
                DatabaseValues.Column.FIRST_NAME,
                firstName
        );

        updateAttributeValue(
                DatabaseValues.Column.LAST_NAME,
                lastName
        );
    }

    @Override
    public String toSearchString() {
        return this.getAttributeValue( DatabaseValues.Column.FIRST_NAME ) + " " +
                this.getAttributeValue( DatabaseValues.Column.LAST_NAME );
    }

    public DatabaseValues.Column getIDColumn () {
        return DatabaseValues.Column.ACCOUNT_ID ;
    }
}
