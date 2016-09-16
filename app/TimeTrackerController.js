'use strict';


timeTrackerApp.controller('TimeTrackerController', ['$scope','$window',
    function TimeTrackerController($scope, $window) {

        $scope.startTimer = function() {
            var setStartTime = new Date();
            setStartTime = setStartTime.getTime();
            localStorage.setItem('start', setStartTime);
            localStorage.getItem('start');
        };

        $scope.redirectToReport = function(){
            $window.location.href = 'report.html';
        }

        $scope.stopTimer = function() {
            var setEndTime = new Date();
            setEndTime = setEndTime.getTime();
            localStorage.setItem('end', setEndTime);
            var startTime = localStorage.getItem('start');
            var endTime = localStorage.getItem('end');
            $scope.elapsedTime = (endTime - startTime) / 3600000;            
        };

    }
]);
