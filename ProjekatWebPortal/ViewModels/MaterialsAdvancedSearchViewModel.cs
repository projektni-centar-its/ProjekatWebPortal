using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ProjekatWebPortal.Models;
using ProjekatWebPortal.ViewModels;

namespace ProjekatWebPortal.ViewModels
{
    /// <summary>
    /// materijali napredna pretraga view model
    /// </summary>
    public class MaterialsAdvancedSearchViewModel
    {

        /// <summary>
        /// Gets or sets the osiromaseni materijali.
        /// </summary>
        /// <value>
        /// The osiromaseni materijali.
        /// </value>
        public List<ViewModels.OsiromaseniMaterijali> osiromaseniMaterijali { get; set; }

        /// <summary>
        /// Gets or sets the tipovi materijala.
        /// </summary>
        /// <value>
        /// The tipovi materijala.
        /// </value>
        public IEnumerable<ProjekatWebPortal.Models.TypeMaterial> MaterialTypes { get; set; }

        /// <summary>
        /// Gets or sets the tip materijala.
        /// </summary>
        /// <value>
        /// The tip materijala.
        /// </value>
        public int currentMaterialType { get; set; }

        /// <summary>
        /// Gets or sets the materijal.
        /// </summary>
        /// <value>
        /// The materijal.
        /// </value>
        public Material material { get; set; }

        /// <summary>
        /// Gets or sets the napredna pretraga selektovani.
        /// </summary>
        /// <value>
        /// The napredna pretraga selektovani.
        /// </value>
        //public string naprednaPretragaSelektovani { get; set; }
        // advanced search
    }
}