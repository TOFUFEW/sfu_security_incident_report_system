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
        /* DEBUG
        try {
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
         END DEBUG */

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
//insertCategory("Alarms", "False", null);

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
        insertCategory("Criminal", "Vandalisim", null);


        insertCategory("Daily Occurences", "Bookstore Closing", null);
        insertCategory("Daily Occurences", "Breaks", null);
        insertCategory("Daily Occurences", "Cash Count", null);
        insertCategory("Daily Occurences", "Cash Escort", "Bookstore");
        insertCategory("Daily Occurences", "Cash Escort", "Kiosk Duties");
        insertCategory("Daily Occurences", "Cash Escort", "Library");
        insertCategory("Daily Occurences", "Cash Escort", "Parking Services");
        insertCategory("Daily Occurences", "Cash Escort", "Tvm Duties");
        insertCategory("Daily Occurences", "Equipment Check", null);
        //*********insertCategory("Daily Occurences", "First Aid Duties", "Medical Bags/Equipment Check");
        insertCategory("Daily Occurences", "First Aid Duties", "Oxygen Tank Levels");
        insertCategory("Daily Occurences", "Key Count", null);
        insertCategory("Daily Occurences", "Officer Check-In", null);
        insertCategory("Daily Occurences", "Officer Transport", null);
        insertCategory("Daily Occurences", "Pass On Log", null);
        insertCategory("Daily Occurences", "Pickup/Delivery", null);
        insertCategory("Daily Occurences", "Report Writing", null);
        //*********insertCategory("Daily Occurences", "Shift Engineer Check-In", null);
        insertCategory("Daily Occurences", "Tvm Service", null);
        insertCategory("Daily Occurences", "Vehicle Maintence", "Fueling");
        insertCategory("Daily Occurences", "Vehicle Maintence", "Kilometers");
        insertCategory("Daily Occurences", "Vehicle Maintence", "Maintence Check");
        insertCategory("Daily Occurences", "Vehicle Maintence", "Off Site");
        insertCategory("Daily Occurences", "Vehicle Maintence", "Washing");
        insertCategory("Damage", "Property", "Commercial");
        insertCategory("Damage", "Property", "Personal");
        insertCategory("Damage", "Property", "Sfu");
        insertCategory("Damage", "Vandalisim", "Graffiti");
        //*********insertCategory("Damage", "Vehicle", "Campus Security Vehicle");
        insertCategory("Death", "Accidetnal ", null);
        //*********insertCategory("Death", "Motor Vehicle Accident", null);
        insertCategory("Death", "Suicide", null);
        //*********insertCategory("Demonstrations/Protests", "Labour Dispute", null);
        //*********insertCategory("Enviromental", "Accidental Spill/Release", "Biological");
        //*********insertCategory("Enviromental", "Accidental Spill/Release", "Chemical");
        //*********insertCategory("Enviromental", "Accidental Spill/Release", "Gas Leak");
        insertCategory("Enviromental", "Air Pollution", null);
        insertCategory("Enviromental", "Community Complaints", null);
        insertCategory("Enviromental", "Disease Outbreak", null);
        insertCategory("Enviromental", "Earthquake", null);
        insertCategory("Enviromental", "Flooding", null);
        insertCategory("Enviromental", "Forest Fire", null);
        insertCategory("Enviromental", "Heatwave", null);
        insertCategory("Enviromental", "Hurricane/Typhoon", null);
        //*********insertCategory("Enviromental", "Intentionional Chemical Release/Dumping", null);
        insertCategory("Enviromental", "Power Outage", null);
        insertCategory("Enviromental", "Severe Weather", null);
        insertCategory("Enviromental", "Tsunami", null);
        insertCategory("Enviromental", "Volcanic Eruption", null);
        insertCategory("Investigations", "Information", null);
        insertCategory("Investigations", "Intelligence", null);
        insertCategory("Lost And Found", "Found", null);
        insertCategory("Lost And Found", "Report Of Lost", null);
        insertCategory("Medical", "Atempted Suicide", null);
        insertCategory("Medical", "Escort Only", null);
        insertCategory("Medical", "Ofa Response", null);
        insertCategory("Parking Enforcement", "Altered Permit", null);
        insertCategory("Parking Enforcement", "Altered Tvm", null);
        insertCategory("Parking Enforcement", "Counterfiet Permit", null);
        insertCategory("Parking Enforcement", "Counterfiet Tvm", null);
        insertCategory("Parking Enforcement", "Failure To Pay", null);
        insertCategory("Parking Enforcement", "Impoundment", null);
        //*********insertCategory("Parking Enforcement", "Misuse Of Permit/Tvm Receipt", null);
        insertCategory("Parking Enforcement", "Parking Offense", null);
        insertCategory("Parking Enforcement", "Parknig Suspension", null);
        insertCategory("Parking Enforcement", "Permit/Access Card", "Lost");
        insertCategory("Parking Enforcement", "Permit/Access Card", "Stolen");
        insertCategory("Patrol", "Camera Patrol", null);
        insertCategory("Patrol", "Special Patrol", null);
        //*********insertCategory("Personal Safety", "Harassment", "Assist Harassment Resoloution");
        //*********insertCategory("Personal Safety", "Harassment", "Bullying/Intimindation");
        insertCategory("Personal Safety", "Harassment", "Sexual");
        insertCategory("Personal Safety", "Harassment", "Stalking");
        insertCategory("Personal Safety", "Harassment", "Verbal");
        insertCategory("Personal Safety", "Information /Consult", null);
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
        //*********insertCategory("Saftey", "Contact With Electricity", null);
        insertCategory("Saftey", "Ehrs Incident", null);
        insertCategory("Saftey", "Excercises/Drills", "Fire Alarm Drill");
        insertCategory("Saftey", "Explosion", null);
        //*********insertCategory("Saftey", "Fall On Same Level, Slip/Trip", null);
        insertCategory("Saftey", "Fire", "Accidental");
        insertCategory("Saftey", "Fire", "Cooking");
        insertCategory("Saftey", "Fire", "Electrical");
        insertCategory("Saftey", "Fire", "Heating");
        insertCategory("Saftey", "Fire", "Natural Gas Leak");
        insertCategory("Saftey", "Fire", "Smoking");
        //*********insertCategory("Saftey", "Hazardous Material Spill", null);
        insertCategory("Saftey", "Near Miss", null);
        insertCategory("Saftey", "Other", null);
        insertCategory("Saftey", "Other Bodily Motion", null);
        //*********insertCategory("Saftey", "Overexertion, Ergonomics", null);
        insertCategory("Saftey", "Violations", null);
        insertCategory("Saftey", "Violations", null);
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
        insertCategory("Traffic", "Recklass Driving", null);
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
