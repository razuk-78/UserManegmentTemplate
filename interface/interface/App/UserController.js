    app.controller("UserController",  function ($scope, $http, $location, $routeParams) {
        $scope.ListOfUser;
 
        $scope.Status;
        $scope.Close = function () {
        $location.path('/UsersList');
        }


    //angularjs controller method
        $scope.loading = true;
        $scope.addMode = false;

        //get all users information$http
      
        $http.get('http://localhost:64492/api/GetBaesdUsers').then(function (mm) {

               
                $scope.ListOfUser = mm.data;

                $scope.loading = false;
            },
            function () {
                   
                $scope.error = "An Error has occured while loading posts!";
               $scope.loading = false;


                });
          

     
    
      

    

        $scope.search = function (m) {
            $http.get('http://localhost:64492/api/user/GetSearchUsers?searchtext=' + m).then(function (data) {
                $scope.ListOfUser = data;
                $scope.loading = false;
              
            }, function () {
                $scope.error = "An Error has occured while loading !";
                $scope.loading = false;
            })
      
        }

     
        
      // $http.get('/api/Department/GetAllDepartment').success(function (data) {

      //          $scope.ListOfDepartment = data;
      //          $scope.loading = false;
      //      })
      //.error(function () {
      //    $scope.error = "An Error has occured while loading posts!";
      //});

   
       
  

        //declare variable for mainain ajax load and entry or edit mode
        $scope.loading = true;
        $scope.addMode = false;
       
       
       
        //by pressing toggleEdit button ng-click in html, this method will be hit
        $scope.toggleEdit = function () {
            this.user.editMode = !this.user.editMode;
        };
        
        //by pressing toggleAdd button ng-click in html, this method will be hit
        $scope.toggleAdd = function () {
            $scope.addMode = !$scope.addMode;
        };
    //    //user in org
    //    $scope.AddUserinOrg = function () {
    //        $http.post('/api/UserInOrganazition/AddUserInOrg', this.newDepid).success(function (data) {
    //        alert("Added Successfully!!");
           
    //        $scope.ListOfUserDepartment.push(data);
           
    //    }).error(function (data) {
    //        $scope.error = "An Error has occured while Adding Organization! " + data;
    //        $scope.loading = false;
    //    });
    //};
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



        ////Inser user
        $scope.add = function () {
            $scope.loading = true;
            $http.post('http://localhost:64492/api/AddUser', this.newuser).then(function (nn) {
                alert("Added Successfully!!");
                $scope.addMode = false;
               $scope.ListOfUser = [{}];
                $scope.ListOfUser = nn.data;
                //alert(JSON.stringify(nn.data));
                $scope.loading = false;
            });
        };
        

   
        $scope.save = function () {
            alert("Edit");
            $scope.loading = true;
            var frien = this.user;
            alert(frien);
            $http.put('http://localhost:64492/api/EditUser', this.user).then(function (data) {
                alert("Saved Successfully!!");
                frien.editMode = false;
                $scope.loading = false;
            })
        };

        //////Delete Organization
        $scope.deleteUser = function () {
            $scope.loading = true;
            var Id = this.user.Id;
            $http.put('http://localhost:64492/api/DeleteUser', this.user).then(function (data) {
                alert("Deleted Successfully!!");
                $scope.ListOfUser = data.data;
                //$.each($scope.ListOfUser, function (i) {
                //    if ($scope.ListOfUser[i].Id === Id) {
                //        $scope.ListOfUser.splice(i, 1);
                //        return false;
                //    }
                });
                $scope.loading = false;
        },function (data) {
            $scope.error = "An Error has occured while Saving Organization! " + data;
            $scope.loading = false;
        }
   
   
});