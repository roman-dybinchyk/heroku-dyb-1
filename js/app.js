var http = require('http'),
    fs = require('fs'),
    express = require('express');

var app = express();

app.get('/doc', function (req, res) {
    res.render('Hello World!')
});

app.use(express.static(__dirname + '/'));

var server = app.listen(8080, function () {

    var host = server.address().address;
    var port = server.address().port;
    console.log(server.address());

    console.log('Example app listening at http://%s:%s', host, port)

})
