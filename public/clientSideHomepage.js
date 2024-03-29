var kid;
var sid;
var cid;

function displayAll(){
    $(document).ready(function(){
        $("#searchInput").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $("#myTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
      });

    $("#searchSpace").empty().append("<input id='searchInput' type='text' placeholder='Search Database'>")
    $("#allSp").toggle();

    $.get("/getKeyboard", function(data) {
        for (var i = 0; i < data.list.length; i++) {
            var keyboard = data.list[i];
            if(i == 0){
                $("#allKeys_id").empty().append("<div class='container darktable'><table class='table table-striped'><thead><tr><th>Keyboard Name</th><th>Switch</th><th>Size</th><th>Type</th><th>Description</th></tr></thead><tbody id='myTable'><tr><td>" + keyboard.keyboardname + "</td><td>"+keyboard.switch+"</td><td>"+keyboard.size+"</td><td>"+keyboard.typek+"</td><td>" + keyboard.descriptionk + "</td></tr>")
            }
            else if(i != 0 && i < data.list.length - 1){
                $("#allKeys_id tr:last").after("<tr><td>" + keyboard.keyboardname + "</td><td>"+keyboard.switch+"</td><td>"+keyboard.size+"</td><td>"+keyboard.typek+"</td><td>" + keyboard.descriptionk + "</td></tr>" )
            }
            else if(i == data.list.length - 1){
                $("#allKeys_id tr:last").after("<tr><td>" + keyboard.keyboardname + "</td><td>"+keyboard.switch+"</td><td>"+keyboard.size+"</td><td>"+keyboard.typek+"</td><td>" + keyboard.descriptionk + "</td></tr></tbody></table></div>" )
            }
        }
    })
    $("#allKeys").toggle();


    $.get("/getSwitches", function(data) {
		for (var i = 0; i < data.list.length; i++) {
            var switches = data.list[i];
            if(i == 0){
                $("#allSwitches_id").empty().append("<div class='container darktable'><table class='table table-striped'><thead><tr><th>Switch Name</th><th>Type</th><th>Travel</th><th>Actuation</th><th>Bottom Out</th></tr></thead><tbody id='myTable'><tr><td>" + switches.switchname + "</td><td>"+switches.types+"</td><td>"+switches.travel+"</td><td>"+switches.actuation+"</td><td>" + switches.bottomout + "</td></tr>")
            }
            else if(i != 0 && i < data.list.length - 1){
                $("#allSwitches_id tr:last").after("<tr><td>" + switches.switchname + "</td><td>"+switches.types+"</td><td>"+switches.travel+"</td><td>"+switches.actuation+"</td><td>" + switches.bottomout + "</td></tr>" )
            }
            else if(i == data.list.length - 1){
                $("#allSwitches_id tr:last").after("<tr><td>" + switches.switchname + "</td><td>"+switches.types+"</td><td>"+switches.travel+"</td><td>"+switches.actuation+"</td><td>" + switches.bottomout + "</td></tr></tbody></table></div>" )
            }
        }
    })
    $("#allSwitches").toggle();

    $.get("/getCaps", function(data) {
		for (var i = 0; i < data.list.length; i++) {
            var caps = data.list[i];
            if(i == 0){
                $("#allCaps_id").empty().append("<div class='container darktable'><table class='table table-striped'><thead><tr><th>Cap Name</th><th>Material</th><th>Description</th></tr></thead><tbody id='myTable'><tr><td>" + caps.capname + "</td><td>"+caps.material+"</td><td>"+caps.descriptionc+"</td></tr>")
            }
            else if(i != 0 && i < data.list.length - 1){
                $("#allCaps_id tr:last").after("<tr><td>" + caps.capname + "</td><td>"+caps.material+"</td><td>"+caps.descriptionc+"</td></tr>" )
            }
            else if(i == data.list.length - 1){
                $("#allCaps_id tr:last").after("<tr><td>" + caps.capname + "</td><td>"+caps.material+"</td><td>"+caps.descriptionc+"</td></tr></tbody></table></div>" )
            }
        }
    })
    $("#allCaps").toggle();
}

function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);  
}

function changeCSS() {
    if(document.getElementById("mode").checked){
        light = swapStyleSheet("../stylesheets/main.css");
    }
    else{
        dark = swapStyleSheet("../stylesheets/cssdark.css");
    }
}

function displayKeyboard() {    
	$.get("/getKeyboard", function(data) {
        for (var i = 0; i < data.list.length; i++) {
            var keyboard = data.list[i];
            if(i == 0){
                kid = keyboard.keyboard_id;
                $("#displayKeyboards_id").empty().append("<div id='myDIV'><div class='jumbotron text-center'><h1>" + keyboard.keyboardname + "</a></h1></div><div class='keyList'><div><img class='img-thumbnail mx-auto d-block img-fluid darkphoto' src='" + keyboard.photo + "'></div><div><h4>" + keyboard.descriptionk + "</h4></div><div class='container darktable'><table class='table table-striped'><thead><tr><th>Switch</th><th>Type</th><th>Size</th></tr></thead><tbody><tr><td>" + keyboard.switch + "</td><td>" + keyboard.typek + "</td><td>" + keyboard.size + "</td></tr></tbody></table><div class='container'><table class='table'><thead><tr><th><input onclick='editKeyboard("+kid+")' name='Edit Keyboard' value='Edit Keyboard' class='btn btn-warning btn-sm float-center'></th><th><input onclick='removeKeyboard(" + kid + ")' type='button' name='Remove keyboard' id ='button1' value='Remove' class='btn btn-danger btn-sm float-right'></input></th></tr></thead></div></div></div>" );
            }
            else{
                kid = keyboard.keyboard_id;
                $("#displayKeyboards_id").append("<div id='myDIV'><div class='jumbotron text-center'><h1>" + keyboard.keyboardname + "</a></h1></div><div class='keyList'><div><img class='img-thumbnail mx-auto d-block img-fluid darkphoto' src='" + keyboard.photo + "'></div><div><h4>" + keyboard.descriptionk + "</h4></div><div class='container darktable'><table class='table table-striped'><thead><tr><th>Switch</th><th>Type</th><th>Size</th></tr></thead><tbody><tr><td>" + keyboard.switch + "</td><td>" + keyboard.typek + "</td><td>" + keyboard.size + "</td></tr></tbody></table><div class='container'><table class='table'><thead><tr><th><input onclick='editKeyboard("+kid+")' name='Edit Keyboard' value='Edit Keyboard' class='btn btn-warning btn-sm float-center'></th><th><input onclick='removeKeyboard(" + kid + ")' type='button' name='Remove keyboard' id ='button1' value='Remove' class='btn btn-danger btn-sm float-right'></input></th></tr></thead></div></div></div>" );
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
                sid = switches.switch_id;
			    $("#displaySwitches_id").empty().append("<div class='jumbotron text-center'><h1>" + switches.switchname + "</a></h1></div><div class='keyList'><div><img class='img-thumbnail mx-auto d-block img-fluid darkphoto' src='" + switches.photo + "'></div><div></div><div class='container darktable'><table class='table table-striped'><thead><tr><th>Type</th><th>Travel</th><th>Actuation</th><th>Bottom Out</th></tr></thead><tbody><tr><td>" + switches.types + "</td><td>" + switches.travel + "</td><td>" + switches.actuation + "</td><td>" + switches.bottomout + "</td></tr></tbody></table><div class='container'><table class='table'><thead><tr><th><input  onclick='editSwitch(" +sid+")' name='Edit switch' value='Edit Switch' class='btn btn-warning btn-sm float-center'></th><th><input onclick='removeSwitches(" + sid + ")' type='button' name='Remove switch' id ='button2' value='Remove' class='btn btn-danger btn-sm float-right'></input></th></tr></thead></div></div>" );
            }
            else{
                sid = switches.switch_id;
                $("#displaySwitches_id").append("<div class='jumbotron text-center'><h1>" + switches.switchname + "</a></h1></div><div class='keyList'><div><img class='img-thumbnail mx-auto d-block img-fluid darkphoto' src='" + switches.photo + "'></div><div></div><div class='container darktable'><table class='table table-striped'><thead><tr><th>Type</th><th>Travel</th><th>Actuation</th><th>Bottom Out</th></tr></thead><tbody><tr><td>" + switches.types + "</td><td>" + switches.travel + "</td><td>" + switches.actuation + "</td><td>" + switches.bottomout + "</td></tr></tbody></table><div class='container'><table class='table'><thead><tr><th><input onclick='editSwitch(" +sid+")' name='Edit switch' value='Edit Switch' class='btn btn-warning btn-sm float-center'></th><th><input onclick='removeSwitches(" + sid + ")' type='button' name='Remove switch' id ='button2' value='Remove' class='btn btn-danger btn-sm float-right'></input></th></tr></thead></div></div>" );
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
                cid = caps.cap_id;
                $("#displayCaps_id").empty().append("<div class='jumbotron text-center'><h1>" + caps.capname + "</a></h1></div><div class='keyList'><div id='capsImg'><img class='img-thumbnail mx-auto d-block img-fluid darkphoto' src='" + caps.photo + "'></div><div><h4 id='descC'>" + caps.descriptionc + "</h4></div><div class='container darktable'><table class='table table-striped'><thead><tr><th>Material</th></tr></thead><tbody><tr><td>" + caps.material + "</td></tr></tbody></table><div class='container'><table class='table'><thead><tr><th><input onclick='editCaps(" + cid + ")' name='Edit Caps' value='Edit Caps' class='btn btn-warning btn-sm float-center'></th><th><input onclick='removeCaps(" + cid + ")' type='button' name='Remove caps' id ='button3' value='Remove' class='btn btn-danger btn-sm float-right'></input></th></tr></thead></div></div>" );
            }
            else{
                cid = caps.cap_id;
                $("#displayCaps_id").append("<div class='jumbotron text-center'><h1>" + caps.capname + "</a></h1></div><div class='keyList'><div id='capsImg'><img class='img-thumbnail mx-auto d-block img-fluid darkphoto' src='" + caps.photo + "'></div><div><h4 id='descC'>" + caps.descriptionc + "</h4></div><div class='container darktable'><table class='table table-striped'><thead><tr><th>Material</th></tr></thead><tbody><tr><td>" + caps.material + "</td></tr></tbody></table><div class='container'><table class='table'><thead><tr><th><input onclick='editCaps(" + cid + ")' name='Edit Caps' value='Edit Caps' class='btn btn-warning btn-sm float-center'></th><th><input onclick='removeCaps(" + cid + ")' type='button' name='Remove caps' id ='button3' value='Remove' class='btn btn-danger btn-sm float-right'></input></th></tr></thead></div></div>" );
            }
        }
    })
    $("#dCaps").toggle();
}

function alphaKeyboard() {    
	$.get("/getalphaKeyboard", function(data) {
        for (var i = 0; i < data.list.length; i++) {
            var keyboard = data.list[i];
            if(i == 0){
                kid = keyboard.keyboard_id;
                $("#displayKeyboards_id").empty().append("<div id='myDIV'><div class='jumbotron text-center'><h1>" + keyboard.keyboardname + "</a></h1></div><div class='keyList'><div><img class='img-thumbnail mx-auto d-block img-fluid darkphoto' src='" + keyboard.photo + "'></div><div><h4>" + keyboard.descriptionk + "</h4></div><div class='container darktable'><table class='table table-striped'><thead><tr><th>Switch</th><th>Type</th><th>Size</th></tr></thead><tbody><tr><td>" + keyboard.switch + "</td><td>" + keyboard.typek + "</td><td>" + keyboard.size + "</td></tr></tbody></table><div class='container'><table class='table'><thead><tr><th><input onclick='editKeyboard("+kid+")' name='Edit Keyboard' value='Edit Keyboard' class='btn btn-warning btn-sm float-center'></th><th><input onclick='removeKeyboard(" + kid + ")' type='button' name='Remove keyboard' id ='button1' value='Remove' class='btn btn-danger btn-sm float-right'></input></th></tr></thead></div></div></div>" );
            }
            else{
                kid = keyboard.keyboard_id;
                $("#displayKeyboards_id").append("<div id='myDIV'><div class='jumbotron text-center'><h1>" + keyboard.keyboardname + "</a></h1></div><div class='keyList'><div><img class='img-thumbnail mx-auto d-block img-fluid darkphoto' src='" + keyboard.photo + "'></div><div><h4>" + keyboard.descriptionk + "</h4></div><div class='container darktable'><table class='table table-striped'><thead><tr><th>Switch</th><th>Type</th><th>Size</th></tr></thead><tbody><tr><td>" + keyboard.switch + "</td><td>" + keyboard.typek + "</td><td>" + keyboard.size + "</td></tr></tbody></table><div class='container'><table class='table'><thead><tr><th><input onclick='editKeyboard("+kid+")' name='Edit Keyboard' value='Edit Keyboard' class='btn btn-warning btn-sm float-center'></th><th><input onclick='removeKeyboard(" + kid + ")' type='button' name='Remove keyboard' id ='button1' value='Remove' class='btn btn-danger btn-sm float-right'></input></th></tr></thead></div></div></div>" );
            }
        }
    })
    $("#dKeyboard").toggle();
}

function alphaSwitches() {
	$.get("/getalphaSwitches", function(data) {
		for (var i = 0; i < data.list.length; i++) {
            var switches = data.list[i];
            if(i == 0){
                sid = switches.switch_id;
			    $("#displaySwitches_id").empty().append("<div class='jumbotron text-center'><h1>" + switches.switchname + "</a></h1></div><div class='keyList'><div><img class='img-thumbnail mx-auto d-block img-fluid darkphoto' src='" + switches.photo + "'></div><div></div><div class='container darktable'><table class='table table-striped'><thead><tr><th>Type</th><th>Travel</th><th>Actuation</th><th>Bottom Out</th></tr></thead><tbody><tr><td>" + switches.types + "</td><td>" + switches.travel + "</td><td>" + switches.actuation + "</td><td>" + switches.bottomout + "</td></tr></tbody></table><div class='container'><table class='table'><thead><tr><th><input  onclick='editSwitch(" +sid+")' name='Edit switch' value='Edit Switch' class='btn btn-warning btn-sm float-center'></th><th><input onclick='removeSwitches(" + sid + ")' type='button' name='Remove switch' id ='button2' value='Remove' class='btn btn-danger btn-sm float-right'></input></th></tr></thead></div></div>" );
            }
            else{
                sid = switches.switch_id;
                $("#displaySwitches_id").append("<div class='jumbotron text-center'><h1>" + switches.switchname + "</a></h1></div><div class='keyList'><div><img class='img-thumbnail mx-auto d-block img-fluid darkphoto' src='" + switches.photo + "'></div><div></div><div class='container darktable'><table class='table table-striped'><thead><tr><th>Type</th><th>Travel</th><th>Actuation</th><th>Bottom Out</th></tr></thead><tbody><tr><td>" + switches.types + "</td><td>" + switches.travel + "</td><td>" + switches.actuation + "</td><td>" + switches.bottomout + "</td></tr></tbody></table><div class='container'><table class='table'><thead><tr><th><input onclick='editSwitch(" +sid+")' name='Edit switch' value='Edit Switch' class='btn btn-warning btn-sm float-center'></th><th><input onclick='removeSwitches(" + sid + ")' type='button' name='Remove switch' id ='button2' value='Remove' class='btn btn-danger btn-sm float-right'></input></th></tr></thead></div></div>" );
            }
        }
    })
    $("#dSwitches").toggle();
}

function alphaCaps() {
	$.get("/getalphaCaps", function(data) {
		for (var i = 0; i < data.list.length; i++) {
            var caps = data.list[i];
            if(i == 0){
                cid = caps.cap_id;
                $("#displayCaps_id").empty().append("<div class='jumbotron text-center'><h1>" + caps.capname + "</a></h1></div><div class='keyList'><div id='capsImg'><img class='img-thumbnail mx-auto d-block img-fluid darkphoto' src='" + caps.photo + "'></div><div><h4 id='descC'>" + caps.descriptionc + "</h4></div><div class='container darktable'><table class='table table-striped'><thead><tr><th>Material</th></tr></thead><tbody><tr><td>" + caps.material + "</td></tr></tbody></table><div class='container'><table class='table'><thead><tr><th><input onclick='editCaps(" + cid + ")' name='Edit Caps' value='Edit Caps' class='btn btn-warning btn-sm float-center'></th><th><input onclick='removeCaps(" + cid + ")' type='button' name='Remove caps' id ='button3' value='Remove' class='btn btn-danger btn-sm float-right'></input></th></tr></thead></div></div>" );
            }
            else{
                cid = caps.cap_id;
                $("#displayCaps_id").append("<div class='jumbotron text-center'><h1>" + caps.capname + "</a></h1></div><div class='keyList'><div id='capsImg'><img class='img-thumbnail mx-auto d-block img-fluid darkphoto' src='" + caps.photo + "'></div><div><h4 id='descC'>" + caps.descriptionc + "</h4></div><div class='container darktable'><table class='table table-striped'><thead><tr><th>Material</th></tr></thead><tbody><tr><td>" + caps.material + "</td></tr></tbody></table><div class='container'><table class='table'><thead><tr><th><input onclick='editCaps(" + cid + ")' name='Edit Caps' value='Edit Caps' class='btn btn-warning btn-sm float-center'></th><th><input onclick='removeCaps(" + cid + ")' type='button' name='Remove caps' id ='button3' value='Remove' class='btn btn-danger btn-sm float-right'></input></th></tr></thead></div></div>" );
            }
        }
    })
    $("#dCaps").toggle();
}

function addKeyboard(){
    $("#addKeyboards_id").empty().append("<div class='panel-body'><div class='form-group'><input type='text' name='keyboardName' id='keyboardName' class='form-control input-sm' placeholder='Keyboard Name' required></div><div class='form-group'><input type='text' name='desc' id='desc' class='form-control input-sm' placeholder='Description' required></div><div class='form-group'><input type='text' name='switch' id='switch' class='form-control input-sm' placeholder='Switch' required></div><div class='form-group'><input type='text' name='size' id='size' class='form-control input-sm' placeholder='Size' required></div><div class='form-group'><input type='text' name='type' id='type' class='form-control input-sm' placeholder='Custom or Pre-Built' required></div><div class='form-group'><input type='text' name='photo' id='photo' class='form-control input-sm' placeholder='Photo URL' required></div><input onclick='sendKeyboardInfo();' name='Add' value='Add' class='btn btn-info btn-block'></div>")
    $("#aKeyboard").toggle();
}

function addSwitches(){
    $("#addSwitches_id").empty().append("<div class='panel-body'><div class='form-group'><input type='text' name='switchName' id='switchName' class='form-control input-sm' placeholder='Switch Name' required></div><div class='form-group'><input type='text' name='typeS' id='typeS' class='form-control input-sm' placeholder='Type' required></div><div class='form-group'><input type='text' name='travel' id='travel' class='form-control input-sm' placeholder='Travel' required></div><div class='form-group'><input type='text' name='actuation' id='actuation' class='form-control input-sm' placeholder='Actuation' required></div><div class='form-group'><input type='text' name='bottomOut' id='bottomOut' class='form-control input-sm' placeholder='Bottom Out' required></div><div class='form-group'><input type='text' name='photo' id='photoS' class='form-control input-sm' placeholder='Photo URL' required></div><input onclick='sendSwitchesInfo();' name='Add' value='Add' class='btn btn-info btn-block'></div>")
    $("#aSwitches").toggle();
}

function addCaps(){
    $("#addCaps_id").empty().append("<div class='panel-body'><div class='form-group'><input type='text' name='capName' id='capName' class='form-control input-sm' placeholder='Cap Name' required></div><div class='form-group'><input type='text' name='material' id='material' class='form-control input-sm' placeholder='Material' required></div><div class='form-group'><input type='text' name='descriptionC' id='descriptionC' class='form-control input-sm' placeholder='Description' required></div><div class='form-group'><input type='text' name='photoC' id='photoC' class='form-control input-sm' placeholder='Photo URL' required></div><input onclick='sendCapsInfo();' name='Add' value='Add' class='btn btn-info btn-block'></div>")
    $("#aCaps").toggle();
}

function sendKeyboardInfo(){
    var name = $("#keyboardName").val();
    var switchk = $("#switch").val();
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
            alert("error");
        }
    })
    alert("keyboard added!");
    $("#aKeyboard").toggle();

}

function sendSwitchesInfo(){
    var name = $("#switchName").val();
    var typeS = $("#typeS").val();
    var travel = $("#travel").val();
    var actuation = $("#actuation").val();
    var bottomOut = $("#bottomOut").val();
    var photoS = $("#photoS").val();
    var switches = {"switchname": name, "types": typeS, "travel": travel, "actuation": actuation, "bottomout": bottomOut, "photos": photoS };
    $.post("/addSwitches", {switches:switches}, function(error, res){
        if(!error)
        {
            alert("Switch succesfully created");
        } else {
            alert("error");
        }
    })
    alert("Switch added!");
    $("#aSwitches").toggle();

}

function sendCapsInfo(){
    var name = $("#capName").val();
    var material = $("#material").val();
    var descriptionC = $("#descriptionC").val();
    var photo = $("#photoC").val();
    var caps = {"capname": name, "material": material, "descriptionc": descriptionC, "photoc": photo };
    $.post("/addCaps", {caps:caps}, function(error, res){
        if(!error)
        {
            alert("caps succesfully created");
        } else {
            alert("error");
        }
    })
    alert("Caps added!");
    $("#aCaps").toggle();

}

function removeKeyboard(kid){
    var kids = {"kid": kid};
    if(window.confirm("Are you sure you want to delete that keyboard?")){
        $.post("/removeKeyboard", {kids:kids}, function(error, res){
            if(!error)
            {
                alert("did not remove keyboard");
            } else {
                alert("error");
            }

        })
    }
    displayKeyboard()
}

function removeSwitches(sid){
    var sids = {"sid": sid};
    if(window.confirm("Are you sure you want to delete those switches?")){
        $.post("/removeSwitches", {sids:sids}, function(error, res){
            if(!error)
            {
                alert("did not remove switches");
            } else {
                alert("error");
            }

        })
    }
    displaySwitches()
}

function removeCaps(cid){
    var cids = {"cid": cid};
    if(window.confirm("Are you sure you want to delete those caps?")){
        $.post("/removeCaps", {cids:cids}, function(error, res){
            if(!error)
            {
                alert("did not remove caps");
            } else {
                alert("error");
            }

        })
    }
    displayCaps()
}

function editCaps(cid){
    $("#dCaps").toggle();
    var id = cid;
    $.get("/getCaps", function(data) {
		for (var i = 0; i < data.list.length; i++) {
            var caps = data.list[i];
                if(id == caps.cap_id){
                    $("#editCaps_id").empty().append("<div class='panel-body'><div class='form-group'><div class='darkTitle'>Name</div><input type='text' name='capName' id='capName' class='form-control input-sm' value='"+caps.capname+"' placeholder='Cap Name' required></div><div class='form-group'><div class='darkTitle'>Material</div><input type='text' name='material' id='material' class='form-control input-sm' value='"+caps.material+"' placeholder='Material' required></div><div class='form-group'><div class='darkTitle'>Description</div><input type='text' name='descriptionC' id='descriptionC' class='form-control input-sm' value='"+caps.descriptionc+"' placeholder='Description' required></div><div class='form-group'><div class='darkTitle'>Photo URL</div><input type='text' name='photoC' id='photoC' class='form-control input-sm' value='"+caps.photo+"' placeholder='Photo URL' required></div><input onclick='sendECapsInfo(" + cid + ")' name='Edit' value='Edit' class='btn btn-info btn-block'></div>")
                    $("#eCaps").toggle();
                }
        }
    })
}

function sendECapsInfo(cid){
    var id = cid;
    var name = $("#capName").val();
    var material = $("#material").val();
    var descriptionC = $("#descriptionC").val();
    var photo = $("#photoC").val();
    var caps = {"capname": name, "material": material, "descriptionc": descriptionC, "photoc": photo, "cid": id };
    $.post("/editCaps", {caps:caps}, function(error, res){
        if(!error)
        {
            alert("caps succesfully update");
        } else {
            alert("error");
        }
    })
    alert("Caps edited!");
    $("#eCaps").toggle();
    $("#dCaps").toggle();
    $("#dCaps").toggle();
}

function editSwitch(sid){
    $("#dSwitches").toggle();
    var sid = sid;
    $.get("/getSwitches", function(data) {
		for (var i = 0; i < data.list.length; i++) {
            var switches = data.list[i];
                if(sid == switches.switch_id){
                    $("#editSwitch_id").empty().append("<div class='panel-body'><div class='form-group'><div class='darkTitle'>Name</div><input type='text' name='switchName' id='switchName' class='form-control input-sm' value='"+switches.switchname+"' placeholder='Switch Name' required></div><div class='form-group'><div class='darkTitle'>Type</div><input type='text' name='typeS' id='typeS' class='form-control input-sm' value='"+switches.types+"' placeholder='Type' required></div><div class='form-group'><div class='darkTitle'>Travel</div><input type='text' name='travel' id='travel' class='form-control input-sm' value='"+switches.travel+"' placeholder='Travel' required></div><div class='form-group'><div class='darkTitle'>Actuation</div><input type='text' name='actuation' id='actuation' class='form-control input-sm' value='"+switches.actuation+"' placeholder='Actuation' required></div><div class='darkTitle'>Bottom Out</div><div class='form-group'><input type='text' name='bottomOut' id='bottomOut' class='form-control input-sm' value='"+switches.bottomout+"' placeholder='Bottom Out' required></div><div class='form-group'><div class='darkTitle'>Photo URL</div><input type='text' name='photo' id='photoS' class='form-control input-sm' value='"+switches.photo+"' placeholder='Photo URL' required></div><input onclick='sendESwitchesInfo("+sid+");' name='Edit' value='Edit' class='btn btn-info btn-block'></div>")
                    $("#eSwitch").toggle();
                }
            }
    })
}

function sendESwitchesInfo(sid){
    var name = $("#switchName").val();
    var typeS = $("#typeS").val();
    var travel = $("#travel").val();
    var actuation = $("#actuation").val();
    var bottomOut = $("#bottomOut").val();
    var photoS = $("#photoS").val();
    var sid = sid;
    var switches = {"switchname": name, "types": typeS, "travel": travel, "actuation": actuation, "bottomout": bottomOut, "photos": photoS, "sid": sid };
    $.post("/editSwitches", {switches, switches}, function(error, res){
        if(!error)
        {
            alert("switches succesfully update");
        } else {
            alert("error");
        }
    })
    alert("Switch edited!");
    $("#eSwitch").toggle();
    $("#dSwitch").toggle();
    $("#dSwitch").toggle();
}

function editKeyboard(kid){
    $("#dKeyboard").toggle();
    var kid = kid;
    $.get("/getKeyboard", function(data) {
		for (var i = 0; i < data.list.length; i++) {
            var keyboard = data.list[i];
                if(kid == keyboard.keyboard_id){
                    $("#editKey_id").empty().append("<div class='panel-body'><div class='form-group'><div class='darkTitle'>Name</div><input type='text' name='keyboardName' id='keyboardName' class='form-control input-sm' value='"+keyboard.keyboardname+"' placeholder='Keyboard Name' required></div><div class='darkTitle'>Description</div><div class='form-group'><input type='text' name='desc' id='desc' class='form-control input-sm' value='"+keyboard.descriptionk+"' placeholder='Description' required></div><div class='form-group'><div class='darkTitle'>Switch</div><input type='text' name='switch' id='switch' class='form-control input-sm' value='"+keyboard.switch+"' placeholder='Switch' required></div><div class='form-group'><div class='darkTitle'>Size</div><input type='text' name='size' id='size' class='form-control input-sm' value='"+keyboard.size+"' placeholder='Size' required></div><div class='form-group'><div class='darkTitle'>Custom or Pre-Built</div><input type='text' name='type' id='type' class='form-control input-sm' value='"+keyboard.typek+"' placeholder='Custom or Pre-Built' required></div><div class='form-group'><div class='darkTitle'>Photo URL</div><input type='text' name='photo' id='photo' class='form-control input-sm' value='"+keyboard.photo+"' placeholder='Photo URL' required></div><input onclick='sendEKeyboardInfo("+kid+")' name='Edit' value='Edit' class='btn btn-info btn-block'></div>")
                    $("#eKey").toggle();
                }
        }
    })
}

function sendEKeyboardInfo(kid){
    var name = $("#keyboardName").val();
    var switchk = $("#switch").val();
    var size = $("#size").val();
    var type = $("#type").val();
    var description = $("#desc").val();
    var photo = $("#photo").val();
    var kid = kid;
    var keyboard = {"keyboardname": name, "switch": switchk, "size": size, "typek": type, "descriptionk": description, "photo": photo, "kid": kid};
    $.post("/editKeyboard", {keyboard, keyboard}, function(error, res){
        if(!error)
        {
            alert("keyboard succesfully update");
        } else {
            alert("error");
        }
    })
    alert("Keyboard edited!");
    $("#eKey").toggle();
    $("#dKeyboard").toggle();
    $("#dKeyboard").toggle();
}