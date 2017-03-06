
app.controller('userInOrgCtrl', function (org,refresh,getUnregisterdUsers,getAllDepBasedOrgId, $timeout, $scope, deleteUserInOrg, editUserInOrg, addUserInOrg, getUIOBasedOrg, getUserBasedAuthOrgId, getBasedAuth) {

    //Load All UserInOrg for one Org
    $scope.userInOrgList;
    $scope.ListOfuser = [];
    

    //Show All UserInOrg
    getUIOBasedOrg.get(1)
    .then(function (m) {
        $scope.userInOrgList = m;
    }, function (response)
    { return response }
        )

    // Show Add UserInOrg
    $scope.showAddUiO = false;
    $scope.ShowAddUserInOrg = function () {
        $scope.showAddUiO = !$scope.showAddUiO;
    }

    //Show All Department Based Org => orgid  
     getAllDepBasedOrgId.get(org.get()).then(function (d) { $scope.ListOfDepartment = d; }, function () { }) 
      
    //Show All the users who do not register in UserInOrg        
     getUnregisterdUsers.get().then(function (u) { $scope.ListOfuser = u; });



    //Parameter for Add UserInOrg
    $scope.AddUserInOrg = {
        UserId: 0,
        OrgId: 0,
        departmentId: 0,
        Auth: []
    }
    $scope.checkBoxread = false; //checkbox false
    $scope.checkBoxwrite = false;
    $scope.checkBoxdelete = false;
    $scope.checkBoxedite = false;

    $scope.add = function (AddUserInOrg) {
        //CheckBox
        $('input[type="checkbox"]').each(function () {
            if ($(this).prop("checked")) {
                AddUserInOrg.Auth.push($(this).attr('t'));
            };
        });
        var user = AddUserInOrg.UserId;
        var nameString = user.split(" ");
        AddUserInOrg.UserId = nameString[2];
        $.each($scope.ListOfuser, function (i, v) {
            if (v.Email == AddUserInOrg.UserId) {
                AddUserInOrg.UserId = v.Id;
                //alert(JSON.stringify(AddUserInOrg.UserId));
            }

        })
        $.each($scope.ListOfDepartment, function (i, v) {
            if (v.Dep.Name == AddUserInOrg.departmentId) {
                AddUserInOrg.departmentId = v.Dep.Id;
                AddUserInOrg.OrgId = v.Dep.OrgId;
            }
        });
        addUserInOrg.post(AddUserInOrg).then(function (user) {
            $scope.OpenCollapse = false;
            getUIOBasedOrg.get(1)
              .then(function (m) {
                  $scope.userInOrgList = m;
                  $scope.showAddUiO = false; //close collapse
                  //checkBox false
                  $scope.checkBoxread = false;
                  $scope.checkBoxwrite = false;
                  $scope.checkBoxdelete = false;
                  $scope.checkBoxedite = false;
                  $scope.ListOfDepartment = [];
                  $scope.ListOfuser = "";
                  //Load All user
                  refresh.send('/userinorg');
                  //Load All Department in one Org
                  

              }, function (response)
              { return response }
                        )
        }, function (response) { return response })
    }



    $scope.delete = function (useriorg) {
        deleteUserInOrg.put(useriorg)
            .then(function (u) {
                $scope.userInOrgList = "";
                $scope.userInOrgList = getUIOBasedOrg.get(1)
        .then(function (m) {
            $scope.userInOrgList = m;
        }, function (response)
        { return response }
                )
                refresh.send('/userinorg');
                          
            })
            , function (response) { return response }
    }




    //Collapse
    $scope.AddAuth = function (auth, i) {
        //test
        var index = i;
        $.each($scope.userInOrgList, function (i, v) {
        });
        var b = false;
        $.each($scope.userInOrgList[index].Auth, function (i, v) {

            if (auth == v.Type) {
                alert(v.Type);
                b = true;
            }
            if (!b) {

                $scope.userInOrg.UserInOrgId = $scope.userInOrgList[index].UserInOrgId;
                $scope.userInOrg.Auth = [];
                $.each($scope.userInOrgList[index].Auth, function (io, v)
                { $scope.userInOrg.Auth.push(v.Type) })
                $scope.userInOrg.Auth.push(auth);
                alert(JSON.stringify($scope.userInOrg));
                b = false;
            }
        });
    }


    $scope.edite = function (userinorgid,index) {
        var m = { UserInOrgId: userinorgid, Auth: getuserAuth(index) }
        
        editUserInOrg.put(m).then(function (m) { refresh.send('/userinorg') }, function (response) { return response })
    }

    $scope.checkType = function (index) {

            
            $.each($scope.userInOrgList[index].Auth, function (i, v) {                                                
                    $('div[l] input[ind=' + index + ']').each(function () {
                        if ($(this).attr('t') == v.Type) {
                            $(this).prop('checked', true);
                        }

                    });

               



            });

        return;
    }
    var getuserAuth = function (i) {
        var m = [];
        $('input[ind=' + i + ']').each(function () {
            if ($(this).prop('checked')) {
                m.push($(this).attr('t'));
            }
        });
        return m;
    };


});