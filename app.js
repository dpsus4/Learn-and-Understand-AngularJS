// MODULE
var myApp = angular.module('myApp', []);

// CONTROLLERS
myApp.controller('mainController', ['$scope', function ($scope) {
    
    $scope.name = "Tony";
    $scope.occupation = "Coder";
    
    $scope.getname = function() {
        return "John Doe";
    }

    // $scope.getname();

    console.log($scope.getname());
}]);



