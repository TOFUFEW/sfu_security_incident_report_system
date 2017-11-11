package Controller;

import Model.Incident;
import Model.Location;
import Model.Person;
import Model.User;
import Util.DBHelper;
import Util.DatabaseValues;
import Util.JsonUtil;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import static Util.JsonUtil.json;
import static spark.Spark.get;
import static spark.Spark.post;

public class IncidentsController
{
    public IncidentsController ()
    {
        setupEndPoints ();
    }

    private void setupEndPoints()
    {
        get ("/incidents" , ( request , response ) ->
        {
            Incident []  incidents = DBHelper.getIncidents ();
            return JsonUtil.toJson ( incidents );
        } );

        post ("/incidents" , ( request, response ) ->
        {
            Incident newIncident = ( Incident ) JsonUtil.fromJson ( request.body () , Incident.class );
            String incidentString = "{ call dbo.insertIncident ( ? , ? , ? , ? , ? ) } ";
            return DBHelper.insertIncident ( incidentString , newIncident );
        } );

        post ("/getIncidents" , ( request, response ) ->
        {
            System.out.println(request.body());
            User user = ( User ) JsonUtil.fromJson ( request.body(), User.class );
            String accountID = user.getAttributeValue ( DatabaseValues.Column.ACCOUNT_ID );
            System.out.println(accountID);
            Incident [] incidents = DBHelper.getIncidents ( accountID );
            return JsonUtil.toJson ( incidents );
        } );

        post ("/getIncident", ( request , response ) ->
        {
            Incident incident = ( Incident ) JsonUtil.fromJson( request.body(), Incident.class );
            return JsonUtil.toJson( DBHelper.getIncident ( incident.getAttributeValue( DatabaseValues.Column.REPORT_ID )) );
        });

        post ("/updateIncident" , ( request, response ) ->
        {
            Incident updatedIncident = ( Incident ) JsonUtil.fromJson ( request.body () , Incident.class );
            return DBHelper.updateIncident ( updatedIncident );
        } );

        post ( "/assignIncident", ( request, response ) ->
        {
            Incident incident = ( Incident ) JsonUtil.fromJson ( request.body () , Incident.class );
            return DBHelper.assignIncident( incident );
        }) ;
    }
}
