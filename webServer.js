var http = require('http'); 
var server = http.createServer(function(request,response){ 

    response.writeHead(200,{'Content-Type':'text/html'});
    response.write('<br/><br/>');
    response.write('<strong>FW web server</strong>');
    response.write('<br/><strong>FW web server</strong>');
    response.end('<br/><strong>FW web server</strong>');

});
server.listen(8080, function(){ 
    console.log('Server is running...');
});