package Model;

import java.util.Date;

public interface Person {
    public void setName(String first, String last);
    public void setAddress(String addr);
    public String getName();
    public String getAddress();
    public Date getDOB();
    public String getPhoneNumber();



}
