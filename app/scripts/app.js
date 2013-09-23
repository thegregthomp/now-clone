'use strict';

var leanMeanApp = angular.module('leanMeanApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/poop', {
        templateUrl: 'views/poop.html',
        controller: 'PoopCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
