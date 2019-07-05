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
function addKeyboard(req, res, callback){
    const keyboard = req.body.keyboard
    console.log(keyboard);
    homepageModel.addKeyboardDB(keyboard, function(error, result){
        if (error) {
            res.status(500).json({success: false, data: error});
        } 
        else{
            res.json(result)
        }
    })
}

function addSwitches(req, res){
    const switches = req.body.switches
    console.log(switches);
    homepageModel.addSwitchesDB(switches, function(error, result){
        if (error) {
            res.status(500).json({success: false, data: error});
        } 
        else{
            res.json(result)
        }
    })
}

function addCaps(req, res){
    const caps = req.body.caps
    console.log(caps);
    homepageModel.addCapsDB(caps, function(error, result){
        if (error) {
            res.status(500).json({success: false, data: error});
        } 
        else{
            res.json(result)
        }
    })
}

module.exports = {
    getHomepage: getHomepage,
    getKeyboard: getKeyboard,
    getSwitches: getSwitches,
    getCaps: getCaps,
    addKeyboard: addKeyboard,
    addSwitches: addSwitches,
    addCaps: addCaps
};