var MongoClient = require("mongoDB").MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db){
    if(err)
        console.log("Failed to create the database");
    else {
        
        db.createCollection("customers", function(err, res) {
            if(err)
                console.log("Failed to create the collection");
            else {
                console.log("Collection created!");
                db.close();
            } 

        });
        db.createCollection("managers", function(err, res) {
            if(err)
                console.log("Failed to create the collection");
            else {
                console.log("Collection created!");
                db.close();
            } 

        });
    }
});
