var App = angular.module("demoApp", ['ngRoute','ui.bootstrap']);

App.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'main.html',
        controller: 'MainCtrl'
      }).
    when('/hotel/:id',{
        templateUrl: 'single.html',
        controller: 'ChildCtrl'
    }).
      when('/AboutUs', {
        templateUrl: 'AboutUs.html',
        controller: 'AboutCtrl'
      }).
    when('/contactUs', {
        templateUrl: 'contactUs.html',
        controller: 'contactCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);



App.controller("MainCtrl",["$rootScope","$scope","$http",function MainCtrl($rootScope,$scope,$http){
    
    $scope.searchItem ={ name: $scope.searchVal};
    
    $scope.onClickSearch = function(searchVal){
        
    };
   
   $http.get('json/demo-json.json').
      success(function(data, status, headers, config) {
        $rootScope.restarents = data.restaurants;
        $rootScope.location = data.localities;
      }).
      error(function(data, status, headers, config) {
       console.log("some error occured");
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
    
    $scope.onClickHotel = function(hotel){
        
    }
    
    

}]);
App.controller("ChildCtrl",["$rootScope","$routeParams","$scope",function ChildCtrl($rootScope,$routeParams,$scope){
    var hotelId = $routeParams.id;
     var init = function(){
         angular.forEach($rootScope.restarents,function(v,i){
             if(v.id == hotelId){
                 $scope.item = v;
             }
         })
     };
    
    
    $scope.$on('$viewContentLoaded', function(){
        init();
    });

}]);
App.controller("AboutCtrl",["$rootScope","$http",function AboutCtrl($rootScope,$http){
    


}]);
App.controller("contactCtrl",["$rootScope","$http",function contactCtrl($rootScope,$http){
    


}]);