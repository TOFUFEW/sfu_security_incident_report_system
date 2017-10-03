export class Location {
  id: number;
  campus: string;
  buildingNumber: string;
  roomNumber: number;
  department: string;

  /*

  Location = "{columValue:{ROOM_NUMBER:\"SURR-301\",CAMPUS_ID:\"1\",BUILDING_NUMBER:\"23\",DEPARTMENT:\"Sci\"}}"
  Incident = "{ColumnValue:{}, Location, Staff}"


[8:54] 
  constructor ( 
      id: number , 
      campus: string ,
      buildingNumber: string ,
      roomNumber: number ,
      department: string
  ) {
      this.id = id;
      this.campus = campus;
      this.buildingNumber = buildingNumber;
      this.roomNumber = roomNumber;
      this.department = department;
  }*/
}