function displayKeyboard() {
    console.log("In displayKeyboard client js");
    
	$.get("/getKeyboard", function(data) {
		console.log("Back from the server with:");
		console.log(data);

		for (var i = 0; i < data.list.length; i++) {
			var keyboard = data.list[i];

			$("#displayKeyboards_id").append("<li>" + keyboard.keyboardname + " " + keyboard.switch + ":" + keyboard.size + "</li>");
		}

	})
}

function displaySwitches() {
    console.log("In displaySwitches client js");
    
	$.get("/getSwitches", function(data) {
		console.log("Back from the server with:");
		console.log(data);

		for (var i = 0; i < data.list.length; i++) {
			var switches = data.list[i];

			$("#displaySwitches_id").append("<li>" + switches.switchname + " " + switches.types + ":" + switches.travel + "</li>");
		}

	})
}

function displayCaps() {
    console.log("In displayCaps client js");
    
	$.get("/getCaps", function(data) {
		console.log("Back from the server with:");
		console.log(data);

		for (var i = 0; i < data.list.length; i++) {
			var caps = data.list[i];

			$("#displayCaps_id").append("<li>" + caps.capname + " " + caps.material + ":" + caps.photo + "</li>");
		}

	})
}