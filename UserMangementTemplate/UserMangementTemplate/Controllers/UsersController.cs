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
    public class UsersController : ApiController
    {
        private UserContext db = new UserContext();

        // GET: api/Users
      
        [UserAuthCheck("read")]
        public IHttpActionResult GetAllUser()
        {
            return Ok(db.User.ToList());
        }

        //Get user Based UserId
        public IHttpActionResult GetUser(int userid)
        {
            return Ok(new SearchBasedUser().searchUser(db, userid));
        }

        //Get Department Based DepId
        public IHttpActionResult GetDep(int departmentId)
        {
            return Ok(new SearchBasedUser().searchDep(db, departmentId));
        }

        //Get Org Based OrgId
        public IHttpActionResult GetOrg(int OrgId)
        {
            return Ok(new SearchBasedUser().searchOrg(db, OrgId));
        }

        //Get Auth Based TypeAuth
        public IHttpActionResult GetAuth(string auth)
        {
            return Ok(new SearchBasedUser().searchAuth(db, auth));
        }

        //Get Auth Based TypeAuth + OrgId
        public IHttpActionResult GetAuthOrg(string auth,int Orgid)
        {
            return Ok(new SearchBasedUser().searchAuthBasedOrg(db, auth,Orgid));
        }

        //Get Auth Based TypeAuth + OrgId + DepId
        public IHttpActionResult GetAuthOrgDep(string auth, int Orgid,int Dep)
        {
            return Ok(new SearchBasedUser().searchAuthBasedDep(db, auth, Orgid,Dep));
        }

        //Get AllUser Based Oneday
        public IHttpActionResult GetUserBasedDate(DateTime date)
        {
            return Ok(new SearchBasedUser().searchAllUserBasedDate(db,date));
        }

        //Get AllUser between Two Date Based OrgId
        public IHttpActionResult GetAllUserBasedRangeDate(DateTime before,DateTime after,int orgid)
        {
            return Ok(new SearchBasedUser().searchAllUserInOrgRangDate(db,before,after,orgid));
        }

        //Get AllUser between Two Date Based OrgId + UserId
        public IHttpActionResult GetUserBasedRangeDate(DateTime before, DateTime after, int userid)
        {
            return Ok(new SearchBasedUser().searchRangDateBasedUserId(db, before, after, userid));
        }

        //Get AllUser Based UserId+ DepId
        public IHttpActionResult GetuserBasedUserIddepartmentId(int userid,int departmentId)
        {
            return Ok(new SearchBasedUser().SearchDetailsBasedUserIddepartmentId(db,userid,departmentId));
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