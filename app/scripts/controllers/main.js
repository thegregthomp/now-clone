'use strict';

var controllers = {};

var MainCtrl = function ($scope, socket) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.thing = "Fuck";
    socket.on('count', function(data) {
		//$scope.socketnumber = data.hello;
  		$scope.socketnumber = data.number;
  	});
    socket.on('alert', function(data) {
      console.log(data);
    });
    socket.on('photo', function(data) {
      $( ".hero-unit" ).prepend( "<img src = '"+data+"'/>" );
    //$scope.socketnumber = data.hello;
    });
};

leanMeanApp.controller(controllers);