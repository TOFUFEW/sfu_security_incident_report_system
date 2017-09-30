

package Model; public class Location
{
    private String campus;
    private String buildingNumber;
    private String roomNumber;
    private String department;

    public Location (
            String campus,
            String buildingNumber,
            String roomNumber,
            String department
    ) {
        this.campus = campus;
        this.buildingNumber = buildingNumber;
        this.roomNumber = roomNumber;
        this.department = department;
    }
}

