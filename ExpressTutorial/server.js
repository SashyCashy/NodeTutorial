var express = require('express');
var app = express();

app.use(express.static('images'));

app.get('/', function(request, response) {
  console.log("Got a GET request for the homepage");
  response.send('Hello World');
});

app.get('/process_get', function() {

});

app.get('/list_user', function(request, response){
  console.log("Got a POST request for the homepage");
  response.send("Page Listing");
});

app.post('/', function(request,response) {
  console.log("Got a POST request for the homepage");
  response.send('Hello Post');
});

var server = app.listen(8081, function(request,response) {
  var host = server.address().address
  var port = server.address().host

  console.log("Example app listening at http://%s:%s", host, port)
});
