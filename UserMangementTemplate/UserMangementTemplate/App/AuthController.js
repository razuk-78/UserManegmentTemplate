app.controller("AuthController", ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
    $scope.ListOfAuth;
    $scope.Status;
    
    $scope.Close = function () {
        $location.path('/AuthList');
    }


    //angularjs controller method


   
    //declare variable for mainain ajax load and entry or edit mode
    $scope.loading = true;
    $scope.addMode = false;

    //get all Auth information
    $http.get('/api/Auth/GetAllAuth').success(function (data) {
        $scope.ListOfAuth = data;
        $scope.loading = false;
    })
    .error(function () {
        $scope.error = "An Error has occured while loading posts!";
        $scope.loading = false;
    });

    //by pressing toggleEdit button ng-click in html, this method will be hit
    $scope.toggleEdit = function () {
        this.auth.editMode = !this.auth.editMode;
    };

    //by pressing toggleAdd button ng-click in html, this method will be hit
    $scope.toggleAdd = function () {
        $scope.addMode = !$scope.addMode;
    };

    //Inser ListOfAuth
    $scope.add = function () {
        $scope.loading = true;
        $http.post('/api/Auth/AddAuth', this.newauth).success(function (data) {
            alert("Added Successfully!!");
            $scope.addMode = false;
            $scope.ListOfAuth.push(data);
            $scope.loading = false;
        }).error(function (data) {
            $scope.error = "An Error has occured while Adding ListOfAuth! " + data;
            $scope.loading = false;
        });
    };

    ////Edit ListOfAuth
    $scope.save = function () {
        alert("Edit");
        $scope.loading = true;
        var frien = this.auth;
        alert(frien);
        $http.put('/api/Auth/Put/' + frien.Id, frien).success(function (data) {
            alert("Saved Successfully!!");
            frien.editMode = false;
            $scope.loading = false;
        }).error(function (data) {
            $scope.error = "An Error has occured while Saving Auth! " + data;
            $scope.loading = false;
        });
    };

    //////Delete ListOfAuth
    $scope.deleteAuth = function () {
        $scope.loading = true;
        var Id = this.auth.Id;
        $http.delete('/api/Auth/Delete/' + Id).success(function (data) {
            alert("Deleted Successfully!!");
            $.each($scope.ListOfAuth, function (i) {
                if ($scope.ListOfAuth[i].Id === Id) {
                    $scope.ListOfAuth.splice(i, 1);
                    return false;
                }
            });
            $scope.loading = false;
        }).error(function (data) {
            $scope.error = "An Error has occured while Saving ListOfAuth! " + data;
            $scope.loading = false;
        });
    };

}]);