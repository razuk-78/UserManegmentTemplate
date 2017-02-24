using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using UserMangementTemplate.Models;
namespace UserMangementTemplate.Security
{
    public class AddEditDeleteUser
    {
        public class UserDetailes
        {
            public UserDetailes()
            {
                Auth = new List<string>();
            }
            public int UserId { get; set; }
            public int OrgId { get; set; }
            public int departmentId { get; set; }
            public int UserInOrgId { get; set; }
           public  List<string> Auth { get; set; }

        }
        public void AddUserInOrg(UserDetailes user, UserContext db)
        {
            UserInOrg uio = db.UserInOrg.FirstOrDefault(x => x.UserId == user.UserId && x.OrgId == user.OrgId && x.departmentId == user.departmentId);

            if (uio == null && db.Org.FirstOrDefault(x => x.Id == user.OrgId) != null && db.User.FirstOrDefault(x => x.Id == user.UserId) != null)
            {
                db.UserInOrg.Add(uio = new UserInOrg { departmentId = user.departmentId, OrgId = user.OrgId, UserId = user.UserId });

                db.SaveChanges();
                user.Auth.ForEach(x => uio.Auth.Add(new Auth { Type = x }));
                db.SaveChanges();
            }
            else
            {
                throw new Exception("");
            }
        }



        public void EditeUserInOrgAuth(UserDetailes user,UserContext db)
        {
            UserInOrg uio=null;
            if (user.UserInOrgId > 0 ) 
            {
                uio = db.UserInOrg.FirstOrDefault(x => x.Id == user.UserInOrgId);
            }
          

            if (uio != null)
            {
                if (!AuthTypes.checkTypeExistence(user.Auth))
                    throw new Exception("");
                //uio.Auth.ToList().ForEach(x => uio.Auth.Remove(x));
                //db.SaveChanges();
                foreach(Auth auth in uio.Auth.ToList())
                {

                    db.Auth.Remove(auth);
                    db.SaveChanges();
                }
                user.Auth.ForEach(x => uio.Auth.Add(new Auth { Type = x }));
                db.SaveChanges();
            }
        }
    public void DeleteUserInOrg(UserDetailes user,UserContext db)
        {
            department dp = db.department.FirstOrDefault(x => x.AdminId == user.UserInOrgId);
            if (dp != null)
            {
                dp.AdminId = null;
                db.Entry(dp).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
            }
            db.UserInOrg.Remove(db.UserInOrg.Find(user.UserInOrgId)); db.SaveChanges();
            
        }


        // if user register in UserInOrg previously => error
        //public void AddUserInOrg(UserDetailes user, UserContext db)
        //{
        //    UserInOrg uio = db.UserInOrg.FirstOrDefault(x => x.UserId == user.UserId && x.OrgId == user.OrgId && x.departmentId == user.departmentId);
        //    if (uio != null)
        //    {
        //        throw new Exception("The user has been registered previously!");
        //    }
        //    if (uio == null && db.Org.FirstOrDefault(x => x.Id == user.OrgId) != null && db.User.FirstOrDefault(x => x.Id == user.UserId) != null)
        //    {
        //        db.UserInOrg.Add(uio = new UserInOrg { departmentId = user.departmentId, OrgId = user.OrgId, UserId = user.UserId });

        //        db.SaveChanges();
        //        user.Auth.ForEach(x => uio.Auth.Add(new Auth { Type = x }));
        //        db.SaveChanges();
        //    }
        //    else
        //    {
        //        throw new Exception("");
        //    }
        //}


    }
}