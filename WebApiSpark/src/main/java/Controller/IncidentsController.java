package Controller;

import DBConnector.Connector;
import Model.Incidents;
import Util.DBHelper;
import Util.JsonUtil;

import java.sql.ResultSet;
import java.util.*;
import static Util.JsonUtil.json;
import static spark.Spark.*;

public class IncidentsController
{
    JsonUtil parser = new JsonUtil();
    DBHelper dbHelper = new DBHelper();
    public IncidentsController()
    {
        setupEndPoints();
    }

    public List<Incidents> incidentList = new ArrayList<>();

    private void setupEndPoints()
    {
        get ("/incidents", ( request , response ) ->
        {
            return incidentList;
        }, json());
    }
}
