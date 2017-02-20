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
    //Add User + Org + Dep + UserInOrg
    public class AddUserController : ApiController
    {
        UserContext db = new UserContext();
      //[UserAuthCheck("admin")]
      public IHttpActionResult PostAddUser(User user)
        {
            user.PassWord = EncyptPassWord.Encrypt(user.PassWord);
            CommonFunctions.addUser(user, db);
            return Ok(db.User.ToList());
        }

    }
    public class AddOrgController : ApiController
    {
        UserContext db = new UserContext();
        //[UserAuthCheck("superadmin")]
        public IHttpActionResult PostAddorg(Org org)
        {
            CommonFunctions.AddOrg(org, db);
            return Ok();
        }
    }
    public class AddDepController : ApiController
    {
        UserContext db = new UserContext();
      
        public IHttpActionResult PostAddDep(DepAddEditeDelete.DepDetailes Dep)
        {
            new DepAddEditeDelete().AddDepartment(Dep, db);
            return Ok();
        }
    }
    public class AddDepWithoutParentController : ApiController
    {
        UserContext db = new UserContext();
        //Add Dep Without Parent
        public IHttpActionResult PostAddDepWithoutParent(department dep)
        {
            CommonFunctions.AddDep(db, dep);
            return Ok();
        }
    }
    public class AddUserInOrgController : ApiController
    {
        UserContext db = new UserContext();
        //[UserAuthCheck("superadmin")]
        public IHttpActionResult PostAddUserInOrg(AddEditDeleteUser.UserDetailes User)
        {
            new AddEditDeleteUser().AddUserInOrg(User, db);
            return Ok();
        }
    }
    public class AddAuthToDepController : ApiController
    {
        UserContext db = new UserContext();
        //Add Auth To Dep
        public IHttpActionResult PostAddAuthToDep(DepAddEditeDelete.DepDetailes Dep)
        {
            new DepAddEditeDelete().AddEditAuthToDep(Dep, db);
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
    public class EditDepParentController : ApiController
    {
        UserContext db = new UserContext();
        //Edit Dep Position
        public IHttpActionResult PutEditDepParint(DepAddEditeDelete.DepDetailes Dep)
        {
            new DepAddEditeDelete().EditDepartmentParent(Dep, db);
            return Ok();
        }
    }
    public class EditAuthToDepController : ApiController
    {
        UserContext db = new UserContext();
        //Edit Auth To Dep
        public IHttpActionResult PutEditAuthToDep(DepAddEditeDelete.DepDetailes Dep)
        {
            new DepAddEditeDelete().AddEditAuthToDep(Dep, db);
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
