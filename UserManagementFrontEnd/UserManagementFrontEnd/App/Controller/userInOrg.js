app.controller('userInOrgCtrl', function ($scope, deleteUserInOrg, editUserInOrg, addUserInOrg, getUIOBasedOrg, getUserBasedAuthOrgId, getBasedAuth) {
    $scope.edite = function (user) { editUserInOrg.put(user).then(function (user) { }, function (response) { return response }) }
    $scope.delete= function (user) { deleteUserInOrg.put(user).then(function (user) { }, function (response) { return response });}
    $scope.add=function (user) { addUserInOrg.post(user).then(function(user){},function(response){return response})}
    $scope.getOrg = function (OrgId) { getUIOBasedOrg.get(OrgId).then(function (user) { }, function (response) { return response }) }
    $scope.getAuthOrg=function (OrgId, auth) {  getUserBasedAuthOrgId.get(OrgId, auth).then(function (user) { }, function (response) { return response })}
    $scope.getAuth = function (OrgId, auth, Dep) { getBasedAuth.get(OrgId, auth, Dep).then(function (user) { }, function (response) { return response }) }
});