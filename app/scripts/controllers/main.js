'use strict';

var controllers = {};

var MainCtrl = function ($scope, socket) {
  var init = 0;
  var $container = $('#holder');
  $scope.$on('$viewContentLoaded', function() {
    $( function() {
      $container.packery();
    });
     setTimeZone();
    $scope.now = moment().tz("America/New_York").format('h:mm:ss a');
    $scope.date = moment().tz("America/New_York").format('MMMM Do YYYY');
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
   
    var items = "<a href = '"+data.link+"'target = '_blank'><img src = '"+data.img+"' class = 'item'/></a>";
    var $items = $( items );
    $container.prepend( $items ).packery( 'prepended', $items );
    //$container.packery( 'appended', img );

    //$('.holder').prepended(element);
    //$scope.socketnumber = data.hello;
    });
     setInterval(function(){
      $scope.$apply(function() {
         $scope.now = moment().tz("America/New_York").format('h:mm:ss a');
        $scope.date = moment().tz("America/New_York").format('MMMM Do YYYY');
      });
  }, 1000);
};

leanMeanApp.controller(controllers);

function setTimeZone(){
  moment.tz.add({
    "zones": {
        "America/New_York": [
            "-4:56:2 - LMT 1883_10_18_12_3_58 -4:56:2",
            "-5 US E%sT 1920 -5",
            "-5 NYC E%sT 1942 -5",
            "-5 US E%sT 1946 -5",
            "-5 NYC E%sT 1967 -5",
            "-5 US E%sT"
        ]
    },
    "rules": {
        "US": [
            "1918 1919 2 0 8 2 0 1 D",
            "1918 1919 9 0 8 2 0 0 S",
            "1942 1942 1 9 7 2 0 1 W",
            "1945 1945 7 14 7 23 1 1 P",
            "1945 1945 8 30 7 2 0 0 S",
            "1967 2006 9 0 8 2 0 0 S",
            "1967 1973 3 0 8 2 0 1 D",
            "1974 1974 0 6 7 2 0 1 D",
            "1975 1975 1 23 7 2 0 1 D",
            "1976 1986 3 0 8 2 0 1 D",
            "1987 2006 3 1 0 2 0 1 D",
            "2007 9999 2 8 0 2 0 1 D",
            "2007 9999 10 1 0 2 0 0 S"
        ],
        "NYC": [
            "1920 1920 2 0 8 2 0 1 D",
            "1920 1920 9 0 8 2 0 0 S",
            "1921 1966 3 0 8 2 0 1 D",
            "1921 1954 8 0 8 2 0 0 S",
            "1955 1966 9 0 8 2 0 0 S"
        ]
    },
    "links": {}
});
}