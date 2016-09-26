var contact = angular.module('contact',[]);

contact.controller('contactCtrl', ['$scope','$http', function($scope,$http){

    var getcontactList = function(){
        $http.get('/contactList').success(function(response){
          console.log("log from cotact js",response);
          $scope.contactList = response;  
      });
    }
    getcontactList();
    $scope.addContact = function(){
        $http.post('/contactList',$scope.contact).success(function(response){
            console.log("post request");
            console.log(response);
            getcontactList();  
        });
    };
    $scope.remove = function(id){
        $http.delete('/contactList/' + id).success(function(response){
          getcontactList();  
        })
    };
    $scope.edit = function(id){
      console.log(id);
      $http.get('/contactList/' + id).success(function(response){
        $scope.contact = response;
      })
    };
    $scope.update = function(){
      console.log($scope.contact._id);
      $http.put('/contactList/' + $scope.contact._id,$scope.contact).success(function(response){
          getcontactList();  
      })
    }
}])