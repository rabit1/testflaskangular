// AngularJS scripts. Called from /b

      var demoApp = angular.module('demoApp', ['ngRoute', 'chart.js']);

        demoApp.config(function ($routeProvider) {
            $routeProvider
            .when('/view1',
                {
                    controller: 'SimpleController',
                    templateUrl: '/static/Views/View1.html'
                })
            .when('/view2',
            {
                controller: 'SimpleController',
                templateUrl: '/static/Views/View2.html'
            })
	    .when('/view3',
	    {
		controller: 'MyCtrl',
	        templateUrl: '/static/Views/View3.html'
	    })
	    .when('/view4',
	    {
		controller: 'MyCtrl',
	        templateUrl: '/static/Views/View4.html'
	    })
            .otherwise({ redirectTo: '/view1' });
        });


      demoApp.controller("SimpleController", function($scope) {
         $scope.customers = [{
            name: 'John Smith',
            city: 'Phoenix'
         }, {
            name: 'John Doe',
            city: 'New York'
         }, {
            name: 'Jane Doe',
            city: 'San Francisco'
         }];

         $scope.addCustomer = function() {
                $scope.customers.push(
                    {
                    name: $scope.newCustomer.name,
                    city: $scope.newCustomer.city
                });
            };

      });

	demoApp.controller("MyCtrl", function($scope, $http, $location) {
		$scope.master = {};
		$scope.user = {};
		$scope.testclick = function(user) {
		   alert("test");
		}
		$scope.send = function(user) {
		   $scope.master=angular.copy($scope.master);
		   $http.post('/temp/', user)
		   	.success(function(){
				alert(user.password);
				$location.path('view1');
			})
			.error(function(){alert('fail')});
		}	


		$scope.customers1 = datas1;
		console.log(datas1);
console.log(datas1[1].id);
console.log(datas1[1].Title);

//Line1
		$scope.labels1 = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  		$scope.series1 = ['Series A', 'Series B'];

  		$scope.data1 = [
    			[65, 59, 80, 81, 56, 55, 40],
    			[28, 48, 40, 19, 86, 27, 90]
  		];

//Line2
		datas_label = [];
		datas_id = [];
		for (i=0; i<datas1.length; i++) {
			datas_label.push(datas1[i].Title);
			datas_id.push(datas1[i].id);
		}
		$scope.labels2 = datas_label;
  		$scope.series2 = ['Series C'];

		datas_id = [ datas_id ]; // Array of array
		console.log(datas_id);
  		$scope.data2 = datas_id ;


//Line3
		$scope.labels3 = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  		$scope.series3 = ['Series D'];

  		$scope.data3 = [
    			[15, 99, 10, 61, 22, 25, 40]
  		];
	});



