module.exports = function(app, Instagram) {
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
			Instagram.subscriptions.handshake(request, response); 
	});
	app.get('/oauth_callback', function(req, res){
			res.render('index.ejs', {
			layout:false,
			locals: { 
				errorMessage: "Poop",
				ngController: "leanMeanApp"
				 }
			});
	});
}


