const homepageModel = require("../model/homepageModel.js")

function getHomepage(req, res){
    console.log("In getHomepage controller")
    homepageModel.getHomepageDB(function(error, result){
        if (error || result == null) {
            res.status(500).json({success: false, data: error});
        } 
        else{
            res.json(result)
        }
    })
}

function getKeyboard(req, res){
    console.log("In getKeyboard controller")
    homepageModel.getKeyboardDB(function(error, result){
        if (error || result == null) {
            res.status(500).json({success: false, data: error});
        } 
        else{
            res.json(result)
        }
    })
}

function getSwitches(req, res){
    console.log("In getSwitches controller")
    homepageModel.getSwitchesDB(function(error, result){
        if (error || result == null) {
            res.status(500).json({success: false, data: error});
        } 
        else{
            res.json(result)
        }
    })
}

function getCaps(req, res){
    console.log("In getCaps controller")
    homepageModel.getCapsDB(function(error, result){
        if (error || result == null) {
            res.status(500).json({success: false, data: error});
        } 
        else{
            res.json(result)
        }
    })
}

/*--------------------------------------------------------*/
function getalphaKeyboard(req, res){
    console.log("In getKeyboard controller")
    homepageModel.getalphaKeyboardDB(function(error, result){
        if (error || result == null) {
            res.status(500).json({success: false, data: error});
        } 
        else{
            res.json(result)
        }
    })
}

function getalphaSwitches(req, res){
    console.log("In getSwitches controller")
    homepageModel.getalphaSwitchesDB(function(error, result){
        if (error || result == null) {
            res.status(500).json({success: false, data: error});
        } 
        else{
            res.json(result)
        }
    })
}

function getalphaCaps(req, res){
    console.log("In getCaps controller")
    homepageModel.getalphaCapsDB(function(error, result){
        if (error || result == null) {
            res.status(500).json({success: false, data: error});
        } 
        else{
            res.json(result)
        }
    })
}
/*--------------------------------------------------------*/
function addKeyboard(req, res){
    const keyboard = req.body.keyboard
    console.log(keyboard);
    homepageModel.addKeyboardDB(keyboard, function(error, result){
    })
}

function addSwitches(req, res){
    const switches = req.body.switches
    console.log(switches);
    homepageModel.addSwitchesDB(switches, function(error, result){
    })
}

function addCaps(req, res){
    const caps = req.body.caps
    console.log(caps);
    homepageModel.addCapsDB(caps, function(error, result){
    })
}

////////////////////////////
function removeKeyboard(req,res){
    const kids = req.body.kids
    console.log("In remove keyboardboard controller")
    console.log(kids);
    homepageModel.removeKeyboardDB(kids, function(error, result){

    });
}

function removeSwitches(req,res){
    const sids = req.body.sids
    console.log("In remove switches controller")
    console.log(sids);
    homepageModel.removeSwitchesDB(sids, function(error, result){

    });
}

function removeCaps(req,res){
    const cids = req.body.cids
    console.log("In remove caps controller")
    console.log(cids);
    homepageModel.removeCapsDB(cids, function(error, result){

    });
}

function editCaps(req,res){
    const caps = req.body.caps
    console.log("In edit caps controller")
    console.log(caps);
    homepageModel.editCapsDB(caps, function(error, result){

    });
}

function editSwitches(req,res){
    const switches = req.body.switches
    console.log("In edit switches controller")
    console.log(switches);
    homepageModel.editSwitchesDB(switches, function(error, result){

    });
}

function editKeyboard(req,res){
    const keyboard = req.body.keyboard
    console.log("In edit keyboard controller")
    console.log(keyboard);
    homepageModel.editKeyboardDB(keyboard, function(error, result){

    });
}

module.exports = {
    getHomepage: getHomepage,
    getKeyboard: getKeyboard,
    getSwitches: getSwitches,
    getCaps: getCaps,
    getalphaKeyboard: getalphaKeyboard,
    getalphaSwitches: getalphaSwitches,
    getalphaCaps: getalphaCaps,
    addKeyboard: addKeyboard,
    addSwitches: addSwitches,
    addCaps: addCaps,
    removeKeyboard: removeKeyboard,
    removeSwitches: removeSwitches,
    removeCaps: removeCaps,
    editCaps: editCaps,
    editSwitches: editSwitches,
    editKeyboard: editKeyboard
};