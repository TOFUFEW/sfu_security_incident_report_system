package Model;


import Util.DatabaseValues;

public class GenericElement extends IncidentElement
{
    public GenericElement ( )
    {
        this (
                "",
                "",
                ""

        );
    }

    public GenericElement (
            String elementID,
            String type,
            String description
    ) {
        super (
                DatabaseValues.Table.GENERIC_ELEMENT,
                new DatabaseValues.Column[]
                        {
                                DatabaseValues.Column.GENERIC_ELEMENT_ID,
                                DatabaseValues.Column.TYPE,
                                DatabaseValues.Column.DESCRIPTION,
                        }
        );

        updateAttributeValue(
                DatabaseValues.Column.GENERIC_ELEMENT_ID,
                elementID
        );

        updateAttributeValue(
                DatabaseValues.Column.TYPE,
                type
        );

        updateAttributeValue(
                DatabaseValues.Column.DESCRIPTION,
                description
        );

    }
}
