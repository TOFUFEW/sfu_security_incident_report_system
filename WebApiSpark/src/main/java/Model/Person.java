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
    public void setName (
            String first,
            String last
    ) {
        firstName = first;
        lastName = last;
    }

    public void setAddress(String addr){
        address = addr;
    }

    //getters

    public int getId () {
        return id;
    }
    public String getName() {
        return firstName + lastName;
    }

    public Date getDOB() {
        return DOB;
    }

    public String getAddress() {
        return address;
    }

    public String getPhoneNumber(){
        return phoneNumber;
    }





}
