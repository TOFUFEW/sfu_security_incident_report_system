package Controller;

import DBConnector.Connector;
import Model.Location;

import java.sql.ResultSet;
import java.util.*;
import static Parser.JsonUtil.json;
import static spark.Spark.*;

public class LocationController
{

    public LocationController ()
    {
        setupEndPoints();
    }

    public List < Location > locationList = new ArrayList <> ();

    private void setupEndPoints ()
    {
        get ( "/locations" , ( request , response ) -> { return locationList; } , json () );

        post ( "/locations" , ( request , response ) ->
            {
                String campus = request.queryParams ( "campus" );
                String building_num = request.queryParams ( "building_num" );
                String room_num = request.queryParams ( "room_num" );
                String department = request.queryParams ( "department" );

                Location loc = new Location (
                        campus,
                        building_num,
                        room_num,
                        department
                );
                locationList.add ( loc );
                return "Success!";
            },
            json ()
        );

        get ( "/test" , ( request , response ) -> getClichedMessage () , json () );
    }

    public String getClichedMessage ()
    {
        try {
            String query = "select * from employee";
            ResultSet myRs = Connector.executeQuery ( query );

            while( myRs.next() ){
                String fname = myRs.getString ( "fname" );
                String lname = myRs.getString ( "lname" );
                System.out.println ( fname + ' ' + lname );
                String namePair = fname + ' ' + lname;
                return namePair;
            }
        }
        catch ( Exception e )
        {
            e.printStackTrace ();
        }
        return "Hello World";
    }
}
