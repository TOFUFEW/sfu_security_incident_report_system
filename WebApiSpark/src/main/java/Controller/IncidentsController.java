package Controller;

import Model.Incident;
import Util.DBHelper;
import Util.JsonUtil;
import ViewModel.IncidentViewModel;

import java.util.*;
import static Util.JsonUtil.json;
import static spark.Spark.*;

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
            IncidentViewModel newIncident = ( IncidentViewModel ) parser.fromJson ( request.body() , IncidentViewModel.class );
            Incident incident = ( Incident ) parser.fromJson ( request.body() , Incident.class );
            System.out.println(incident);
            return dbHelper.addIncident( newIncident );
        }, json() );

    }
}
