'use strict';

var controllers = {};

var MainCtrl = function ($scope, socket) {
  var init = 0;
  var $holder = $('.holder');

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
      init++;
      if(init == 1){
        $holder.packery();
      }
     // $( ".holder" ).prepend( "<img src = '"+data+"'/>" );
     var element = "<img src = '"+data+"'/>";
    $('.holder').prepended(element);
    //$scope.socketnumber = data.hello;
    });
};

leanMeanApp.controller(controllers);