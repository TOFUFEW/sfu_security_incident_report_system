package Controller;

import DBConnector.Connector;
import Model.Location;
import Util.*;
import ViewModel.LocationViewModel;
import com.google.gson.Gson;

import java.sql.ResultSet;
import java.util.*;
import static Util.JsonUtil.json;
import static spark.Spark.*;

public class LocationController {

    public LocationController ()
    {
        setupEndPoints();
    }

    private void setupEndPoints() {
        get ( "/locations" , ( request , response ) -> {
            return DBHelper.getLocations ();
        } );

        post ( "/locations" , ( request , response ) -> {
            Gson gson = new Gson ();
            Location location = gson.fromJson (
                    request.body (),
                    Location.class
            );

//            if ( !DBHelper.isExistingLocation ( location ) )
//            {
//                return DBHelper.insertIncidentElement ( location );
//            }
//
//            return DBHelper.editLocation( location );return "";
            return "";
        } );

        put ( "/locations" , ( request , response ) -> {
            Gson gson = new Gson ();
            Location location = gson.fromJson (
                    request.body (),
                    Location.class
            );

           // LocationViewModel ret = DBHelper.editLocation ( location ); // This code touches the database
            return ""; //ret;
        } );

        delete( "/locations/:id", ( request , response ) -> {
            int id = Integer.parseInt( request.params( ":id" ) );
            return DBHelper.deleteLocation( id );
        } , json() );
    }
}
