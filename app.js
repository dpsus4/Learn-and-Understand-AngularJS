// MODULE
var myApp = angular.module('myApp', []);

// CONTROLLERS
myApp.controller('mainController', ['$scope', function ($scope) {
    
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

console.log(searchPeople(1, 2, 3, 4, 5));