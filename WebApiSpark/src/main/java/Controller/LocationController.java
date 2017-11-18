package Controller;

import Model.IncidentElement;
import Model.Location;
import Util.DBHelper;
import Util.DatabaseValues;
import Util.JsonUtil;

import static spark.Spark.*;

public class LocationController {

    public LocationController ()
    {
        setupEndPoints();
    }

    private void setupEndPoints() {
        get ( "/locations" , ( request , response ) -> {
            return JsonUtil.toJson( DBHelper.getLocations () );
        } );

        post( "/locations" , ( request , response ) -> {
            Location location = ( Location ) JsonUtil.fromJson ( request.body () , Location.class );

            if ( !DBHelper.selectIncidentElement ( location ) )
            {
                return DBHelper.insertIncidentElement ( location );
            }

            return DBHelper.updateIncidentElement( location );
        } );

        put ( "/locations" , ( request , response ) -> {
            Location location = ( Location ) JsonUtil.fromJson ( request.body () , Location.class );

            if ( !DBHelper.selectIncidentElement ( location ) )
            {
                return DBHelper.insertIncidentElement ( location );
            }
            return DBHelper.updateIncidentElement ( location );
        } );

        delete ( "/locations/:id", ( request , response ) -> {
            Location location = ( Location ) JsonUtil.fromJson ( request.body () , Location.class );

            return DBHelper.deleteIncidentElement ( location );
        } );

        get ( "/location/:id",  (request, response) -> {
            Location location = new Location();
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
