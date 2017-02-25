/// <reference path="C:\Users\razuk\Desktop\github\UserManegmentTemplate2\UserManagementFrontEnd\UserManagementFrontEnd\Script/angular.js" />
/// <reference path="C:\Users\razuk\Desktop\github\UserManegmentTemplate2\UserManagementFrontEnd\UserManagementFrontEnd\Script/jquery-3.1.1.js" />
/// <reference path="../mainApp/App.js" />

app.controller('logInCtrl', function ($scope, $location, getAllOrg, authCheck, userAuth) {
    //
    var m = ['write', 'write'];
    userAuth.set(m);
  
 $scope.getLogIn=getAllOrg.get().then(function(orgs){},function(response){return response})

});