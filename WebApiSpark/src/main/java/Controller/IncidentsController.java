package Controller;

import Model.Incident;
import Model.User;
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

        post ( "/created-incidents" , (request, response) -> {
            User user = ( User ) JsonUtil.fromJson ( request.body(), User.class );
            int accountID = Integer.parseInt ( user.getAttributeValue ( DatabaseValues.Column.ACCOUNT_ID ) );
            Incident [] incidents = DBHelper.getCreatedByIncidents( accountID );
            return JsonUtil.toJson ( incidents );
        } );

        post ("/get-incidents" , ( request, response ) ->
        {
            System.out.println(request.body());
            User user = ( User ) JsonUtil.fromJson ( request.body(), User.class );
            String accountID = user.getAttributeValue ( DatabaseValues.Column.ACCOUNT_ID );
            System.out.println(accountID);
            Incident [] incidents = DBHelper.getIncidents ( accountID );
            return JsonUtil.toJson ( incidents );
        } );

        post ( "/get-incident", ( request, response ) ->
        {
            Incident incident = ( Incident ) JsonUtil.fromJson( request.body(), Incident.class );
            return JsonUtil.toJson( DBHelper.getIncident ( incident.getAttributeValue( DatabaseValues.Column.REPORT_ID )) );
        });

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
