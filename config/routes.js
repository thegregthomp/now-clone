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
			//io.sockets.emit('alert', "PICTURE~");
			req.body.forEach(function(notificationOjb){
			    // Every notification object contains the id of the geography
			    // that has been updated, and the photo can be obtained from
			    // that geography
			    https.get({
			      host: 'api.instagram.com',
			      path: '/v1/geographies/' + notificationOjb.object_id + '/media/recent' +
			      '?' + querystring.stringify({client_id: process.env.instagram_client_id,count: 1}),
			    }, function(res){
			      var raw = "";

			      res.on('data', function(chunk) {
			        raw += chunk;
			      });

			      // When the whole body has arrived, it has to be a valid JSON, with data,
			      // and the first photo of the date must to have a location attribute.
			      // If so, the photo is emitted through the websocket
			      res.on('end', function() {
			        var response = JSON.parse(raw);
			        if(response['data'].length > 0 && response['data'][0]['location'] != null) {
			          io.sockets.emit('photo', raw);
			        } else {
			          console.log("ERROR: %s", util.inspect(response['meta']));
			        }
			      });

			    });
			  });

			  response.writeHead(200);
	});
	
}


