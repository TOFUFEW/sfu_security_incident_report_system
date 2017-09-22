package Model;

public class Location {

    public Location()
    {

    }

    public Location(String campus, String building_num, int room_num, String department){
        this.campus = campus;
        this.building_num = building_num;
        this.room_num = room_num;
        this.deparment = department;
    }

    private String campus;
    private String building_num;
    private int room_num;
    private String deparment;


}
