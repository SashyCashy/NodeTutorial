var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('images'));

app.get('/', function(request, response) {
  console.log("Got a GET request for the homepage");
  response.send('Hello World');
});

app.get('/index.html', function(request, response) {
  response.sendFile(__dirname +'/index.html');
});

app.post('/process_post', urlencodedParser,function(req, res){
  response = {
    first_name : req.body.first_name,
    second_name : req.body.last_name
  }

  res.end(JSON.stringify(response));
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
