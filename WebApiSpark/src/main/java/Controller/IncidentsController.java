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
            Incident[] incidents = DBHelper.getIncidents ();
            return JsonUtil.toJson ( incidents );
        } );

        post ("/search-incident" , ( request , response ) ->
        {
            System.out.println(request.body());
            Incident[] incidents = DBHelper.searchIncidents ( request.body() );
            return JsonUtil.toJson ( incidents );
        } );

        post ("/incidents" , ( request, response ) ->
        {
            Incident newIncident = ( Incident ) JsonUtil.fromJson ( request.body() , Incident.class );
            return DBHelper.insertIncident ( newIncident );
        } );

        post ("/update-incident" , ( request, response ) ->
        {
            Incident updatedIncident = ( Incident ) JsonUtil.fromJson ( request.body() , Incident.class );
            return DBHelper.updateIncident ( updatedIncident );
        } );

        post ( "/assign-incident", ( request, response ) ->
        {
            Incident updatedIncident = (Incident) JsonUtil.fromJson ( request.body(), Incident.class );
            return DBHelper.updateIncident( updatedIncident );
        });
    }
}
