//This factory is strictly for handling SOCKET.IO interfacing, no need to touch it.

'use strict';

 var factories = {};

factories.SimpleFactory = function(){
        var factory = {};
        factory.people = function (){
          return "PEOPLE";
        }
        return factory;
}
factories.socket = function($rootScope){
	var factory = {};
	var socket = io.connect();
	
		factory.on = function(eventName, callback) {
			socket.on(eventName, function() {
				var args = arguments;
				$rootScope.$apply(function() {
					callback.apply(socket, args);
				});
			});
		},
		factory.emit = function(eventName, data, callback) {
			socket.emit(eventName, data, function() {
				var args = arguments;
				$rootScope.$apply(function() {
					if(callback) {
						callback.apply(socket, args);
					}
				});
			});
		}
	return factory;
}

leanMeanApp.factory(factories);