

var uri = "http://localhost:4567";
var Locations = {
    Campus: "",
    Building_num: "",
    Room_num: 0,
    Deparment: ""
};

function GetLocationList(){
    var xmlHttp = new XMLHttpRequest();

    // Callback
    xmlHttp.onreadystatechange = function(){

        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){

            document.getElementById("loc_display").innerHTML = ""; // Clears display
            var list = JSON.parse(xmlHttp.responseText);
            var ul = document.getElementById("loc_display");

            // Create display
            for (var i =0; i < list.length; i++){
                var loc = Locations;
                loc.Campus = list[i].campus;
                loc.Building_num = list[i].building_num;
                loc.Room_num = list[i].room_num;
                loc.Deparment = list[i].deparment;
                var text = i+1 + ": " + loc.Campus + ", " + loc.Building_num + ", " + loc.Room_num + ", " + loc.Deparment;
                var li = document.createElement("li");
                li.appendChild(document.createTextNode(text));
                ul.appendChild(li);
            }
        }
    };

    xmlHttp.open("GET", uri + "/locations", true);
    xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHttp.send();
}

function PushLocation(form){
    // Clear form
    var inputs = form.getElementsByTagName('input');
    for (var i = 0; i<inputs.length; i++) {
        switch (inputs[i].type) {
            // case 'hidden':
            case 'text':
                inputs[i].value = '';
                break;
            case 'radio':
            case 'checkbox':
                inputs[i].checked = false;
        }
    }
}