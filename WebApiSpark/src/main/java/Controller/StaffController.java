package Controller;
import Model.IncidentElement;
import Model.Staff;
import Util.DBHelper;
import Util.DatabaseValues;
import Util.JsonUtil;

import static spark.Spark.*;

public class StaffController
{

    public StaffController ()
    {
        setupEndPoints ();
    }

    private void setupEndPoints ()
    {

        get ( "/staff" , ( request , response ) -> {
            IncidentElement[] staffArr = DBHelper.getIncidentElements( DatabaseValues.Table.STAFF );
            return JsonUtil.toJson( staffArr );
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
            Staff staff = new Staff();
            staff.updateAttributeValue (
                    DatabaseValues.Column.ACCOUNT_ID,
                    request.params ( ":id" )
            );

            return DBHelper.deleteIncidentElement ( staff );
        } );
    }

}
