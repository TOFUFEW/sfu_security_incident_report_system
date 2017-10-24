package Controller;

import Model.IncidentCategory;
import Util.DBHelper;
import Util.DatabaseValues;
import Util.JsonUtil;

import java.util.ArrayList;

import java.sql.ResultSet;
import static Util.JsonUtil.json;
import static spark.Spark.*;

public class IncidentCategoryController {

    public IncidentCategoryController() {
        setUpEndPoints();
    }

    private IncidentCategory[] getCategories()
    {
        ArrayList<IncidentCategory> categoryList = new ArrayList<>();
        return categoryList.toArray(new IncidentCategory[categoryList.size()]);
    };

    private void setUpEndPoints() {
        get("/categories", (request, response) -> {
            //return JsonUtil.toJson( getCategories() );
            return getCategories();
        }, json());


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
