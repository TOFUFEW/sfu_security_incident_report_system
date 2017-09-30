package Util;

import Model.Location;
import com.google.gson.Gson;
import spark.ResponseTransformer;

public class JsonUtil {
    static Gson gson = new Gson();

    public static String toJson(Object object) {
        return gson.toJson(object);
    }

    public static Object fromJson( String json , Class classOfT ) {
        if ( classOfT == Location.class )
            return gson.fromJson( json , classOfT );
        // add more classes here
        return null;
    }

    public static ResponseTransformer json() {
        return JsonUtil::toJson;
    }
}
