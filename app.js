// MODULE
var myApp = angular.module('myApp', ["ngMessages", "ngResource", "ngRoute"]);

myApp.config(function ($routeProvider) {
    $routeProvider.when("/", {
            templateUrl: "pages/main.html",
            controller: "mainController"
        })
        .when("/second/:num/something", {
            templateUrl: "pages/second.html",
            controller: "secondController"
        });
});


myApp.service("nameService", function () {
    this.name = "John Doe";

    this.namelength = function () {
        return self.name.length;
    };
});

// CONTROLLERS
myApp.controller('mainController', ["nameService", '$scope', '$log', '$filter', "$timeout", function (nameService, $scope, $log, $filter, $resource, $timeout) {
    $log.log(nameservice.name);

    $scope.name = "John";
    $scope.surname = "Smith";
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

var searchPeople = function (firstName, lastName, height, age, occupation) {
    return "Jane Doe";
}

// console.log(angular.injector().annotate(searchPeople));
// console.log(searchPeople(1, 2, 3, 4, 5));

myApp.controller('secondController', ['$scope', "$location", '$log', '$filter', "$timeout", "$routeParams", function ($scope, $log, $filter, $resource, $timeout) {

    $log.info($location.path());

    $scope.name = "Jude1";
    $scope.surname = "Smith";
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

myApp.directive("searchResult", function () {
    return {
        template: ""
    }
});