var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if(err)
        throw err;
    else {
        var myQuery = {name : "Sashank"};
        var newQuery = {name : "Suhas",employeeId : "007"};
        var findQuery = {name : "Suhas"};
        var newValues = { $set : { employeeId : "100007"}};
        db.collection("customers").updateOne(myQuery, newQuery , function(err, result) {
            if (err) 
                throw err;
            else {
                console.log("Updated one record successfully!");
                db.close();
            }
        });


        db.collection("customers").updateOne(findQuery, newValues , function(err, result) {
            if (err) 
                throw err;
            else {
                console.log("Updated one record successfully!");
                db.close();
            }
        });
    }
})