package Controller;

import Model.Incident;
import Model.Location;
import Model.Person;
import Util.DBHelper;
import Util.JsonUtil;

<<<<<<< HEAD
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import static Util.JsonUtil.json;
=======
>>>>>>> 37-guard-get-and-display-assigned-incidents
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
    }
}
