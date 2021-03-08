var weatherApp = angular.module("weatherApp", ['ngRoute', 'ngResource']);

weatherApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "pages/home.htm",
            controller: "homeController"
        })
        .when('/forecast', {
            templateUrl: "pages/forecast.htm",
            controller: "forecastController"
        })
        .when('/forecast/:days', {
            templateUrl: "pages/forecast.htm",
            controller: "forecastController"
        })
})

weatherApp.service('cityService', function () {
    this.city = "New York, NY";
});

weatherApp.controller('homeController', ['$scope', 'cityService', function ($scope, cityService) {
    $scope.city = cityService.city;

    $scope.$watch("city", function () {
        cityService.city = $scope.city;
    });
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', function ($scope, $resource, $routeParams, cityService) {
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || 2;
    $scope.weatherAPI = $resource("", {
        callback: "JSON_CALLBACK"
    }, {
        get: {
            method: "JSONP"
        }
    });

    $scope.weatherResult = $scope.weatherAPI.get({
        q: $scope.city,
        cnt: $scope.days
    });

    $scope.convertToFahrenheit = function (degK) {
        return Math.round((1.8 * (degK - 273)) + 32);
    }

    $scope.convertToDate = function (dt) {
        return new Date(dt);
    }

    console.log($scope.weatherResult);
}]);

weatherApp.directive("weatherReport", function () {
    return {
        restrict: 'E',
        templateUrl: '',
        replace: true,
        scope: {
            weatherDay: "=",
            convertToStandard: "&",
            convertToDate: "&",
            dateFormat: "@"
        }
    }
})