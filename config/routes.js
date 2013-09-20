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
			 
			    body = JSON.parse(body);
			    getPhoto(body.object_id);
			    res.writeHead(200);
			    res.end();
			  });
	});
	app.get('/set_sub', function(req, res){
			Instagram.subscriptions.subscribe({ object: 'tag', object_id: 'fun' });
	});
	
}




