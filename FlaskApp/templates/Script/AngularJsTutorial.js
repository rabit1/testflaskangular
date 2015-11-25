var demoApp = angular.module('demoApp', ['ngRoute']);

demoApp.config(function ($routeProvider) {
    $routeProvider
    .when('/',
        {
            controller: 'SimpleController',
            templateUrl: 'Views/View1.html'
        })
    .when('/view2',
    {
        controller: 'SimpleController',
        templateUrl: 'Views/View2.html'
    })
    .otherwise({ redirectTo: '/' });
})

//Creating a customer factory
.factory("Customer", function () 

    return [
        { name: 'John Doe', city: 'New York' },
        { name: 'John Smith', city: 'Phoenix' },
       { name: 'Jane Doe', city: 'San Francisco' }
    ];
})

.controller("SimpleController",['$scope', 'Customer', function ($scope, Customer) {
    $scope.customers = Customer;
    $scope.addCustomers = function () {
        $scope.addCustomers.push(
            {
                name: $scope.newCustomer.name,
                city: $scope.newCustomer.city
            })
    }
}
]);
