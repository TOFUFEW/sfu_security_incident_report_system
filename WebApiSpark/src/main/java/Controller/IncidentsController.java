package Controller;

import Model.Incident;
import Model.Location;
import Model.Person;
import Util.DBHelper;
import Util.JsonUtil;

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import static Util.JsonUtil.json;
<<<<<<< HEAD
=======
>>>>>>> 37-guard-get-and-display-assigned-incidents
=======
>>>>>>> origin/master
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

        post ("/updateIncident" , ( request, response ) ->
        {
            Incident updatedIncident = ( Incident ) JsonUtil.fromJson ( request.body () , Incident.class );
            return DBHelper.updateIncident ( updatedIncident );
        } );
    }
}
