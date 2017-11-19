package Controller;

import Model.Incident;
import Model.User;
import Util.DBHelper;
import Util.DatabaseValues;
import Util.JsonUtil;
import com.google.gson.Gson;

import static Util.PathStrings.GET_INCIDENTS_PATH;
import static Util.PathStrings.GUARD_INCIDENTS_PATH;
import static spark.Spark.post;

public class GuardIncidentsController
{
    public GuardIncidentsController ()
    {
        setupEndPoints ();
    }
    Gson gson = new Gson();
    private void setupEndPoints ()
    {
        post ( GUARD_INCIDENTS_PATH,  ( request , response ) ->
        {
            User user = ( User ) JsonUtil.fromJson ( request.body(), User.class );
            int accountID = Integer.parseInt ( user.getAttributeValue ( DatabaseValues.Column.ACCOUNT_ID ) );
            Incident [] incidents = DBHelper.getGuardIncidents ( accountID );
            return JsonUtil.toJson ( incidents );
        });

        post ( GET_INCIDENTS_PATH, ( request , response ) ->
        {
            Incident incident = ( Incident ) gson.fromJson( request.body (), Incident.class );
            return JsonUtil.toJson ( DBHelper.getIncident (
                    incident.getAttributeValue ( DatabaseValues.Column.REPORT_ID ) ) );
        } );
    }
}
