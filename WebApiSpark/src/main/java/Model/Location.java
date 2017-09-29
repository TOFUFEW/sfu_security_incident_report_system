package Model;

public class Location {

    public Location()
    {
    }

    public Location(int id, String campus, String building_num, int room_num, String department){
        this.id = id;
        this.campus = campus;
        this.building_num = building_num;
        this.room_num = room_num;
        this.department = department;
    }

    private int id;
    private String campus;
    private String building_num;
    private int room_num;
    private String department;

    public int getId(){ return this.id; }
}
