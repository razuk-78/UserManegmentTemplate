/// <reference path="C:\Users\razuk\Desktop\github\UserManegmentTemplate2\UserManagementFrontEnd\UserManagementFrontEnd\Script/angular.js" />
/// <reference path="C:\Users\razuk\Desktop\github\UserManegmentTemplate2\UserManagementFrontEnd\UserManagementFrontEnd\Script/jquery-3.1.1.js" />
/// <reference path="../mainApp/App.js" />
/// <reference path="../Services/Objects.js" />


app.controller('orgCtrl', function ($scope, userAuth, authCheck, getAllOrg, addOrg, editOrg, deleteOrg,$location) {
    $scope.active = [];
    $scope.chk = true;
    var index;
    //authCheck.check('read', userAuth.get(), function () { console.log('trueeeeeeeeeeeee'); return; }, function () { console.log('falseeeeeeeeeeeeee'); $location.path("/login"); return; });
    $scope.orgList = "";
    
   
    getAllOrg.get().then(function (orgs) { $scope.orgs = ""; $scope.orgs = orgs }, function (response) { return response });
    $scope.addOrg = function (name) { var org = { Name: name }; addOrg.post(org).then(function (orgs) { $scope.orgs = []; $scope.orgs = orgs }, function (response) { return response }) };
    //$scope.editee = function (org) { editeOrg.put(org).then(function (orgs) {$scope.orgs=""; $scope.orgs=orgs }, function (response) { return response });}
    $scope.delete = function (org) { deleteOrg.put(org).then(function (orgs) { $scope.orgs = ""; $scope.orgs = orgs }, function (response) { return response }); }
   

    $scope.editee = function (c, i) {
        index = i; authCheck.check('read', ['read', 'write'], function () {
            if ($scope.chk)
            { $.each($scope.active, function (i, v) { $scope.active[i] = false; }); $scope.active[index] = true; $scope.chk = false; }
            else {
                $scope.active[index] = false; $scope.chk = true;
            }
        }, function () { alert('access deny'); $.each($scope.active, function (i, v) { $scope.active[i] = false; }); });
    }
    $scope.saveeditee = function (org) {
        editOrg.put(org).then(function (orgs) {
            $scope.orgList = ""; $scope.orgList = orgs; alert('success');
                $.each($scope.active, function (i, v) { $scope.active[i] = false; })
            }, function () { alert('Error'); });
    }
    
   

});