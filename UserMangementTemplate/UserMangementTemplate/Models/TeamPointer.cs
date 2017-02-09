namespace UserMangementTemplate.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("TeamPointer")]
    public partial class TeamPointer
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public int ChildId { get; set; }

        public int ParentId { get; set; }

        public virtual Team Team { get; set; }

        public virtual Team Team1 { get; set; }
    }
}
