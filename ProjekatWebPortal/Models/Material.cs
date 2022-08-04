using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ProjekatWebPortal.Models
{
    public enum MaterialType : short
    {
        Vezbe = 0,
        Predavanja = 1,
        SamostalanRad = 2
    }
    public enum MaterialUsage : short
    {
        ZaUcenike = 0,
        ZaProfesore = 1
    }
    public class Material
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        public string FilePath { get; set; }
        public bool Approved { get; set; }
        public string PostedById { get; set; }
        public ApplicationUser PostedBy { get; set; }
        public DateTime Timestamp { get; set; }
        public bool IsDeleted { get; set; }
        public MaterialType MaterialType { get; set; }
        public MaterialUsage MaterialUsage { get; set; }
        public IList<Module> Modules { get; set; }
    }
}
