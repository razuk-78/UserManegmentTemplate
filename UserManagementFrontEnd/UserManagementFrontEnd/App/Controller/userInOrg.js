app.controller('userInOrgCtrl', function ($timeout, $scope, deleteUserInOrg, editUserInOrg, addUserInOrg,org, getUIOBasedOrg, getUserBasedAuthOrgId, getBasedAuth) {
    //Load All UserInOrg for one Org
    $scope.userInOrgList;
    $scope.userInOrg = {
        UserInOrgId: 0,
        Auth: []
    };
   
    $scope.authType = ['read', 'write', 'delete', 'edite'];
     
    var getallusers = function () {
        getUIOBasedOrg.get(org.get())
                 .then(function (m) {
                     $scope.userInOrgList = m;
                 }, function (response)
                 { return response }
                         )
    }
    getallusers();
    $scope.delete = function (useriorg) {
        deleteUserInOrg.put(useriorg)
            .then(function (u) {
                $scope.userInOrgList = "";
                $scope.userInOrgList = getUIOBasedOrg.get(org.get())
        .then(function (m) {
            $scope.userInOrgList = m;
        }, function (response)
        { return response }
                )
                //$timeout(function () {
                //    $scope.userInOrgList = u;
                //}, 100);                  
            })
            , function (response) { return response }
    }

    //Collapse
    $scope.AddAuth = function (auth, i) {
        //test
        
        var index = i;
      
        if ($scope.userInOrgList[index].Auth.length == 0) {
            $scope.userInOrg.UserInOrgId = $scope.userInOrgList[index].UserInOrgId;
            $scope.userInOrg.Auth.push(auth);
            editUserInOrg.put($scope.userInOrg).then(function (m) {
                getallusers();
            }, function (response) { return response })
        }
        
        var b = false;
        $.each($scope.userInOrgList[index].Auth, function (i, v) {
            
            if (auth == v.Type) {
               
                b = true;
            } 

           
            if (b == false && i == $scope.userInOrgList[index].Auth.length - 1) {
               
                $scope.userInOrg.UserInOrgId = $scope.userInOrgList[index].UserInOrgId;
                $scope.userInOrg.Auth = [];
                $.each($scope.userInOrgList[index].Auth, function (io, v) {
                    $scope.userInOrg.Auth.push(v.Type)
                });
                $scope.userInOrg.Auth.push(auth);
                editUserInOrg.put($scope.userInOrg).then(function (m) {
                    getallusers();
                }, function (response) { return response })
                b = false;
            }
        });
    }
    $scope.delteAuth = function (auth, useriorg) {
        var t = auth;
      
        $scope.userInOrg.Auth=[];
        $scope.userInOrg.UserInOrgId = useriorg.UserInOrgId;
        $.each(useriorg.Auth, function (i, v) {
            if (v.Type != t) {
                $scope.userInOrg.Auth.push(v.Type);
            }
          
            
        });
           editUserInOrg.put($scope.userInOrg).then(function (m) {
               getallusers();
            }, function (response) { return response })
    }

    $scope.edite = function () {
        var m = $scope.userInOrg;
      
        editUserInOrg.put(m).then(function (m) { }, function (response) { return response })
    }
    //$scope.edite = function (useriorg) {
    //    editUserInOrg.put(useriorg).then(function (useriorg) { }, function (response) { return response })
    //}
    //$scope.getOrg = function (OrgId) { getUIOBasedOrg.get(OrgId).then(function (user) { }, function (response) { return response }) }
    //$scope.delete= function (user) { deleteUserInOrg.put(user).then(function (user) { }, function (response) { return response });}
    //$scope.edite = function (user) { editUserInOrg.put(user).then(function (user) { }, function (response) { return response }) }   
    //$scope.add=function (user) { addUserInOrg.post(user).then(function(user){},function(response){return response})}
    //$scope.getAuthOrg=function (OrgId, auth) {  getUserBasedAuthOrgId.get(OrgId, auth).then(function (user) { }, function (response) { return response })}
    //$scope.getAuth = function (OrgId, auth, Dep) { getBasedAuth.get(OrgId, auth, Dep).then(function (user) { }, function (response) { return response }) }
});