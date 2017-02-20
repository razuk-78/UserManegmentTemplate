    app.controller("UserController", ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
        $scope.ListOfUser;
     
        $scope.Status;
      
        $scope.Close = function () {
            $location.path('/User/UsersList');
        }


    //angularjs controller method
        $scope.loading = true;
        $scope.addMode = false;
        $scope.search = function (m) {
            $http.get('/api/user/GetSearchUsers?searchtext=' + m).success(function (data) {
                $scope.ListOfUser = data;
                $scope.loading = false;
            })
      .error(function () {
          $scope.error = "An Error has occured while loading posts!";
          $scope.loading = false;
      });
        }

     
        
            $http.get('/api/Department/GetAllDepartment').success(function (data) {

                $scope.ListOfDepartment = data;
                $scope.loading = false;
            })
      .error(function () {
          $scope.error = "An Error has occured while loading posts!";
      });

   
       
  

        //declare variable for mainain ajax load and entry or edit mode
        $scope.loading = true;
        $scope.addMode = false;
       
        //get all users information
        $http.get('/api/User/GetAllUser').success(function (data) {
            $scope.ListOfUser = data;
            $scope.loading = false;
        })
        .error(function () {
            $scope.error = "An Error has occured while loading posts!";
            $scope.loading = false;
        });
       
        //by pressing toggleEdit button ng-click in html, this method will be hit
        $scope.toggleEdit = function () {
            this.user.editMode = !this.user.editMode;
        };
        
        //by pressing toggleAdd button ng-click in html, this method will be hit
        $scope.toggleAdd = function () {
            $scope.addMode = !$scope.addMode;
        };
        //user in org
        $scope.AddUserinOrg = function () {
            $http.post('/api/UserInOrganazition/AddUserInOrg', this.newDepid).success(function (data) {
            alert("Added Successfully!!");
           
            $scope.ListOfUserDepartment.push(data);
           
        }).error(function (data) {
            $scope.error = "An Error has occured while Adding Organization! " + data;
            $scope.loading = false;
        });
    };
        //$scope.AddUserinOrg = function () {

        //    var UserinorgData = {
        //        Id: $scope.Id,
        //        UserId: $scope.UserId,
        //        DepId: $scope.DepId,
          
        //        //DepartmentID: $scope.DepartmentID
        //    };
        //    if ($scope.Id > 0) {

        //        $http.put("api/UserInOrganazition/AddUserInOrg", UserinorgData).success(function (data) {
        //            $scope.ListOfUserDepartment.push(data);
        //            $location.path('/OrganiztionList');
        //        }).error(function (data) {
        //            console.log(data);
        //            $scope.error = "Something wrong when adding updating Organiztion " + data.ExceptionMessage;
        //        });
        //    }
        //}



        //Inser user
        $scope.add = function () {
            $scope.loading = true;
            $http.post('/api/User/AddUser', this.newuser).success(function (data) {
                alert("Added Successfully!!");
                $scope.addMode = false;
                $scope.ListOfUser.push(data);
                $scope.loading = false;
            }).error(function (data) {
                $scope.error = "An Error has occured while Adding Organization! " + data;
                $scope.loading = false;
            });
        };
        

   
        $scope.save = function () {
            alert("Edit");
            $scope.loading = true;
            var frien = this.user;
            alert(frien);
            $http.put('/api/User/Put/'+ frien.Id, frien).success(function (data) {
                alert("Saved Successfully!!");
                frien.editMode = false;
                $scope.loading = false;
            }).error(function (data) {
                $scope.error = "An Error has occured while Saving customer! " + data;
                $scope.loading = false;
            });
        };

        //////Delete Organization
        $scope.deleteUser = function () {
            $scope.loading = true;
            var Id = this.user.Id;
            $http.delete('/api/User/Delete/' + Id).success(function (data) {
                alert("Deleted Successfully!!");
                $.each($scope.ListOfUser, function (i) {
                    if ($scope.ListOfUser[i].Id === Id) {
                        $scope.ListOfUser.splice(i, 1);
                        return false;
                    }
                });
                $scope.loading = false;
            }).error(function (data) {
                $scope.error = "An Error has occured while Saving Organization! " + data;
                $scope.loading = false;
            });
        };
   
}]);