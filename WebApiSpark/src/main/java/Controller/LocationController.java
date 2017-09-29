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
            int id = new Random().nextInt(1000000+1); // for testing only
            loc.setId(id);
            locationList.add(loc);
            return "Location successfully added!";
        }, json());

        put("/locations", (request, response) -> {
            Location loc = parser.fromJson(request.body());
            
            for (int i = 0; i < locationList.size(); i+=1) {
                if (locationList.get(i).getId() == loc.getId()) {
                    locationList.set(i, loc);
                    return "Location successfully updated!";
                }
            }
            return "Edit failed.";
        }, json());

        delete("/locations/:id", (request, response) -> {
            int id = Integer.parseInt(request.params(":id"));
            int listLength = locationList.size();

            for (int i = 0; i < listLength; i+=1) {
                if (locationList.get(i).getId() == id) {
                    locationList.remove(i);
                    return "Location successfully deleted!";
                }
            }
            return "Location not found.";
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
