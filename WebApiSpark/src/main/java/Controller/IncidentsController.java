package Controller;

import Model.Incident;
import Util.DBHelper;
import Util.DatabaseValues;
import Util.JsonUtil;
import WebSocketHandlers.Observable;

import static Util.PathStrings.*;
import static spark.Spark.get;
import static spark.Spark.post;

public class IncidentsController
{
    private Observable incidentsWebSocketObservable;

    public IncidentsController ( Observable incidentsWebSocketObservable )
    {
        this.incidentsWebSocketObservable = incidentsWebSocketObservable;
        setupEndPoints ();
    }

    private void setupEndPoints()
    {
        get ( INCIDENTS_PATH , ( request , response ) ->
        {
            Incident []  incidents = DBHelper.getIncidents ();
            return JsonUtil.toJson ( incidents );
        } );

        post ( INCIDENTS_PATH , ( request , response ) ->
        {
            Incident newIncident = ( Incident ) JsonUtil.fromJson ( request.body () , Incident.class );

            String reportID = DBHelper.insertIncident ( newIncident );

            if ( reportID != null )
            {
                Incident messageIncident = new Incident ( newIncident );
                messageIncident.updateAttributeValue (
                        DatabaseValues.Column.REPORT_ID,
                        reportID
                );

                incidentsWebSocketObservable.sendMessage ( JsonUtil.toJson ( messageIncident ) );
                return true;
            }

            return false;
        } );

        post ("/update-incident" , ( request, response ) ->
        {
            Incident updatedIncident = ( Incident ) JsonUtil.fromJson ( request.body () , Incident.class );

            if ( DBHelper.updateIncident ( updatedIncident ) )
            {
                incidentsWebSocketObservable.sendMessage ( JsonUtil.toJson ( updatedIncident ) );
                return true;
            }
            return false;
        } );

        post ( "/assign-incident", ( request, response ) ->
        {
            Incident updatedIncident = ( Incident ) JsonUtil.fromJson ( request.body () , Incident.class );

            if ( DBHelper.updateIncident ( updatedIncident ) )
            {
                incidentsWebSocketObservable.sendMessage ( JsonUtil.toJson ( updatedIncident ) );
                return true;
            }
            return false;
        } );
    }
}
