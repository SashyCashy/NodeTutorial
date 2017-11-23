var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if(err)
       throw err;
    var myQuery = { name: 'Sashank' };
    var managerQuery = { name: 'Ludo' };
    db.collection("customers").deleteOne(myQuery, function(err, result) {
            if(err)
               throw err;
            console.log("Record deleted from collection");
            db.close();
    });
    db.collection("managers").deleteOne(managerQuery, function(err, result) {
        if(err)
           throw err;
        console.log("Record deleted from collection");
        db.close();
});
});