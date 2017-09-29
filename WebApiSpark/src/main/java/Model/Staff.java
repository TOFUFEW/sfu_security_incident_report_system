package Model;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Staff implements Person {
    private String firstName;
    private String lastName;
    private String address;
    private String phoneNumber;
    private Date DOB;


    public Staff ()
    {

    }


    public Staff (
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
    @Override
    public void setName(String first, String last) {
        firstName = first;
        lastName = last;
    }

    @Override
    public void setAddress(String addr){
        address = addr;
    }

    //getters
    @Override
    public String getName() {
        return firstName + lastName;
    }

    @Override
    public Date getDOB() {
        return DOB;
    }

    @Override
    public String getAddress() {
        return address;
    }

    @Override
    public String getPhoneNumber(){
        return phoneNumber;
    }


}
