package Util;
import com.google.gson.Gson;
import spark.ResponseTransformer;

public class JsonUtil {
    static Gson gson = new Gson();

    public static String toJson(Object object) {
        return gson.toJson(object);
    }

    // Custom line
    public static Object fromJson( String json , Class classOfT ) { return gson.fromJson( json , classOfT ); }

    public static ResponseTransformer json() {
        return JsonUtil::toJson;
    }
}
