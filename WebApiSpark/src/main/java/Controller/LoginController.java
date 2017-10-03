package Controller;
import Util.*;

import java.sql.ResultSet;
import java.util.*;
import static Util.JsonUtil.json;
import static spark.Spark.*;

public class LoginController {
    JsonUtil parser = new JsonUtil();
    DBHelper dbHelper = new DBHelper();

    public LoginController () {
        setupEndPoints();
    }

    private void setupEndPoints() {
        //post method here
    }

}
