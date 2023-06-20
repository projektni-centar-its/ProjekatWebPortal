using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using ProjekatWebPortal.Data;
using ProjekatWebPortal.Models;
using ProjekatWebPortal.ViewModels;
using System.Diagnostics;
using System.Runtime.Intrinsics.Arm;

namespace ProjekatWebPortal.Controllers
{
    public class MaterialsController : Controller
    {
        private readonly ILogger<MaterialsController> logger;
        private readonly ApplicationDbContext context;
        private readonly UserManager<ApplicationUser> userManager;


        public MaterialsController(ILogger<MaterialsController> _logger, ApplicationDbContext _context, UserManager<ApplicationUser> _userManager)
        {
            logger = _logger;
            context = _context;
            userManager = _userManager;
        }



        // GET: Materijal
        /// <summary>
        /// Index akcija
        /// </summary>
        /// <returns>Index view</returns>
        public ActionResult Index()
        {
            return View();
        }

        

        /// <summary>
        /// Prikaz materijala sa sortiranjem
        /// </summary>
        /// <param name="sort">String po kome se sortiraju materijali.</param>
        /// <param name="formati">Lista formata za prikaz.</param>
        /// <param name="tipovi">Lista tipova materijala za prikaz.</param>
        /// <param name="number">The number.</param>
        /// <param name="id">Id modula za koji su materijali, ako je id = null, predpostavlja se da je dati materijal za profesore</param>
        /// <returns>Parcijalni pregled karticw</returns>
        [HttpGet]
        public async Task<ActionResult> MaterialsShow(string sort, List<string> formati, List<int> tipovi, int number = 0, int? id = null)
        {
            List<OsiromaseniMaterijali> osiromaseniMaterijali;

            List<Material> materijali;

            MaterialsAdvancedSearchViewModel vm = new MaterialsAdvancedSearchViewModel();
            int namenaID = 1;
            //if (id == null)
            //{
            //    if (User.IsInRole("Ucenik"))
            //    {
            //        return new NotFoundResult();
            //    }
            //    namenaID = 2;
            //}
            //if (this.User.IsInRole("Ucenik"))
            //{
            //    int? smer = await ApplicationUser.VratiSmerId(this.User.Identity.Name);
            //    if (smer != null)
            //    {
            //        ModulModel mod = context.moduli.FirstOrDefault(x => x.modulId == id);
            //        PredmetPoSmeru pos = context.predmetiPoSmeru.FirstOrDefault(x => x.predmetId == mod.predmetId && x.smerId == smer);

            //        if (pos == null)
            //        {
            //            return new HttpStatusCodeResult(403);
            //        }
            //    }
            //}

            osiromaseniMaterijali = naprednaPretraga(formati, tipovi, id, namenaID).ToList();

            vm.osiromaseniMaterijali = osiromaseniMaterijali;

            //if (sort == "opadajuce")
            //{
            //    materijali = context.naprednaPretraga(formati, tipovi, id, namenaID).ToList();
            //    materijali.Reverse();

            //    vm = new MaterijaliNaprednaPretragaViewModel
            //    {
            //        osiromaseniMaterijali = materijali,
            //        naprednaPretragaSelektovani = "",
            //        tipoviMaterijala = context.tipMaterijala.ToList()
            //    };

            //    return PartialView("_Kartice", vm);
            //}
            //else if (sort == "rastuce")
            //{
            //    materijali = context.naprednaPretraga(formati, tipovi, id, namenaID).ToList();

            //    vm = new MaterijaliNaprednaPretragaViewModel
            //    {
            //        osiromaseniMaterijali = materijali,
            //        naprednaPretragaSelektovani = "",
            //        tipoviMaterijala = context.tipMaterijala.ToList()
            //    };
            //    return PartialView("_Kartice", vm);
            //}

            //vm = new MaterijaliNaprednaPretragaViewModel
            //{
            //    osiromaseniMaterijali = materijali,
            //    naprednaPretragaSelektovani = "",
            //    tipoviMaterijala = context.tipMaterijala.ToList()
            //};

            //if (sort != null && tipovi.Count != 0)
            //{
            //    return View("_Kartice", vm);
            //}

            return View("MaterialsShow", vm);
        }

        //public JsonResult GetSmerovi(int skolaID)
        //{
        //    MaterijalUploadViewModel viewModel = new MaterijalUploadViewModel
        //    {
        //        tipoviMaterijala = context.tipMaterijala.ToList(),
        //        nameneMaterijala = context.nameneMaterijala.ToList(),
        //        skole = context.skole.ToList(),
        //        Smerovi = context.smerovi.ToList(),
        //        Predmeti = context.predmeti.ToList(),
        //        Moduli = context.moduli.ToList()
        //    };

        //    var smeroviPoSkoli = context.smeroviPoSkolama.Where(x => x.skolaId == skolaID).Select(x => x.smerId).ToList();
        //    viewModel.SmeroviPoSkolama = context.smerovi.Where(x => smeroviPoSkoli.Contains(x.smerId)).ToList();

        //    if (viewModel.SmeroviPoSkolama.Count > 0)
        //    {
        //        int id = viewModel.SmeroviPoSkolama.FirstOrDefault().smerId;

        //        var predmetiposmeru = context.predmetiPoSmeru.Where(x => x.smerId == id).Select(c => c.predmetId).ToList();
        //        viewModel.PredmetPoSmeru = viewModel.Predmeti.Where(x => predmetiposmeru.Contains(x.predmetId)).ToList();

        //        int idP = viewModel.PredmetPoSmeru.FirstOrDefault().predmetId;

        //        viewModel.ModulPoPredmetu = context.moduli.Where(x => x.predmetId == idP).ToList();

        //        if (viewModel.ModulPoPredmetu.Count() < 1)
        //        {
        //            viewModel.ModulPoPredmetu = new List<ModulModel>();
        //        }

        //        var res = new { smerovi = viewModel.SmeroviPoSkolama, predmeti = viewModel.PredmetPoSmeru, moduli = viewModel.ModulPoPredmetu };

        //        return Json(res, JsonRequestBehavior.AllowGet);
        //    }
        //    viewModel.ModulPoPredmetu = new List<ModulModel>();
        //    viewModel.PredmetPoSmeru = new List<PredmetModel>();
        //    var result = new { smerovi = viewModel.SmeroviPoSkolama, predmeti = viewModel.PredmetPoSmeru, moduli = viewModel.ModulPoPredmetu };

        //    return Json(result, JsonRequestBehavior.AllowGet);
        //}

        //public JsonResult GetPredmeti(int smerID)
        //{
        //    MaterijalUploadViewModel viewModel = new MaterijalUploadViewModel
        //    {
        //        tipoviMaterijala = context.tipMaterijala.ToList(),
        //        nameneMaterijala = context.nameneMaterijala.ToList(),
        //        skole = context.skole.ToList(),
        //        Smerovi = context.smerovi.ToList(),
        //        Predmeti = context.predmeti.ToList(),
        //        Moduli = context.moduli.ToList()
        //    };

        //    var predmetiposmeru = context.predmetiPoSmeru.Where(x => x.smerId == smerID).Select(c => c.predmetId).ToList();
        //    viewModel.PredmetPoSmeru = viewModel.Predmeti.Where(x => predmetiposmeru.Contains(x.predmetId)).ToList();

        //    if (viewModel.PredmetPoSmeru.Count < 1)
        //    {
        //        viewModel.PredmetPoSmeru = new List<PredmetModel>();
        //        viewModel.ModulPoPredmetu = new List<ModulModel>();

        //        var result = new { predmeti = viewModel.PredmetPoSmeru, moduli = viewModel.ModulPoPredmetu };

        //        return Json(result, JsonRequestBehavior.AllowGet);
        //    }

        //    int idP = viewModel.PredmetPoSmeru.FirstOrDefault().predmetId;

        //    viewModel.ModulPoPredmetu = context.moduli.Where(x => x.predmetId == idP).ToList();

        //    if (viewModel.ModulPoPredmetu.Count() < 1)
        //    {
        //        viewModel.ModulPoPredmetu = new List<ModulModel>();
        //    }

        //    var res = new { predmeti = viewModel.PredmetPoSmeru, moduli = viewModel.ModulPoPredmetu };

        //    return Json(res, JsonRequestBehavior.AllowGet);
        //}

        //public JsonResult GetModuli(int modulID)
        //{
        //    MaterijalUploadViewModel viewModel = new MaterijalUploadViewModel
        //    {
        //        tipoviMaterijala = context.tipMaterijala.ToList(),
        //        nameneMaterijala = context.nameneMaterijala.ToList(),
        //        skole = context.skole.ToList(),
        //        Smerovi = context.smerovi.ToList(),
        //        Predmeti = context.predmeti.ToList(),
        //        Moduli = context.moduli.ToList()
        //    };

        //    viewModel.ModulPoPredmetu = context.moduli.Where(x => x.predmetId == modulID).ToList();

        //    if (viewModel.ModulPoPredmetu.Count() < 1)
        //    {
        //        viewModel.ModulPoPredmetu = new List<ModulModel>();
        //    }

        //    var res = new { moduli = viewModel.ModulPoPredmetu };

        //    return Json(res, JsonRequestBehavior.AllowGet);
        //}

        //kod ove akcije treba dodati punjenje tabele namena materijala
        /// <summary>
        /// Vraca view na kome je forma za dodavanje predmeta
        /// </summary>
        /// <param name="smerId">Id smera za koji je predmet koji se dodaje.</param>
        /// <returns></returns>
        [HttpGet]
        [Authorize]
        public async Task<ActionResult> UploadMaterial()
        {
            MaterialUploadViewModel viewModel = new MaterialUploadViewModel
            {
                materialTypes = new List<TypeMaterial> { new TypeMaterial(1, "lokalni"), new TypeMaterial(2, "globalni") },
                materialPurposes = new List<PurposeMaterial> { new PurposeMaterial(1, "Materijal sa vežbi"), new PurposeMaterial(2, "Materijal sa predavanja"), new PurposeMaterial(3, "Materijal za samostalni rad") },
                schools = context.Schools.ToList(),
                Majors = context.Majors.ToList(),
                Subjects = context.Subjects.ToList(),
                Modules = context.Modules.ToList()
            };
            string currentUserId = userManager.GetUserId(HttpContext.User);
            ApplicationUser currentUser = userManager.Users.Where(u => u.Id == currentUserId).First();
            List<MajorSchool> smeroviPoSkoli;
            try
            {
                var schoolId = viewModel.schools.ToList()[0].Id;
                if (!this.User.IsInRole("SuperAdministrator"))
                {
                    School school = context.Schools.Where(s => s.Id == currentUser.SchoolId).First();
                    if (school.Id > 0)
                    {
                        schoolId = school.Id;
                    }
                }
                smeroviPoSkoli = context.MajorSchool.Where(ms => ms.SchoolId == schoolId).ToList();

                viewModel.majorsPerSchool = (from smPs in smeroviPoSkoli
                                            select smPs.Major).ToList();
                int id = viewModel.majorsPerSchool.First().Id;

               var predmetiposmeru = context.MajorSubject.Where(ms => ms.MajorId == id).Select(c => c.SubjectId).ToList();
               viewModel.SubjectPerMajor = viewModel.Subjects.Where(x => predmetiposmeru.Contains(x.Id)).ToList();

                int idP = viewModel.SubjectPerMajor.FirstOrDefault().Id;

                viewModel.ModulePerSubject = context.Modules.Where(mod => mod.SubjectId == idP).ToList();

                if (TempData["SuccMsg"] != null) { ViewBag.SuccMsg = TempData["SuccMsg"]; }

                return View("UploadMaterial", viewModel);
            }
            catch (ArgumentOutOfRangeException) {
                    return new NotFoundResult();
            }
        }

        //kod ove akcije treba dodati punjenje tabele namena materijala
        /// <summary>
        /// Dodaje materijal u bazu
        /// </summary>
        /// <param name="materijal">Materijal model.</param>
        /// <param name="file">Uploadovani fajl.</param>
        /// <param name="predmet">Predmet za koji je materijal.</param>
        /// <returns></returns>
        [HttpPost]
        [Authorize(Roles = "SuperAdministrator, Administrator, LokalniUrednik, Profesor")]
        public ActionResult UploadMaterial(Material material, IFormFile file, int moduleId, string idUser, string odobreno, int subjectId)
        {
            if (idUser != null)
            {
                material.idUser = idUser;
            }
            if (odobreno != null)
            {
                material.Approved = Boolean.Parse(odobreno);
            }
            if (ModelState.IsValid)
            {
                Console.WriteLine("VALID!");
                if (file != null)
                {

                    string nazivFajla = Path.GetFileName(file.FileName);

                    material.Timestamp = DateTime.Now;
                    material.fileMimeType = file.ContentType;
                    material.materialFileByteArray = new byte[file.Length];
                    file.OpenReadStream().Read(material.materialFileByteArray, 0, (int)file.Length);
                    material.Name = nazivFajla;
                    material.materialExtension = Path.GetExtension(nazivFajla);
                    material.Description = material.Description;
                    material.Name = material.Name;
                    material.IsDeleted = false;

                    context.Materials.Add(material);

                    // NA KRAJU
                    // samo ucenici imaju module. Ako je ucenik, onda ce imati moduo
                    //if ((int)material.MaterialPurpose != 2) // za ucenike // prof - 2, ucenici - 1
                    //{
                    //    //context.Add<MaterijalPoModulu>(new MaterijalPoModulu
                    //    //{
                    //    //    modulId = modulId,
                    //    //    materijalId = materijal.materijalId
                    //    //});

                    //    // return Content(moduleId.ToString());
                    //    Module moduleToAdd = new Module()
                    //    {
                    //        Name = nazivFajla,
                    //        Description = nazivFajla,
                    //        SubjectId = subjectId,
                    //    };
                    //    moduleToAdd.Materials.Add(material);
                    //    context.Modules.Add(moduleToAdd);
                    //}

                    context.SaveChanges();

                    ViewBag.Message = "Uspešno ste postavili materijal!";
                    //ViewBag.Message = "Uspešno ste postavili materijal!";
                    return RedirectToAction("UploadMaterial", "Materials");
                    //return View("UploadMaterijal", ViewModel);
                }
                else
                {
                    ViewBag.Message = "Postavljanje materijala nije uspelo!";
                    //TempData["ErrorMsg"] = "Postavljanje materijala nije uspelo!";
                    return RedirectToAction("UploadMaterial", "Materials");
                }

               
            }
            else
            {
                ViewBag.Message = "Postavljanje materijala nije uspelo!";
                //TempData["ErrorMsg"] = "Postavljanje materijala nije uspelo!";
                return RedirectToAction("UploadMaterial", "Materials");
            }
        }

        //[HttpGet]
        //[Authorize(Roles = "SuperAdministrator,LokalniUrednik")]
        //public ActionResult MaterijaliCekanje()
        //{
        //    MaterijaliNaprednaPretragaViewModel materijal = new MaterijaliNaprednaPretragaViewModel();

        //    List<OsiromaseniMaterijali> listaMaterijalaCekanje = context.nacekanju().ToList();
        //    materijal.osiromaseniMaterijali = listaMaterijalaCekanje;

        //    if (TempData["SuccMsg"] != null) { ViewBag.SuccMsg = TempData["SuccMsg"]; }

        //    return View(materijal);
        //}

        //[HttpPost]
        //[Authorize(Roles = "SuperAdministrator,LokalniUrednik")]
        //public ActionResult ObrazlozenjeMaterijal(string obrazlozenje, int id)
        //{
        //    MaterijalModel model = new MaterijalModel() { materijalId = id, obrazlozenje = obrazlozenje, odobreno = "false" };
        //    using (MaterijalContext db = new MaterijalContext())
        //    {
        //        db.materijali.Attach(model);
        //        db.Entry(model).Property(x => x.obrazlozenje).IsModified = true;
        //        db.Entry(model).Property(x => x.odobreno).IsModified = true;
        //        db.SaveChanges();
        //    }
        //    TempData["SuccMsg"] = "Uspesno uneseno";

        //    return RedirectToAction("MaterijaliCekanje");
        //}

        //[HttpGet]
        //[Authorize(Roles = "SuperAdministrator,Profesor")]
        //public ActionResult UrednikOdgovor()
        //{
        //    MaterijalContext materijalContext = new MaterijalContext();
        //    UrednikOdgovorViewModel urednik = new UrednikOdgovorViewModel();
        //    var idUser = User.Identity.GetUserId();

        //    var odgovor = materijalContext.materijali.Where(x => x.odobreno.Equals("false") && x.obrazlozenje != null && x.idUser == idUser).Select(x => new UrednikOdgovorViewModel { MaterijalOpis = x.materijalOpis, MaterijalNaslov = x.materijalNaslov, Obrazlozenje = x.obrazlozenje, datum = x.datumMaterijali }).ToList();

        //    return View(odgovor);
        //}

        ///*[HttpPost]
        //[Authorize(Roles ="Profesor")]
        //public ActionResult UploadMaterijalProfesor(MaterijalProfesorModel materijalProfesor,HttpPostedFileBase file,PredmetPoSmeru predmet)
        //{
        //    materijalProfesor.predmetId = predmet.predmetId;
        //    context = new MaterijalContext();
        //    if (materijalProfesor.namenaMaterijalaId == 2)
        //    {
        //        materijalProfesor.predmetId = null;
        //    }
        //    if (ModelState.IsValid)
        //    {
        //        if (file != null)
        //        {
        //            string nazivFajla = Path.GetFileName(file.FileName);

        //            materijalProfesor.fileMimeType = file.ContentType;
        //            materijalProfesor.materijalFile = new byte[file.ContentLength];
        //            file.InputStream.Read(materijalProfesor.materijalFile, 0, file.ContentLength);
        //            materijalProfesor.materijalNaziv = nazivFajla;
        //            materijalProfesor.materijalEkstenzija = Path.GetExtension(nazivFajla);
        //            materijalProfesor.materijalOpis = materijalProfesor.materijalOpis;
        //            materijalProfesor.materijalNaslov = materijalProfesor.materijalNaslov;

        //            context.Add<MaterijalProfesorModel>(materijalProfesor);
        //            context.SaveChanges();
        //        }
        //        ViewBag.Message = "Uspešno ste postavili materijal!";

        //        return RedirectToAction("UploadMaterijal", "Materijal");
        //    }
        //    else
        //    {
        //        ViewBag.Message = "Postavljanje materijala nije uspelo!";
        //        return RedirectToAction("UploadMaterijal", "Materijal");
        //    }
        //}*/

        /// <summary>
        /// Skida selektovani materijal
        /// </summary>
        /// <param name="id">Id materijala za download.</param>
        /// <returns></returns>
        public FileContentResult DownloadMaterial(int id)
        {
            Material materijal = context.Materials.Where(m=> (int)m.Id == (int)id).First();
            if (materijal != null)
            {
                return File(materijal.materialFileByteArray, materijal.fileMimeType, materijal.Name);
            }
            else
            {
                return null;
            }
        }

        //public ActionResult Delete(int id)
        //{
        //    MaterijalModel materijal = context.pronadjiMaterijalPoId(id);
        //    if (materijal == null)
        //    {
        //        return HttpNotFound();
        //    }
        //    return View("Delete", materijal);
        //}

        ///// <summary>
        ///// Brise materijal
        ///// </summary>
        ///// <param name="id">Id materijala za brisanje</param>
        ///// <returns></returns>
        //[HttpPost]
        //[Authorize(Roles = "SuperAdministrator,LokalniUrednik,GlobalniUrednik")]
        ////[ActionName("Delete")]
        ////[Route("UploadMaterijal/DeleteConfirmed/{id:int}")]
        //public ActionResult DeleteConfirmed(int id, int? modulId)
        //{
        //    if (modulId != null)
        //    {
        //        try
        //        {
        //            MaterijalPoModulu matPoMod = context.materijalPoModulu.Where(x => x.materijalId == id && x.modulId == modulId).FirstOrDefault();
        //            context.Delete<MaterijalPoModulu>(matPoMod);
        //            context.SaveChanges();
        //        }
        //        catch (Exception) { }
        //    }
        //    List<MaterijalPoModulu> lista = context.materijalPoModulu.Where(x => x.materijalId == id).ToList();
        //    if (lista.Count == 0)
        //    {
        //        MaterijalModel temp = context.pronadjiMaterijalPoId(id);
        //        temp.Obrisan = true;
        //        context.SaveChanges();
        //    }

        //    return RedirectToAction("MaterijaliPrikaz");
        //}

        //public ActionResult SortirajPoTipuMaterijala(int id)
        //{
        //    context = new MaterijalContext();
        //    List<MaterijalModel> model = context.materijali.Where(m => m.tipMaterijalId == id).ToList();

        //    return View("MaterijaliPrikaz", model);

        //}

        /// <summary>
        /// Filtrira materijal po formatu i tipu materijala.
        /// </summary>
        /// <param name="ekstenzija">Zeljena ekstenzija po kojoj se filtrira.</param>
        /// <param name="id">Id tipa materijala po kome se filtrira.</param>
        /// <param name="materijali">Lista materijala za filtriranje.</param>
        //public void FiltrirajPoFormatuMaterijala(string ekstenzija, int id, ref List<MaterijalModel> materijali) //Refaktorisati naziv akcije kasnije jer se ffiltrira i tip materijala ne samo format
        //{
        //    materijali = context.materijali.Where(m => m.materijalEkstenzija == ekstenzija && m.tipMaterijalId == id).ToList();//scuffed
        //}


        IQueryable<OsiromaseniMaterijali> naprednaPretraga(List<string> ekstenzije, List<int> tipoviMaterijalaIds, int? modulId, int namenaID)//Dodati parametre
        {
            // && (a => tipoviMaterijalaIds.Any(s => a.tipMaterijalaId)
            //if (namenaID == 2)
            //{
                IQueryable<OsiromaseniMaterijali> materijali2;

                materijali2 = from mat in context.Materials
                              //where mat.MaterialPurpose == 2
                              select new OsiromaseniMaterijali
                              {
                                  namenaID = 1,//(int)mat.MaterialPurpose,
                                  materijalId = (int)mat.Id,
                                  ekstenzija = mat.materialExtension,
                                  materijalNaslov = mat.Name,
                                  materijalOpis = mat.Description,
                                  tipMaterijalaId = 1//(int)mat.MaterialType
                              };

                return materijali2;
            //}

        //    var queriable = context.poModulu(modulId);
        //    queriable = poNameni(namenaID, queriable);

        //    if (ekstenzije != null && tipoviMaterijalaIds != null)
        //    {
        //        queriable = queriable.
        //           Where(a => ekstenzije.Any(s => a.ekstenzija.Contains(s)));

        //        queriable = queriable.
        //            Where(a => tipoviMaterijalaIds.Any(s => a.tipMaterijalaId.ToString().Contains(s.ToString())));

        //        return queriable;
        //    }
        //    else if (ekstenzije == null && tipoviMaterijalaIds != null)
        //    {
        //        queriable = queriable.
        //        Where(a => tipoviMaterijalaIds.Any(s => a.tipMaterijalaId.ToString().Contains(s.ToString())));

        //        return queriable;
        //    }
        //    else if (ekstenzije != null && tipoviMaterijalaIds == null)
        //    {
        //        queriable = queriable.
        //        Where(a => ekstenzije.Any(s => a.ekstenzija.Contains(s)));

        //        return queriable;
        //    }
        //    else
        //        return queriable;
      }

    }
}