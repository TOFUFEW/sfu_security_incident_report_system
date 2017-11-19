package Controller;

import Model.Incident;
import Util.DBHelper;
import Util.DatabaseValues;
import Util.JsonUtil;

import static Util.PathStrings.ASSIGN_GUARD_PATH;
import static spark.Spark.post;

public class AssignGuardController
{

    public AssignGuardController ()
    {
        setupEndPoints ();
    }

    private void setupEndPoints () {
        post ( ASSIGN_GUARD_PATH , (request , response ) ->
        {
            Incident incident = ( Incident ) JsonUtil.fromJson ( request.body () , Incident.class );
            String incidentID =  incident.getAttributeValue ( DatabaseValues.Column.REPORT_ID ) ;
            String accountID = incident.getAttributeValue ( DatabaseValues.Column.ACCOUNT_ID ) ;
            return DBHelper.assignToGuard ( incidentID , accountID );
        } );
    }
}
