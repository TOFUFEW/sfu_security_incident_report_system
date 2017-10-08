package DBConnector;
import java.sql.*;

// Singleton class
public class Connector {

    // Private constructor w/ initializer
    private Connector() {}
    private static final Connector myConnector = new Connector ();

    public static String URL;
    public static String Username;
    public static String Password;
    public static Connection Instance;

    public static Connector getInstance ()
    {
        initDB ();
        return myConnector;
    }

    public static boolean execute ( String query ) throws SQLException
    {
        initDB ();
        Statement stmt = Instance.createStatement ();
        return stmt.execute ( query );
    }

    public static ResultSet executeQuery ( String query ) throws SQLException
    {
        initDB ();
        Statement stmt = Instance.createStatement ();
        return stmt.executeQuery ( query );
    }

    public static int executeUpdate ( String query ) throws SQLException
    {
        initDB ();
        Statement stmt = Instance.createStatement( );
        return stmt.executeUpdate ( query );
    }

    private static void initDB ()
    {
        if ( Instance != null )
        {
            return;
        }

        Connector.Username = "sa";
        Connector.Password = "CMPT373Alpha";
        Connector.URL = "jdbc:sqlserver://142.58.21.127:1433;DatabaseName=master;";

        /*
        Connector.Username = "cmpt373alpha";
        Connector.Password = "cmpt373alpha";
        Connector.URL = "jdbc:sqlserver://sfuirsdb.czoee5rkbxlk.us-west-1.rds.amazonaws.com:1433;DatabaseName=IRS;";
        */

        try
        {
            Class.forName ( "com.microsoft.sqlserver.jdbc.SQLServerDriver" );
            Connector.Instance = DriverManager.getConnection (
                    Connector.URL,
                    Connector.Username,
                    Connector.Password
            );
        }

        catch ( Exception e )
        {
            e.printStackTrace ();
            Connector.Instance = null;
        }
    }
}