package DBConnector;
import java.sql.*;

// Singleton class
public class Connector {

    // Private constructor w/ initializer
    private Connector() {}
    private static final Connector myConnector = new Connector();

    public static String URL;
    public static String Username;
    public static String Password;
    public static Connection Instance;

    public static Connector getInstance() {
        return myConnector;
    }

    public static ResultSet executeQuery(String query) throws SQLException {

        Statement stmt = Instance.createStatement();
        return stmt.executeQuery(query);
    }
}