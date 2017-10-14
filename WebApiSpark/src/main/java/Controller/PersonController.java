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

        post( "/locations" , ( request , response ) -> {
            Person person = ( Person ) JsonUtil.fromJson ( request.body () , Person.class );

            if ( !DBHelper.selectIncidentElement ( person ) )
            {
                return DBHelper.insertIncidentElement ( person );
            }

            return DBHelper.updateIncidentElement( person );
        } );

    }


}
