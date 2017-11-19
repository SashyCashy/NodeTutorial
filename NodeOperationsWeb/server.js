var http = require("http");
var url = require("url");
var postData = '';
function start(route,handle) {
  http.createServer(function(request,response) {
    var pathname = url.parse(request.url).pathname.substring(1);

    request.setEncoding("utf8");

    request.on("data",function(data){
      postData += data;
    });

    request.on("end", function(){
      route(pathname, handle, response,postData);
    });

  }).listen(9090);
}

exports.start = start;
