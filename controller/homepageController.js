const homepageModel = require("../model/homepageModel.js")

function getHomepage(req, res){
    console.log("In getHomepage")
    homepageModel.getHomepageDB(function(error, result){
        if (error || result == null) {
            res.status(500).json({success: false, data: error});
        } 
        else{
            res.json(result)
        }
    })
}

function getSwitches(req, res){

}

module.exports = {
    getHomepage: getHomepage,
    getSwitches: getSwitches
};