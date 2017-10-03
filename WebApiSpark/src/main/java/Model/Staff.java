package Model;


import Util.DatabaseValues;

public class Staff extends IncidentElement {
    private String accountId;
    private String campusId;
    private String firstName;
    private String lastName;


    public Staff(
            String accountId,
            String campusId,
            String firstName,
            String lastName



    ) {
        super(DatabaseValues.DatabaseTable.STAFF);

        super.putValue(
                DatabaseValues.DatabaseColumn.ACCOUNT_ID,
                accountId
        );

        super.putValue(
                DatabaseValues.DatabaseColumn.CAMPUS_ID,
                campusId
        );


        super.putValue(
                DatabaseValues.DatabaseColumn.FIRST_NAME,
                firstName
        );

        super.putValue(
                DatabaseValues.DatabaseColumn.LAST_NAME,
                lastName
        );

        this.accountId = accountId;
        this.campusId = campusId;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
