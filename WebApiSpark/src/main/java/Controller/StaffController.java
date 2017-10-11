package Controller;
import Model.Staff;
import Util.DBHelper;
import Util.DatabaseValues;
import Util.JsonUtil;

import java.util.*;
import static Util.JsonUtil.json;
import static spark.Spark.*;



public class StaffController {

    public List<Staff> staffList = new ArrayList<> ();

    public StaffController ()
    {
        setupEndPoints ();
    }

    private void setupEndPoints ()
    {
        get ( "/staffs" , ( request , response ) -> {
            return DBHelper.getStaffs();
        }, json() );

        get("/staff", (request, response) -> {
            return DBHelper.getStaffs();
        }, json() );


        put("/staff", (request, response) -> {
            Staff staff = ( Staff ) JsonUtil.fromJson( request.body () , Staff.class);

            if (!DBHelper.selectIncidentElement(staff, staff.getColumnValue(DatabaseValues.DatabaseColumn.ACCOUNT_ID)) ) {
                return DBHelper.updateIncidentElement(staff);
            } else {
                return false;
            }

        } );


        delete("/staff/:id", (request, response) -> {
            String id = request.params(":id");
            Staff staff = new Staff();
            DBHelper.selectIncidentElement(staff, id);
            return DBHelper.deleteIncidentElement(staff);
        }, json());
    }

}
