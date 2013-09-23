'use strict';

var controllers = {};

var MainCtrl = function ($scope, socket) {
  var init = 0;
  var $container = $('#holder');
  $scope.$on('$viewContentLoaded', function() {
    $( function() {
      $container.packery();
    });
  });

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
   
    var items = "<img src = '"+data+"' class = 'item'/>";
    var $items = $( items );
    $container.prepend( $items ).packery( 'prepended', $items );
    //$container.packery( 'appended', img );

    //$('.holder').prepended(element);
    //$scope.socketnumber = data.hello;
    });
};

leanMeanApp.controller(controllers);