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


//        post("/staff", (request, response) -> {
//            Staff staff = ( Staff ) parser.fromJson(request.body(), Staff.class);
//            return dbHelper.addStaff(staff);
//        }, json());

        put("/staff", (request, response) -> {
            Staff staff = ( Staff ) parser.fromJson( request.body () , Staff.class);


            if (DBHelper.selectIncidentElement(staff, staff.getColumnValue( DatabaseValues.DatabaseColumn.PERSON_ID ) ) ) {

                return -1;
            }
            return dbHelper.updateIncidentElement(staff);

        } );


        delete("/staff/:id", (request, response) -> {
            String id = request.params(":id");
            return dbHelper.deleteStaff(id);
        }, json());
    }

}
