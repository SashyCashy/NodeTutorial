function route(pathname,handle,response,postData) {
  console.log("About to route the request to path: "+pathname);
  if(typeof handle[pathname] == 'function')
    handle[pathname](response,postData);
    else {
      console.log("The route for the requested " +pathname+ " was not found");
      response.writeHead(404,{"Content-Type":"text/html"});
      response.write("404 Not Found");
      response.end();
    }
}

exports.route = route;
