package Controller;
import Model.Staff;
import Util.DBHelper;
import Util.DatabaseValues;
import Util.JsonUtil;

import java.util.*;
import static Util.JsonUtil.json;
import static spark.Spark.*;



public class StaffController
{

    public StaffController ()
    {
        setupEndPoints ();
    }

    private void setupEndPoints ()
    {
        get ( "/staffs" , ( request , response ) -> {
            return JsonUtil.toJson( DBHelper.getStaffs () );
        } );

        get("/staff", (request, response) -> {
            return JsonUtil.toJson( DBHelper.getStaffs () );
        } );


        put("/staff", (request, response) -> {
            Staff staff = ( Staff ) JsonUtil.fromJson ( request.body (), Staff.class);

            if (!DBHelper.selectIncidentElement ( staff ) )
            {
                return DBHelper.updateIncidentElement ( staff );
            } else {
                return false;
            }

        } );


        delete("/staff/:id", (request, response) -> {
            String id = request.params(":id");
            Staff staff = new Staff();
            staff.editColumnValue (
                    DatabaseValues.DatabaseColumn.ACCOUNT_ID,
                    request.params ( ":id" )
            );

            return DBHelper.deleteIncidentElement ( staff );
        } );
    }

}
