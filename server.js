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


io.sockets.on('connection', function (socket) {
  x=0;
  
  socket.emit('news', { hello: 'world' });
  
  socket.on('my other event', function (data) {
    console.log(data);
  });
  var socketSend = setInterval(function(){
  		x = x+1;
		socket.emit('count', { number: x });
	}, 1000);

});

