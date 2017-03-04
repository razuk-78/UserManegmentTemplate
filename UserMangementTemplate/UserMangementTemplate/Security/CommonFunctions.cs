using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using UserMangementTemplate.Models;
namespace UserMangementTemplate.Security
{
    public class CommonFunctions
    {
        //Add User
        public static void addUser(User user,UserContext db)
        {
            if (db.User.FirstOrDefault(x => x.PersonalNumber == user.PersonalNumber && x.Email == user.Email) != null)
            {
                throw new Exception("the user already exist!");
            }
            db.User.Add(user);db.SaveChanges();
        }
        //get users by name
        public static List<User> SearchBasedFirstName(UserContext db, string firstName)
        {
            List<User> u = new List<User>();

            u = db.User.Where(x => x.FirstName.Contains(firstName)).ToList();

            return u;
        }
        //Edit User
        public static void EditeUser(User user, UserContext db)
        {
        
            if (db.User.FirstOrDefault(x => x.Id == user.Id) == null)
            {
                throw new Exception("the user already exist!");
            }
            User u = db.User.First(x => x.Id == user.Id);
            u.FirstName = user.FirstName; u.LastName = user.LastName;
            u.Email = user.Email; u.PassWord = user.PassWord;
            u.PersonalNumber = user.PersonalNumber; u.Address = user.Address;
            u.City = user.City; u.CityCode = user.CityCode;
            u.Phone = user.Phone; u.Category = user.Category;
            db.Entry(u).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();
           
            
        }
        public static void DeleteUser(User user, UserContext db)
        {
            UserInOrg u;
            if ((u = db.UserInOrg.FirstOrDefault(x => x.UserId == user.Id)) != null)
            {
                db.UserInOrg.Remove(u);
                db.SaveChanges();
            }

            db.User.Remove(db.User.Find(user.Id)); db.SaveChanges();

                  
        }
        public static List<Org> SeachAllOrg(UserContext db)
        {
            return db.Org.ToList();
        }
        public static void AddOrg(Org org, UserContext db)
        {
            if (db.Org.FirstOrDefault(x => x.Name == org.Name) != null)
            {
                throw new Exception("the org already exist!");
            }
            db.Org.Add(org); db.SaveChanges();
        }
        public static void EditeOrg(Org org, UserContext db)
        {
            db.Entry(org).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();
        }
        public static void DeleteOrg(Org org, UserContext db)
        {
            db.UserInOrg.Where(x => x.OrgId == org.Id).ToList().ForEach(x => db.UserInOrg.Remove(x)); db.SaveChanges();
        foreach(department d in db.Org.Find(org.Id).department.ToList())
            {
                DepPointer dd=null;
               if((dd=db.DepPointer.FirstOrDefault(x => x.ChildId == d.Id)) != null)
                {
                    db.DepPointer.Remove(dd);
                }
            }
            db.Org.Remove(db.Org.Find(org.Id)); db.SaveChanges();
        }
        //Add Dep Without Parent
        public static void AddDep(UserContext db,department dep)
        {
            db.department.Add(dep);
            db.SaveChanges();
        }

        //Search all the users who do not register in UserInOrg
        public static List<User> SearchUnregisterdUsers(UserContext db)
        {
            List<User> AllUser = new List<User>();

            foreach (User u in db.User.ToList())
            {
                if (db.UserInOrg.FirstOrDefault(x => x.UserId == u.Id) == null)
                {
                    AllUser.Add(u);
                }
            }

            return AllUser;
        }
        //Search user by FirstName
        public static List<string> SearchAuthType()
        {
            return AuthTypes.types;
        }
        public static department SearchDepartmentBasedId(UserContext db,int id)
        {
            return db.department.Find(id);
        }
    }
}