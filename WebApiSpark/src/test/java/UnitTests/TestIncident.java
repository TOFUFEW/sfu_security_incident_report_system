package UnitTests;

import Model.Incident;
import Model.Location;
import Util.DBHelper;
import Util.DatabaseValues.DatabaseColumn;
import Util.DatabaseValues.DatabaseTable;
import com.google.gson.Gson;
import java.sql.ResultSet;
import org.junit.Assert;
import org.junit.Test;

public class TestIncident {
    public TestIncident() {}

    @Test
    public void testInsertIncident() {
        Location location1 = new Location (
                null, // notice how this is null? Tells class to ignore the column and its value when creating Insert SQL
                "1",
                "Building E",
                "4000",
                "Arts"
        );

        Incident incident = new Incident();
        incident.editColumnValue( DatabaseColumn.REPORT_ID, null );
        incident.editColumnValue( DatabaseColumn.ACCOUNT_ID, "1" );
        incident.editColumnValue( DatabaseColumn.CATEGORY_ID, "1" );
        incident.editColumnValue( DatabaseColumn.DESCRIPTION, "TEST DESCRIPTION" );
        incident.editColumnValue( DatabaseColumn.EXECUTIVE_SUMMARY, "TEST SUMMARY" );
        incident.editColumnValue( DatabaseColumn.CLOSED, "0" );
        
        int currentSize = getNumberOfIncidents();
        DBHelper.insertIncident( incident );

        Incident[] incidents = DBHelper.getIncidents();

        Assert.assertTrue( currentSize < incidents.length);
    }

    public int getNumberOfIncidents() {
        String query = "SELECT COUNT (distinct REPORT_ID) as 'size' FROM dbo.Incident";
        try {
            ResultSet result = DBHelper.executeQuery( query );
            while ( result.next() ) {
                return result.getInt("size");
            }
        }
        catch (Exception e) {
            e.printStackTrace();
        }
        return 0;
    }
}
