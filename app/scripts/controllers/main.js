'use strict';

var controllers = {};

var MainCtrl = function ($scope, socket) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    socket.on('count', function(data) {
		//$scope.socketnumber = data.hello;
		$scope.socketnumber = data.number;

	});
  };

leanMeanApp.controller(controllers);