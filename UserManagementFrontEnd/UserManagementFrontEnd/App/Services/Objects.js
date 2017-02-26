var $scope={
 auth : {
    id: 0,
    UserInOrgId: null,
    departmentId: null,
    Type: null,
    UserInOrg: userinorg = {
        Id: 0,
        UserId: 0,
        OrgId: 0,
        departmentId: 0,
        LogInRegistry: null,
        TeamMember: null,
        Auth: {
            id: 0,
            UserInOrgId: null,
            departmentId: null,
            Type: null,
            UserInOrg: 0,
            department: {
                Id: 0,
                Name: null,
                AdminId: null,
                OrgId: 0
            }
        }
    },
    department: {
        Id: 0,
        Name: null,
        AdminId: null,
        OrgId: 0
    }
},

 user : {
    Id: 0,
    FirstName: null,
    LastName: null,
    Email: null,
    PassWord: null,
    PersonalNumber: null,
    Address: null,
    City: null,
    CityCode: 0,
    Phone: null,
    Category: null
},
 dep : {
    Id: 0,
    Name: null,
    AdminId: null,
    OrgId: 0
},
 LogReg :{
    Id: 0,
    UserInOrgId: 0,
    TimeLogIn: "0001-01-01T00:00:00"
},
 org : {
    Id: 0,
    Name: null
},

 SearchDepTreeDeps : {
    Parent: 0,
    Child: [],
    Dep: {
        Id: 0,
        Name: null,
        AdminId: null,
        OrgId: 0
    }
},
 userDtails : {
    Org: {
        Id: 0,
        Name: null
    },
    User: {
        Id: 0,
        FirstName: null,
        LastName: null,
        Email: null,
        PassWord: null,
        PersonalNumber: null,
        Address: null,
        City: null,
        CityCode: 0,
        Phone: null,
        Category: null
    },
    Department: dep = {
        Id: 0,
        Name: null,
        AdminId: null,
        OrgId: 0
    },
    UserInOrgId: 0,
    Teams: [{}],
    Auth: [{
        id: 0,
        UserInOrgId: null,
        departmentId: null,
        Type: null,
        UserInOrg: userinorg = {
            Id: 0,
            UserId: 0,
            OrgId: 0,
            departmentId: 0,
            LogInRegistry: null,
            TeamMember: null,
            Auth: {
                id: 0,
                UserInOrgId: null,
                departmentId: null,
                Type: null,
                UserInOrg: 0,
                department: {
                    Id: 0,
                    Name: null,
                    AdminId: null,
                    OrgId: 0
                }
            }
        },
        department: {
            Id: 0,
            Name: null,
            AdminId: null,
            OrgId: 0
        }
    }],
    LogInRegistry: [{
        Id: 0,
        UserInOrgId: 0,
        TimeLogIn: "0001-01-01T00:00:00"
    }]
},

 userinorg : {
    Id: 0,
    UserId: 0,
    OrgId: 0,
    departmentId: 0,
    LogInRegistry: null,
    TeamMember: null,
    Auth: [{
        id: 0,
        UserInOrgId: null,
        departmentId: null,
        Type: null,
        UserInOrg: 0,
        department: {
            Id: 0,
            Name: null,
            AdminId: null,
            OrgId: 0
        }
    }]
},


 adduserDetails : {
    UserId: 0,
    OrgId: 0,
    departmentId: 0,
    UserInOrgId: 0,
    Auth: []
},

 addDepDetails : {
    Id: 0,
    Name: null,
    AdminId: 0,
    OrgId: 0,
    parentId: 0,
    AuthType: null
},

 logIn :{
    UserName: null,
    DepartmentName: null,
    Auth: null
}
}