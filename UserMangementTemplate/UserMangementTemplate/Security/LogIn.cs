using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using UserMangementTemplate.Models;

namespace UserMangementTemplate.Security
{
    public class LogIn
    {
        
        public class userLogInIfo
        {
            public string UserName { get; set; }
            public string DepartmentName { get; set; }
            public List<string> Auth { get; set; }

        }

        public userLogInIfo GetuserLogInIfo(UserContext db,string username,int orgid)
        {
            
            int i = db.User.First(x => x.Email == username).Id;
            int dpid = db.UserInOrg.First(x => x.UserId == i).departmentId;
            userLogInIfo u = new userLogInIfo { DepartmentName = db.department.Find(dpid).Name,UserName=username,Auth= db.UserInOrg.First(x => x.UserId == i&&x.OrgId==orgid).Auth.Select(x=>x.Type).ToList()};
            return u; 
        }
    }
}