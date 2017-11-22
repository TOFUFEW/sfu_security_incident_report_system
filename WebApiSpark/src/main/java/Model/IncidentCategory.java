package Model;

import Util.DatabaseValues;

public class IncidentCategory extends IncidentElement
{
    public IncidentCategory ()
    {
        this(
                "",
                "",
                "",
                ""
        );
    }

    public IncidentCategory(
            String categoryID,
            String mainCategory,
            String subCategory,
            String incidentType
            )
    {

        super(
                DatabaseValues.Table.INCIDENT_CATEGORY,
                new DatabaseValues.Column[]
                        {
                                DatabaseValues.Column.CATEGORY_ID,
                                DatabaseValues.Column.MAIN_CATEGORY,
                                DatabaseValues.Column.SUB_CATEGORY,
                                DatabaseValues.Column.INCIDENT_TYPE
                        }
        );
        updateAttributeValue(
                DatabaseValues.Column.CATEGORY_ID,
                categoryID
        );

        updateAttributeValue(
                DatabaseValues.Column.MAIN_CATEGORY,
                mainCategory
        );

        updateAttributeValue(
                DatabaseValues.Column.SUB_CATEGORY,
                subCategory
        );

        updateAttributeValue(
                DatabaseValues.Column.INCIDENT_TYPE,
                incidentType
        );
    }
}
//
//public class IncidentCategory extends IncidentElement {
//
//    public IncidentCategory (
//            String categoryID,
//            String mainCategory,
//            String subCategory,
//            String incidentType
//    ) {
//        super ( DatabaseValues.DatabaseTable.INCIDENT_CATEGORY );
//
//        super.putValue(
//                DatabaseValues.DatabaseColumn.CATEGORY_ID,
//                categoryID
//        );
//
//        super.putValue(
//                DatabaseValues.DatabaseColumn.MAIN_CATEGORY,
//                mainCategory
//        );
//
//        super.putValue(
//                DatabaseValues.DatabaseColumn.SUB_CATEGORY,
//                subCategory
//        );
//
//        super.putValue(
//                DatabaseValues.DatabaseColumn.INCIDENT_TYPE,
//                incidentType
//        );
//    }
