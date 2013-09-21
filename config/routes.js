module.exports = function(app, Instagram, io, getPhoto) {
	app.get('/', function(req, res){
			res.render('index.ejs', {
			layout:false,
			locals: { 
				errorMessage: "Poop",
				ngController: "leanMeanApp"
				 }
			});
	});
	app.get('/subscribe', function(req, res){
			Instagram.subscriptions.handshake(req, res); 
	});
	app.post('/subscribe', function(req, res){		
			  var body = "";
			  req.on('data', function (chunk) {
			    body += chunk;
			  });
			  req.on('end', function () {
			    getPhoto(body);
			    res.writeHead(200);
			    res.end();
			  });
	});
	app.get('/set_sub', function(req, res){
			//Instagram.subscriptions.subscribe({ object: 'tag', object_id: 'fun' });
			Instagram.media.subscribe({ lat: 39.952565, lng: -75.165428, radius: 5000 });
			res.writeHead(200);
			res.end();
	});
	app.get('/cancel_sub', function(req, res){
			//curl -X DELETE https://api.instagram.com/v1/subscriptions\?client_secret\=8f06292e11d742c2b453d1c5661469df\&object\=tag\&client_id\=9425e6b8836d420091f6d8ae5f121200
			//Instagram.subscriptions.unsubscribe_all();
			res.writeHead(200);
			res.end();
	});

	
	
}




