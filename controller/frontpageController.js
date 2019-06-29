const frontpageModel = require("../model/frontpageModel.js")

function getFrontpage(req, res){
    frontpageModel.getFrontpage(function(error, results){
        if(error){
            console.log("error in displayFrontpage Controller")
        }
        else{
            res.json(results);
        }
    })
}