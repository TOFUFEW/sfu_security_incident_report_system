package app;

import Model.Location;
import static Parser.JsonUtil.json;
import static spark.Spark.*;

// Class that initializes each controller at start - up
public class Application {

    public static LocationController locationController = new LocationController();

    public static void main (String[] args){
        //for css and stuff (i think)
        /*staticFiles.location("/public");

        get("/hello", (req, res) -> "Hello World");

        get("/", TextBoxController.show);*/



        // TEST CODE WITHOUT DATABASE
        Location location1 = new Location("Surrey", "SURR-301", 3200, "Cmpt");
        Location location2 = new Location("Burnaby", "BUR-800", 9808, "Ensc");
        locationController.locationList.add(location1);
        locationController.locationList.add(location2);

        get("/locations", (request, response) -> {
            return locationController.getAllLocations();
        }, json());

        post("/locations", (request, response) -> {
            String campus = request.queryParams("campus");
            String building_num = request.queryParams("building_num");
            int room_num = Integer.parseInt(request.queryParams("room_num"));
            String deparment = request.queryParams("deparment");

            Location loc = new Location(campus, building_num, room_num, deparment);
            locationController.locationList.add(loc);
            return "Success!";
        }, json());
        // END TEST CODE
    }

}
