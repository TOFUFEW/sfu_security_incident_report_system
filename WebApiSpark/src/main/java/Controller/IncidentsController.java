package Controller;

import Model.Incident;
import Model.Location;
import Model.Person;
import Model.IncidentElement;
import Model.Location;
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
    DBHelper dbHelper = new DBHelper();
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
            System.out.println ("UPDATED INCIDENT: " + updatedIncident.toString());

            return DBHelper.updateIncident ( updatedIncident );
        } );

        post ( "/assignIncident", ( request, response ) ->
        {
            Incident updatedIncident = (Incident) JsonUtil.fromJson ( request.body(), Incident.class );
            return DBHelper.updateIncident( updatedIncident );
        });
    }
}
