package Controller;

import DBConnector.Connector;
import Model.Location;
import Parser.JsonUtil;
import com.google.gson.Gson;
import java.sql.ResultSet;
import java.util.*;
import static Parser.JsonUtil.json;
import static spark.Spark.*;

public class LocationController {
    JsonUtil parser = new JsonUtil();
    public LocationController(){
        setupEndPoints();
    }

    public List<Location> locationList = new ArrayList<>();

    private void setupEndPoints() {
        get("/locations", (request, response) -> {
            return locationList;
        }, json());

        post("/locations", (request, response) -> {
            Location loc = parser.fromJson(request.body());
            locationList.add(loc);

            return "Success!";
        }, json());

        get("/test", (request, response) -> getClichedMessage());
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
