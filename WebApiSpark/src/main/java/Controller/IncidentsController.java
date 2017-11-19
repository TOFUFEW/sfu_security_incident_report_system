package Controller;

import Model.Incident;
import Util.DBHelper;
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

            incidentsWebSocketObservable.sendMessage ( JsonUtil.toJson ( newIncident ) );

            return DBHelper.insertIncident ( newIncident );
        } );

        post ( UPDATE_INCIDENT_PATH , ( request , response ) ->
        {
            Incident updatedIncident = ( Incident ) JsonUtil.fromJson ( request.body () , Incident.class );

            incidentsWebSocketObservable.sendMessage ( JsonUtil.toJson ( updatedIncident ) );

            return DBHelper.updateIncident ( updatedIncident );
        } );

        post ( ASSIGN_INCIDENT_PATH, ( request , response ) ->
        {
            Incident updatedIncident = ( Incident ) JsonUtil.fromJson ( request.body () , Incident.class );

            incidentsWebSocketObservable.sendMessage ( JsonUtil.toJson ( updatedIncident ) );

            return DBHelper.updateIncident ( updatedIncident );
        } );
    }
}
