package Controller;

import Model.*;
import Util.*;

import java.sql.ResultSet;

import static Util.JsonUtil.json;
import static spark.Spark.*;

public class LoginController {

    public LoginController() {
        setupEndPoints();
    }

    private void setupEndPoints() {
        post( "/login", ( request , response ) -> {
            User user = ( User ) JsonUtil.fromJson ( request.body(), User.class );
            return JsonUtil.toJson ( auth_account ( user ) );
        } );
    }

    private User auth_account ( User user ) {
        try {

            String query = "" +
                    "select * from account acc" +
                    " where acc.USERNAME = '" + user.getAttributeValue( DatabaseValues.Column.USERNAME ) + "'" +
                    " AND acc.PASSWORD = '" + user.getAttributeValue( DatabaseValues.Column.PASSWORD ) + "'";
            ResultSet myRs = DBHelper.executeQuery ( query );

            if ( myRs.next () )
            {
                user.updateAttributeValue(
                        DatabaseValues.Column.ACCOUNT_TYPE,
                        myRs.getString ( DatabaseValues.Column.ACCOUNT_TYPE.toString () )
                );
            }

            else
            {
                return null;
            }

        }
        catch ( Exception e )
        {
            e.printStackTrace ();
        }

        return user;
    }

}
