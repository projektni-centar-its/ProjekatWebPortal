using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ProjekatWebPortal.Models
{
    public class TypeMaterial
    {
        public TypeMaterial(int id, string name)
        {
            this.typeMaterialId = id;
            this.typeMaterialName = name;
        }

        public int typeMaterialId { get; set; }
        public string typeMaterialName { get; set; }
    }
}