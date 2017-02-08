namespace UserMangementTemplate.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("LogInRegistry")]
    public partial class LogInRegistry
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }

        public int UserInOrgId { get; set; }

        public DateTime TimeLogIn { get; set; }

        public virtual UserInOrg UserInOrg { get; set; }
    }
}
