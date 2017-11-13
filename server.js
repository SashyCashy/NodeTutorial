var http = require("http");
var url = require("url");
var formidable = require("formidable");

function start(route, handle) {
  http.createServer(function(request,response) {
    console.log("Request recieved");
    var pathname = url.parse(request.url).pathname;
    console.log("The request for"+pathname+"received");
    route(handle,pathname,response,request);

  }).listen(9000);
}

exports.startServer = start;
console.log("Server has started");
