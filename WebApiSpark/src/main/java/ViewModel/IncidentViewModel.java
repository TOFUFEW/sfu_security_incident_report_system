package ViewModel;
import java.util.*;

public class IncidentViewModel {
    public int REPORT_ID;
    public int ACCOUNT_ID;
    public int CATEGORY_ID;
    public String DESCRIPTION;
    public String EXECUTIVE_SUMMARY;
    public boolean CLOSED;
    public List<LocationViewModel> LOCATIONS;

    public IncidentViewModel(){}

    public IncidentViewModel( int reportId,
                              int accountId,
                              int categoryId,
                              String description,
                              String summary,
                              boolean isClosed,
                              List<LocationViewModel> locations) {
        this.REPORT_ID = reportId;
        this.ACCOUNT_ID = accountId;
        this.CATEGORY_ID = categoryId;
        this.DESCRIPTION = description;
        this.EXECUTIVE_SUMMARY = summary;
        this.CLOSED = isClosed;
        this.LOCATIONS = locations;
    }
}
