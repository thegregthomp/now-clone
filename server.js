var util = require('util'),
	http = require('http'),
	express = require('express'),
	ejs = require('ejs'),
	app = express();

var port = process.env.PORT || 3000;
var server = app.listen(port);
var io = require('socket.io').listen(server);


app.use(express.static(__dirname + '/app'));
app.set('views', __dirname + '/ejs/views/');
app.engine('html', require('ejs').renderFile);

app.use(express.logger());

require('./config/routes')(app);