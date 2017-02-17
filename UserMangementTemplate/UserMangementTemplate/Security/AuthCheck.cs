using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;
using UserMangementTemplate.Models;
namespace UserMangementTemplate.Security
{
    public class UserAuthCheck: AuthorizationFilterAttribute
    {

        UserContext db = new UserContext();
        //string user = "razuk1";string pass = "1234";
             string Usertype=null;
            public UserAuthCheck(string User_type)
            {
            Usertype = User_type;
            }
     

        public override void OnAuthorization(HttpActionContext actionContext)
            {
            if (actionContext.Request.Headers.Authorization == null)
            {
                actionContext.Response = actionContext.Request.CreateResponse(HttpStatusCode.Unauthorized);
            } 
           
            string[] userpass = actionContext.Request.Headers.Authorization.Parameter.Split(':');
            string u = userpass[0]; string p = userpass[1];
            if ( db.User.FirstOrDefault(x=>x.Email==u && x.PassWord == p)==null)
            {
               actionContext.Response = actionContext.Request.CreateResponse(HttpStatusCode.Unauthorized);
            }
            if(db.UserInOrg.FirstOrDefault(x=>x.UserId== db.User.FirstOrDefault(z => z.Email == u).Id).Auth.FirstOrDefault(d => d.Type == this.Usertype) == null)
            {
                actionContext.Response = actionContext.Request.CreateResponse(HttpStatusCode.Unauthorized);
            }
 

           }

             

        }
    public class DepAuthCheck : AuthorizationFilterAttribute
    {

        UserContext db = new UserContext();
        //string user = "razuk1";string pass = "1234";
       string DepType = null;
       //static List<DepAuthCheck> DepAuthCheckList = new List<DepAuthCheck>();
       public DepAuthCheck(string Dep_type)
        {
            DepType = Dep_type;
        }

        public override void OnAuthorization(HttpActionContext actionContext)
        {
            if (actionContext.Request.Headers.Authorization == null)
            {
                actionContext.Response = actionContext.Request.CreateResponse(HttpStatusCode.Unauthorized);
            }

            string[] userpass = actionContext.Request.Headers.Authorization.Parameter.Split(':');
            string u = userpass[0]; string p = userpass[1];
            
            if (db.User.FirstOrDefault(x => x.Email ==u&&EncyptPassWord.Decrypt(x.PassWord)==p)==null)
            {
                actionContext.Response = actionContext.Request.CreateResponse(HttpStatusCode.Unauthorized);
            }
            if (db.department.FirstOrDefault(r=>r.Id==db.UserInOrg.FirstOrDefault(x => x.UserId == db.User.FirstOrDefault(z => z.Email == u).Id).departmentId).Auth.FirstOrDefault(d => d.Type == this.DepType) == null)
            {
                actionContext.Response = actionContext.Request.CreateResponse(HttpStatusCode.Unauthorized);
            }


        }



    }

}
