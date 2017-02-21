app.controller("OrganiztionController", ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
    $scope.ListOfOrganiztion;
    $scope.Status;
  
    $scope.Close = function () {
        $location.path('/OrganiztionList');
    }
    
    //Get all employee and bind with html table
    $http.get("api/Organiztion/GetAllOrganiztion").success(function (data) {
        $scope.ListOfOrganiztion = data;

    })
    .error(function (data) {
        $scope.Status = "data not found";
    });
   
    //Add new Organiztion
    $scope.Add = function () {
        var OrganiztionData = {
            RegisterionNo: $scope.RegisterionNo,
            Description: $scope.Description,
            Address: $scope.Address,
           
            // DepartmentID: $scope.DepartmentID
        };
       
        $http.post("api/Organiztion/AddOrganiztion", OrganiztionData).success(function (data) {
            $location.path('/OrganiztionList');
        }).error(function (data) {
            console.log(data);
            $scope.error = "Something wrong when adding new Organiztion " + data.ExceptionMessage;
        });
    }

    //Fill the employee records for update

    if ($routeParams.OrgId) {
        $scope.Id = $routeParams.OrgId;

        $http.get('api/Organiztion/GetOrganiztion/' + $scope.Id).success(function (data) {
          
            $scope.RegisterionNo = data.RegisterionNo;
            $scope.Description = data.Description;
            $scope.Address = data.Address;
         
            //$scope.DepartmentID = data.DepartmentID
        });

    }
   
    ////Update the employee records
    $scope.Update = function () {
        
        var OrganiztionData = {
            OrganiztionID: $scope.Id,
            RegisterionNo: $scope.RegisterionNo,
            Description: $scope.Description,
            Address: $scope.Address,
            //DepartmentID: $scope.DepartmentID
        };
        if ($scope.Id > 0) {

            $http.put("api/Organiztion/UpdateOrganiztion", OrganiztionData).success(function (data) {
                $location.path('/OrganiztionList');
            }).error(function (data) {
                console.log(data);
                $scope.error = "Something wrong when adding updating Organiztion " + data.ExceptionMessage;
            });
        }
    }


    //Delete the selected employee from the list
    $scope.Delete = function () {
        if ($scope.Id > 0) {

            $http.delete("api/Organiztion/DeleteOrganiztion/" + $scope.Id).success(function (data) {
                $location.path('/OrganiztionList');
            }).error(function (data) {
                console.log(data);
                $scope.error = "Something wrong when adding Deleting Organiztion " + data.ExceptionMessage;
            });
        }

    }
}]);