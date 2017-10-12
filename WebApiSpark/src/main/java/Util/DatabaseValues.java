package Util;

import javax.xml.crypto.Data;

public class DatabaseValues
{
    private static final String DEFAULT_STRING_VALUE = "null";
    private static final String DEFAULT_INT_VALUE = "-1";
    private static final String DEFAULT_BIT_VALUE = "0";

    public static enum DatabaseTable
    {
        ACCOUNT ( "dbo.Account" ),
        ASSIGNED_TO ( "dbo.AssignedTo" ),
        CAMPUS ( "dbo.Campus" ),
        HAPPENS_AT ( "dbo.HappensAt" ),
        INCIDENT ( "dbo.Incident" ),
        INCIDENT_CATEGORY ( "IncidentCategory" ),
        INVOLVES ( "dbo.Involves" ),
        LOCATION ( "dbo.Location" ),
        PERSON ( "dbo.Person" ),
        STAFF ( "dbo.Staff" );

        private String table;

        DatabaseTable ( String table )
        {
            this.table = table;
        }

        @Override
        public String toString ()
        {
            return table;
        }
    }

    public static enum DatabaseColumn
    {
        // Associated Tables: Account, AssignedTo, Incident, Staff
        ACCOUNT_ID (
                "ACCOUNT_ID" ,
                "INT",
                DEFAULT_INT_VALUE,
                new DatabaseTable []
                        {
                                DatabaseTable.ACCOUNT,
                                DatabaseTable.ASSIGNED_TO,
                                DatabaseTable.STAFF

                        }
        ),

        // Associated Tables: Account
        ACCOUNT_TYPE (
                "ACCOUNT_TYPE" ,
                "INT",
                DEFAULT_INT_VALUE,
                null
        ),

        // Associated Tables: Campus
        ADDRESS (
                "ADDRESS" ,
                "VARCHAR(" + 30 + ")",
                DEFAULT_STRING_VALUE,
                null
        ),

        // Associated Tables: Location
        BUILDING_NAME(
                "BUILDING_NAME" ,
                "VARCHAR(" + 50 + ")" ,
                DEFAULT_STRING_VALUE,
                null
        ),

        // Associated Tables: Campus, Location, Staff
        CAMPUS_ID (
                "CAMPUS_ID" ,
                "INT" ,
                DEFAULT_INT_VALUE,
                new DatabaseTable []
                        {
                                DatabaseTable.CAMPUS
                        }
        ),

        // Associated Tables: Incident, IncidentCategory
        CATEGORY_ID (
                "CATEGORY_ID" ,
                "INT",
                DEFAULT_INT_VALUE,
                new DatabaseTable []
                        {
                                DatabaseTable.INCIDENT_CATEGORY
                        }
        ),

        // Associated Tables: Campus
        CITY (
                "CITY" ,
                "VARCHAR(" + 20 + ")",
                DEFAULT_STRING_VALUE
                ,
                null
        ),

        // Associated Tables: Incident
        CLOSED (
                "CLOSED" ,
                "BIT",
                DEFAULT_BIT_VALUE,
                null
        ),

        // Associated Tables: Location
        DEPARTMENT (
                "DEPARTMENT",
                "VARCHAR(" + 30 + ")",
                DEFAULT_STRING_VALUE,
                null
        ),

        // Associated Tables: Incident
        DESCRIPTION (
                "DESCRIPTION" ,
                "TEXT",
                DEFAULT_STRING_VALUE,
                null
        ),

        // Associated Tables: Incident
        EXECUTIVE_SUMMARY (
                "EXECUTIVE_SUMMARY" ,
                "TEXT",
                DEFAULT_STRING_VALUE,
                null
        ),

        // Associated Tables: Person, Staff
        FIRST_NAME (
                "FIRST_NAME" ,
                "VARCHAR(" + 30 + ")",
                DEFAULT_STRING_VALUE,
                null
        ),

        // Associated Tables: IncidentCategory
        INCIDENT_TYPE (
                "INCIDENT_TYPE" ,
                "VARCHAR(" + 20 + ")",
                DEFAULT_STRING_VALUE,
                null
        ),

        // Associated Tables: Person, Staff
        LAST_NAME (
                "LAST_NAME" ,
                "VARCHAR(" + 30 + ")",
                DEFAULT_STRING_VALUE,
                null
        ),

        // Associated Tables: HappensAt, Location
        LOCATION_ID (
                "LOCATION_ID" ,
                "INT",
                DEFAULT_INT_VALUE,
                new DatabaseTable []
                        {
                                DatabaseTable.HAPPENS_AT,
                                DatabaseTable.LOCATION
                        }
        ),

        // Associated Tables: HappensAt, Location
        LOCATION_TYPE (
                "LOCATION_TYPE" ,
                "VARCHAR(" + 30 + ")",
                DEFAULT_STRING_VALUE,
                null
        ),

        // Associated Tables: IncidentCategory
        MAIN_CATEGORY (
                "MAIN_CATEGORY" ,
                "VARCHAR(" + 20 + ")",
                DEFAULT_STRING_VALUE,
                null
        ),

        // Associated Tables: Account
        PASSWORD (
                "PASSWORD" ,
                "VARCHAR(" + 30 + ")",
                DEFAULT_STRING_VALUE,
                null
        ),

        // Associated Tables: Involves, Person
        PERSON_ID (
                "PERSON_ID" ,
                "INT",
                DEFAULT_INT_VALUE,
                new DatabaseTable []
                        {
                                DatabaseTable.INVOLVES,
                                DatabaseTable.PERSON
                        }
        ),

        // Associated Tables: Person
        PHONE_NUMBER (
                "PHONE_NUMBER" ,
                "VARCHAR(" + 10 + ")",
                DEFAULT_STRING_VALUE,
                null
        ),

        // Associated Tables: AssignedTo, HappensAt, Incident, Involves
        REPORT_ID (
                "REPORT_ID" ,
                "INT",
                DEFAULT_INT_VALUE,
                new DatabaseTable []
                        {
                                DatabaseTable.ASSIGNED_TO,
                                DatabaseTable.HAPPENS_AT,
                                DatabaseTable.INCIDENT,
                                DatabaseTable.INVOLVES
                        }
        ),

        // Associated Tables: Location
        ROOM_NUMBER (
                "ROOM_NUMBER" ,
                "INT" ,
                DEFAULT_INT_VALUE,
                null
        ),

        // Associated Tables: IncidentCategory
        SUB_CATEGORY (
                "SUB_CATEGORY" ,
                "VARCHAR(" + 20 + ")",
                DEFAULT_STRING_VALUE,
                null
        ),

        // Associated Tables: Account
        USERNAME (
                "USERNAME" ,
                "VARCHAR(" + 30 + ")",
                DEFAULT_STRING_VALUE,
                null
        );

        private String column;
        private String dataType;
        private String defaultValue;
        private DatabaseTable [] primaryKeyOfTables;

        DatabaseColumn (
                String column,
                String dataType,
                String defaultValue,
                DatabaseTable [] primaryKeyOfTables
        ) {
            this.column = column;
            this.dataType = dataType;
            this.defaultValue = defaultValue;
            this.primaryKeyOfTables = primaryKeyOfTables;
        }

        @Override
        public String toString ()
        {
            return column;
        }

        public String getDataType ()
        {
            return dataType;
        }

        public String getDefaultValue ()
        {
            return defaultValue;
        }

        public boolean isPrimaryKeyOfTable ( DatabaseTable table)
        {
            if ( primaryKeyOfTables == null || primaryKeyOfTables.length == 0 )
            {
                return false;
            }

            for ( DatabaseTable primaryKeyOfTable : primaryKeyOfTables )
            {
                if ( table.equals ( primaryKeyOfTable ) )
                {
                    return true;
                }
            }
            return false;
        }
    }

}
