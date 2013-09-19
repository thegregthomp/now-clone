'use strict';

 var factories = {};
var controllers = {};
var directives = {};

factories.SimpleFactory = function(){
        var factory = {};
        factory.people = function (){
          return "PEOPLE";
        }
        return factory;
}

leanMeanApp.factory(factories);