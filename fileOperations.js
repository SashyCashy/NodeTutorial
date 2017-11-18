var fs = require('fs');

console.log("We are going to perform operations on files write/read");

fs.writeFile("input.txt","Happy Learning of node", function(error, data){
  console.log("Write operation on the file is successful!");


  fs.readFile("input.txt", function(error, data) {
    console.log("Let's read newly written data");
    console.log(data.toString());

    fs.unlink("input.txt", function(){
      console.log("Delete the file");
    });
  });
});
