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
    public class AuthCheck: AuthorizationFilterAttribute
    {

        UserContext db = new UserContext();
        string type;string user = "razuk1";string pass = "1234";
            public AuthCheck(string _type)
            {
            type = _type;
            }

            public override void OnAuthorization(HttpActionContext actionContext)
            {
            if (actionContext.Request.Headers.Authorization == null)
            {
                actionContext.Response = actionContext.Request.CreateResponse(HttpStatusCode.Unauthorized);
            } else
            {
                string[] userpass = actionContext.Request.Headers.Authorization.Parameter.Split(':');

              if( userpass[0]!=user&&this.pass!=userpass[1] )
                {
                    actionContext.Response = actionContext.Request.CreateResponse(HttpStatusCode.Unauthorized);
                }
 

           }

                    string s = actionContext.ControllerContext.Request.RequestUri.AbsoluteUri;
                    string ss = HttpUtility.ParseQueryString(s).Get("http://localhost:62119/api/users?role");
                    actionContext.Response = actionContext.Request .CreateResponse(ss);

        }
    }
}