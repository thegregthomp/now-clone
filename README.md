This is Now Clone
=========

DEMO: <a href = "http://whispering-everglades-6369.herokuapp.com/#/">http://whispering-everglades-6369.herokuapp.com/#/</a>

This repo is a clone/proof of concept of the very popular <a href="http://now.jit.su/" target="_blank">This is Now</a> live instagram feed sites. The goal was to create a simple to follow, light-weight version of what the Now project accomplished. This repo is well documented. It is built on my <a href="https://github.com/thegregthomp/lean-mean" target="_blank">MEAN Stack</a> But if you're not familiar with this stack it should be fairly easy to pick up (given node experience).

Setup is fairly simple:
<ul>
	<ol>Clone the Package</ol>
	<ol>Setup your Instagram App/client</ol>
	<ol>Fill in information in server.js</ol>
	<ol>Setup your subscriptions in the /config/routes.js file. You can setup subscriptions for tags, geographies etc</ol>
	<ol>Deploy to server (Heroku, Nodejitsu etc.)</ol>
	<ol>Hit the subscription link, /set_sub, to create subscriptions (ONLY HIT IT ONE TIME, COMMENT OUT AFTER)</ol>
	<ol>App is ready to go. Set your intial pull specs in the server.js file under getInit()</ol>
</ul>

<em><strong>Notes:</strong> for instagram to validate your app you must be on a public facing server. This means you can not develop and test locally unless you build a Instagram simulator. Also, <strong>My demonstration and these files are for a subscripton/setup for Philadelphia geological area. This can be changed to other areas, used to get tags etc.</strong> Lastly, if you want it to really look like This is Now, there's a few things you can do to spruce up the front end, just didn't think it was necessary for this demo.</em>

Some requirements of this package are...

<ul>
	<li>Node Instagram Library (<a href="https://github.com/mckelvey/instagram-node-lib" target="_blank">https://github.com/mckelvey/instagram-node-lib</a></li>
	<li>Socket.IO (<a href="http://socket.io" target="_blank">http://socket.io</a></li>
	<li>Express (<a href="https://github.com/visionmedia/express" target="_blank">https://github.com/visionmedia/express</a></li>
	<li>MomentJS (<a href="http://momentjs.com/" target="_blank">http://momentjs.com/</a></li>
	<li>AngularJS (<a href="http://angularjs.org/" target="_blank">http://angularjs.org/</a></li>
</ul>

And credit too...

<ul>
	<li><a href="https://github.com/linnovate" target="_blank">Linnovate (Awesome MEAN Stack inspiration)</a></li>
</ul>



