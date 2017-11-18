var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz',function(err,data) {
    console.log("File Compressed");
  }))
  .pipe(fs.createReadStream('input.txt.gz'))
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input.txt'));





  ;
