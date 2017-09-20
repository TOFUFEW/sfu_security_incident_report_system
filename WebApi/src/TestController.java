import DBConnector.Connector;
import javax.ws.rs.*;
import java.sql.*;

// The Java class will be hosted at the URI path "/helloworld"
@Path("/helloworld")
public class TestController {
    // The Java method will process HTTP GET requests
    @GET
    // The Java method will produce content identified by the MIME Media type "text/plain"
    @Produces("text/plain")
    public String getClichedMessage() {
        try {
            String query = "select * from employee";
            ResultSet myRs = Connector.executeQuery(query);
            while(myRs.next()){
                String fname = myRs.getString("fname");
                String lname = myRs.getString("lname");
                System.out.println(fname + ' ' + lname);
                return fname + ' ' + lname;
            }
        } catch (Exception e){
            e.printStackTrace();
        }
        return "Hello World";
    }


}
