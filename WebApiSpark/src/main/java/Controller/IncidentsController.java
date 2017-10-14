package Controller;

import Model.Incident;
import Util.DBHelper;
import Util.DatabaseValues;
import Util.JsonUtil;

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
            Incident newIncident = ( Incident ) parser.fromJson ( request.body() , Incident.class );
            if ( newIncident.getColumnValue(DatabaseValues.DatabaseColumn.REPORT_ID) != null
                    && DBHelper.selectIncident( newIncident ) )
                return dbHelper.updateIncident( newIncident );
            return dbHelper.insertIncident( newIncident );
        }, json() );

    }
}
