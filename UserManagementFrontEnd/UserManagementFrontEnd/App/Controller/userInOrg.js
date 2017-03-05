app.controller('UserInOrgToDepartmentCtrl', function ($http, $timeout, $scope, deleteUserInOrg, editeUserInOrg, addUserInOrg, getUIOBasedOrg, getUserBasedAuthOrgId, getBasedAuth) {


    //Load All UserInOrg for one Org
    $scope.userInOrgList;
    $scope.userInOrg = {
        UserInOrgId: 0,
        Auth: []

    };
    //$scope.ind = [];
    //debugger;   

    //Show All UserInOrg Assign OrgId + Department Id  => departmentId?
    $scope.ListOfUserInOrgBasedDepartmentId = $http.get('http://localhost:64492/api/GetBasedDep?departmentId=' + 2)
        .then(function (ui) {
            $scope.ListOfuserInOrg = ui.data;
            $scope.NameDepartment = $scope.ListOfuserInOrg[0].Department.Name;
        })

    //Show All the users who do not register in UserInOrg        
    $scope.AllUser;
    $scope.AllUser = $http.get('http://localhost:64492/api/GetSpecificInformation').then(function (u) {
        $scope.ListOfuser = u.data;
    })
    //Show and Hide User Details
    $scope.show = false;
    $scope.ShowUserDetails = function () {
        $scope.show = !$scope.show;
    }

    // Show Add UserInOrg
    $scope.showAddUiO = false;
    $scope.ShowAddUserInOrg = function () {
        $scope.showAddUiO = !$scope.showAddUiO;
    }


    //Parameter for Add UserInOrg
    $scope.AddUserInOrg = {
        UserId: 0,
        OrgId: 0,
        departmentId: 0,
        Auth: []
    }
    //Add UserInOrg
    $scope.add = function (AddUserInOrg) {
        //CheckBox
        $('input[type="checkbox"]').each(function () {
            if ($(this).prop("checked")) {
                alert($(this).attr('t'));
                AddUserInOrg.Auth.push($(this).attr('t'));
            };
        });

        var userid = AddUserInOrg.UserId
        var nameString = userid.split(" ");
        alert(JSON.stringify(nameString));
        AddUserInOrg.UserId = nameString[2];
        alert(JSON.stringify(AddUserInOrg.UserId));
        $.each($scope.ListOfuser, function (i, v) {
            if (v.Email == AddUserInOrg.UserId) {
                AddUserInOrg.UserId = v.Id;
                alert(JSON.stringify(AddUserInOrg.UserId));
            }
        })
        //OrgId + DepartmentId
        AddUserInOrg.OrgId = $scope.ListOfuserInOrg[0].Department.OrgId;
        AddUserInOrg.departmentId = $scope.ListOfuserInOrg[0].Department.Id;
        addUserInOrg.post(AddUserInOrg).then(function (user) {
            $scope.OpenCollapse = false;
            getUIOBasedOrg.get(1)
              .then(function (m) {
                  $scope.userInOrgList = m;
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

            })
            , function (response) { return response }
    }






    $scope.editee = function () {
        var m = $scope.userInOrg;
        alert(JSON.stringify(m));
        editeUserInOrg.put(m).then(function (m) { }, function (response) { return response })
    }




});