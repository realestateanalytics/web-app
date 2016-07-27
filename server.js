/**
*
* A node js server using express framework.
*/
var express = require("express");
var app = express();
var argv = require('yargs').argv;
var port = argv.port || 3000;
var dist = '/app';
var compression = require('compression');

app.use(compression());

var oneDay = 86400000;
app.use('/js', express.static(__dirname +dist+'/js', { maxAge : oneDay*30 }));//30 days
app.use('/css', express.static(__dirname + dist+'/css', { maxAge : oneDay*30 }));//30 days
app.use('/img', express.static(__dirname + dist+'/img', { maxAge : oneDay*30 }));//30 days
app.use(express.static(__dirname+dist));

app.listen(process.env.PORT || port, function () {
  console.log('Express server listening');
});
