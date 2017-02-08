using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using UserMangementTemplate.Models;
namespace UserMangementTemplate.Security
{
    public class AddEditDeleteUser
    {
        public class userDetailes
        {
            public userDetailes()
            {
                Auth = new List<string>();
            }
            public int UserId { get; set; }
            public int OrgId { get; set; }
            public int DepId { get; set; }
            List<string> Auth { get; set; }

        }
        public void AddUser(userDetailes user,UserContext db) 
        {

        }
    }
}