var shelljs = require('shelljs');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/circle-rect.html');
});

app.get('/api', function (req, res) {


    var posx = req.query.posx
    var posy = req.query.posy
    var r = req.query.r;
    var minx = req.query.minx
    var miny = req.query.miny
    var maxx = req.query.maxx
    var maxy = req.query.maxy

    shelljs.exec('circle-rect.exe ' + posx + ' ' + posy + ' ' + r + ' ' + minx + ' ' + miny + ' ' + maxx + ' ' + maxy, function (status, output) {
        console.log('Exit status:', status);
        console.log('Program output:', output);

        var output = {
            status: status,
            output: output
        };


        /*
          The response header for supporting CORS:
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type"
        */

        res.writeHead(200, {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type"
        });

        res.write(JSON.stringify(output));
        res.end();

    });

});


// or simply
// app.listen (1337); 
// will do

var server = app.listen(1387, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('server started on http://' + host + ':' + port);
});