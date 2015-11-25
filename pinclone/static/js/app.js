var app = angular.module("app", []);

app.controller("AppCtrl", function ($http) {
   var app = this;

   app.message = "Am I working?";

   $http.get("/api/pin").success(function (data) {
      app.pins = data.objects;
   })

   app.addPin = function () {
      $http.post("/api/pin", {
            "title": "new"+ app.pins.length ,
            "image": "http://placekitten.com/200/200/?image=" + app.pins.length
         })
         .success(function (data) {
            app.pins.push(data);
         })

   }
})
