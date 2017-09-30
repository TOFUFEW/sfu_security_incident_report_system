package Model;

public class Location {
    private int id;
    private String campus;
    private String buildingNumber;
    private String roomNumber;
    private String department;

    public Location() {}

    public Location(int id, String campus, String buildingNumber, String roomNumber, String department) {
        this.id = id;
        this.campus = campus;
        this.buildingNumber = buildingNumber;
        this.roomNumber = roomNumber;
        this.department = department;
    }

    // for testing purposes only
    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }
}

