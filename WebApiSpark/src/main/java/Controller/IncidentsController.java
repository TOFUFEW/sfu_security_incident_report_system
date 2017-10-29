package Controller;

import Model.Incident;
import Model.IncidentElement;
import Model.Location;
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
    JsonUtil parser = new JsonUtil();
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
            String incidentString = "{ call dbo.insertIncident ( ? , ? , ? , ? , ? ) } ";
            return DBHelper.insertIncident ( incidentString , newIncident );
        } );

        post ("/updateIncident", ( request , response ) ->
        {
            try {

                Incident updatedIncident = (Incident) parser.fromJson ( request.body(), Incident.class );
                boolean rs = dbHelper.executeProcedure (
                        "{ call dbo.updateIncident ( ? , ? , ? , ? , ? , ? ) }"
                        , updatedIncident);
                return true;
            }
            catch ( Exception e )
            {
                return false;
//                e.printStackTrace ();
            }
        }, json());

    }
}
