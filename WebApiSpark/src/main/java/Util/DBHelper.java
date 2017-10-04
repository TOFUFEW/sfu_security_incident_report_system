package Util;

import DBConnector.Connector;
import Model.*;
import ViewModel.LocationViewModel;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class DBHelper {
    public DBHelper() {
    }

    public static LocationViewModel getLocation(int id) {
        try {
            String query = "select "
                    + "loc.LOCATION_ID, "
                    + "loc.CAMPUS_ID, "
                    + "loc.BUILDING_NAME, "
                    + "loc.DEPARTMENT, "
                    + "loc.ROOM_NUMBER, "
                    + "camp.CITY, "
                    + "camp.ADDRESS "
                    + "from dbo.location as loc "
                    + "inner join dbo.Campus as camp "
                    + "on loc.CAMPUS_ID = camp.CAMPUS_ID "
                    + "where loc.location_id = " + id;
            ResultSet result = Connector.executeQuery(query);

            while (result.next()) {
                int locationId = result.getInt("location_id");
                int campusId = result.getInt("campus_id");
                String buildingName = result.getString("building_name");
                int roomNumber = result.getInt("room_number");
                String department = result.getString("department");
                String city = result.getString("city");
                String address = result.getString("address");

                return new LocationViewModel(
                        locationId,
                        campusId,
                        buildingName,
                        roomNumber,
                        department,
                        city,
                        address
                );
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new LocationViewModel();
    }

    public static List<LocationViewModel> getLocations() {
        List<LocationViewModel> locationList = new ArrayList<>();

        try {
            ResultSet result = Connector.executeQuery(buildGetLocationQuery());

            while (result.next()) {
                int locationId = result.getInt("location_id");
                int campusId = result.getInt("campus_id");
                String buildingName = result.getString("building_name");
                int roomNumber = result.getInt("room_number");
                String department = result.getString("department");
                String city = result.getString("city");
                String address = result.getString("address");

                LocationViewModel loc = new LocationViewModel(
                        locationId,
                        campusId,
                        buildingName,
                        roomNumber,
                        department,
                        city,
                        address
                );
                locationList.add(loc);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return locationList;
    }

    public static LocationViewModel addLocation(LocationViewModel location) {
        try {
            int i = Connector.executeUpdate(buildAddLocationQuery(location));

            String query = "select top 1 " +
                    "loc.LOCATION_ID, " +
                    "loc.CAMPUS_ID, " +
                    "loc.BUILDING_NAME, " +
                    "loc.DEPARTMENT, " +
                    "loc.ROOM_NUMBER, " +
                    "camp.CITY, " +
                    "camp.ADDRESS  " +
                    "from dbo.location as loc  " +
                    "inner join dbo.Campus as camp " +
                    "on loc.CAMPUS_ID = camp.CAMPUS_ID " +
                    "order by location_id desc";
            ResultSet result = Connector.executeQuery(query);
            while (result.next()) {
                int locationId = result.getInt("location_id");
                int campusId = result.getInt("campus_id");
                String buildingName = result.getString("building_name");
                int roomNumber = result.getInt("room_number");
                String department = result.getString("department");
                String city = result.getString("city");
                String address = result.getString("address");

                LocationViewModel loc = new LocationViewModel(
                        locationId,
                        campusId,
                        buildingName,
                        roomNumber,
                        department,
                        city,
                        address
                );
                return loc;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return new LocationViewModel();
    }

    public static LocationViewModel editLocation(LocationViewModel location) {
        try {
            // Check if campus exists. If not, create one and insert into the database
            int id = getCampusId(location.CITY);

            String query = "update location " +
                    "set building_name = '" + location.BUILDING_NAME +
                    "', room_number = " + location.ROOM_NUMBER +
                    ", department = '" + location.DEPARTMENT +
                    "', campus_id = " + id +
                    " where location_id = " + location.LOCATION_ID;
            int i = Connector.executeUpdate(query);
            return getLocation(location.LOCATION_ID);
        } catch (Exception e) {
            e.printStackTrace();
        }

        return new LocationViewModel();
    }

    public static boolean deleteLocation(int id) {
        try {
            String query = "delete from location where location_id = " + id;
            int i = Connector.executeUpdate(query);
            return i > 0;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }

    public static boolean isExistingLocation(int id) {
        try {
            String query = "select * from location where location_id = " + id;
            ResultSet result = Connector.executeQuery(query);
            while (result.next()) {
                return true;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }

    private static String buildGetLocationQuery() {
        return "select "
                + "loc.LOCATION_ID,"
                + "loc.CAMPUS_ID,"
                + "loc.BUILDING_NAME,"
                + "loc.DEPARTMENT,"
                + "loc.ROOM_NUMBER,"
                + "camp.CITY,"
                + "camp.ADDRESS "
                + "from dbo.location as loc "
                + "inner join dbo.Campus as camp "
                + "on loc.CAMPUS_ID = camp.CAMPUS_ID";
    }

    private static String buildAddLocationQuery(LocationViewModel location) {
        // Check if campus exists
        try {
            int campusId = getCampusId(location.CITY);
            return "insert into location (campus_id, building_name, room_number, department) "
                    + "values ('" + campusId + "', '"
                    + location.BUILDING_NAME + "', '"
                    + location.ROOM_NUMBER + "', '"
                    + location.DEPARTMENT + "')";
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "";
    }

    private static int getCampusId(String city) {
        try {
            String checkCampus = "select * from campus " +
                    "where campus.CITY = '" + city + "' ";
            ResultSet campusResult = Connector.executeQuery(checkCampus);

            int i = 0;
            if (!campusResult.next()) {
                // insert into campus db
                String insertCampus = "insert into campus (city) values ('" + city + "')";
                i = Connector.executeUpdate(insertCampus);
            }

            campusResult = Connector.executeQuery(checkCampus);

            while (campusResult.next()) {
                int id = campusResult.getInt("campus_id");
                System.out.println(id);
                return id;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return 0;
    }







    public static int addStaff (
            Staff staff,
            List<Staff> staffList
            ) {
            int currentSize = staffList.size();
            int id = new Random().nextInt(100000 + 1);
            staff.putValue( DatabaseValues.DatabaseColumn.ACCOUNT_ID , "" + id );
            staffList.add( staff );
            return staffList.size() > currentSize ? staffList.size() - 1 : -1;
            }

    public static int editStaff (
            Staff staff,
            List<Staff> staffList
            ) {
            int currentSize = staffList.size();
            for ( int i = 0 ; i < currentSize ; i += 1 ) {
            if ( staffList.get( i ).getValue ( DatabaseValues.DatabaseColumn.ACCOUNT_ID ) ==
            staff.getValue ( DatabaseValues.DatabaseColumn.ACCOUNT_ID ) )
            {
            staffList.set( i , staff );
            return i; // return the index of the edited location
            }
            }

            return -1;
            }

    public static boolean deleteStaff (
            int id,
            List<Staff> staffList
            ) {
            /* For testing purposes only. Replace this with code that does some database query */
            int currentSize = staffList.size();
            for ( int i = 0; i < currentSize; i++ ) {
            if (staffList.get(i).getValue(DatabaseValues.DatabaseColumn.ACCOUNT_ID) == ("" + id)) {
            staffList.remove(i);
            return currentSize > staffList.size();
            }
            }

            return false;
            }


    public static List < Staff > getStaff () {
        List<Staff> staffList = new ArrayList<>();

        try {
            ResultSet result = Connector.executeQuery("select * from Staff");

            while (result.next()) {
                int id = Integer.parseInt(result.getString("ACCOUNT_ID"));
                String campusId = result.getString("CAMPUS_ID");
                String firstName = result.getString("FIRST_NAME");
                String lastName = result.getString("LAST_NAME");

                Staff staff = new Staff(
                        id,
                        campusId,
                        firstName,
                        lastName
                );
                staffList.add(staff);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return staffList;
    }

}
