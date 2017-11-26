package Controller;
import Model.Person;
import Util.DBHelper;
import Util.DatabaseValues;
import Util.JsonUtil;

import static spark.Spark.*;

public class PersonController
{

    public PersonController () {
        setupEndPoints ();
    }

    private void setupEndPoints (){
        get ("/person", ( request, response ) -> {
            return JsonUtil.toJson(DBHelper.getPersons());
        });

        post( "/person" , ( request , response ) -> {
            Person person = ( Person ) JsonUtil.fromJson ( request.body () , Person.class );

            if ( !DBHelper.selectIncidentElement ( person ) )
            {
                return DBHelper.insertIncidentElement ( person );
            }

            return false;
        } );

        put( "/person" , ( request , response ) -> {
            Person person = ( Person ) JsonUtil.fromJson ( request.body () , Person.class );

            if ( !DBHelper.selectIncidentElement ( person ) )
            {
                return DBHelper.insertIncidentElement ( person );
            }

            return DBHelper.updateIncidentElement( person );
        } );

        delete( "/person" , ( request , response) ->{

            String id = request.params(":id");
            Person person = new Person();
            person.updateAttributeValue (
                    DatabaseValues.Column.ACCOUNT_ID,
                    request.params ( ":id" )
            );

            return DBHelper.deleteIncidentElement( person );
        } );

        post( "/person-exists" , ( request , response ) -> {
            Person person = ( Person ) JsonUtil.fromJson ( request.body () , Person.class );

            return DBHelper.personExists ( person ) ;
        } );
    }


}
