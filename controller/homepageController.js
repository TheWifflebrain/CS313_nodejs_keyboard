const homepageModel = require("../model/homepageModel.js")

function getHomepage(req, res){
    console.log("hello world")
    homepageModel.getHomepageDB(function(error, result){
        if (error || result == null) {
            res.status(500).json({success: false, data: error});
        } 
        else{
            console.log("Back from db with results", result)
            //res.status(200).json(result)
            for(var i = 0; i < result.list.length; i++){
                var keys = result.list[i];
                console.log("Back from results", keys.keyboard_id)

            }
            console.log("Back from db with results", keys.sizek)
            res.render('../views/pages/homepage', {
                keyboard_id: keys.keyboard_id,
                switch: keys.switch,
                sizek: keys.sizek,
                typek: keys.typek,
                forsale: keys.forsale,
                descriptionk: keys.descriptionk,
                photo: keys.photo,
                keyboard_name: keys.keyboard_name,
                username_k: keys.username_k
            })
        }
    })
}

module.exports = {
    getHomepage: getHomepage
};