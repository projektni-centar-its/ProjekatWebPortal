using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ProjekatWebPortal.Models
{
    public enum MaterialType : short
    {
        Vezbe = 1,
        Predavanja = 2,
        SamostalanRad = 3
    }
    //public enum MaterialPurpose : short
    //{
    //    ZaUcenike = 1,
    //    ZaProfesore = 2
    //}
    public class Material
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string FilePath { get; set; }
        public bool Approved { get; set; }
        public string PostedById { get; set; }
        public ApplicationUser PostedBy { get; set; }
        public DateTime Timestamp { get; set; }
        public bool IsDeleted { get; set; }
        public string idUser { get; set; }
        public MaterialType MaterialType { get; set; }
        public int MaterialPurpose { get; set; }
        public IList<Module> Modules { get; set; }

        public string fileMimeType { get; set; }
        public byte[] materialFileByteArray { get; set; }
        public string materialExtension { get; set; }

    }
}
