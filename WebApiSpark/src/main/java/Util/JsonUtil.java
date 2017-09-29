package Util;

import Model.Location;
import com.google.gson.Gson;
import spark.ResponseTransformer;

public class JsonUtil {
    static Gson gson = new Gson();
    public static String toJson(Object object){
        return gson.toJson(object);
    }
    public static Location jsonToLocation(String json) { return gson.fromJson(json, Location.class); }
    public static ResponseTransformer json() {
        return JsonUtil::toJson;
    }
}
