package Controller;

import Model.Incident;
import Util.DBHelper;
import Util.JsonUtil;

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
            return DBHelper.insertIncident ( newIncident );
        } );

        post ("/updateIncident" , ( request, response ) ->
        {
            Incident updatedIncident = ( Incident ) JsonUtil.fromJson ( request.body () , Incident.class );
            return DBHelper.updateIncident ( updatedIncident );
        } );

        post ( "/assignIncident", ( request, response ) ->
        {
            Incident incident = ( Incident ) JsonUtil.fromJson ( request.body () , Incident.class );
            return DBHelper.updateIncident ( incident );
        }) ;

    }
}
