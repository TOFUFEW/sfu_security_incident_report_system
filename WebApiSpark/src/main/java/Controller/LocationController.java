package Controller;

import Model.IncidentElement;
import Model.Location;
import Util.DBHelper;
import Util.DatabaseValues;
import Util.JsonUtil;

import static Util.PathStrings.LOCATIONS_ID_PATH;
import static Util.PathStrings.LOCATIONS_PATH;
import static spark.Spark.*;

public class LocationController
{

    public LocationController ()
    {
        setupEndPoints ();
    }

    private void setupEndPoints() {
        get ( LOCATIONS_PATH , ( request , response ) ->
        {
            return JsonUtil.toJson(  DBHelper.getLocations () );
        } );

        post( LOCATIONS_PATH , ( request , response ) ->
        {
            Location location = ( Location ) JsonUtil.fromJson ( request.body () , Location.class );

            if ( !DBHelper.selectIncidentElement ( location ) )
            {
                return DBHelper.insertIncidentElement ( location );
            }

            return DBHelper.updateIncidentElement( location );
        } );

        put ( LOCATIONS_PATH , ( request , response ) ->
        {
            Location location = ( Location ) JsonUtil.fromJson ( request.body () , Location.class );

            if ( !DBHelper.selectIncidentElement ( location ) )
            {
                return DBHelper.insertIncidentElement ( location );
            }
            return DBHelper.updateIncidentElement ( location );
        } );

        delete ( LOCATIONS_ID_PATH , ( request , response ) ->
        {
            Location location = ( Location ) JsonUtil.fromJson ( request.body () , Location.class );

            return DBHelper.deleteIncidentElement ( location );
        } );

        get ( LOCATIONS_ID_PATH ,  (request, response) ->
        {
            Location location = new Location ();
            location.updateAttributeValue(
                    DatabaseValues.Column.LOCATION_ID,
                    request.params ( ":id" )
            );
            return DBHelper.selectIncidentElement ( location );
        } );

        get( "/campus", (request, response) -> {
            IncidentElement[] arr = DBHelper.getIncidentElements( DatabaseValues.Table.CAMPUS );
            return JsonUtil.toJson( arr );
        });
    }
}
