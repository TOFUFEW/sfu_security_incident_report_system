package Model;

import Util.DatabaseValues;

public class IncidentCategory extends IncidentElement {

    public IncidentCategory (
            String categoryID,
            String mainCategory,
            String subCategory,
            String incidentType
    ) {
        super ( DatabaseValues.DatabaseTable.INCIDENT_CATEGORY );

        super.putValue(
                DatabaseValues.DatabaseColumn.CATEGORY_ID,
                categoryID
        );

        super.putValue(
                DatabaseValues.DatabaseColumn.MAIN_CATEGORY,
                mainCategory
        );

        super.putValue(
                DatabaseValues.DatabaseColumn.SUB_CATEGORY,
                subCategory
        );

        super.putValue(
                DatabaseValues.DatabaseColumn.INCIDENT_TYPE,
                incidentType
        );
    }


}
