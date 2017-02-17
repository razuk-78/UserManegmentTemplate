using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using UserMangementTemplate.Models;
using UserMangementTemplate.Security;

namespace UserMangementTemplate.Controllers
{
    //Register User + Org + Dep + UserInOrg
    public class UserRegisterController : ApiController
    {
        UserContext db = new UserContext();
        //[UserAuthCheck("admin")]
      public IHttpActionResult PostAddUser(User user)
        {
            user.PassWord = EncyptPassWord.Encrypt(user.PassWord);
            CommonFunctions.addUser(user, db);
            return Ok();
        }

    }
    public class OrgRegisterController : ApiController
    {
        UserContext db = new UserContext();
        [UserAuthCheck("superadmin")]
        public IHttpActionResult PostAddorg(Org org)
        {
            CommonFunctions.AddOrg(org, db);
            return Ok();
        }
    }
    public class DepRegisterController : ApiController
    {
        UserContext db = new UserContext();
        [UserAuthCheck("superadmin")]
        public IHttpActionResult PostAddDep(DepAddEditeDelete.DepDetailes Dep)
        {
            new DepAddEditeDelete().AddDepartment(Dep, db);
            return Ok();
        }
    }
    public class UserInOrgRegisterController : ApiController
    {
        UserContext db = new UserContext();
        [UserAuthCheck("superadmin")]
        public IHttpActionResult PostAddUserInOrg(AddEditDeleteUser.UserDetailes User)
        {
            new AddEditDeleteUser().AddUserInOrg(User, db);
            return Ok();
        }
    }


    //Edit User + Org + Dep + UserInOrg
    public class EditUserController : ApiController
    {
        UserContext db = new UserContext();
        public IHttpActionResult PutEditUser(User user)
        {
            CommonFunctions.EditeUser(user, db);
            return Ok();
        }

    }
    public class EditOrgController : ApiController
    {
        UserContext db = new UserContext();
        public IHttpActionResult PutEditorg(Org org)
        {
            CommonFunctions.EditeOrg(org, db);
            return Ok();
        }
    }
    public class EditDepController : ApiController
    {
        UserContext db = new UserContext();
        public IHttpActionResult PutEditDep(DepAddEditeDelete.DepDetailes Dep)
        {
            new DepAddEditeDelete().EditDepartment(Dep, db);
            return Ok();
        }
    }
    public class EditUserInOrgController : ApiController
    {
        UserContext db = new UserContext();
        public IHttpActionResult PutEditUserInOrg(AddEditDeleteUser.UserDetailes User)
        {
            new AddEditDeleteUser().EditeUserInOrgAuth(User, db);
            return Ok();
        }
    }

    //Delete User + Org + Dep + UserInOrg
    public class DeleteUserController : ApiController
    {
        UserContext db = new UserContext();
        public IHttpActionResult PutUserDelete(User user)
        {
            CommonFunctions.DeleteUser(user, db);
            return Ok();
        }

    }
    public class DeleteOrgController : ApiController
    {
        UserContext db = new UserContext();
        public IHttpActionResult PutorgDelete(Org org)
        {
            CommonFunctions.DeleteOrg(org, db);
            return Ok();
        }
    }
    public class DeleteDepController : ApiController
    {
        UserContext db = new UserContext();
        public IHttpActionResult PutDepDelete(DepAddEditeDelete.DepDetailes Dep)
        {
            new DepAddEditeDelete().DeleteDepartment(Dep, db);
            return Ok();
        }
    }
    public class DeleteUserInOrgController : ApiController
    {
        UserContext db = new UserContext();
        public IHttpActionResult PutUserInOrgDelete(AddEditDeleteUser.UserDetailes User)
        {
            new AddEditDeleteUser().DeleteUserInOrg(User, db);
            return Ok();
        }
    }
}
