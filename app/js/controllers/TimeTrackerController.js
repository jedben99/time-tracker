'use strict';


timeTrackerApp.controller('TimeTrackerController', ['$scope', '$location',
    function TimeTrackerController($scope, $location) {

        $scope.startTimer = function() {
            var setStartTime = new Date();
            setStartTime = setStartTime.getTime();
            localStorage.setItem('start', setStartTime);
            localStorage.getItem('start');
        };

        $scope.stopTimer = function() {
            var setEndTime = new Date();
            setEndTime = setEndTime.getTime();
            localStorage.setItem('end', setEndTime);
            var startTime = localStorage.getItem('start');
            var endTime = localStorage.getItem('end');
            $scope.elapsedTime = (endTime - startTime) / 3600000;
        };

        $scope.redirectToReport = function(view) {
            $location.path(view);
        }

    }
]);
