var MongoClient = require("mongoDB").MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db){
    if(err)
        console.log("Failed to create the database");
    else {
        var myObject ={name :"Sashank", employeeId: "1000312467"};
        var myLead =  [{name : "Ludo", employeeId :"900001",employee : "1000312467"},
        {name : "Alaleh", employeeId :"900002",employee : "1000312467"} ];
        db.collection("customers").insertOne(myObject, function(err, result){
            if (err) throw err;
            console.log("1 document inserted");
            console.log(result);
            db.close();
        });
        db.collection("managers").insertMany(myLead, function(err, result){
            if (err) throw err;
            console.log("1 document inserted");
            console.log(result);
            db.close();
        });
    }
});
