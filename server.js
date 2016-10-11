var express = require('express');
var http = require("https");
var app = express();

app.use(express.static(__dirname));

var pages = {
    login: __dirname + '/security/html/login.html',
    app: __dirname + '/app/base/html/main.html'
}

function getOptions(url, path)
{
    return {
        "method": "GET",
        "hostname": "api.cartolafc.globo.com",
        "port": null,
        "path": path,
        "headers": {
            "cache-control": "no-cache"
        }
    };
}

app.all("/cartola/mercado/status", function(req, res, next){
    var options = getOptions("/mercado/status");
    var rq = http.request(options, function (r) {
        var chunks = [];
        r.on("data", function (chunk) {
            chunks.push(chunk);
        });
        r.on("end", function () {
            var body = Buffer.concat(chunks);
            //console.log(body.toString());
            res.send(body.toString());
        });
    });
    rq.end();
});

app.all("/cartola/pos-rodada/destaques", function(req, res, next){
    var options = getOptions("/pos-rodada/destaques");
    var rq = http.request(options, function (r) {
        var chunks = [];
        r.on("data", function (chunk) {
            chunks.push(chunk);
        });
        r.on("end", function () {
            var body = Buffer.concat(chunks);
            //console.log(body.toString());
            res.send(body.toString());
        });
    });
    rq.end();
});

var port = 3002;

app.listen(port);

console.log('Server running on ' + port + '...');