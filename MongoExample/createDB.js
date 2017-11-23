var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url,function(err, db){
    if(err)
        console.log("Failed to create the database");
    else {
        console.log("Database created successfully!");
        db.close();
    }
});