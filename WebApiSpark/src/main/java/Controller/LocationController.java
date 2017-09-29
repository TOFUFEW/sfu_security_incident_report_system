package Controller;

import DBConnector.Connector;
import Model.Location;
import Util.*;

import java.sql.ResultSet;
import java.util.*;
import static Util.JsonUtil.json;
import static spark.Spark.*;

public class LocationController {
    JsonUtil parser = new JsonUtil();
    DBHelper dbHelper = new DBHelper();
    public List<Location> locationList = new ArrayList<>();

    public LocationController(){
        setupEndPoints();
    }

    private void setupEndPoints() {
        get ( "/locations" , ( request , response ) -> {
            return locationList;
        } , json() );

        post ("/locations" , ( request , response ) -> {
            Location loc = parser.jsonToLocation( request.body() );
            int i = dbHelper.addLocation( loc , locationList ); // This code touches the database
            if ( i > 0 ) return "Location successfully added!";
            return "Add failed.";
        } , json());

        put ( "/locations" , ( request , response ) -> {
            Location loc = parser.jsonToLocation( request.body() );
            int i = dbHelper.editLocation( loc , locationList ); // This code touches the database
            if ( i > 0 ) return "Location successfully edited!";
            return "Edit failed.";
        } , json() );

        delete ( "/locations/:id" , ( request , response ) -> {
            int id = Integer.parseInt( request.params( ":id" ) );
            int i = dbHelper.deleteLocation(id, locationList);
            if ( i > 0 ) return "Location successfully deleted!";
            return "Delete failed.";
        } , json() );

        get ( "/test" , ( request , response ) -> getClichedMessage() );
    }

    public String getClichedMessage() {
        try {
            String query = "select * from employee";
            ResultSet myRs = Connector.executeQuery(query);
            while(myRs.next()){
                String fname = myRs.getString("fname");
                String lname = myRs.getString("lname");
                System.out.println(fname + ' ' + lname);
                return fname + ' ' + lname;
            }
        } catch (Exception e){
            e.printStackTrace();
        }
        return "Hello World";
    }
}
