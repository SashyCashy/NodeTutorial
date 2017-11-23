var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db){
    if(err)
        throw err;
    else {
        db.collection("managers").aggregate([
            {
                $lookup : {
                    from : 'customers',
                    localField: 'employee',
                    foreignField: 'employeeId',
                    as : 'EmployersUnderManager'
                }
            }
        ], function(err, result) {
            console.log(JSON.stringify(result[1]["EmployersUnderManager"][0]["name"]));
            db.close();
        })
    }
});