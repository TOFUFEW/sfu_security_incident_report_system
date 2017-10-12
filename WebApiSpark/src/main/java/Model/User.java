package Model;

import Util.DatabaseValues;

public class User  extends IncidentElement
{

    public User ( )
    {
        this (
                "",
                "",
                ""
        );
    };

    public User (
            String username,
            String password,
            String accountType
    ) {
        super (
                DatabaseValues.DatabaseTable.ACCOUNT,
                new DatabaseValues.DatabaseColumn []
                {
                        DatabaseValues.DatabaseColumn.USERNAME,
                        DatabaseValues.DatabaseColumn.PASSWORD,
                        DatabaseValues.DatabaseColumn.ACCOUNT_TYPE
                }
        );

        editColumnValue (
            DatabaseValues.DatabaseColumn.USERNAME,
            username
        );

        editColumnValue (
            DatabaseValues.DatabaseColumn.PASSWORD,
            password
        );

        editColumnValue (
            DatabaseValues.DatabaseColumn.ACCOUNT_TYPE,
            accountType
        );
    }
}
