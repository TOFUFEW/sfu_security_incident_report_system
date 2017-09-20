import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;
import java.sql.DriverManager;
import java.util.HashSet;
import java.util.Set;
import DBConnector.*;


//Defines the base URI for all resource URIs.
@ApplicationPath("/")
//The java class declares root resource and provider classes
public class MyApplication extends Application{

    //The method returns a non-empty collection with classes, that must be included in the published JAX-RS application
    @Override
    public Set<Class<?>> getClasses() {
        HashSet classes = new HashSet<Class<?>>();
        classes.add( TestController.class );
        DBinit();
        return classes;
    }

    private void DBinit(){
        Connector.Username = "cmpt373alpha";
        Connector.Password = "cmpt373alpha";
        Connector.URL = "jdbc:sqlserver://sfuirsdb.czoee5rkbxlk.us-west-1.rds.amazonaws.com:1433;DatabaseName=IRS;";

        try {
            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
            Connector.Instance = DriverManager.getConnection(Connector.URL, Connector.Username, Connector.Password);
        } catch (Exception e){
            e.printStackTrace();
            Connector.Instance = null;
        }
    }
}
