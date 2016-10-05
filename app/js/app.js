'use strict';

// Declare app level module which depends on views, and components
var timeTrackerApp = angular.module('timeTrackerApp', ['ngRoute'])
    .config(function($routeProvider, $locationProvider) {

        $routeProvider.when('/report', {
            templateUrl: 'app/templates/report.html',
            controller: 'TimeTrackerController'
        });

        $locationProvider.html5Mode(true);
    });
