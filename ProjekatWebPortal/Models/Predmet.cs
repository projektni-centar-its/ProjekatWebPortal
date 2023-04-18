using System.ComponentModel.DataAnnotations;

namespace ProjekatWebPortal.Models
{
    public class Predmet
    {
        [Key]
        public int predmetId { get; set; }

        [Required] 
        public string predmetNaziv { get; set; }
        [Required]
        public string predmetOpis { get; set; }
        [Required]
        public int Razred { get; set;}
        [Required]
        public int tipId { get; set; }

        public IList<PredmetPoSmeru> PredmetPoSmerus { get; set; }

    }
}
