package Util;

import DBConnector.Connector;
import Model.Incident;
import Model.IncidentElement;
import Model.Location;
import Model.Staff;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;

public class DBHelper
{

    /* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; REFACTORED methods ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */

    public static Incident [] getIncidents () {
        ArrayList < Incident > incidentList = new ArrayList <> ();

        try
        {
            ResultSet resultSet = Connector.executeQuery ( "SELECT * FROM " + DatabaseValues.DatabaseTable.INCIDENT.toString() );

            while ( resultSet.next () )
            {
                Incident incident = new Incident ();

                incident.extractFromResultSet ( resultSet );

                incidentList.add ( incident );
            }
        }

        catch ( Exception e )
        {
            e.printStackTrace ();
        }

        return incidentList.toArray ( new Incident [ incidentList.size () ] );
    }

    public static boolean insertIncident ( Incident incident )
    {
        String incidentSQL = incident.toInsertSQL ();
        String [] incidentElementInsertSQL = incident.incidentElementsToInsertSQL ();

        // collect all sql in one array list to iterate
        ArrayList < String > sqlArrList = new ArrayList <> ( Arrays.asList ( incidentElementInsertSQL ) );
        sqlArrList.add ( incidentSQL );

        try {
            for ( String sql : sqlArrList )
            {
                Connector.execute ( sql );
            }
        }
        catch ( SQLException e )
        {
            e.printStackTrace ();
            return false;
        }
        return true;
    }

    public static boolean insertIncidentElement ( IncidentElement incidentElement )
    {
        String sql = incidentElement.toInsertSQL ();
        try {
            Connector.execute ( sql );
        } catch ( SQLException e ) {
            e.printStackTrace();
            return false;
        }
        return true;
    }

    public static boolean updateIncidentElement ( IncidentElement incidentElement )
    {
        String sql = incidentElement.toUpdateSQL ();
        try {
            Connector.execute ( sql );
        } catch ( SQLException e ) {
            e.printStackTrace();
            return false;
        }
        return true;
    }

    public static boolean deleteIncidentElement ( IncidentElement incidentElement )
    {
        String sql = incidentElement.toDeleteSQL ();
        try {
            Connector.execute ( sql );
        } catch ( SQLException e ) {
            e.printStackTrace();
            return false;
        }
        return true;
    }

    public static boolean selectIncidentElement (
            IncidentElement incidentElement,
            String id
    ) {
        incidentElement.editColumnValue (
                incidentElement.getIDColumn (),
                id
        );
        String sql = incidentElement.toSelectSQL ();

        if ( sql == null )
        {
            return false;
        }

        try {
            ResultSet resultSet = Connector.executeQuery ( sql );
            if ( resultSet.next () )
            {
                incidentElement.extractFromResultSet ( resultSet );
                return true;

            }
            else
            {
                return false;
            }
        } catch ( SQLException e ) {
            e.printStackTrace();
            return false;
        }
    }

    public static Location [] getLocations ()
    {
        ArrayList < Location > locationList = new ArrayList <> ();

        try
        {
            ResultSet resultSet = Connector.executeQuery ( "SELECT * FROM " + DatabaseValues.DatabaseTable.LOCATION.toString () );

            while ( resultSet.next () )
            {
                Location location = new Location ();

                location.extractFromResultSet ( resultSet );

                locationList.add ( location );
            }
        }

        catch ( Exception e )
        {
            e.printStackTrace ();
        }

        return locationList.toArray ( new Location [ locationList.size () ] );
    }


    // staff code
    public static Staff [] getStaffs ()
    {
        ArrayList < Staff > staffList = new ArrayList ();

        try
        {
            ResultSet resultSet = Connector.executeQuery ( "SELECT * FROM " + DatabaseValues.DatabaseTable.STAFF.toString() );

            while ( resultSet.next () )
            {
                Staff staff = new Staff ();

                staff.extractFromResultSet ( resultSet );

                staffList.add ( staff );

            }
        }

        catch ( Exception e )
        {
            e.printStackTrace ();
        }

        return staffList.toArray ( new Staff [ staffList.size () ] );
    }

    // end staff code

}
