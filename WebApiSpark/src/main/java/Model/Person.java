package Model;

import java.util.Date;

public class Person {
    private int id;
    private String firstName;
    private String lastName;
    private String address;
    private String phoneNumber;
    private Date DOB;

    public Person ()
    {

    }

    public Person (
            String firstName,
            String lastName,
            String addr,
            String phoneNumber,
            Date DOB
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = addr;
        this.phoneNumber = phoneNumber;
        this.DOB = DOB;
    }

    //setters
    public void setId (int id){
        this.id = id;
    }

    public int getId () {
        return id;
    }





}
