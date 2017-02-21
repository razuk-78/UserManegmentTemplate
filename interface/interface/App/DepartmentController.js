app.controller("DepartmentController", ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
    $scope.ListOfDepartment;
   
    $scope.Status;
    $scope.Check=true;
    $scope.Close = function () {
        $location.path('/Department/DepartmentList');
         $scope.Check=true;
    }

   
    //angularjs controller method
    $http.get('/api/Auth/GetAllAuth').success(function (data) {

        $scope.ListOfAuth = data;
        $scope.loading = false;
    })
.error(function () {
    $scope.error = "An Error has occured while loading posts!";
});


    //declare variable for mainain ajax load and entry or edit mode
    $scope.loading = true;
    $scope.addMode = false;

    //get all users information
    $http.get('/api/Department/GetAllDepartment').success(function (data) {
        $scope.ListOfDepartment=data;
        $scope.loading = false;
    })
    .error(function () {
        $scope.error = "An Error has occured while loading posts!";
        $scope.loading = false;
    });
 

   
    //by pressing toggleEdit button ng-click in html, this method will be hit
    $scope.toggleEdit = function () {
        this.department.editMode = !this.department.editMode;
        $scope.Check = false;
       
    };

    //by pressing toggleAdd button ng-click in html, this method will be hit
    $scope.toggleAdd = function () {
        $scope.addMode = !$scope.addMode;
        $scope.Check = true;
    };

    //Inser Department
    $scope.add = function () {
        $scope.loading = true;
        $http.post('/api/Department/AddDepartment', this.newdepartment).success(function (data) {
            alert("Added Successfully!!");
            $scope.addMode = false;
            $scope.ListOfDepartment.push(data);
            $scope.loading = false;
        }).error(function (data) {
            $scope.error = "An Error has occured while Adding department! " + data;
            $scope.loading = false;
        });
    };

    ////Edit Department
    $scope.save = function () {
        alert("Edit");
        $scope.loading = true;
        var frien = this.department;
        alert(frien);
        $http.put('/api/Department/Put/' + frien.Id, frien).success(function (data) {
            alert("Saved Successfully!!");
            frien.editMode = false;
            $scope.loading = false;
            $scope.Check = true;
        }).error(function (data) {
            $scope.error = "An Error has occured while Saving department! " + data;
            $scope.loading = false;
        });
    };

    //////Delete Organization
    $scope.deleteDepartment = function () {
        $scope.loading = true;
        var Id = this.department.Id;
        $http.delete('/api/Department/Delete/' + Id).success(function (data) {
            alert("Deleted Successfully!!");
            $.each($scope.ListOfDepartment, function (i) {
                if ($scope.ListOfDepartment[i].Id === Id) {
                    $scope.ListOfDepartment.splice(i, 1);
                    return false;
                }
            });
            $scope.loading = false;
        }).error(function (data) {
            $scope.error = "An Error has occured while Saving department! " + data;
            $scope.loading = false;
        });
    };

}]);