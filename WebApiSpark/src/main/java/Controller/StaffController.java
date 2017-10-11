package Controller;
import Model.Staff;
import Util.DBHelper;
import Util.DatabaseValues;
import Util.JsonUtil;

import java.util.*;
import static Util.JsonUtil.json;
import static spark.Spark.*;



public class StaffController {
    JsonUtil parser = new JsonUtil ();
    DBHelper dbHelper = new DBHelper ();

    public List<Staff> staffList = new ArrayList<> ();

    public StaffController ()
    {
        setupEndPoints ();
    }

    private void setupEndPoints ()
    {
        get("/staff", (request, response) -> {
            return dbHelper.getStaffs();
        }, json() );


        put("/staff", (request, response) -> {
            Staff staff = ( Staff ) parser.fromJson( request.body () , Staff.class);

            if (dbHelper.staffExists(staff.getColumnValue(DatabaseValues.DatabaseColumn.ACCOUNT_ID)) ) {
                return dbHelper.updateIncidentElement(staff);
            } else {
                return false;
            }

        } );


        delete("/staff/:id", (request, response) -> {
            String id = request.params(":id");
            return dbHelper.deleteStaff(id);
        }, json());
    }

    public DatabaseValues.DatabaseColumn getIDColumn () {
        return DatabaseValues.DatabaseColumn.ACCOUNT_ID ;
    }

}
