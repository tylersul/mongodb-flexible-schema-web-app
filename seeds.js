var mongoose = require("mongoose");
var Package = require("./models/package");
// var Comment   = require("./models/comment");

// See data for 3 separate players, input into the DB at app startup
var data = [
    {
        id: "1Z2340923049", 
        rfid: "230984029384",
        status: "AtWarehouse",
    },
    {
        id: "1Z2340923049", 
        rfid: "230984029384",
        status: "AtWarehouse",
    },
    {
        id: "1Z2340923049", 
        rfid: "230984029384",
        status: "AtWarehouse",
    }
]

function seedDB(){
   //Remove all campgrounds
   Packager.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed players!");
         //add a few players
        data.forEach(function(seed){
            Package.create(seed, function(err, package){
                if(err){
                    console.log(err)
                } else {
                    console.log("Added a player.");
                }
            });
        });
    }); 
    //add a few comments
}


// Export seedDB function
module.exports = seedDB;
