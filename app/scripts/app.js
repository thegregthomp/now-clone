//Our Angular.js routes. This is only a one page app, no need to touch
'use strict';

var leanMeanApp = angular.module('leanMeanApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
  });
