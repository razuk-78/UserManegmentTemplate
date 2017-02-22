app.controller("OrganiztionController", ['$scope', '$http', '$location', '$routeParams','msng', function ($scope, $http, $location, $routeParams,msng) {
    $scope.ListOfOrganiztion;
    $scope.Status;
    $scope.msn;
    $scope.send = function (m) {
        msng.setv(m);
        console.log(m.Id);
        $location.path('/DeleteOrganiztion');

    }
    $scope.org = [{}];
    //$scope.Close = function () {
    //    $location.path('/OrganiztionList');
    //}

    //Get all Org and bind with html table
    $http.get("http://localhost:64492/api/GetBasedOrg").then(function (data) {
        $scope.ListOfOrganiztion = data.data;

    }, function (data) {
        $scope.Status = "data not found";
    })
   

    //Add new Organiztion
    $scope.Add = function () {
        var OrganiztionData = {
            
            Name: $scope.Name,
       // DepartmentID: $scope.DepartmentID
        };

        $http.post("http://localhost:64492/api/AddOrg", OrganiztionData).then(function (data) {
         
            $location.path('/OrganiztionList');
        })
      
      
    }

    //Fill the employee records for update

    if ($routeParams.OrgId) {
        $scope.Id = $routeParams.OrgId;

        $http.get('http://localhost:64492/api/' + $scope.Id).then(function (data) {

            $scope.Name = data.Name;
    

            //$scope.DepartmentID = data.DepartmentID
        });

    }

    ////Update the Org records
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


    //Delete the selected org from the list
    $scope.Delete = function () {
        
        console.log(msng.getv().Id);
        $http.put("http://localhost:64492/api/DeleteOrg", msng.getv()).then(function (data) {
            $location.path('/OrganiztionList');
            })
       

    }
}]);







//app.controller("OrganiztionController",  function ($scope, $http, $location, $routeParams) {
//    $scope.ListOfOrganiztion;
//    $scope.Status;
  
//    $scope.Close = function () {
//        $location.path('Mangment/OrganiztionList');
//    }
    
//    //Get all Org and bind with html table
//    $http.get("http://localhost:64492/api/GetBasedOrg").then(function (data) {
//        $scope.ListOfOrganiztion = data.data;

//    })
    
   
//    //Add new Organiztion
//    $scope.Add = function () {
//        var OrganiztionData = {
//            Name: $scope.Name
//            //Description: $scope.Description,
//            //Address: $scope.Address,
           
//            // DepartmentID: $scope.DepartmentID
//        };
       
//        $http.post("http://localhost:64492/api/AddOrg", OrganiztionData).then(function (data) {
//            $location.path('Mangment/OrganiztionList');
//        }).error(function (data) {
//            console.log(data);
//            $scope.error = "Something wrong when adding new Organiztion " + data.ExceptionMessage;
//        });
//    }

//    //Fill the employee records for update

//    if ($routeParams.OrgId) {
//        $scope.Id = $routeParams.OrgId;

//        $http.get('api/Organiztion/GetOrganiztion/' + $scope.Id).success(function (data) {
          
//            $scope.RegisterionNo = data.RegisterionNo;
//            $scope.Description = data.Description;
//            $scope.Address = data.Address;
         
//            //$scope.DepartmentID = data.DepartmentID
//        });

//    }
   
//    ////Update the employee records
//    $scope.Update = function () {
        
//        var OrganiztionData = {
//            OrganiztionID: $scope.Id,
//            RegisterionNo: $scope.RegisterionNo,
//            Description: $scope.Description,
//            Address: $scope.Address,
//            //DepartmentID: $scope.DepartmentID
//        };
//        if ($scope.Id > 0) {

//            $http.put("api/Organiztion/UpdateOrganiztion", OrganiztionData).success(function (data) {
//                $location.path('/OrganiztionList');
//            }).error(function (data) {
//                console.log(data);
//                $scope.error = "Something wrong when adding updating Organiztion " + data.ExceptionMessage;
//            });
//        }
//    }


//    //Delete the selected employee from the list
//    $scope.Delete = function () {
//        if ($scope.Id > 0) {

//            $http.delete("api/Organiztion/DeleteOrganiztion/" + $scope.Id).success(function (data) {
//                $location.path('/OrganiztionList');
//            }).error(function (data) {
//                console.log(data);
//                $scope.error = "Something wrong when adding Deleting Organiztion " + data.ExceptionMessage;
//            });
//        }

//    }
//}]);