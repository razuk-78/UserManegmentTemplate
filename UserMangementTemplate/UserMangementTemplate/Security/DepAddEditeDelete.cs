using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using UserMangementTemplate.Models;
namespace UserMangementTemplate.Security
{
    public class DepAddEditeDelete
    {
        public class DepDetailes
        {
            public DepDetailes()
            {
                AuthType = new List<string>();
            }
            public int Id { get; set; }
            public string Name { get; set; }
            public int AdminId { get; set; }
            public int OrgId { get; set; }
            public int parentId { get; set; }
            public List<string> AuthType { get; set; }
        }

        //Add Department + Parent
        public void AddDepartment(DepDetailes dep, UserContext db)
        {
            if (!AuthTypes.checkTypeExistence(dep.AuthType)) { throw new Exception("The AuthType Not Valid"); }
            if (dep.parentId > 0 && db.department.FirstOrDefault(x => x.Id == dep.parentId) != null)
            {
                db.department.Add(new department { Name = dep.Name, OrgId = dep.OrgId});
                db.SaveChanges();
               
                department ch = db.department.First(x => x.Name == dep.Name && x.OrgId == dep.OrgId);
                db.DepPointer.Add(new DepPointer { ChildId = ch.Id, ParentId = dep.parentId });
                db.SaveChanges();
               
                    dep.AuthType.ForEach(x => db.Auth.Add(new Auth { departmentId = ch.Id, Type = x }));
                db.SaveChanges();

            }
           else if(dep.parentId > 0 && db.department.FirstOrDefault(x => x.Id == dep.parentId) == null)
            {
                throw new Exception("this parent is not registred");
            }

            if (dep.parentId==0)
            {
                db.department.Add(new department { Name = dep.Name, OrgId = dep.OrgId });
                db.SaveChanges();
                department ch = db.department.First(x => x.Name == dep.Name && x.OrgId == dep.OrgId);
                dep.AuthType.ForEach(x => db.Auth.Add(new Auth { departmentId = ch.Id, Type = x }));
                db.SaveChanges();
            }

        }

        //Edit Dep ----- I Samma Org
        public void EditDepartment(DepDetailes dep, UserContext db)
        {
            if (!AuthTypes.checkTypeExistence(dep.AuthType))
           throw new Exception("this Authentication type is not exist");
            department Dep = db.department.First(x => x.Id == dep.Id);
            Dep.Name = dep.Name;
            Dep.AdminId = dep.AdminId;

            db.Entry(Dep).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();
            db.department.Find(dep.Id).Auth.ToList().ForEach(x => db.Auth.Remove(x) );
            db.SaveChanges();
            dep.AuthType.ForEach(x => db.department.Find(dep.Id).Auth.Add(new Auth { Type = x }));
            db.SaveChanges();
        }

        //Edit Dep Position ----- I Samma Org
        public void EditDepartmentParent(DepDetailes dep, UserContext db)
        {
            List<int> childrenIds = new List<int>();
         foreach(SearchDepTree.Deps mbox in   new SearchDepTree().DepsTree(db, dep.Id, dep.OrgId))
            {
                childrenIds.Add(mbox.Dep.Id);
                foreach(int i in mbox.Child)
                {
                    childrenIds.Add(i);
                }
            }
            if (childrenIds.Where(x => x == dep.parentId).ToList().Count > 0)
            {
                throw new Exception("the parent is one of the children!");
            }
            department Dep = db.department.First(x => x.Id == dep.Id);
            if (db.DepPointer.FirstOrDefault(x => x.ChildId == dep.Id) == null) // Not Exist
            {
                if (dep.parentId > 0)
                {
                    db.DepPointer.Add(new DepPointer { ChildId = dep.Id, ParentId = dep.parentId });
                    db.SaveChanges();
                }
            }
            else //Exist
            {
                if (dep.parentId > 0)
                {
                    DepPointer Dp = db.DepPointer.First(x => x.ChildId == dep.Id);
                    Dp.ParentId = dep.parentId;
                    db.Entry(Dp).State = System.Data.Entity.EntityState.Modified;
                    db.SaveChanges();
                }
                else
                {
                    DepPointer Dp = db.DepPointer.First(x => x.ChildId == dep.Id);
                    db.DepPointer.Remove(Dp);
                    db.SaveChanges();
                }
            }
        }

        //Delete Dep  ----- I Samma Org
        public void DeleteDepartment(DepDetailes dep, UserContext db)
        {
            if (db.department.FirstOrDefault(x => x.Id == dep.Id && x.OrgId == dep.OrgId) == null)
            {
                throw new Exception("the department not exsist");
            }
            List<int> Alldep = new List<int>();
            foreach (SearchDepTree.Deps deps in new SearchDepTree().DepsTree(db, dep.Id, dep.OrgId))
            {
                Alldep.Add(deps.Dep.Id);
                
                foreach(int id in deps.Child)
                {
                    Alldep.Add(id);
                }
            }

           foreach(int i in Alldep.Distinct())
            {
            department Department = db.department.First(x => x.Id == i);
            db.department.Remove(Department);
                db.SaveChanges();
            }
           //delete all userinorg
            foreach (int i in Alldep.Distinct())
            {
                UserInOrg dp = db.UserInOrg.FirstOrDefault(x => x.departmentId == i);
                if (dp != null)
                {
                db.UserInOrg.Remove(dp);
                    db.SaveChanges();
                }

                
            }

            foreach (int i in Alldep.Distinct())
            {
                DepPointer dp = db.DepPointer.FirstOrDefault(x => x.ChildId == i);
                if (dp != null)
                {
                    db.DepPointer.Remove(dp);
                    db.SaveChanges();
                }
            }

  
        }

    

        //Edit Auth To Dep ----- I Samma Org
        public void AddEditAuthToDep(DepDetailes AuthDep, UserContext db)
        {
            if (!AuthTypes.checkTypeExistence(AuthDep.AuthType.ToList()))
            throw new Exception("the authentication not exist");
            foreach (Auth auth in db.Auth.Where(x => x.departmentId == AuthDep.Id).ToList())
            {
                db.Auth.Remove(auth);
                db.SaveChanges();
            }
            foreach (string typeA in AuthDep.AuthType.ToList())
            {
                db.Auth.Add(new Auth { departmentId = AuthDep.Id, Type = typeA });
                db.SaveChanges();
            }

        }
    }
}