package Model;


import Util.DatabaseValues;

public class Staff extends IncidentElement {
    public int accountId;
    public int campusId;
    public String firstName;
    public String lastName;


    public Staff(
            int accountId,
            int campusId,
            String firstName,
            String lastName
    ) {
        super(DatabaseValues.DatabaseTable.STAFF);

        super.putValue(
                DatabaseValues.DatabaseColumn.ACCOUNT_ID,
                Integer.toString(accountId)
        );

        super.putValue(
                DatabaseValues.DatabaseColumn.CAMPUS_ID,
                Integer.toString(campusId)
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

    public int getAccountId () {
        return accountId;
    }

    public int getCampusId () {
        return campusId;
    }

    public String getFirstName () {
        return firstName;
    }

    public String getLastName () {
        return lastName;
    }


}
