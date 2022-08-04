using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ProjekatWebPortal.Models
{
    public class OrganizationFile
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int MajorId { get; set; }
        public Major Major { get; set; }
        [Required]
        public string Name { get; set; }
        public string FilePath { get; set; }
    }
}
