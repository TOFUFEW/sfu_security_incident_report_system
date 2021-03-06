package UnitTests;

import Model.Staff;
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

        Staff newStaff = new Staff();
        newStaff.updateAttributeValue( DatabaseValues.Column.FIRST_NAME, "Sample" );
        newStaff.updateAttributeValue( DatabaseValues.Column.LAST_NAME, "User" );
        newStaff.updateAttributeValue( DatabaseValues.Column.CAMPUS_ID, "1" );

        Assert.assertTrue( DBHelper.createAccount( newUser, newStaff ) );

        // Get account object
        User user = DBHelper.authorizeAccount( newUser );
        Assert.assertTrue( user != null );

        // Remove user
        Assert.assertTrue( DBHelper.debug_removeAccountAndStaff( user.getAttributeValue( DatabaseValues.Column.ACCOUNT_ID) ) );
    }

    @Test
    public void testCreateAccountNoUserPass() {
        String userpass = "sampleUser";

        User newUser = new User();
        newUser.updateAttributeValue( DatabaseValues.Column.ACCOUNT_TYPE, "1" );

        Staff newStaff = new Staff();
        newStaff.updateAttributeValue( DatabaseValues.Column.FIRST_NAME, "     Sample" );
        newStaff.updateAttributeValue( DatabaseValues.Column.LAST_NAME, "     User" );
        newStaff.updateAttributeValue( DatabaseValues.Column.CAMPUS_ID, "1" );

        Assert.assertFalse( DBHelper.createAccount( newUser, newStaff ) );
    }

    @Test
    public void testCreateNullAccount() {
        Assert.assertFalse( DBHelper.createAccount( null, null ) );
    }


}
