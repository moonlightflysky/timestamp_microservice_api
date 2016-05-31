/*var express = require('express');

var app = express();

var bodyParser = require('body-parser');
var routes = require('./routes/index.js');
var api = require('./api/timestamp.js');

var hostname = 'localhost';
var port = process.env.PORT || 3000;




app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/public', express.static(process.cwd() + '/public'));

routes(app);
api(app);


app.listen(port, hostname, function() {
    console.log('Node.js listening on port ' + port);
});*/

'use strict';

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
//var routes = require('./routes/index.js');
var api = require('./api/timestamp.js');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/public', express.static(process.cwd() + '/public'));
    
var port = process.env.PORT || 8080;        // set our port
var hostname = 'localhost';
    
// The format follows as, alias to use for real path, also allows permission to such path.
//app.use('/api', express.static(process.cwd() + '/app/api'));
api(app);

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + '/public/index.html');
});


app.listen(port,function() {
    console.log('Node.js listening on port ' + port);
});