package Controller;

import DBConnector.Connector;
import Model.*;
import Util.*;
import com.google.gson.Gson;

import java.sql.ResultSet;
import java.util.*;

import static Util.JsonUtil.json;
import static spark.Spark.*;

public class LoginController {

    public LoginController() {
        setupEndPoints();
    }

    private void setupEndPoints() {
        post( "/login", ( request, response ) -> {
            User user = new Gson().fromJson( request.body(), User.class );
            return auth_account( user );
        }, json());
    }

    private User auth_account( User user ) {
        try {

            String query = "" +
                    "select * from account acc" +
                    " where acc.USERNAME = '" + user.username + "'" +
                    " AND acc.PASSWORD = '" + user.password + "'";
            ResultSet myRs = Connector.executeQuery( query );


            if ( myRs.next() ) {
                user.accType = Integer.parseInt( myRs.getString( "ACCOUNT_TYPE" ) );
            } else {
                return null;
            }

        } catch ( Exception e ) {
            e.printStackTrace();
        }
        return user;
    }

}
