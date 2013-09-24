//This is our Express routes file. In this file we define two routes for subscribe. 
//Each route has a GET and POST reciever. The get reciever does the handshake with 
//Instagram to verify the app. The post handles new alerts sent from the real time subscription

module.exports = function(app, Instagram, io, getPhoto, getInit) {
	app.get('/', function(req, res){
			res.render('index.ejs', {
			layout:false,
			locals: { 
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

//This route sets our subscriptions. Be careful not to hit the url more than once or you might get duplicate subscriptions.
//My list covers many different areas of philadelphia. Try not to overlap regions
//*****************TO CANCEL SUBSCRIPTION*****************************
//To cancel subscriptions... use 
//curl -X DELETE https://api.instagram.com/v1/subscriptions\?client_secret\={CLIENT_SECRET}\&object\={SUBSCRIPTION_TYPE}\&client_id\={CLIENT_ID}

	app.get('/set_sub', function(req, res){
			//Example of a tag subscription
			//Instagram.subscriptions.subscribe({ object: 'tag', object_id: 'fun' });
			
			Instagram.media.subscribe({ lat: 39.95251688800991, lng: -75.1638650894165, radius: 2000 });
			Instagram.media.subscribe({ lat: 39.98198706407352, lng: -75.1374721527099, radius: 2000 });
			Instagram.media.subscribe({ lat: 39.984880771193204, lng: -75.18467903137201, radius: 2000 });
			Instagram.media.subscribe({ lat: 40.01446846627282, lng: -75.15738487243647, radius: 2000 });
			Instagram.media.subscribe({ lat: 39.99605985169435, lng: -75.09369850158686, radius: 2000 });
			Instagram.media.subscribe({ lat: 40.02892889530201, lng: -75.11395454406733, radius: 2000 });
			Instagram.media.subscribe({ lat: 40.02564270327181, lng: -75.06657600402826, radius: 2000 });
			Instagram.media.subscribe({ lat: 40.045094654568324, lng: -75.02657890319819, radius: 2000 });
			Instagram.media.subscribe({ lat: 40.0586288867536, lng: -75.08717536926264, radius: 2000 });
			Instagram.media.subscribe({ lat: 40.0680881132379, lng: -74.99001502990717, radius: 2000 });
			Instagram.media.subscribe({ lat: 40.08109240513831, lng: -75.03378868103022, radius: 2000 });
			Instagram.media.subscribe({ lat: 40.11680858401039, lng: -75.0411701202392, radius: 2000 });
			Instagram.media.subscribe({ lat: 40.09435685094577, lng: -75.07859230041498, radius: 2000 });
			Instagram.media.subscribe({ lat: 40.06165072686215, lng: -75.13524055480951, radius: 2000 });
			Instagram.media.subscribe({ lat: 40.047591462658794, lng: -75.17901420593256, radius: 2000 });
			Instagram.media.subscribe({ lat: 40.017886662441796, lng: -75.20648002624506, radius: 2000 });
			Instagram.media.subscribe({ lat: 39.98777435575288, lng: -75.23274421691889, radius: 2000 });
			Instagram.media.subscribe({ lat: 40.05021958290629, lng: -75.22776603698725, radius: 2000 });
			Instagram.media.subscribe({ lat: 39.95514867023601, lng: -75.21214485168451, radius: 2000 });
			Instagram.media.subscribe({ lat: 39.91658293581713, lng: -75.15892982482904, radius: 2000 });
			Instagram.media.subscribe({ lat: 39.919216100221554, lng: -75.20682334899897, radius: 2000 });
			Instagram.media.subscribe({ lat: 39.931195719854664, lng: -75.27548789978022, radius: 4000 });
			Instagram.media.subscribe({ lat: 39.93290692296974, lng: -75.18176078796381, radius: 646 });
			Instagram.media.subscribe({ lat: 40.03786653670635, lng: -75.14571189880365, radius: 806 });
			Instagram.media.subscribe({ lat: 40.005396269436076, lng: -75.12528419494623, radius: 806 });
			Instagram.media.subscribe({ lat: 39.88708457772929, lng: -75.23180007934565, radius: 2.130});
			res.writeHead(200);
			res.end();
	});

}




