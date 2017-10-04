package Controller;

import Model.IncidentCategory;
import DBConnector.Connector;

import Model.Location;
import Util.*;
import Util.JsonUtil;
import ViewModel.LocationViewModel;

import java.util.ArrayList;

import java.sql.ResultSet;
import java.util.*;
import static Util.JsonUtil.json;
import static spark.Spark.*;

public class IncidentCategoryController {

    public IncidentCategoryController () { setUpEndPoints(); }

    private void setUpEndPoints() {
        get( "/incidentCategory" , ( request , response ) -> {
            ArrayList <IncidentCategory> incidentCategoryList = new ArrayList<>();
            try {
                ResultSet result = Connector.executeQuery ( "SELECT * FROM IncidentCategory");

                while ( result.next() ) {
                    int catID = result.getInt ( "CATEGORY_ID" );
                    String categoryID = catID + "";
                    String mainCategory = result.getString ( "MAIN_CATEGORY" );
                    String subCategory = result.getString ( "SUB_CATEGORY" );
                    String incidentType = result.getString ( "INCIDENT_TYPE" );

                    IncidentCategory ic = new IncidentCategory (
                            categoryID,
                            mainCategory,
                            subCategory,
                            incidentType
                    );

                    incidentCategoryList.add ( ic );
                }
            } catch ( Exception e ) {
                e.printStackTrace();
            }
            return incidentCategoryList;
        }, json() );

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
    }

}
