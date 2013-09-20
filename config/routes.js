module.exports = function(app, Instagram, io) {
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
			console.log("------------------------------------------");
			console.log("------------------------------------------");
			console.log("------------------------------------------");
			console.log(req);
			console.log("------------------------------------------");
			console.log("------------------------------------------");
			console.log("------------------------------------------");
			console.log(res);
			console.log("------------------------------------------");
			console.log("------------------------------------------");
			console.log("------------------------------------------");
			console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
			console.log("");
			console.log("");
 			io.sockets.emit('photo', "PHOTO");

			res.writeHead(200);
			res.end();
	});
	
}


