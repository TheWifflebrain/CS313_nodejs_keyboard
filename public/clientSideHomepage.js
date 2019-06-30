function displayKeyboard() {
    console.log("In displayKeyboard client js");
    
	$.get("/getKeyboard", function(data) {
		console.log("Back from the server with:");
		console.log(data);

		for (var i = 0; i < data.list.length; i++) {
			var keyboard = data.list[i];

			$("#displayKeyboard_id").append("<li>" + keyboard.keyboardName + " " + keyboard.switch + ":" + keyboard.size + "</li>");
		}

	})
}