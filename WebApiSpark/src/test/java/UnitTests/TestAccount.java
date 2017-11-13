package UnitTests;

import Model.User;
import Util.DBHelper;
import Util.DatabaseValues;
import org.junit.Assert;
import org.junit.Test;

public class TestAccount {

    @Test
    public void testCreateAccount() {
        String userpass = "sampleUser";

        User newUser = new User();
        newUser.updateAttributeValue( DatabaseValues.Column.ACCOUNT_TYPE, "1" );
        newUser.updateAttributeValue( DatabaseValues.Column.USERNAME, userpass );
        newUser.updateAttributeValue( DatabaseValues.Column.PASSWORD, userpass );
        Assert.assertTrue( DBHelper.createAccount( newUser, null ) );

        // Get account object
        User user = DBHelper.authorizeAccount( newUser );
        Assert.assertTrue( user != null );

        // Remove user
        Assert.assertTrue( DBHelper.debug_removeAccountAndStaff( user.getAttributeValue( DatabaseValues.Column.ACCOUNT_ID) ) );
    }
}
