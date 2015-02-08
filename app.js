var express = require('express'),
    app = express(),
    pages = require (__dirname + '/app/controllers/pages');


app.set('views', __dirname + '/app/views');
app.set('view engine', 'ejs');


// mount routes
app.get('/', function (req, res) { res.redirect('home'); });
app.get('/home', pages.home);

app.use(express.static(__dirname + '/public'));

module.exports = app;