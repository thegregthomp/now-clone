var util = require('util'),
	http = require('http'),
	express = require('express'),
	ejs = require('ejs'),
	app = express(),
	Instagram = require('instagram-node-lib');

var port = process.env.PORT || 3000;
var server = app.listen(port);
var io = require('socket.io').listen(server);

io.configure(function () { 
  io.set("transports", ["xhr-polling"]); 
  io.set("polling duration", 10); 
});

Instagram.set('client_id', '9425e6b8836d420091f6d8ae5f121200');
Instagram.set('client_secret', '8f06292e11d742c2b453d1c5661469df');
Instagram.set('callback_url', 'http://whispering-everglades-6369.herokuapp.com/subscribe');

app.use(express.static(__dirname + '/app'));
app.set('views', __dirname + '/ejs/views/');
app.engine('html', require('ejs').renderFile);

app.use(express.logger());

Instagram.subscriptions.subscribe({ object: 'tag', object_id: 'neat' });


var getPhoto = function (data){
	io.sockets.emit('photo', data[0].object_id);
}


require('./config/routes')(app, Instagram, io, getPhoto);

//Connection for specific user, functions inside connection relate to individual users...
io.sockets.on('connection', function (socket) {
	var x=0;
	//Disconnection....
	socket.on('disconnect', function () {
	});

	//Recieving Data...
	socket.on('my other event', function (data) { });


	/*var socketSend = setInterval(function(){
		x = x+1;
		//Emit data to specific, connected user...
		socket.emit('count', { number: x });
	}, 1000);*/

});






/*var sendAll = setInterval(function(){
	//Send message to all users...
	io.sockets.emit('alert', "Some Message");
}, 10000)*/

