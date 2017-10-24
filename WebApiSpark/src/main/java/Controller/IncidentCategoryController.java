package Controller;

import Model.IncidentCategory;
import Util.DBHelper;
import Util.DatabaseValues;
import Util.JsonUtil;

import java.util.ArrayList;

import java.sql.ResultSet;
import static Util.JsonUtil.json;
import static spark.Spark.*;

public class IncidentCategoryController {

    public IncidentCategoryController() {
        setUpEndPoints();
    }

    private IncidentCategory[] getCategories()
    {
         //DEBUG
        try {
            boolean sub = DBHelper.execute("ALTER TABLE IncidentCategory ALTER COLUMN SUB_CATEGORY VARCHAR (50)");
            boolean type = DBHelper.execute("ALTER TABLE IncidentCategory ALTER COLUMN INCIDENT_TYPE VARCHAR (50)");
            //boolean del = DBHelper.execute("delete from IncidentCategory;");
            ResultSet r = DBHelper.executeQuery("Select * from IncidentCategory");
            while ( r.next() ) {
                System.out.println( r.getString("MAIN_CATEGORY"));
                System.out.println( r.getString("SUB_CATEGORY"));
                System.out.println( r.getString("INCIDENT_TYPE"));
            }
        }
        catch(Exception e ) {
            e.printStackTrace();
        }
         //END DEBUG

        ArrayList<IncidentCategory> categoryList = new ArrayList<>();


        insertCategories();
        return categoryList.toArray(new IncidentCategory[categoryList.size()]);
    };

    private void setUpEndPoints() {
        get("/categories", (request, response) -> {
            //return JsonUtil.toJson( getCategories() );
            return getCategories();
        }, json());


    }

    private void insertCategories() {

        /*
        insertCategory("Access Control", "Access Provided", null);
        insertCategory("Access Control", "Insecure Area", "Door");
        insertCategory("Access Control", "Insecure Area", "Closing Delinquent");
        insertCategory("Access Control", "Insecure Area", "Gate");
        insertCategory("Access Control", "Insecure Area", "Padlock");
        insertCategory("Access Control", "Insecure Area", "Window");
        insertCategory("Access Control", "Lost Sfu Access Card", null);
        insertCategory("Access Control", "Lost Sfu Key", null);
        insertCategory("Access Control", "Unauthorized Access", null);
        insertCategory("Alarms", "False", null);
        insertCategory("Alarms", "Fire", "Contractor");
        insertCategory("Alarms", "Fire", "Cooking");
        insertCategory("Alarms", "Fire", "False");
        insertCategory("Alarms", "Fire", "Fire Drill");
        insertCategory("Alarms", "Fire", "Mischief");
        insertCategory("Alarms", "Fire", "Student");
        insertCategory("Alarms", "Fire", "System Fault");
        insertCategory("Alarms", "Force Door ", null);
        insertCategory("Alarms", "Hold Up", "False");
        insertCategory("Alarms", "Intrusion", "Best Service Pros");
        insertCategory("Alarms", "Intrusion", "Contractor");
        insertCategory("Alarms", "Intrusion", "Faculty/Staff");
        insertCategory("Alarms", "Intrusion", "False");
        insertCategory("Alarms", "Intrusion", "Student");
        insertCategory("Alarms", "Intrusion", "System Fault");
        insertCategory("Alarms", "Intrusion", "Undetermined Cause");
        insertCategory("Alarms", "Nurse Call", null);
        insertCategory("Alarms", "Panic", "Best Service Pros");
        insertCategory("Alarms", "Panic", "Contractor");
        insertCategory("Alarms", "Panic", "Faculty/Staff");
        insertCategory("Alarms", "Panic", "False");
        insertCategory("Alarms", "Panic", "Student");
        insertCategory("Alarms", "Panic", "System Fault");
        insertCategory("Alarms", "Panic", "Undetermined Cause");
        insertCategory("Alarms", "Pre-Alarm", "Contractor");
        insertCategory("Alarms", "Pre-Alarm", "Cooking");
        insertCategory("Alarms", "Pre-Alarm", "False");
        insertCategory("Alarms", "Pre-Alarm", "Fire Drill");
        insertCategory("Alarms", "Pre-Alarm", "Mischief");
        insertCategory("Alarms", "Pre-Alarm", "Student");
        insertCategory("Alarms", "Pre-Alarm", "System Fault");
        insertCategory("Alarms", "Sanits", "Best Service Pros");
        insertCategory("Alarms", "Sanits", "Contractor");
        insertCategory("Alarms", "Sanits", "Faculty/Staff");
        insertCategory("Alarms", "Sanits", "False");
        insertCategory("Alarms", "Sanits", "Student");
        insertCategory("Alarms", "Sanits", "System Fault");
        insertCategory("Alarms", "Sanits", "Temperature");
        insertCategory("Alarms", "Shock On", null);
        insertCategory("Alarms", "Supervisory", "Best Service Pros");
        insertCategory("Alarms", "Supervisory", "Contractor");
        insertCategory("Alarms", "Supervisory", "Faculty/Staff");
        insertCategory("Alarms", "Supervisory", "False");
        insertCategory("Alarms", "Supervisory", "Student");
        insertCategory("Alarms", "Supervisory", "System Fault");
        insertCategory("Alarms", "Supervisory", "Testing");


        insertCategory("Assistance", "Animal Calls", null);
        insertCategory("Assistance", "Animal Calls", null);
        insertCategory("Assistance", "Elevator Entrapment", null);
        insertCategory("Assistance", "Incomplete Call", null);
        insertCategory("Assistance", "Law Enforcement", "Arrest");
        insertCategory("Assistance", "Law Enforcement", "Information");
        insertCategory("Assistance", "Law Enforcement", "Search Warrant");
        insertCategory("Assistance", "Law Enforcement", "Subpoena");
        insertCategory("Assistance", "Maintenance", "Elevator");
        insertCategory("Assistance", "Maintenance", "Power Failure");
        insertCategory("Assistance", "Maintenance", "Roadways");
        insertCategory("Assistance", "Maintenance", "Safety Hazard");
        insertCategory("Assistance", "Maintenance", "Snow/Ice Callout");
        insertCategory("Assistance", "Missing Person", null);
        insertCategory("Assistance", "Noise Complaint", null);
        insertCategory("Assistance", "Query To Locate", null);
        insertCategory("Assistance", "Scsp", "Directions");
        insertCategory("Assistance", "Scsp", "General Inquiry");
        insertCategory("Assistance", "Scsp", "Key Sign-Out/Return");
        insertCategory("Assistance", "Scsp", "Lost And Found");
        insertCategory("Assistance", "Scsp", "Traffic Enforcement");
        insertCategory("Assistance", "To Other Agencies", null);
        insertCategory("Assistance", "To Public", "Battery Boost");
        insertCategory("Assistance", "To Public", "Cash Escort");
        insertCategory("Assistance", "To Public", "Lone Worker Program");
        insertCategory("Assistance", "To Public", "Safewalk");
        insertCategory("Assistance", "To Public", "Secure Door");
        insertCategory("Assistance", "To Residence", "Guest Check-In");
        insertCategory("Assistance", "Unusual Smell", null);


        insertCategory("Bio Hazard Threat", "Bio Hazard Threat", null);
        insertCategory("Community Engagement", "Presentation", null);
        //*********insertCategory("Community Engagement", "Sfu Event Presentation", null);
        //*********insertCategory("Complaints", "Against Security Contractors", "Traffic");
        insertCategory("Complaints", "Against Sfu Faculty", null);
        insertCategory("Complaints", "Against Sfu Staff", null);
        //*********insertCategory("Complaints", "Against Simon Fraser University", "Parking Enforcement");


        insertCategory("Criminal", "Assault", "Causing Bodily Harm");
        insertCategory("Criminal", "Assault", "Common");
        insertCategory("Criminal", "Assault", "Sexual");
        insertCategory("Criminal", "Bomb Threat", null);
        insertCategory("Criminal", "Break And Enter", "Attempted");
        //*********insertCategory("Criminal", "Controlled Drugs And Substances", "Distribution");
        //*********insertCategory("Criminal", "Controlled Drugs And Substances", "Possession");
        insertCategory("Criminal", "Domestic Dispute", null);
        insertCategory("Criminal", "Extortion", null);
        insertCategory("Criminal", "Fraud", null);
        insertCategory("Criminal", "Harassment", null);
        insertCategory("Criminal", "Impaired Driving", null);
        insertCategory("Criminal", "Indecent Acts", null);
        insertCategory("Criminal", "Kidnapping", null);
        insertCategory("Criminal", "Other", null);
        //*********insertCategory("Criminal", "Possession Of A Weapon", null);
        insertCategory("Criminal", "Riot", null);
        insertCategory("Criminal", "Robbery", "Attempted");
        insertCategory("Criminal", "Robbery", "In Progress");
        insertCategory("Criminal", "Stolen Property", null);
        insertCategory("Criminal", "Possession", null);
        insertCategory("Criminal", "Recovery Of", null);
        insertCategory("Criminal", "Theft", "Attempted");
        insertCategory("Criminal", "Theft", "In Progress");
        insertCategory("Criminal", "Vandalism", null);


        insertCategory("Daily Occurrences", "Bookstore Closing", null);
        insertCategory("Daily Occurrences", "Breaks", null);
        insertCategory("Daily Occurrences", "Cash Count", null);
        insertCategory("Daily Occurrences", "Cash Escort", "Bookstore");
        insertCategory("Daily Occurrences", "Cash Escort", "Kiosk Duties");
        insertCategory("Daily Occurrences", "Cash Escort", "Library");
        insertCategory("Daily Occurrences", "Cash Escort", "Parking Services");
        insertCategory("Daily Occurrences", "Cash Escort", "Tvm Duties");
        insertCategory("Daily Occurrences", "Equipment Check", null);
        //*********insertCategory("Daily Occurrences", "First Aid Duties", "Medical Bags/Equipment Check");
        insertCategory("Daily Occurrences", "First Aid Duties", "Oxygen Tank Levels");
        insertCategory("Daily Occurrences", "Key Count", null);
        insertCategory("Daily Occurrences", "Officer Check-In", null);
        insertCategory("Daily Occurrences", "Officer Transport", null);
        insertCategory("Daily Occurrences", "Pass On Log", null);
        insertCategory("Daily Occurrences", "Pickup/Delivery", null);
        insertCategory("Daily Occurrences", "Report Writing", null);
        //*********insertCategory("Daily Occurrences", "Shift Engineer Check-In", null);
        insertCategory("Daily Occurrences", "Tvm Service", null);
        insertCategory("Daily Occurrences", "Vehicle Maintence", "Fueling");
        insertCategory("Daily Occurrences", "Vehicle Maintence", "Kilometers");
        insertCategory("Daily Occurrences", "Vehicle Maintence", "Maintence Check");
        insertCategory("Daily Occurrences", "Vehicle Maintence", "Off Site");
        insertCategory("Daily Occurrences", "Vehicle Maintence", "Washing");
        insertCategory("Damage", "Property", "Commercial");
        insertCategory("Damage", "Property", "Personal");
        insertCategory("Damage", "Property", "Sfu");
        insertCategory("Damage", "Vandalism", "Graffiti");
        //*********insertCategory("Damage", "Vehicle", "Campus Security Vehicle");
        insertCategory("Death", "Accidental ", null);
        //*********insertCategory("Death", "Motor Vehicle Accident", null);
        insertCategory("Death", "Suicide", null);
        //*********insertCategory("Demonstrations/Protests", "Labour Dispute", null);
        //*********insertCategory("Environmental", "Accidental Spill/Release", "Biological");
        //*********insertCategory("Environmental", "Accidental Spill/Release", "Chemical");
        //*********insertCategory("Environmental", "Accidental Spill/Release", "Gas Leak");
        insertCategory("Environmental", "Air Pollution", null);
        insertCategory("Environmental", "Community Complaints", null);
        insertCategory("Environmental", "Disease Outbreak", null);
        insertCategory("Environmental", "Earthquake", null);
        insertCategory("Environmental", "Flooding", null);
        insertCategory("Environmental", "Forest Fire", null);
        insertCategory("Environmental", "Heatwave", null);
        insertCategory("Environmental", "Hurricane/Typhoon", null);
        //*********insertCategory("Environmental", "Intentional Chemical Release/Dumping", null);
        insertCategory("Environmental", "Power Outage", null);
        insertCategory("Environmental", "Severe Weather", null);
        insertCategory("Environmental", "Tsunami", null);
        insertCategory("Environmental", "Volcanic Eruption", null);
        insertCategory("Investigations", "Information", null);
        insertCategory("Investigations", "Intelligence", null);
        insertCategory("Lost And Found", "Found", null);
        insertCategory("Lost And Found", "Report Of Lost", null);
        insertCategory("Medical", "Attempted Suicide", null);
        insertCategory("Medical", "Escort Only", null);
        insertCategory("Medical", "Ofa Response", null);
        insertCategory("Parking Enforcement", "Altered Permit", null);
        insertCategory("Parking Enforcement", "Altered Tvm", null);
        insertCategory("Parking Enforcement", "Counterfeit Permit", null);
        insertCategory("Parking Enforcement", "Counterfeit Tvm", null);
        insertCategory("Parking Enforcement", "Failure To Pay", null);
        insertCategory("Parking Enforcement", "Impoundment", null);
        //*********insertCategory("Parking Enforcement", "Misuse Of Permit/Tvm Receipt", null);
        insertCategory("Parking Enforcement", "Parking Offense", null);
        insertCategory("Parking Enforcement", "Parking Suspension", null);
        insertCategory("Parking Enforcement", "Permit/Access Card", "Lost");
        insertCategory("Parking Enforcement", "Permit/Access Card", "Stolen");
        insertCategory("Patrol", "Camera Patrol", null);
        insertCategory("Patrol", "Special Patrol", null);
        //*********insertCategory("Personal Safety", "Harassment", "Assist Harassment Resolution");
        //*********insertCategory("Personal Safety", "Harassment", "Bullying/Intimidation");
        insertCategory("Personal Safety", "Harassment", "Sexual");
        insertCategory("Personal Safety", "Harassment", "Stalking");
        insertCategory("Personal Safety", "Harassment", "Verbal");
        insertCategory("Personal Safety", "Information/Consult", null);
        //*********insertCategory("Personal Safety", "Violence In The Workplace", null);
        insertCategory("Policy", "Student Code ", null);
        insertCategory("Policy", "Student Code ", "Cheating");
        insertCategory("Policy", "Student Code ", "Personal Conduct");
        insertCategory("Policy", "Student Code ", "Residence Contract");
        //*********insertCategory("Provincial Statutes", "Liquor Control/Licensing Act", "Intoxicated Person(S)");
        //*********insertCategory("Provincial Statutes", "Liquor Control/Licensing Act", "Public Consumption");
        //*********insertCategory("Provincial Statutes", "Liquor Control/Licensing Act", "Special Occasion License Violation(S)");
        insertCategory("Provincial Statutes", "Litter Act", null);
        insertCategory("Provincial Statutes", "Mental Health Act", null);
        insertCategory("Provincial Statutes", "Motor Vehicle Act", null);
        insertCategory("Provincial Statutes", "Other", null);
        insertCategory("Provincial Statutes", "Trespass Act", null);
        insertCategory("Provincial Statutes", "University Act", null);
        //*********insertCategory("Safety", "Contact With Electricity", null);
        insertCategory("Safety", "Ehrs Incident", null);
        insertCategory("Safety", "Exercises/Drills", "Fire Alarm Drill");
        insertCategory("Safety", "Explosion", null);
        //*********insertCategory("Safety", "Fall On Same Level, Slip/Trip", null);
        insertCategory("Safety", "Fire", "Accidental");
        insertCategory("Safety", "Fire", "Cooking");
        insertCategory("Safety", "Fire", "Electrical");
        insertCategory("Safety", "Fire", "Heating");
        insertCategory("Safety", "Fire", "Natural Gas Leak");
        insertCategory("Safety", "Fire", "Smoking");
        //*********insertCategory("Safety", "Hazardous Material Spill", null);
        insertCategory("Safety", "Near Miss", null);
        insertCategory("Safety", "Other", null);
        insertCategory("Safety", "Other Bodily Motion", null);
        //*********insertCategory("Safety", "Overexertion, Ergonomics", null);
        insertCategory("Safety", "Violations", null);
        insertCategory("Safety", "Violations", null);
        insertCategory("Shifts", "Contract Security", "Dispatch");
        insertCategory("Shifts", "Contract Security", "Failure To Report");
        insertCategory("Shifts", "Contract Security", "Information");
        insertCategory("Shifts", "Contract Security", "Kiosk Duties");
        insertCategory("Shifts", "Contract Security", "Ofa Duties");
        insertCategory("Shifts", "Contract Security", "Overtime");
        insertCategory("Shifts", "Contract Security", "Patrol");
        insertCategory("Shifts", "Contract Security", "Special Patrol");
        insertCategory("Shifts", "Contract Security", "Traffic");
        insertCategory("Shifts", "Ssep", "Concierge");
        insertCategory("Shifts", "Ssep", "Convocation");
        insertCategory("Shifts", "Ssep", "Gd-Bike");
        insertCategory("Shifts", "Ssep", "Gd-Foot");
        insertCategory("Shifts", "Ssep", "Information");
        insertCategory("Shifts", "Ssep", "Lot Count");
        insertCategory("Shifts", "Ssep", "Other");
        insertCategory("Shifts", "Ssep", "Residence Move-In");
        insertCategory("Shifts", "Ssep", "Speed Watch");
        insertCategory("Shifts", "Ssep", "Traffic");
        insertCategory("Shifts", "Ssep", "Vehicle Wash");
        insertCategory("Shifts", "Sfu Staff", null);
        insertCategory("Suspicious Activity", "Package Or Mail", null);
        insertCategory("Suspicious Activity", "Person(S)", "Loitering");
        insertCategory("Suspicious Activity", "Person(S)", "Soliciting");
        insertCategory("Suspicious Activity", "Vehicle(S)", null);
        insertCategory("Threats", "Bomb", "Email");
        insertCategory("Threats", "Bomb", "Mail");
        insertCategory("Threats", "Bomb", "Phone");
        insertCategory("Threats", "Physical", "Email");
        insertCategory("Threats", "Physical", "Mail");
        insertCategory("Threats", "Physical", "Phone");
        insertCategory("Threats", "Verbal", "Email");
        insertCategory("Threats", "Verbal", "Phone");
        //*********insertCategory("Traffic", "Motor Vehicle Accident", "Accidental");
        //*********insertCategory("Traffic", "Motor Vehicle Accident", "Hit And Run");
        //*********insertCategory("Traffic", "Motor Vehicle Accident", "Train Derailment");
        insertCategory("Traffic", "Moving Violation", "Failure To Pay");
        insertCategory("Traffic", "Moving Violation", "Speeding");
        insertCategory("Traffic", "Moving Violation", "Traffic Control");
        insertCategory("Traffic", "Reckless Driving", null);
        insertCategory("Training", "Training", null);
        insertCategory("Weather", "Hazardous Conditions", null);
        //*********insertCategory("Weather", "Update The Road And Traffic Report", null);
        */
    }

    private void insertCategory(String main, String sub, String type) {
        String query = "insert into IncidentCategory (MAIN_CATEGORY, SUB_CATEGORY, INCIDENT_TYPE) values (";
        query += "'" + main + "', ";
        query += "'" + sub + "', ";
        query += "'" + type + "');";

        try {
            boolean success = DBHelper.execute(query);
        }
        catch(Exception e) {
            e.printStackTrace();
        }
    }
}

//        post( "/incidentCategory" , ( request , response ) -> {
//
//        } , json() );
//
//        put( "/incidentCategory" , ( request , response ) -> {
//
//        }, json());
//
//        delete( "/incidentCategory/:id", ( request , response ) -> {
//
//        } , json() );
//
//        get( "/test" , ( request , response ) -> getClichedMessage() );
