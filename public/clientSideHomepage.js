function displayKeyboard() {
    console.log("In displayKeyboard client js");
    
	$.get("/getKeyboard", function(data) {
		console.log("Back from the server with:");
		console.log(data);

		for (var i = 0; i < data.list.length; i++) {
             var keyboard = data.list[i];
             
            $("#displayKeyboards_id").empty().append("<div class='jumbotron text-center'><h1>" + keyboard.keyboardname + "</a></h1></div><div class='keyList'><div><img class='img-thumbnail mx-auto d-block img-fluid' src='" + keyboard.photo + "'></div><div><h4>" + keyboard.descriptionk + "</h4></div><div class='container'><table class='table table-striped'><thead><tr><th>Switch</th><th>Type</th><th>Size</th></tr></thead><tbody><tr><td>" + keyboard.switch + "</td><td>" + keyboard.typek + "</td><td>" + keyboard.size + "</td></tr></tbody></table></div></div>" );
		}
    })
    $("#dKeyboard").toggle();
}

function displaySwitches() {
    console.log("In displaySwitches client js");
    
	$.get("/getSwitches", function(data) {
		console.log("Back from the server with:");
		console.log(data);

		for (var i = 0; i < data.list.length; i++) {
			 var switches = data.list[i];
			$("#displaySwitches_id").empty().append("<div class='jumbotron text-center'><h1>" + switches.switchname + "</a></h1></div><div class='keyList'><div><img class='img-thumbnail mx-auto d-block img-fluid' src='" + switches.photo + "'></div><div></div><div class='container'><table class='table table-striped'><thead><tr><th>Type</th><th>Travel</th><th>Actuation</th><th>Bottom Out</th></tr></thead><tbody><tr><td>" + switches.types + "</td><td>" + switches.travel + "</td><td>" + switches.actuation + "</td><td>" + switches.bottomout + "</td></tr></tbody></table></div></div>" );
		}
    })
    $("#dSwitches").toggle();
}

function displayCaps() {
    console.log("In displayCaps client js");
    
	$.get("/getCaps", function(data) {
		console.log("Back from the server with:");
		console.log(data);

		for (var i = 0; i < data.list.length; i++) {
			 var caps = data.list[i];
			$("#displayCaps_id").empty().append("<div class='jumbotron text-center'><h1>" + caps.capname + "</a></h1></div><div class='keyList'><div><img class='img-thumbnail mx-auto d-block img-fluid' src='" + caps.photo + "'></div><div><h4>" + caps.descriptionc + "</h4></div><div class='container'><table class='table table-striped'><thead><tr><th>Material</th></tr></thead><tbody><tr><td>" + caps.material + "</td></tr></tbody></table></div></div>" );
		}
    })
    $("#dCaps").toggle();
}