package Model;


import java.util.Date;

public class Staff extends Person {
    int staffType;

    public Staff ()
    {

    }


    public Staff (
            String firstName,
            String lastName,
            String addr,
            String phoneNumber,
            Date DOB,
            int type
    ) {

        super (
                firstName,
                lastName,
                addr,
                phoneNumber,
                DOB
        );
        staffType = type;
    }




}
