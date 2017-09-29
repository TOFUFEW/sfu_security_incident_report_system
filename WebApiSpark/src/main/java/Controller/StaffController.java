package Controller;
import Model.Staff;
import spark.ResponseTransformer;


import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

import static Parser.JsonUtil.json;
import static spark.Spark.*;

public class StaffController {
    private List<Staff> staffList = new ArrayList<>();

    public StaffController()
    {
        Date date = new Date("09/10/1993");
        Staff testStaff = new Staff(
                "Bob",
                "Ross",
                "Surrey Central Skytrain",
                "6043883838",
                date

        );
        setupEndPoints();
    }

    private void setupEndPoints()
    {
        get("/staff", (request, response) -> {
            return staffList;
        }, json());


        post("/staff", (request, response) -> {
            String firstName = request.queryParams("firstName");
            String lastName = request.queryParams("lastName");
            DateFormat df = new SimpleDateFormat("mm/dd/yyyy");
            Date DOB = df.parse(request.queryParams("DOB"));
            String address = request.queryParams("address");
            String phoneNumber = request.queryParams("phoneNumber");
            Staff staff = new Staff(
                    firstName,
                    lastName,
                    address,
                    phoneNumber,
                    DOB
            );


            staffList.add(staff);

            return "Success!";
        }, json());
    }

}
