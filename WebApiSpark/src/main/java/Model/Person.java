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
                DatabaseValues.Table.PERSON,
                new DatabaseValues.Column []
                        {
                                DatabaseValues.Column.FIRST_NAME,
                                DatabaseValues.Column.LAST_NAME,
                                DatabaseValues.Column.PERSON_ID,
                                DatabaseValues.Column.PHONE_NUMBER
                        }
        );


        updateAttributeValue (
                DatabaseValues.Column.FIRST_NAME,
                firstName
        );
        updateAttributeValue (
                DatabaseValues.Column.LAST_NAME,
                lastName
        );
        updateAttributeValue (
                DatabaseValues.Column.PERSON_ID,
                personId
        );
        updateAttributeValue (
                DatabaseValues.Column.PHONE_NUMBER,
                phoneNumber
        );

    }


    public DatabaseValues.Column getIDColumn () {
        return DatabaseValues.Column.PERSON_ID ;
    }

}
