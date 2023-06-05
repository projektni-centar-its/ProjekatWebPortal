namespace ProjekatWebPortal.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;


    public partial class MaterialProfessorModel
    {
       
        public int materijalId { get; set; }
       
        public byte[] materijalFile { get; set; }
        public string fileMimeType { get; set; }

        public string materijalOpis { get; set; }

        public string materijalEkstenzija { get; set; }

        public string materijalNaziv { get; set; }

        public string materijalNaslov { get; set; }

        public int? predmetId { get; set; }
      //  [ForeignKey("TipMaterijalModel")]
        public int tipMaterijalId { get; set; }
       // [ForeignKey("NamenaMaterijalModel")]
        public int namenaMaterijalaId { get; set; }

        public string odobreno { get; set; }

        public string obrazlozenje { get; set; }

        // DOVRSI
        //public NamenaMaterijalaModel namenaMaterijalaModel { get; set; }
        //public TipMaterijalModel TipMaterijalModel { get; set; }
        //public PredmetModel PredmetModel { get; set; }
    }
}
