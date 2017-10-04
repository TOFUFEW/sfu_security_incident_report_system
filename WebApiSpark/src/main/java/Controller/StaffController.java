package Controller;
import Model.Staff;
import Util.DBHelper;
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
            return dbHelper.getStaff();
        }, json());


        post("/staff", (request, response) -> {
            Staff staff = ( Staff ) parser.fromJson(request.body(), Staff.class);
            return dbHelper.addStaff(staff);
        }, json());

        put("/locations", (request, response) -> {
            Staff staff = ( Staff ) parser.fromJson(request.body(), Staff.class);
            return dbHelper.editStaff(staff); // This code touches the database

        }, json());

        delete("/staff/:id", (request, response) -> {
            int id = Integer.parseInt(request.params(":id"));
            return dbHelper.deleteStaff(id);
        }, json());
    }

}
