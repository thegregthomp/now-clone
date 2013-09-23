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

var getPhoto = function (inf){
	inf = JSON.parse(inf);
	prt = inf[0];	
	Instagram.geographies.recent({
	  geography_id: prt.object_id,
	  complete: function(data){
		  	if(data[0] == null){
		  	}else{
		  		io.sockets.emit('alert', "//=====DATA====//");
		  			//io.sockets.emit('alert', "//=====DATA====//");
		  			io.sockets.emit('photo', data[0].images.low_resolution.url);
		  	}
		}
	});
	//io.sockets.emit('photo', inf);
	//var resp = Instagram.tags.recent({ name: data });
	//io.sockets.emit('photo', resp);
}

function getInit(){
	Instagram.geographies.recent({
	  geography_id: 4249092,
	  complete: function(data){
		  	if(data[0] == null){
		  	}else{
		  		data.forEach(function (pic) {
		  			io.sockets.emit('photo', pic.images.low_resolution.url);
		  	}
		}
	});
}


require('./config/routes')(app, Instagram, io, getPhoto, getInit);
//Connection for specific user, functions inside connection relate to individual users...
io.sockets.on('connection', function (socket) {
	var x=0;
	//Disconnection....
	socket.on('disconnect', function () {
	});

	//Recieving Data...
	socket.on('my other event', function (data) { });


});


