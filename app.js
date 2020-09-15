const http = require('http');
const fs = require('fs');

const server = http.createServer(function(request,response){
    console.log('Client Request URL: ${request.url}');

    if(request.url=="/"){
        fs.readFile("./static/index.html",function (errors,contents){
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(contents);
            response.end();
        })

    }
    else if (request.url === "/dojo") {
        fs.readFile('./static/dojo.html', 'utf8', (errors, contents) =>{
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }

    else if (request.url === "/ninjas") {
        fs.readFile('./static/ninjas.html', 'utf8', (errors, contents) =>{
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }

    else{
        response.writeHead(404);
        response.end("Page Not Found!!!");
    }


});
server.listen(6789, function() {console.log("listening on port 6789")}.js)