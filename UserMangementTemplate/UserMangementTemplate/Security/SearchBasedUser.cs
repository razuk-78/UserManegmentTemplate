using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using UserMangementTemplate.Models;
namespace UserMangementTemplate.Security
{
 
    public  class SearchBasedUser
    {
       
  public  class UserDetails
    {
            public UserDetails()
            {
                Department = new department();
                Teams = new List<Team>();
                Auth = new List<Models.Auth>();
                LogInRegistry = new List<Models.LogInRegistry>();
            }
        public Org Org { get; set; }
        public User User { get; set; }
        public department Department { get; set; }
        public List<Team> Teams { get; set; }
        public List<Auth>Auth { get; set; }
        public List<LogInRegistry> LogInRegistry { get; set; }
    }
        public UserDetails searchUser(UMDataBaseEntitiesConnection db, int userid)
        {

            return new UserDetails();
        }
     
        public List<UserDetails> searchTeam(UMDataBaseEntitiesConnection db, int TeamIid)
        {

            return new List<UserDetails>() ;
        }

        public List<UserDetails> searchOrg(UMDataBaseEntitiesConnection db, int OrgId)
        {

            return new List<UserDetails>();
        }

        public List<UserDetails> searchDep(UMDataBaseEntitiesConnection db, int DepId)
        {

            return new List<UserDetails>();
        }

        public List<UserDetails> searchAuth(UMDataBaseEntitiesConnection db, string Auth)
        {

            return new List<UserDetails>();
        }

        //One day
        public List<UserDetails> searchAllUserBasedDate(UMDataBaseEntitiesConnection db, DateTime before)
        {
            
            return new List<UserDetails>();
        }

        //between Two Date Based OrgId
        public List<UserDetails> searchAllUserInOrgRangDate(UMDataBaseEntitiesConnection db,DateTime before, DateTime after ,int orgid)
        {
      
            return new List<UserDetails>();
        }

        //between Two Date Based UserId
        public List<UserDetails> searchRangDateBasedUserId(UMDataBaseEntitiesConnection db, DateTime before, DateTime after, int userId)
        {
          
            return new List<UserDetails>();
        }


        public UserDetails SearchDetailsBasedUserIdTeamId(UMDataBaseEntitiesConnection db,int userId,int teamId)
        {

            return new UserDetails();
        }

        public UserDetails SearchDetailsBasedUserIdDepId(UMDataBaseEntitiesConnection db, int userId, int DepId)
        {

            return new UserDetails();
        }




    }
}