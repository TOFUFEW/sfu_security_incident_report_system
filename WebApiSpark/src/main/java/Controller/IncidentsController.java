package Controller;

import Model.Incident;
import Model.Location;
import Model.Person;
import Util.DBHelper;
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
            System.out.println (JsonUtil.toJson(incidents));
            return JsonUtil.toJson ( incidents );
        } );

        post ("/incidents" , ( request, response ) ->
        {
//            System.out.println (request.body());
            Incident newIncident = ( Incident ) JsonUtil.fromJson ( request.body () , Incident.class );
            System.out.println(newIncident.toString());
//            System.out.println (newIncident.getIncidentElements());
            String incidentString = "{ call dbo.insertIncident ( ? , ? , ? , ? , ? ) } ";
            return DBHelper.insertIncident ( incidentString , newIncident );
        } );

        post ("/updateIncident" , ( request, response ) ->
        {
//            System.out.println (request.body());
            Incident updatedIncident = ( Incident ) JsonUtil.fromJson ( request.body () , Incident.class );
            System.out.println ("UPDATED INCIDENT: " + updatedIncident.toString());

            return DBHelper.updateIncident ( updatedIncident );
        } );

        post ( "/assignIncident", ( request, response ) ->
        {
            Incident incident = ( Incident ) JsonUtil.fromJson ( request.body () , Incident.class );
            return DBHelper.assignIncident( incident );
        }) ;
    }
}
