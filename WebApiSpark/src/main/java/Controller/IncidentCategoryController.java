package Controller;

import Util.DBHelper;
import Util.DatabaseValues;

import static Util.JsonUtil.json;
import static Util.PathStrings.CATEGORIES_PATH;
import static spark.Spark.get;

public class IncidentCategoryController {

    public IncidentCategoryController() {
        setUpEndPoints();
    }

    private void setUpEndPoints() {
        get ( CATEGORIES_PATH, ( request , response ) ->
        {
            return DBHelper.getIncidentElements ( DatabaseValues.Table.INCIDENT_CATEGORY );
        }, json () );


    }
}

//        post( "/incidentCategory" , ( request , response ) -> {
//
//        } , json() );
//
//        put( "/incidentCategory" , ( request , response ) -> {
//
//        }, json());
//
//        delete( "/incidentCategory/:id", ( request , response ) -> {
//
//        } , json() );
//
//        get( "/test" , ( request , response ) -> getClichedMessage() );
