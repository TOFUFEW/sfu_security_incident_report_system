function Staff(name, location, statusCode, status) {
    var self = this;
    self.name = name;
    self.location = location;
    self.statusCode = statusCode;
    self.status = status;
};

function Incident(id, type, location, status, description, caller, staff) {
    var self = this;
    self.id = id;
    self.type = type;
    self.location = location;
    self.description = description;
    self.staff = staff;
    self.status = status;
    self.caller = caller;
    var currentdate = new Date();
    self.dateTime = currentdate.getDate() + "/"
        + (currentdate.getMonth()+1)  + "/" 
        + currentdate.getFullYear() + " "  
        + currentdate.getHours() + ":"  
        + currentdate.getMinutes() + ":" 
        + currentdate.getSeconds();
};

function IncidentViewModel() {
    var self = this;
    var locations = ["Bus Terminal 1", "Mezzanine", "Library", "CSIL"];
    var types = ["Theft", "Hot Work", "Lone Worker", "Bear Sighting"];

    self.staff = ko.observableArray([
        new Staff("Security Guard1", "Mezzanine", 1, "Available"),
        new Staff("Security Guard3", "Library", 1, "Available"),
        new Staff("Security Guard4", "5th floor West", 1, "Available"),
        new Staff("Security Guard5", "Mezzanine", 2, "Dispatched to Incident #1"),
        new Staff("Security Guard2", "Library", 2, "Dispatched to Incident #2"),
        new Staff("Security Guard6", "CSIL", 2, "Dispatched to Incident #3"),
        new Staff("Security Guard7", "", 0, "Offline"),
        new Staff("Security Guard8", "", 0, "Offline"),
        new Staff("Security Guard9", "", 0, "Offline"),
        new Staff("Security Guard10", "", 0, "Offline"),
    ]);

    self.incidents = ko.observableArray([
        new Incident(4, types[0], locations[0], "New", "Guy wearing a ski mask stole my laptop and took Bus 145 Production Way.", "Student Name4", ""),
        new Incident(1, types[1], locations[1], "In Progress", "Someone is cooking eggs in the lobby.", "Student Name1", self.staff()[0].name),
        new Incident(2, types[2], locations[2], "In Progress", "I'm finishing a project.", "Student Name2", self.staff()[4].name),
        new Incident(3, types[3], locations[3], "In Progress", "Student in a bear costume.", "Student Name3", self.staff()[5].name),
    ]);

    self.inProgressCount = ko.observable(0);
    self.completedCount = ko.observable(0);
    self.newCount = ko.computed(function(){
        var newCount = 0;
        var inPCount = 0;
        var completedCount = 0;
        var arr = self.incidents();
        for (var i = 0 ; i < arr.length; i += 1) {
            if (arr[i].status == 'New') newCount += 1;
            else if (arr[i].status == 'In Progress') inPCount += 1;
            else completedCount += 1;
        }

        self.inProgressCount(inPCount);
        self.completedCount(completedCount);
        return newCount;
    }, this);

    setInterval(insertIncident, 10000);

    function insertIncident() {
        var id = self.incidents().length;
        var random = id % (locations.length-1);
        var location = locations[random];
        var incident = new Incident(id, types[random], locations[random], "New", "Some random description", "First Last", "");
        self.incidents.splice(0, 0, incident); // insert to beginning of array. splice(start, deleteCount, item)
    }

    setInterval(function(){ 
        $('.status-circle.new').fadeOut().fadeIn(); 
    }, 1000);
};



ko.applyBindings(new IncidentViewModel());