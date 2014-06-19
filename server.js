var static = require('node-static');
var open = require('open');

//
// Create a node-static server instance to serve the './public' folder
//
var file = new(static.Server)('./public/dev', { cache: false });
var port = 8080;

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //

        file.serve(request, response);
    }).resume();

}).listen(port);

console.log('Static Server started at http://127.0.0.1:' + port);

open('http://localhost:' + port);