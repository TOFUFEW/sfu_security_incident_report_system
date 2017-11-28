package Controller;

import Model.NewAccount;
import Model.Staff;
import Model.User;
import Util.DBHelper;
import Util.DatabaseValues;
import Util.JsonUtil;
import WebSocketHandlers.Observable;

import static Util.JsonUtil.json;
import static Util.PathStrings.LOGIN_PATH;
import static spark.Spark.get;
import static spark.Spark.post;

public class LoginController
{
    private Observable loginWebSocketObservable;

    public LoginController ( Observable loginWebSocketObservable )
    {
        this.loginWebSocketObservable = loginWebSocketObservable;
        setupEndPoints ();
    }

    private void setupEndPoints()
    {    post( LOGIN_PATH, ( request, response ) ->
        {
            User user = ( User ) JsonUtil.fromJson ( request.body () , User.class );

            if ( user != null )
            {
                System.out.println ( "Signed In!!!" );
                loginWebSocketObservable.sendMessage ( JsonUtil.toJson ( user ) );
            }

            return  DBHelper.authorizeAccount( user );
        }, json() );


        post( "/create-account", ( request, response ) -> {
            NewAccount newAccount = ( NewAccount ) JsonUtil.fromJson( request.body(), NewAccount.class );
            User user = newAccount.getUser();
            Staff staff = newAccount.getStaff();
            return  DBHelper.createAccount( user , staff );
        }, json());

        post( "/validate-username", ( request, response ) -> {
            User user = ( User ) JsonUtil.fromJson( request.body(), User.class );
            return  DBHelper.getUserId( user.getAttributeValue(DatabaseValues.Column.USERNAME) ) != null ;
        }, json());

            get( "/get-account-types", ( request, response) -> {
            return
                        DatabaseValues.AccountType.getTypes();
                        }, json());
    }
}
