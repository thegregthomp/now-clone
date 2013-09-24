'use strict';

var controllers = {};

var MainCtrl = function ($scope, socket) {
  //Define our container for new images
  var $container = $('#holder');
  
  //Similar to a jquery ready function, when the view is loaded we set the timezone for moment.js plugin and set both the date and time
  $scope.$on('$viewContentLoaded', function() {
    setTimeZone();
    $scope.now = moment().tz("America/New_York").format('h:mm:ss a');
    $scope.date = moment().tz("America/New_York").format('MMMM Do YYYY');
  });

  //userful function for Socket.IO to log alerts in the browser console.
  socket.on('alert', function(data) {
    console.log(data);
  });
  
  //recieving and handling photo data from node.js backend.
  socket.on('photo', function(data) {
    var items = "<a href = '"+data.url+"'target = '_blank'><img src = '"+data.img+"' class = 'item'/></a>";
    var $items = $( items );
    //prepending items to the container. 
    $container.prepend( $items );
  });
  
  //Set interval used to update time.
  setInterval(function(){
    $scope.$apply(function() {
       $scope.now = moment().tz("America/New_York").format('h:mm:ss a');
      $scope.date = moment().tz("America/New_York").format('MMMM Do YYYY');
    });
  }, 1000);
};

//Register our controllers
leanMeanApp.controller(controllers);


//Function to set and register timezone (EST)
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