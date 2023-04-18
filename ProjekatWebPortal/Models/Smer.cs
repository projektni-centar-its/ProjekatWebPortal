using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjekatWebPortal.Models
{
    public class Smer
    {
        [Key]
        public int smerId { get; set; }
        public string smerNaziv { get; set; }
        public string smerOpis { get; set; }
        public string smerSkraceno { get; set; }


        public string nazivFajlIts { get; set; }
        public string nazivFajlNs { get; set; }
        public string nazivFajlMs { get; set; }


        public string fajlIts { get; set; }
        public string fileMimeTypeIts { get; set; }
        public string fileEkstenzijaIts { get; set; }


        public string fajlNs { get; set; }
        public string fileMimeTypeNs { get; set; }
        public string fileEkstenzijaNs { get; set; }

        public string fajlMs { get; set; }
        public string fileMimeTypeMs { get; set; }
        public string fileEkstenzijaMs { get; set; }

        public IList<PredmetPoSmeru> PredmetPoSmerus { get; set; }
    }
}
