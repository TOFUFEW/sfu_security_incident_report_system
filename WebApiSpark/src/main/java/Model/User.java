package Model;

import Util.DatabaseValues;

public class User  extends IncidentElement
{

    public User ( )
    {
        this (
                "",
                "",
                "",
                ""
        );
    };

    public User (
            String username,
            String password,
            String accountType,
            String accountID
    ) {
        super (
                DatabaseValues.Table.ACCOUNT,
                new DatabaseValues.Column[]
                {
                        DatabaseValues.Column.USERNAME,
                        DatabaseValues.Column.PASSWORD,
                        DatabaseValues.Column.ACCOUNT_TYPE,
                        DatabaseValues.Column.ACCOUNT_ID
                }
        );

        updateAttributeValue(
            DatabaseValues.Column.USERNAME,
            username
        );

        updateAttributeValue(
            DatabaseValues.Column.PASSWORD,
            password
        );

        updateAttributeValue(
            DatabaseValues.Column.ACCOUNT_TYPE,
            accountType
        );

        updateAttributeValue(
            DatabaseValues.Column.ACCOUNT_ID,
            accountID
        );
    }
}
