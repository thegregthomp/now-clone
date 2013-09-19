'use strict';

var controllers = {};

var MainCtrl = function ($scope, SimpleFactory) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.hello = SimpleFactory.people();
  };

leanMeanApp.controller(controllers);