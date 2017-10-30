package Controller;

import Model.User;
import Util.DBHelper;
import Util.DatabaseValues;
import Util.JsonUtil;

import java.sql.ResultSet;

import static spark.Spark.post;

public class LoginController {

    public LoginController() {
        setupEndPoints();
    }

    private void setupEndPoints() {
        post( "/login", ( request, response ) -> {
            User user = (User) JsonUtil.fromJson( request.body(), User.class );
            User _user = auth_account( user );
            return _user;
        }, json());
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

                user.updateAttributeValue(
                        DatabaseValues.Column.ACCOUNT_ID,
                        myRs.getString ( DatabaseValues.Column.ACCOUNT_ID.toString() )
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
