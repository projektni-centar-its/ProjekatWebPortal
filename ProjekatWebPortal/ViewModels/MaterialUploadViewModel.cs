using ProjekatWebPortal.Models;
using System.Collections.Generic;

namespace ProjekatWebPortal.ViewModels
{
    /// <summary>
    /// materijal upload view model
    /// </summary>
    public class MaterialUploadViewModel
    {
        /// <summary>
        /// Gets or sets the materijal.
        /// </summary>
        /// <value>
        /// The materijal.
        /// </value>
        public Material Material { get; set; }

        public List<School> schools { get; set; }

        public int schoolID { get; set; }
        
        public List<Major> majorsPerSchool { get; set; }

        public MaterialProfessorModel MaterialProfessorModel { get; set; }

        /// <summary>
        /// Gets or sets the predmeti.
        /// </summary>
        /// <value>
        /// The predmeti.
        /// </value>
        public IEnumerable<Subject> Subjects { get; set; }

        /// <summary>
        /// Gets or sets the tipovi materijala.
        /// </summary>
        /// <value>
        /// The tipovi materijala.
        /// </value>
        public IEnumerable<TypeMaterial> materialTypes { get; set; }

        /// <summary>
        /// Gets or sets the namene materijala.
        /// </summary>
        /// <value>
        /// The namene materijala.
        /// </value>
        public IEnumerable<PurposeMaterial> materialPurposes { get; set; }


        /// <summary>
        /// Gets or sets the smerovi.
        /// </summary>
        /// <value>
        /// The smerovi.
        /// </value>
        public IEnumerable<Major> Majors { get; set; }

        /// <summary>
        /// Gets or sets the predmet po smeru.
        /// </summary>
        /// <value>
        /// The predmet po smeru.
        /// </value>
        public List<Subject> SubjectPerMajor { get; set; }

        /// <summary>
        /// Gets or sets the moduli.
        /// </summary>
        /// <value>
        /// The moduli.
        /// </value>
        public IEnumerable<Module> Modules { get; set; }

        /// <summary>
        /// Gets or sets the modul po premdetu.
        /// </summary>
        /// <value>
        /// The modul po predmetu.
        /// </value>
        public List<Module> ModulePerSubject { get; set; }

        /// <summary>
        /// Gets or sets the smer identifier.
        /// </summary>
        /// <value>
        /// The smer identifier.
        /// </value>
        public int majorId { get; set; }

        /// <summary>
        /// Gets or sets the predmet identifier.
        /// </summary>
        /// <value>
        /// The predmet identifier.
        /// </value>
        public int subjectId { get; set; }

        /// <summary>
        /// Gets or sets the predmet identifier.
        /// </summary>
        /// <value>
        /// The predmet identifier.
        /// </value>
        public int moduleId { get; set; }
    }
}