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
    public class departmentsController : ApiController
    {
        private UserContext db = new UserContext();

        // GET: api/departments
        public IHttpActionResult Getdepartment(int orgid)
        {
            return Ok(new SearchDepTree().AllDepsTreeBasedOrg(db,orgid));
        }

        public IHttpActionResult GetdepartmentBaseOrgIddepartmentId(int orgid,int departmentId)
        {
            return Ok(new SearchDepTree().DepsTree(db,departmentId,orgid));
        }

        public IHttpActionResult PostAddDep(DepAddEditeDelete.DepDetailes dep)
        {
            new DepAddEditeDelete().AddDepartment(dep, db);
            return Ok();
        }

        public IHttpActionResult PutPar(DepAddEditeDelete.DepDetailes dep)
        {
            new DepAddEditeDelete().EditDepartmentPosition(dep, db);
            return Ok();
        }
        //public IHttpActionResult PostAddDep(department dep)
        //{
        //    CommonFunctions.AddDep(db, dep);
        //    return Ok();
        //}
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool departmentExists(int id)
        {
            return db.department.Count(e => e.Id == id) > 0;
        }
    }
}