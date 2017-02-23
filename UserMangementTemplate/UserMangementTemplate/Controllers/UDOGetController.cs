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
    public class GetBasedDepController:ApiController
    {
        private UserContext db = new UserContext();
        public IHttpActionResult GetAllDep()
        {
            return Ok(db.department.ToList());
        }
        //Get Department Based DepId
        public IHttpActionResult GetDep(int departmentId)
        {
            return Ok(new SearchBasedUser().searchDep(db, departmentId));
        }
        //Get Depatment Base OrgId
        public IHttpActionResult Getdepartment(int orgid)
        {
            return Ok(new SearchDepTree().AllDepsTreeBasedOrg(db, orgid));
        }
        //Get Depatment Base OrgId + departmentId
        public IHttpActionResult GetdepartmentBaseOrgIddepartmentId(int orgid, int departmentId)
        {
            return Ok(new SearchDepTree().DepsTree(db, departmentId, orgid));
        }
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }


    public class GetBasedOrgController : ApiController
    {
        private UserContext db = new UserContext();

        public IHttpActionResult GetAllOrg()
        {
            return Ok(db.Org.ToList());
        }
        //Get Org Based OrgId
        public IHttpActionResult GetOrg(int OrgId)
        {
            return Ok(new SearchBasedUser().searchOrg(db, OrgId));
        }



        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

    }


    public class GetBasedAuthController : ApiController
    {
        private UserContext db = new UserContext();
        //Get Auth Based TypeAuth + OrgId
        public IHttpActionResult GetAuthOrg(string auth, int Orgid)
        {
            return Ok(new SearchBasedUser().searchAuthBasedOrg(db, auth, Orgid));
        }
        //Get Auth Based TypeAuth
        public IHttpActionResult GetAuth(string auth)
        {
            return Ok(new SearchBasedUser().searchAuth(db, auth));
        }
        //Get Auth Based TypeAuth + OrgId + DepId
        public IHttpActionResult GetAuthOrgDep(string auth, int Orgid, int Dep)
        {
            return Ok(new SearchBasedUser().searchAuthBasedDep(db, auth, Orgid, Dep));
        }
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

    }


    public class GetBaesdUsersController : ApiController
    {
        private UserContext db = new UserContext();

        //[UserAuthCheck("read")]
        public IHttpActionResult GetAllUser()
        {
            return Ok(db.User.ToList());
        }
        //Get user Based UserId
        public IHttpActionResult GetUser(int userid)
        {
            return Ok(new SearchBasedUser().searchUser(db, userid));
        }
        //Get AllUser Based Oneday
        public IHttpActionResult GetUserBasedDate(DateTime date)
        {
            return Ok(new SearchBasedUser().searchAllUserBasedDate(db, date));
        }

        //Get AllUser between Two Date Based OrgId
        public IHttpActionResult GetAllUserBasedRangeDate(DateTime before, DateTime after, int orgid)
        {
            return Ok(new SearchBasedUser().searchAllUserInOrgRangDate(db, before, after, orgid));
        }

        //Get AllUser between Two Date Based OrgId + UserId
        public IHttpActionResult GetUserBasedRangeDate(DateTime before, DateTime after, int userid)
        {
            return Ok(new SearchBasedUser().searchRangDateBasedUserId(db, before, after, userid));
        }

        //Get AllUser Based UserId+ DepId
        public IHttpActionResult GetuserBasedUserIddepartmentId(int userid, int departmentId)
        {
            return Ok(new SearchBasedUser().SearchDetailsBasedUserIddepartmentId(db, userid, departmentId));
        } 
      



        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

      
    }
}