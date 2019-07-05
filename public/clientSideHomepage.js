function displayKeyboard() {    
	$.get("/getKeyboard", function(data) {
        for (var i = 0; i < data.list.length; i++) {
            var keyboard = data.list[i];
            if(i == 0){
                $("#displayKeyboards_id").empty().append("<div class='jumbotron text-center'><h1>" + keyboard.keyboardname + "</a></h1></div><div class='keyList'><div><img class='img-thumbnail mx-auto d-block img-fluid' src='" + keyboard.photo + "'></div><div><h4>" + keyboard.descriptionk + "</h4></div><div class='container'><table class='table table-striped'><thead><tr><th>Switch</th><th>Type</th><th>Size</th></tr></thead><tbody><tr><td>" + keyboard.switch + "</td><td>" + keyboard.typek + "</td><td>" + keyboard.size + "</td></tr></tbody></table></div></div>" );
            }
            else{
                $("#displayKeyboards_id").append("<div class='jumbotron text-center'><h1>" + keyboard.keyboardname + "</a></h1></div><div class='keyList'><div><img class='img-thumbnail mx-auto d-block img-fluid' src='" + keyboard.photo + "'></div><div><h4>" + keyboard.descriptionk + "</h4></div><div class='container'><table class='table table-striped'><thead><tr><th>Switch</th><th>Type</th><th>Size</th></tr></thead><tbody><tr><td>" + keyboard.switch + "</td><td>" + keyboard.typek + "</td><td>" + keyboard.size + "</td></tr></tbody></table></div></div>" );
            }
        }
    })
    $("#dKeyboard").toggle();
}

function displaySwitches() {
	$.get("/getSwitches", function(data) {
		for (var i = 0; i < data.list.length; i++) {
            var switches = data.list[i];
            if(i == 0){
			    $("#displaySwitches_id").empty().append("<div class='jumbotron text-center'><h1>" + switches.switchname + "</a></h1></div><div class='keyList'><div><img class='img-thumbnail mx-auto d-block img-fluid' src='" + switches.photo + "'></div><div></div><div class='container'><table class='table table-striped'><thead><tr><th>Type</th><th>Travel</th><th>Actuation</th><th>Bottom Out</th></tr></thead><tbody><tr><td>" + switches.types + "</td><td>" + switches.travel + "</td><td>" + switches.actuation + "</td><td>" + switches.bottomout + "</td></tr></tbody></table></div></div>" );
            }
            else{
                $("#displaySwitches_id").append("<div class='jumbotron text-center'><h1>" + switches.switchname + "</a></h1></div><div class='keyList'><div><img class='img-thumbnail mx-auto d-block img-fluid' src='" + switches.photo + "'></div><div></div><div class='container'><table class='table table-striped'><thead><tr><th>Type</th><th>Travel</th><th>Actuation</th><th>Bottom Out</th></tr></thead><tbody><tr><td>" + switches.types + "</td><td>" + switches.travel + "</td><td>" + switches.actuation + "</td><td>" + switches.bottomout + "</td></tr></tbody></table></div></div>" );
            }
        }
    })
    $("#dSwitches").toggle();
}

function displayCaps() {
	$.get("/getCaps", function(data) {
		for (var i = 0; i < data.list.length; i++) {
            var caps = data.list[i];
            if(i == 0){
			    $("#displayCaps_id").empty().append("<div class='jumbotron text-center'><h1>" + caps.capname + "</a></h1></div><div class='keyList'><div><img class='img-thumbnail mx-auto d-block img-fluid' src='" + caps.photo + "'></div><div><h4>" + caps.descriptionc + "</h4></div><div class='container'><table class='table table-striped'><thead><tr><th>Material</th></tr></thead><tbody><tr><td>" + caps.material + "</td></tr></tbody></table></div></div>" );
            }
            else{
                $("#displayCaps_id").append("<div class='jumbotron text-center'><h1>" + caps.capname + "</a></h1></div><div class='keyList'><div><img class='img-thumbnail mx-auto d-block img-fluid' src='" + caps.photo + "'></div><div><h4>" + caps.descriptionc + "</h4></div><div class='container'><table class='table table-striped'><thead><tr><th>Material</th></tr></thead><tbody><tr><td>" + caps.material + "</td></tr></tbody></table></div></div>" );
            }
        }
    })
    $("#dCaps").toggle();
}

function addKeyboard(){
    $("#addKeyboards_id").empty().append("<div class='panel-body'><div class='form-group'><input type='text' name='keyboardName' id='keyboardName' class='form-control input-sm' placeholder='Keyboard Name' required></div><div class='form-group'><input type='text' name='desc' id='desc' class='form-control input-sm' placeholder='Description' required></div><div class='form-group'><input type='text' name='switch' id='switch' class='form-control input-sm' placeholder='Switch' required></div><div class='form-group'><input type='text' name='size' id='size' class='form-control input-sm' placeholder='Size' required></div><div class='form-group'><input type='text' name='type' id='type' class='form-control input-sm' placeholder='Custom or Pre-Built' required></div><div class='form-group'><input type='text' name='photo' id='photo' class='form-control input-sm' placeholder='Photo URL' required></div><input onclick='sendKeyboardInfo();' name='Add' value='Add' class='btn btn-info btn-block'></div>")
    $("#aKeyboard").toggle();
}

function sendKeyboardInfo(){
    var name = $("#keyboardName").val();
    var switchk = $("#type").val();
    var size = $("#size").val();
    var type = $("#type").val();
    var description = $("#desc").val();
    var photo = $("#photo").val();
    var keyboard = {"keyboardname": name, "switch": switchk, "size": size, "typek": type, "descriptionk": description, "photo": photo };
        $.post("/addKeyboard", {keyboard:keyboard}, function(error, res){
            if(!error)
            {
                alert("keyboard succesfully created");
            } else {
                console.log(error);
                alert("error");
            }
        })


}

// function register(){
//     $.post("/register", function(data){
        
//     })
// }