//OUR requirements for our node server
var util = require('util'),
	http = require('http'),
	express = require('express'),
	ejs = require('ejs'),
	app = express(),
	Instagram = require('instagram-node-lib');

//Listen on port 3000
var port = process.env.PORT || 3000;
var server = app.listen(port);
var io = require('socket.io').listen(server);

//This is required to work on Heroku; it defaults to long polling; actual web-sockets not supported
io.configure(function () { 
  io.set("transports", ["xhr-polling"]); 
  io.set("polling duration", 10); 
});


//Our private instagram data, Create an App with Instagram Developers to get this info....
Instagram.set('client_id', '');
Instagram.set('client_secret', '');
Instagram.set('callback_url', '');

//Express template rendering...
app.use(express.static(__dirname + '/app'));
app.set('views', __dirname + '/ejs/views/');
app.engine('html', require('ejs').renderFile);

app.use(express.logger());

//Our function to handle the photo's from the subscription information 
//we recieve. We only pull the latest [0] photo from the group of data
var getPhoto = function (inf){
	inf = JSON.parse(inf);
	prt = inf[0];	
	Instagram.geographies.recent({
	  geography_id: prt.object_id,
	  complete: function(data){
		  	if(data[0] == null){
		  	}else{
		  		var piece = {};
		  		piece.img = data[0].images.low_resolution.url;
		  		piece.url = data[0].link;
		  		io.sockets.emit('alert', prt.object_id);
		  		io.sockets.emit('photo', piece);
		  	}
		}
	});
}

//Get init sets our first set of images so the page doesn't load blank. it pulls from my specified location.
function getInit(){
	Instagram.geographies.recent({
	  geography_id: 4251649,
	  complete: function(data){
		  	if(data[0] == null){
		  	}else{
		  		data.forEach(function (pic) {
		  			var piece = {};
			  		piece.img = pic.images.low_resolution.url;
			  		piece.url = pic.link;
			  		io.sockets.emit('alert', piece.url);
			  		io.sockets.emit('photo', piece);
		  		});
		  	}
		  	io.sockets.emit('alert', "init Fired");
		}
	});
}

require('./config/routes')(app, Instagram, io, getPhoto, getInit);
//Connection for specific user, functions inside connection relate to individual users...
io.sockets.on('connection', function (socket) {
	io.sockets.emit('alert', "connected");
	//Fire getInit for each new connection
	getInit();
	//Disconnection....
	socket.on('disconnect', function () {
	});

	//Recieving Data...
	socket.on('my other event', function (data) { });


});


