package Util;

public class DatabaseValues
{
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
                null
        ),

        // Associated Tables: Account
        ACCOUNT_TYPE (
                "ACCOUNT_TYPE" ,
                "INT",
                null
        ),

        // Associated Tables: Campus
        ADDRESS (
                "ADDRESS" ,
                "VARCHAR(" + 30 + ")",
                null
        ),

        // Associated Tables: Location
        BUILDING_NUMBER (
                "BUILDING_NUMBER" ,
                "INT" ,
                null
        ),

        // Associated Tables: Campus, Location, Staff
        CAMPUS_ID (
                "CAMPUS_ID" ,
                "INT" ,
                null
        ),

        // Associated Tables: Incident, IncidentCategory
        CATEGORY_ID (
                "CATEGORY_ID" ,
                "INT",
                null
        ),

        // Associated Tables: Campus
        CITY (
                "CITY" ,
                "VARCHAR(" + 20 + ")",
                null
        ),

        // Associated Tables: Incident
        CLOSED (
                "CLOSED" ,
                "BIT",
                null
        ),

        // Associated Tables: Location
        DEPARTMENT (
                "BUILDING_NUMBER",
                "VARCHAR(" + 30 + ")",
                null
        ),

        // Associated Tables: Incident
        DESCRIPTION (
                "DESCRIPTION" ,
                "TEXT",
                null
        ),

        // Associated Tables: Incident
        EXECUTIVE_SUMMARY (
                "EXECUTIVE_SUMMARY" ,
                "TEXT",
                null
        ),

        // Associated Tables: Person, Staff
        FIRST_NAME (
                "FIRST_NAME" ,
                "VARCHAR(" + 30 + ")",
                null
        ),

        // Associated Tables: IncidentCategory
        INCIDENT_TYPE (
                "INCIDENT_TYPE" ,
                "VARCHAR(" + 20 + ")",
                null
        ),

        // Associated Tables: Person, Staff
        LAST_NAME (
                "LAST_NAME" ,
                "VARCHAR(" + 30 + ")",
                null
        ),

        // Associated Tables: HappensAt, Location
        LOCATION_ID (
                "LOCATION_ID" ,
                "INT",
                null
        ),

        // Associated Tables: HappensAt, Location
        LOCATION_TYPE (
                "LOCATION_TYPE" ,
                "VARCHAR(" + 30 + ")",
                null
        ),

        // Associated Tables: IncidentCategory
        MAIN_CATEGORY (
                "MAIN_CATEGORY" ,
                "VARCHAR(" + 20 + ")",
                null
        ),

        // Associated Tables: Account
        PASSWORD (
                "PASSWORD" ,
                "VARCHAR(" + 30 + ")",
                null
        ),

        // Associated Tables: Involves, Person
        PERSON_ID (
                "PERSON_ID" ,
                "INT",
                null
        ),

        // Associated Tables: Person
        PHONE_NUMBER (
                "PHONE_NUMBER" ,
                "VARCHAR(" + 10 + ")",
                null
        ),

        // Associated Tables: AssignedTo, HappensAt, Incident, Involves
        REPORT_ID (
                "REPORT_ID" ,
                "INT",
                null
        ),

        // Associated Tables: Location
        ROOM_NUMBER (
                "ROOM_NUMBER" ,
                "INT" ,
                null
        ),

        // Associated Tables: IncidentCategory
        SUB_CATEGORY (
                "SUB_CATEGORY" ,
                "VARCHAR(" + 20 + ")",
                null
        ),

        // Associated Tables: Account
        USERNAME (
                "USERNAME" ,
                "VARCHAR(" + 30 + ")",
                null
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
            return dataType;
        }
    }

}
