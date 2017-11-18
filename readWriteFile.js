var fs = require("fs");
var readStream = fs.createReadStream("input.txt");
var data = "Simple Easy Learning";
var writeStream = fs.createWriteStream("output.txt");


readStream.setEncoding("UTF8");

readStream.on("data", function(chunk){
  data +=chunk;
});

readStream.on("end", function(error,chunk) {
  console.log(data);
});

readStream.pipe(writeStream);

writeStream.on("finish", function(){
  console.log("Write completed");
});

writeStream.on("error", function(){
    console.log(err.stack);
});

console.log("The program ended");
