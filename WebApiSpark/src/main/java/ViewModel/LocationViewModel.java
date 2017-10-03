package ViewModel;

import Model.Location;

public class LocationViewModel {
    public int LOCATION_ID;
    public int CAMPUS_ID;
    public String BUILDING_NAME;
    public int ROOM_NUMBER;
    public String DEPARTMENT;
    public String CITY;
    public String ADDRESS;

    public LocationViewModel() {}

    public LocationViewModel(
            int locationId,
            int campusId,
            String buildingName,
            int roomNumber,
            String department,
            String city,
            String address
    ) {
        this.LOCATION_ID = locationId;
        this.CAMPUS_ID = campusId;
        this.BUILDING_NAME = buildingName;
        this.ROOM_NUMBER = roomNumber;
        this.DEPARTMENT = department;
        this.CITY = city;
        this.ADDRESS = address;
    }

}
