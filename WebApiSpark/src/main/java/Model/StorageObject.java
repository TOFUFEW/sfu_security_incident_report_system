package Model;

import Util.DatabaseValues;
import com.google.gson.Gson;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;

public class StorageObject
{
    private DatabaseValues.Table table;
    private HashMap <DatabaseValues.Column, String > attributes = new HashMap ();

    protected StorageObject (
            DatabaseValues.Table table,
            DatabaseValues.Column[] columns
    ) {
        this.table = table;

        for ( DatabaseValues.Column column : columns )
        {
            attributes.put (
                column,
                column.getDefaultValue ()
            );
        }
    }

    public DatabaseValues.Table getTable ()
    {
        return table;
    }

    public DatabaseValues.Column[] getColumnSet ()
    {
        return attributes.keySet ().toArray( new DatabaseValues.Column[ attributes.size () ] );
    }

    public String getAttributeValue(DatabaseValues.Column column )
    {
        return attributes.get ( column );
    }

    public String toInsertSQL ()
    {
        DatabaseValues.Column [] columns = getColumnSet ();
        String columnList = "(";
        for ( DatabaseValues.Column column : columns )
        {
            String value = getAttributeValue ( column );

            if ( value == null )
            {
                // don't do anything with empty string values - means it is auto-incremented by database
            }

            else
            {
                columnList += column.toString () + ", ";
            }
        }

        // remove comma at the end of list
        columnList = columnList.substring (
                0,
                columnList.length () - 2
        );
        columnList += ")";

        String valueList = "VALUES(";
        for ( DatabaseValues.Column column : columns )
        {
            String value = getAttributeValue( column );

            if ( value == null )
            {
                // don't do anything with null string values - means it is auto-incremented by database
            }

            else if ( column.getDataType ().equals ( "INT" ) || column.getDataType ().equals ( "BIT" ) )
            {
                valueList += value + ", ";
            }

            else
            {
                valueList += "\'" + value + "\'" + ", ";
            }
        }

        // remove comma at the end of list
        valueList = valueList.substring (
                0,
                valueList.length () - 2
        );
        valueList += ")";

        String insertSQL = "INSERT INTO " + table.toString () + " " + columnList + " " + valueList;

        return insertSQL;
    }

    public String toUpdateSQL ()
    {
        if ( !hasAllValidPrimaryKeyValues() )
        {
            return null;
        }

        DatabaseValues.Column[] columns = getColumnSet ();

        String setSQL = "SET ";
        for ( DatabaseValues.Column column : columns )
        {
            String value = getAttributeValue( column );

            if ( value == null )
            {
                // don't do anything with null string values
            }

            else if ( !column.isPrimaryKeyOfTable ( table ) )
            {
                setSQL += column.toString () + " = " + "\'" + value + "\'" + ", ";
            }
        }

        // remove comma at the end of list
        setSQL = setSQL.substring (
                0,
                setSQL.length () - 2
        );

        String whereSQL = "WHERE ";
        for ( DatabaseValues.Column column : columns )
        {
            String value = getAttributeValue( column );

            if ( value == null )
            {
                // don't do anything with null string values
            }

            else if ( column.isPrimaryKeyOfTable ( table ) )
            {
                if ( column.getDataType ().equals ( "INT" ) )
                {
                    whereSQL += column.toString () + " = " + value + " AND ";
                }

                else
                {
                    whereSQL += column.toString () + " = " + "\'" + value + "\'" + " AND ";
                }

            }
        }

        // remove AND at the end of list
        whereSQL = whereSQL.substring (
                0,
                whereSQL.length () - 4
        );

        String updateSQL = "UPDATE " + table.toString () + " " + setSQL + " " + whereSQL;
        return updateSQL;
    }

    public String toDeleteSQL ()
    {
        if ( !hasAllValidPrimaryKeyValues() )
        {
            return null;
        }

        DatabaseValues.Column[] columns = getColumnSet ();

        String whereList = "WHERE ";
        for ( DatabaseValues.Column column : columns )
        {
            String value = getAttributeValue( column );

            if ( value == null )
            {
                // don't do anything with null string values
            }

            else if ( column.isPrimaryKeyOfTable ( table ) )
            {
                whereList += column.toString () + " = " + "\'" + getAttributeValue( column ) + "\'" + " AND ";
            }
        }

        // remove AND at the end of list
        whereList = whereList.substring (
                0,
                whereList.length () - 4
        );

        String deleteSQL = "DELETE FROM " + table.toString () + " " + whereList;
        return deleteSQL;
    }

    public String toSelectSQL ()
    {
        if ( !hasAllValidPrimaryKeyValues() )
        {
            return null;
        }

        DatabaseValues.Column[] columns = getColumnSet ();

        String whereList = "WHERE ";
        for ( DatabaseValues.Column column : columns )
        {
            String value = getAttributeValue( column );

            if ( value == null )
            {
                // don't do anything with null string values
            }

            else if ( column.isPrimaryKeyOfTable ( table ) )
            {
                whereList += column.toString () + " = " + "\'" + getAttributeValue( column ) + "\'" + " AND ";
            }
        }

        // remove AND at the end of list
        whereList = whereList.substring (
                0,
                whereList.length () - 4
        );

        String selectSQL = "SELECT * FROM " + table.toString () + " " + whereList;
        return selectSQL;
    }

    public String toJson ()
    {
        return new Gson ().toJson ( this );
    }

    public boolean updateAttributeValue(
            DatabaseValues.Column column,
            String value
    ) {

        if ( !validColumn ( column ) )
        {
            return false;
        }

        value = validateInput (
                column,
                value
        );

        attributes.put (
            column,
            value
        );

        if ( value != null && value.equals ( column.getDefaultValue () ) )
        {
            return false;
        }

        return true;
    }

    public void extractFromCurrentRow (ResultSet resultSet ) throws SQLException
    {
        for ( DatabaseValues.Column column : getColumnSet () )
        {
            String dataType = column.getDataType ();
            String value = null;


            if ( dataType.equals ( "INT" ) || dataType.equals ( "BIT" )  )
            {
                value = "" + resultSet.getInt ( column.toString () );
            }

            else if ( dataType.equals ( "DOUBLE" )  ) {
                value = "" + resultSet.getDouble(column.toString());
            }

            else if ( dataType.equals ( "FLOAT" )  )
            {
                value = "" + resultSet.getFloat ( column.toString () );
            }

            else if ( dataType.contains ( "VARCHAR" ) || dataType.equals ( "TEXT" )  )
            {
                value = resultSet.getString ( column.toString () );
            }

            // edit column value if present
            if ( value != null )
            {
                updateAttributeValue(
                        column,
                        value
                );
            }
        }
    }

    public boolean validColumn ( DatabaseValues.Column column )
    {
        for ( DatabaseValues.Column existingColumn :  getColumnSet () )
        {
            if ( existingColumn.equals ( column ) )
            {
                return true;
            }
        }
        return false;
    }

    private boolean hasAllValidPrimaryKeyValues ()
    {
        boolean valid = false;
        for ( DatabaseValues.Column column : getColumnSet () )
        {
            if ( column.isPrimaryKeyOfTable ( table ) )
            {
                if ( getAttributeValue( column ) != null && !getAttributeValue( column ).isEmpty () )
                {
                    valid = true;
                }
                else
                {
                    return false; // has a primary key that does not have a valid value
                }
            }
        }
        return valid;
    }

    private String validateInput (
        DatabaseValues.Column column,
        String input
    ) {
        if ( input == null || input.isEmpty () )
        {
            return input;
        }

        input = input
                .replace ("'", "''");

        try
        {
            if ( column.getDataType ().equals ( "INT" ) )
            {
                int testInt = Integer.parseInt ( input );
            }

            else if ( column.getDataType ().equals ( "FLOAT" ) )
            {
                float testFloat = Float.parseFloat ( input );
            }

            else if ( column.getDataType ().equals ( "DOUBLE" ) )
            {
                double testDouble = Double.parseDouble ( input );
            }

            else if ( column.getDataType ().contains ( "VARCHAR" ) )
            {
                String maxLengthStr = column.getDataType ()
                        .replace (
                        "VARCHAR(",
                        ""
                        )
                        .replace (
                                ")",
                                ""
                        );

                int maxLength = Integer.parseInt ( maxLengthStr );
                if ( input.length () > maxLength )
                {
                    input = input.substring (
                            0,
                            maxLength + 1
                    );
                }
            }
        }

        catch ( Exception e )
        {
            return column.getDefaultValue ();
        }
        return input;
    }
}


