var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var Campground = require('./src/models/campgrounds');
var bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://camper:camper@ds141406.mlab.com:41406/campers_delight');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


var routes = require('./src/routes/campgrounds')
routes(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
