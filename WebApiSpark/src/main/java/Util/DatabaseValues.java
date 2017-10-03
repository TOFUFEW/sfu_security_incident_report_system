package Util;

public class DatabaseValues
{
    private static final String DEFAULT_STRING_VALUE = "null";
    private static final String DEFAULT_INT_VALUE = "-1";
    private static final String DEFAULT_BIT_VALUE = "0";

    public static enum DatabaseTable
    {
        ACCOUNT ( "Account" ),
        ASSIGNED_TO ( "AssignedTo" ),
        CAMPUS ( "Campus" ),
        HAPPENS_AT ( "HappensAt" ),
        INCIDENT ( "Incident" ),
        INCIDENT_CATEGORY ( "IncidentCategory" ),
        INVOLVES ( "Involves" ),
        LOCATION ( "Location" ),
        PERSON ( "Person" ),
        STAFF ( "Staff" );

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
                DEFAULT_INT_VALUE
        ),

        // Associated Tables: Account
        ACCOUNT_TYPE (
                "ACCOUNT_TYPE" ,
                "INT",
                DEFAULT_INT_VALUE
        ),

        // Associated Tables: Campus
        ADDRESS (
                "ADDRESS" ,
                "VARCHAR(" + 30 + ")",
                DEFAULT_STRING_VALUE
        ),

        // Associated Tables: Location
        BUILDING_NUMBER (
                "BUILDING_NUMBER" ,
                "INT" ,
                DEFAULT_INT_VALUE
        ),

        // Associated Tables: Campus, Location, Staff
        CAMPUS_ID (
                "CAMPUS_ID" ,
                "INT" ,
                DEFAULT_INT_VALUE
        ),

        // Associated Tables: Incident, IncidentCategory
        CATEGORY_ID (
                "CATEGORY_ID" ,
                "INT",
                DEFAULT_INT_VALUE
        ),

        // Associated Tables: Campus
        CITY (
                "CITY" ,
                "VARCHAR(" + 20 + ")",
                DEFAULT_STRING_VALUE
        ),

        // Associated Tables: Incident
        CLOSED (
                "CLOSED" ,
                "BIT",
                DEFAULT_BIT_VALUE
        ),

        // Associated Tables: Location
        DEPARTMENT (
                "DEPARTMENT",
                "VARCHAR(" + 30 + ")",
                DEFAULT_STRING_VALUE
        ),

        // Associated Tables: Incident
        DESCRIPTION (
                "DESCRIPTION" ,
                "TEXT",
                DEFAULT_STRING_VALUE
        ),

        // Associated Tables: Incident
        EXECUTIVE_SUMMARY (
                "EXECUTIVE_SUMMARY" ,
                "TEXT",
                DEFAULT_STRING_VALUE
        ),

        // Associated Tables: Person, Staff
        FIRST_NAME (
                "FIRST_NAME" ,
                "VARCHAR(" + 30 + ")",
                DEFAULT_STRING_VALUE
        ),

        // Associated Tables: IncidentCategory
        INCIDENT_TYPE (
                "INCIDENT_TYPE" ,
                "VARCHAR(" + 20 + ")",
                DEFAULT_STRING_VALUE
        ),

        // Associated Tables: Person, Staff
        LAST_NAME (
                "LAST_NAME" ,
                "VARCHAR(" + 30 + ")",
                DEFAULT_STRING_VALUE
        ),

        // Associated Tables: HappensAt, Location
        LOCATION_ID (
                "LOCATION_ID" ,
                "INT",
                DEFAULT_INT_VALUE
        ),

        // Associated Tables: HappensAt, Location
        LOCATION_TYPE (
                "LOCATION_TYPE" ,
                "VARCHAR(" + 30 + ")",
                DEFAULT_STRING_VALUE
        ),

        // Associated Tables: IncidentCategory
        MAIN_CATEGORY (
                "MAIN_CATEGORY" ,
                "VARCHAR(" + 20 + ")",
                DEFAULT_STRING_VALUE
        ),

        // Associated Tables: Account
        PASSWORD (
                "PASSWORD" ,
                "VARCHAR(" + 30 + ")",
                DEFAULT_STRING_VALUE
        ),

        // Associated Tables: Involves, Person
        PERSON_ID (
                "PERSON_ID" ,
                "INT",
                DEFAULT_INT_VALUE
        ),

        // Associated Tables: Person
        PHONE_NUMBER (
                "PHONE_NUMBER" ,
                "VARCHAR(" + 10 + ")",
                DEFAULT_STRING_VALUE
        ),

        // Associated Tables: AssignedTo, HappensAt, Incident, Involves
        REPORT_ID (
                "REPORT_ID" ,
                "INT",
                DEFAULT_INT_VALUE
        ),

        // Associated Tables: Location
        ROOM_NUMBER (
                "ROOM_NUMBER" ,
                "INT" ,
                DEFAULT_INT_VALUE
        ),

        // Associated Tables: IncidentCategory
        SUB_CATEGORY (
                "SUB_CATEGORY" ,
                "VARCHAR(" + 20 + ")",
                DEFAULT_STRING_VALUE
        ),

        // Associated Tables: Account
        USERNAME (
                "USERNAME" ,
                "VARCHAR(" + 30 + ")",
                DEFAULT_STRING_VALUE
        );

        private String column;
        private String dataType;
        private String defaultValue;

        DatabaseColumn (
                String column,
                String dataType,
                String defaultValue
        ) {
            this.column = column;
            this.dataType = dataType;
            this.defaultValue = defaultValue;
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
    }

}
