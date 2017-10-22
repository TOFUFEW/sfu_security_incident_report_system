package Controller;

import Model.Incident;
import Model.User;
import Util.DBHelper;
import Util.DatabaseValues;
import Util.JsonUtil;

import static spark.Spark.post;

public class GuardIncidentsController
{
    public GuardIncidentsController ()
    {
        setupEndPoints ();
    }

    private void setupEndPoints ()
    {
        post ( "/guardIncidents",  ( request , response ) ->
        {
            User user = ( User ) JsonUtil.fromJson ( request.body(), User.class );
            int accountID = Integer.parseInt ( user.getAttributeValue ( DatabaseValues.Column.ACCOUNT_ID ) );
            Incident [] incidents = DBHelper.getGuardIncidents ( accountID );
            return JsonUtil.toJson ( incidents );
        });
    }
}
