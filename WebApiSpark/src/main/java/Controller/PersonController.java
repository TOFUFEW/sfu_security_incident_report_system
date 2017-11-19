package Controller;
import Model.Person;
import Util.DBHelper;
import Util.DatabaseValues;
import Util.JsonUtil;

import static Util.PathStrings.PERSON_PATH;
import static spark.Spark.*;

public class PersonController
{

    public PersonController ()
    {
        setupEndPoints ();
    }

    private void setupEndPoints ()
    {
        get ( PERSON_PATH , ( request , response ) ->
        {
            return JsonUtil.toJson ( DBHelper.getPersons () );
        } );

        post( PERSON_PATH , ( request , response ) ->
        {
            Person person = ( Person ) JsonUtil.fromJson ( request.body () , Person.class );

            if ( !DBHelper.selectIncidentElement ( person ) )
            {
                return DBHelper.insertIncidentElement ( person );
            }

            return false;
        } );

        put ( PERSON_PATH , ( request , response ) ->
        {
            Person person = ( Person ) JsonUtil.fromJson ( request.body () , Person.class );

            if ( !DBHelper.selectIncidentElement ( person ) )
            {
                return DBHelper.insertIncidentElement ( person );
            }

            return DBHelper.updateIncidentElement( person );
        } );

        delete ( PERSON_PATH , ( request , response) ->
        {

            String id = request.params(":id");
            Person person = new Person();
            person.updateAttributeValue (
                    DatabaseValues.Column.ACCOUNT_ID,
                    request.params ( ":id" )
            );

            return DBHelper.deleteIncidentElement( person );
        } );
    }


}
