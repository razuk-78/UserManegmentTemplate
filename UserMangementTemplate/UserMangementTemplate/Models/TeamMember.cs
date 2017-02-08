namespace UserMangementTemplate.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("TeamMember")]
    public partial class TeamMember
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }

        public int UserInOrgId { get; set; }

        [Required]
        [StringLength(50)]
        public string Position { get; set; }

        public int TeamId { get; set; }

        public virtual Team Team { get; set; }

        public virtual UserInOrg UserInOrg { get; set; }
    }
}
