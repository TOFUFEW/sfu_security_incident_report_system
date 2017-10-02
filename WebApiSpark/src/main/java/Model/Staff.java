package Model;

import java.util.Date;

public class Staff{
    private int id;
    private String firstName;
    private String lastName;
    private String address;
    private String phoneNumber;
    private Date DOB;
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
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = addr;
        this.phoneNumber = phoneNumber;
        this.DOB = DOB;
        staffType = type;
    }


    public void setId (int id){
        this.id = id;
    }

    public int getId () {
        return id;
    }

}
