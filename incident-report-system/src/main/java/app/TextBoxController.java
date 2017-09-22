package app;

import spark.*;



public class TextBoxController {

    public static Route show = (Request request, Response response) -> {
        response.redirect("/textbox.html");
        return 1; //idk what else to return
    };
}
