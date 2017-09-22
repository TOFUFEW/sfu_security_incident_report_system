package app;

import spark.*;

import Model.Location;

public class TextBoxController {

    public static Route show = (Request request, Response response) -> {
        response.redirect("/Form.html");
        return 1; //idk what else to return
    };
}
