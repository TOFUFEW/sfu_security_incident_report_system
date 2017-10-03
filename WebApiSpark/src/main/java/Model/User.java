package Model;

public class User {

    public User() {

    };

    public User(String username, String password, int accType){
        this.username = username;
        this.password = password;
        this.accType = accType;
    }

     public String username;
     public String password;
     public int accType;
}
