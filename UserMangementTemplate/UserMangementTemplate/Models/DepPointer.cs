namespace UserMangementTemplate.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DepPointer")]
    public partial class DepPointer
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }

        public int ChildId { get; set; }

        public int ParentId { get; set; }

        public virtual department department { get; set; }

        public virtual department department1 { get; set; }
    }
}
