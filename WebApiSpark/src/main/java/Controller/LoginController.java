package Controller;

import Model.NewAccount;
import Model.Staff;
import Model.User;
import Util.DBHelper;
import Util.DatabaseValues;
import Util.JsonUtil;

import java.sql.ResultSet;

import static Util.JsonUtil.json;
import static spark.Spark.post;

public class LoginController {

    public LoginController() {
        setupEndPoints();
    }

    private void setupEndPoints() {
        post( "/login", ( request, response ) -> {
            User user = (User) JsonUtil.fromJson( request.body(), User.class );
            return  DBHelper.authorizeAccount( user );
        }, json());

        post( "/create-account", ( request, response ) -> {
            NewAccount newAccount = ( NewAccount ) JsonUtil.fromJson( request.body(), NewAccount.class );
            User user = newAccount.getUser();
            Staff staff = newAccount.getStaff();
            return  DBHelper.createAccount( user , staff );
        }, json());
    }
}
