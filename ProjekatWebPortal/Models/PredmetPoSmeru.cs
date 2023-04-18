using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;

namespace ProjekatWebPortal.Models
{
    public class PredmetPoSmeru
    {
        public int PredmetId { get; set; }
        public Predmet Predmet { get; set; }

        public int SmerId { get; set; }
        public Smer Smer { get; set; }

    }
}
