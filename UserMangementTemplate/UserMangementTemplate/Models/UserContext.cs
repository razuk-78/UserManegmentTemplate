namespace UserMangementTemplate.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;
    using System.Data.Entity.ModelConfiguration.Conventions;

    public partial class UserContext : DbContext
    {
        public UserContext()
            : base("name=UserContext")
        {
        }

        public virtual DbSet<Auth> Auth { get; set; }
        public virtual DbSet<department> department { get; set; }
        public virtual DbSet<DepPointer> DepPointer { get; set; }
        public virtual DbSet<LogInRegistry> LogInRegistry { get; set; }
        public virtual DbSet<Org> Org { get; set; }
        public virtual DbSet<Team> Team { get; set; }
        public virtual DbSet<TeamMember> TeamMember { get; set; }
        public virtual DbSet<TeamPointer> TeamPointer { get; set; }
        public virtual DbSet<User> User { get; set; }
        public virtual DbSet<UserInOrg> UserInOrg { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            //modelBuilder.Conventions.Remove<OneToManyCascadeDeleteConvention>();
        }
    }
}
