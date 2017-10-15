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
    public IncidentsController()
    {
        setupEndPoints();
    }

    public List<Incident> incidentList = new ArrayList<>();

    private void setupEndPoints()
    {
        get ("/incidents", ( request , response ) ->
        {
            return dbHelper.getIncidents();
        }, json());

        post ("/incidents", ( request, response ) ->
        {
            System.out.println(request.body());
            Incident newIncident = ( Incident ) parser.fromJson ( request.body() , Incident.class );
            return dbHelper.insertIncident( newIncident );
        }, json() );

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
