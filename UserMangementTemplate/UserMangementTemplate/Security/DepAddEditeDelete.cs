﻿using System;
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
            public int? Id { get; set; }
            public string Name { get; set; }
            public int AdminId { get; set; }
            public int OrgId { get; set; }
            public int parentId { get; set; }

            public List<string> AuthType { get; set; }

        }
        public void AddDepartment(DepDetailes dep, UserContext db)
        {
           
                db.department.Add(new department { Name=dep.Name,OrgId=dep.OrgId,AdminId=dep.AdminId});
                db.SaveChanges();

            if (dep.parentId > 0)
            {
                department ch = db.department.First(x => x.Name == dep.Name && x.OrgId == dep.OrgId);
                db.DepPointer.Add(new DepPointer { ChildId = ch.Id, ParentId = dep.parentId });
                db.SaveChanges();
            }

        }
        //Edit Dep ----- show Dep
        public DepDetailes OldDepartment(int depId, UserContext db)
        {
            if (depId > 0)
            {
                department Dep1 = db.department.First(x => x.Id == depId);
                return new DepDetailes { Id = depId, Name = Dep1.Name, OrgId = Dep1.OrgId };
            }
            else
                throw new Exception("the Department is not exist");
        }
        //Edit Dep ----- I Samma Org
        public void EditDepartment(DepDetailes dep, UserContext db)
        {
            department Dep = db.department.First(x => x.Id == dep.Id);
            Dep.Name = dep.Name;
            Dep.AdminId = dep.AdminId;
            db.Entry(Dep).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();
        }
        //Edit Dep Position ----- I Samma Org
        public void EditDepartmentPosition(DepDetailes dep, UserContext db)
        {
            department Dep = db.department.First(x => x.Id == dep.Id);
            if (db.DepPointer.First(x => x.ChildId == dep.Id) == null) // Not Exist
            {
                if (dep.parentId > 0)
                {
                    db.DepPointer.Add(new DepPointer { ChildId = dep.Id??0, ParentId = dep.parentId });
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
            department D = db.department.First(x => x.Id == dep.Id);
            db.department.Remove(D);
            db.SaveChanges();
        }
        //Add Auth To Dep ----- I Samma Org
        public void AddAuthToDep(DepDetailes AuthDep, UserContext db)
        {
            foreach (string s in AuthDep.AuthType.ToList())
            {
                db.Auth.Add(new Auth { DepId = AuthDep.Id, Type = s });
                db.SaveChanges();
            }
        }
        //Edit Auth To Dep ----- I Samma Org
        public void EditAuthToDep(DepDetailes AuthDep, UserContext db)
        {
            foreach (Auth a in db.Auth.Where(x => x.DepId == AuthDep.Id).ToList())
            {
                db.Auth.Remove(a);
                db.SaveChanges();
            }
            foreach (string s in AuthDep.AuthType.ToList())
            {
                db.Auth.Add(new Auth { DepId = AuthDep.Id, Type = s });
                db.SaveChanges();
            }

        }
    }
}