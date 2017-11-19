package Controller;
import Model.IncidentElement;
import Model.Staff;
import Util.DBHelper;
import Util.DatabaseValues;
import Util.JsonUtil;

import static Util.PathStrings.STAFF_ID_PATH;
import static Util.PathStrings.STAFF_PATH;
import static spark.Spark.*;

public class StaffController
{

    public StaffController ()
    {
        setupEndPoints ();
    }

    private void setupEndPoints ()
    {

        get ( STAFF_PATH , ( request , response ) ->
        {
            IncidentElement [] staffArr = DBHelper.getIncidentElements ( DatabaseValues.Table.STAFF );
            return JsonUtil.toJson ( staffArr );
        } );


        put(STAFF_PATH , ( request , response ) ->
        {
            Staff staff = ( Staff ) JsonUtil.fromJson ( request.body (), Staff.class );

            if (!DBHelper.selectIncidentElement ( staff ) )
            {
                return DBHelper.updateIncidentElement ( staff );
            }
            else
            {
                return false;
            }

        } );


        delete ( STAFF_ID_PATH , ( request , response ) ->
        {
            Staff staff = new Staff ();
            staff.updateAttributeValue (
                    DatabaseValues.Column.ACCOUNT_ID,
                    request.params ( ":id" )
            );

            return DBHelper.deleteIncidentElement ( staff );
        } );
    }

}
