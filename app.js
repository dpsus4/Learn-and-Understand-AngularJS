// MODULE
var myApp = angular.module('myApp', ["ngMessages", "ngResource"]);

// CONTROLLERS
myApp.controller('mainController', ['$scope', '$log', '$filter', function ($scope, $log, $filter, $resource) {
    $scope.name = "John";
    $scope.formattedname = $filter("uppercase")($scope.name);
    
    $log.info($scope.name);
    $log.info($scope.formattedname);
    // $log.log("Hello");
    // $log.info("This is some information");
    // $log.warn("Warning!");
    // $log.debug("Debug");
    // $log.error("Error!");

    // console.log($log);
    // $scope.name = "Tony";
    // $scope.occupation = "Coder";
    
    // $scope.getname = function() {
    //     return "John Doe";
    // }

    // // $scope.getname();

    // console.log($scope.getname());
    // test
}]);

var searchPeople = function(firstName, lastName, height, age, occupation) {
    return "Jane Doe";
}

// console.log(angular.injector().annotate(searchPeople));
// console.log(searchPeople(1, 2, 3, 4, 5));