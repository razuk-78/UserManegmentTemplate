namespace UserMangementTemplate.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

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
            modelBuilder.Entity<department>()
                .HasMany(e => e.Auth)
                .WithOptional(e => e.department)
                .HasForeignKey(e => e.DepId);

            modelBuilder.Entity<department>()
                .HasMany(e => e.DepPointer)
                .WithRequired(e => e.department)
                .HasForeignKey(e => e.ChildId)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<department>()
                .HasMany(e => e.DepPointer1)
                .WithRequired(e => e.department1)
                .HasForeignKey(e => e.ParentId)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<department>()
                .HasMany(e => e.UserInOrg1)
                .WithRequired(e => e.department1)
                .HasForeignKey(e => e.DepId)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Org>()
                .HasMany(e => e.department)
                .WithRequired(e => e.Org)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Org>()
                .HasMany(e => e.UserInOrg)
                .WithRequired(e => e.Org)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Team>()
                .HasMany(e => e.TeamMember)
                .WithRequired(e => e.Team)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Team>()
                .HasMany(e => e.TeamPointer)
                .WithRequired(e => e.Team)
                .HasForeignKey(e => e.ChildId)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Team>()
                .HasMany(e => e.TeamPointer1)
                .WithRequired(e => e.Team1)
                .HasForeignKey(e => e.ParentId)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<User>()
                .HasMany(e => e.UserInOrg)
                .WithRequired(e => e.User)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<UserInOrg>()
                .HasMany(e => e.department)
                .WithRequired(e => e.UserInOrg)
                .HasForeignKey(e => e.AdminId)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<UserInOrg>()
                .HasMany(e => e.LogInRegistry)
                .WithRequired(e => e.UserInOrg)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<UserInOrg>()
                .HasMany(e => e.TeamMember)
                .WithRequired(e => e.UserInOrg)
                .WillCascadeOnDelete(false);
        }
    }
}
