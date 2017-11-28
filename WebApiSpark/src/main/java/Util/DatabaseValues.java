package Util;

import java.sql.Timestamp;
import Model.IncidentElement;

import javax.xml.crypto.dsig.keyinfo.KeyValue;
import java.util.ArrayList;
import java.util.HashMap;

public class DatabaseValues
{
    private static final String DEFAULT_STRING_VALUE = "null";
    private static final String DEFAULT_INT_VALUE = "-1";
    private static final String DEFAULT_BIT_VALUE = "0";
    private static final String DEFAULT_DATETIME_VALUE = null;

    public enum Table
    {
        ACCOUNT ( "dbo.Account" ),
        ASSIGNED_TO ( "dbo.AssignedTo" ),
        CAMPUS ( "dbo.Campus" ),
        HAPPENS_AT ( "dbo.HappensAt" ),
        INCIDENT ( "dbo.Incident" ),
        INCIDENT_CATEGORY ( "dbo.IncidentCategory" ),
        INVOLVES ( "dbo.Involves" ),
        LOCATION ( "dbo.Location" ),
        PERSON ( "dbo.Person" ),
        STAFF ( "dbo.Staff" );

        private String table;

        Table(String table )
        {
            this.table = table;
        }

        @Override
        public String toString ()
        {
            return table;
        }
    }

    public enum Column
    {
        // Associated Tables: Account, AssignedTo, Incident, Staff
        ACCOUNT_ID (
                "ACCOUNT_ID" ,
                "INT",
                DEFAULT_INT_VALUE,
                new Table[]
                        {
                                Table.ACCOUNT,
                                Table.ASSIGNED_TO,
                                Table.STAFF

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
                new Table[]
                        {
                                Table.CAMPUS
                        }
        ),

        // Associated Tables: Incident, IncidentCategory
        CATEGORY_ID (
                "CATEGORY_ID" ,
                "INT",
                DEFAULT_INT_VALUE,
                new Table[]
                        {
                                Table.INCIDENT_CATEGORY
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
        END_TIME (
                "END_TIME",
                "DATETIME",
                DEFAULT_DATETIME_VALUE,
                null
        ),

        // Associated Tables: Incident
        EXECUTIVE_SUMMARY (
                "EXECUTIVE_SUMMARY" ,
                "TEXT",
                DEFAULT_STRING_VALUE,
                null
        ),

        // Associated Tables: Incident
        SEARCH_TEXT (
                "SEARCH_TEXT" ,
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
                new Table[]
                        {
                                Table.HAPPENS_AT,
                                Table.LOCATION
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

        // Associated Tables: IncidentCategory
        PERMISSION_LEVEL (
                "PERMISSION_LEVEL",
                "INT",
                DEFAULT_INT_VALUE,
                null
        ),

        // Associated Tables: Involves, Person
        PERSON_ID (
                "PERSON_ID" ,
                "INT",
                DEFAULT_INT_VALUE,
                new Table[]
                        {
                                Table.INVOLVES,
                                Table.PERSON
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
                new Table[]
                        {
                                Table.ASSIGNED_TO,
                                Table.HAPPENS_AT,
                                Table.INCIDENT,
                                Table.INVOLVES
                        }
        ),

        // Associated Tables: Location
        ROOM_NUMBER (
                "ROOM_NUMBER" ,
                "INT" ,
                DEFAULT_INT_VALUE,
                null
        ),

        // Associated Tables: Incident
        START_TIME (
                "START_TIME",
                "DATETIME",
                DEFAULT_DATETIME_VALUE,
                null
        ),

        // Associated Tables: Incident
        STATUS (
                "STATUS" ,
                "INT",
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

        TEMPORARY_REPORT (
                "TEMPORARY_REPORT" ,
                "BIT" ,
                DEFAULT_BIT_VALUE ,
                null
        ),

        TIMER_END (
                "TIMER_END" ,
                "INT" ,
                DEFAULT_INT_VALUE ,
                null
        ),

        TIMER_START (
                "TIMER_START" ,
                "INT" ,
                DEFAULT_INT_VALUE ,
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
        private Table[] primaryKeyOfTables;

        Column(
                String column,
                String dataType,
                String defaultValue,
                Table[] primaryKeyOfTables
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

        public boolean isPrimaryKeyOfTable ( Table table)
        {
            if ( primaryKeyOfTables == null || primaryKeyOfTables.length == 0 )
            {
                return false;
            }

            for ( Table primaryKeyOfTable : primaryKeyOfTables )
            {
                if ( table.equals ( primaryKeyOfTable ) )
                {
                    return true;
                }
            }
            return false;
        }
    }

    public enum IncidentElementKey
    {
        INCIDENT_CATEGORY ( "IncidentCategory" ),
        LOCATION ( "Location" ),
        PERSON ( "Person" ),
        STAFF ( "Staff" );

        private String key;

        IncidentElementKey(String key)
        {
            this.key = key;
        }

        @Override
        public String toString ()
        {
            return key;
        }

        public static boolean contains( String key ) {

            for ( IncidentElementKey k : IncidentElementKey.values() ) {
                if ( k.toString().equals( key ) ) {
                    return true;
                }
            }

            return false;
        }
    }

    public enum AccountType
    {
        GUARD ("1"),
        ADMIN ("2");

        private String type;
        private class Type {
            private AccountType id;
            private String name;
            private Type( AccountType id, String name ) {
                this.id = id;
                this.name = name;
            }
        }

        AccountType(String type)
        {
            this.type = type;
        }

        @Override
        public String toString ()
        {
            return type;
        }

        public static ArrayList<HashMap<String, String>> getTypes() {
            ArrayList<HashMap<String, String>> types = new ArrayList<>();

            HashMap<String, String> map1 = new HashMap<>();
            map1.put("id", ADMIN.type );
            map1.put("name", "admin" );
            types.add( map1 );

            HashMap<String, String> map2 = new HashMap<>();
            map2.put("id", GUARD.type );
            map2.put("name", "guard" );
            types.add( map2 );

            return types;
        }
    }

}
