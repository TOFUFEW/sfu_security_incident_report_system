package Util;

import spark.ModelAndView;
import spark.TemplateEngine;

import com.google.common.io.CharStreams;
import java.io.InputStream;
import java.io.InputStreamReader;

public class HtmlEngine extends TemplateEngine {

    @Override
    public String render(ModelAndView modelAndView) {
        InputStream stream = HtmlEngine.class.getResourceAsStream("/" + modelAndView.getViewName());
        String html = "";
        try {
            html = CharStreams.toString( new InputStreamReader( stream, "UTF-8") );
        }
        catch ( Exception e ) {
            e.printStackTrace();
        }
        return html;
    }
}
