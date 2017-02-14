﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using UserMangementTemplate.Models;
namespace UserMangementTemplate.Security
{
    public class SearchDepTree
    {
        public class Deps
        {
            public Deps()
            {
                Child = new List<int>();
            }
            public int Parent { get; set; }
            public List<int> Child { get; set; }
            public department Dep { get; set; }
            
        }
        public SearchDepTree()
        {

        }
        public List<Deps> AllDepsTreeBasedOrg(UserContext db, int OrgId)

        {
            List<Deps> deps = new List<Deps>();


            return deps;
        }
        public List<Deps> DepsTree(UserContext db, int depId,int OrgId)

        {
            List<Deps> deps = new List<Deps>();

       

            return deps;
        }

        #region Excetract Deps
       List<int> FixedIds = new List<int>();  List<int> TemIds;
        void recursive(List<int> _Ids,UserContext db)
        {
           
            TemIds = new List<int>();
            foreach (int id in _Ids)
            {
                foreach (DepPointer  pointer in db.DepPointer.Where(x=>x.ParentId==id).ToList())
                {
                    TemIds.Add(pointer.ChildId); FixedIds.Add(pointer.ChildId);
                }
            }
            if (TemIds.Count < 1)
            {
                output(FixedIds,db);
            }else
            {
recursive1(TemIds,db);
            }
            

        }

        void recursive1(List<int> _Ids, UserContext db)
        {

            TemIds = new List<int>();
            foreach (int id in _Ids)
            {
                foreach (DepPointer pointer in db.DepPointer.Where(x => x.ParentId == id).ToList())
                {
                    TemIds.Add(pointer.ChildId); FixedIds.Add(pointer.ChildId);
                }
            }
            if (TemIds.Count < 1)
            {
                output(FixedIds,db);
            }
            else
            {
 recursive(TemIds,db);
            }
           

        }
       List<Deps> output(List<int> i,UserContext db)
        {
            List<Deps> deps = new List<Deps>();
            foreach (int ii in i.Distinct())
            {
                deps.Add(new Deps { Child = db.DepPointer.Where(x => x.ParentId == ii).Select(x => x.ChildId).ToList(),Dep=db.department.First(x=>x.Id==ii),Parent= db.department.First(x => x.Id == ii).DepPointer.First(x=>x.ChildId==ii).ParentId });
            }
            return deps;
        } 
        #endregion

        //public List<Deps> DepsTree(UserContext db, List<int> depIds, int OrgId)
        //{
        //    List<Deps> deps = new List<Deps>();


        //    return deps;
        //}
    }
}