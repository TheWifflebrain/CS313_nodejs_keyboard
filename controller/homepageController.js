const homepageModel = require("../model/homepageModel.js")

function getHomepage(req, res){
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
    homepageModel.addKeyboardDB(keyboard, function(error, result){
    })
}

function addSwitches(req, res){
    const switches = req.body.switches
    homepageModel.addSwitchesDB(switches, function(error, result){
    })
}

function addCaps(req, res){
    const caps = req.body.caps
    homepageModel.addCapsDB(caps, function(error, result){
    })
}

////////////////////////////
function removeKeyboard(req,res){
    const kids = req.body.kids
    homepageModel.removeKeyboardDB(kids, function(error, result){

    });
}

function removeSwitches(req,res){
    const sids = req.body.sids
    homepageModel.removeSwitchesDB(sids, function(error, result){

    });
}

function removeCaps(req,res){
    const cids = req.body.cids
    homepageModel.removeCapsDB(cids, function(error, result){

    });
}

function editCaps(req,res){
    const caps = req.body.caps
    homepageModel.editCapsDB(caps, function(error, result){

    });
}

function editSwitches(req,res){
    const switches = req.body.switches
    homepageModel.editSwitchesDB(switches, function(error, result){

    });
}

function editKeyboard(req,res){
    const keyboard = req.body.keyboard
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