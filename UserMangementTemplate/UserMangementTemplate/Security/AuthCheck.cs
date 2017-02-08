using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

namespace UserMangementTemplate.Security
{
    public class AuthCheck: AuthorizationFilterAttribute
    {
       
            String i;
            public AuthCheck(String ii)
            {
                i = ii;
            }

            public override void OnAuthorization(HttpActionContext actionContext)
            {
            if (actionContext.Request.Headers.Authorization == null)
            {
                actionContext.Response = actionContext.Request.CreateResponse(HttpStatusCode.Unauthorized);
            }else
            {
                   
            }

                    string s = actionContext.ControllerContext.Request.RequestUri.AbsoluteUri;
                    string ss = HttpUtility.ParseQueryString(s).Get("http://localhost:62119/api/users?role");
                    actionContext.Response = actionContext.Request .CreateResponse(ss);

        }
    }
}