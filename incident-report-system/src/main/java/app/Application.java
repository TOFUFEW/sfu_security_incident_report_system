package app;

import static spark.Spark.*;

public class Application {
    public static void main (String[] args){
        //for css and stuff (i think)
        staticFiles.location("/public");

        get("/hello", (req, res) -> "Hello World");

        get("/", TextBoxController.show);
    }

}
