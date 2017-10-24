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
        /* DEBUG */
        try {
            ResultSet r = DBHelper.executeQuery("Select * from IncidentCategory");
            while ( r.next() ) {
                System.out.println( r.getString("MAIN_CATEGORY"));
                System.out.println( r.getString("SUB_CATEGORY"));
                System.out.println( r.getString("INCIDENT_TYPE"));
            }
        }
        catch(Exception e ) {
            e.printStackTrace();
        }
        /* END DEBUG */

        ArrayList<IncidentCategory> categoryList = new ArrayList<>();

        String categoryID = "1";
        String mainCategory = "Main Category 1";
        String subCategory = "Sub Category 1";
        String incidentType = "Category Type 1";

        IncidentCategory ic = new IncidentCategory(
                categoryID,
                mainCategory,
                subCategory,
                incidentType
        );

        insertCategory(mainCategory, subCategory, incidentType);
        categoryList.add(ic);

        categoryID = "2";
        mainCategory = "Main Category 2";
        subCategory = "Sub Category 1";
        incidentType = "Category Type 0";

        IncidentCategory ic2 = new IncidentCategory(
                categoryID,
                mainCategory,
                subCategory,
                incidentType
        );

        categoryList.add(ic2);

        categoryID = "3";
        mainCategory = "Main Category 2";
        subCategory = "Sub Category 2";
        incidentType = "Category Type 1";

        IncidentCategory ic3 = new IncidentCategory(
                categoryID,
                mainCategory,
                subCategory,
                incidentType
        );

        categoryList.add(ic3);

        categoryID = "4";
        mainCategory = "Main Category 1";
        subCategory = "Sub Category 1";

        IncidentCategory ic4 = new IncidentCategory(
                categoryID,
                mainCategory,
                subCategory,
                null
        );

        categoryList.add(ic4);

        return categoryList.toArray(new IncidentCategory[categoryList.size()]);
    };

    private void setUpEndPoints() {
        get("/categories", (request, response) -> {
            //return JsonUtil.toJson( getCategories() );
            return getCategories();
        }, json());


    }

    private void insertCategory(String main, String sub, String type) {
        String query = "insert into IncidentCategory (MAIN_CATEGORY, SUB_CATEGORY, INCIDENT_TYPE) values (";
        query += "'" + main + "', ";
        query += "'" + sub + "', ";
        query += "'" + type + "');";

        System.out.println(query);
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
