package Model;

import Util.DatabaseValues;

public class Person extends IncidentElement{

    public Person () {
        this (
                "",
                "",
                "",
                ""
        );
    }

    public Person (
            String firstName,
            String lastName,
            String personId,
            String phoneNumber
    ) {
        super (
                DatabaseValues.DatabaseTable.PERSON,
                new DatabaseValues.DatabaseColumn []
                        {
                                DatabaseValues.DatabaseColumn.FIRST_NAME,
                                DatabaseValues.DatabaseColumn.LAST_NAME,
                                DatabaseValues.DatabaseColumn.PERSON_ID,
                                DatabaseValues.DatabaseColumn.PHONE_NUMBER
                        }
        );


        editColumnValue (
                DatabaseValues.DatabaseColumn.FIRST_NAME,
                firstName
        );
        editColumnValue (
                DatabaseValues.DatabaseColumn.LAST_NAME,
                lastName
        );
        editColumnValue (
                DatabaseValues.DatabaseColumn.PERSON_ID,
                personId
        );
        editColumnValue (
                DatabaseValues.DatabaseColumn.PHONE_NUMBER,
                phoneNumber
        );

    }


    public DatabaseValues.DatabaseColumn getIDColumn () {
        return DatabaseValues.DatabaseColumn.PERSON_ID ;
    }

}
