package Model;

public class Incident {

    public Incident()
    {
    }

    public Incident(int reportID ,
                    int accountID ,
                    int categoryID ,
                    String description ,
                    String execSummary ,
                    int closed )
    {
        this.reportID = reportID ;
        this.accountID = accountID ;
        this.categoryID = categoryID ;
        this.description = description ;
        this.execSummary = execSummary ;
        this.closed = closed ;
    }

    private int reportID ;
    private int accountID ;
    private int categoryID ;
    private String description ;
    private String execSummary ;
    private int closed ;

}
