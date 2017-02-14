using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using UserMangementTemplate.Models;
namespace UserMangementTemplate.Security
{
    public class CommonFunctions
    {
        public static void addUser(User user,UserContext db)
        {
            db.User.Add(user);db.SaveChanges();
        }
        public static void EditeUser(User user, UserContext db)
        {
            db.Entry(user).State = System.Data.Entity.EntityState.Modified;
        }
        public static void DeleteUser(User user, UserContext db)
        {
            db.User.Remove(db.User.Find(user.Id));db.SaveChanges();
        }
        public static void AddOrg(Org org, UserContext db)
        {
            db.Org.Add(org); db.SaveChanges();
        }
        public static void EditeOrg(Org org, UserContext db)
        {
            db.Entry(org).State = System.Data.Entity.EntityState.Modified;
        }
        public static void DeleteOrg(Org org, UserContext db)
        {
            db.User.Remove(db.User.Find(org.Id)); db.SaveChanges();
        }
        public static void AddDep(UserContext db,department dep)
        {
            db.department.Add(dep);
            db.SaveChanges();
        }
    }
}