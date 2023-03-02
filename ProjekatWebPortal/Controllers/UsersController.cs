using Microsoft.AspNetCore.Mvc;

namespace ProjekatWebPortal.Controllers
{
    public class UsersController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Info()
        {
            return Content("Uspesno preusmereno na stranu info!");
        }

        public IActionResult Edit()
        {
            return Content("Uspesno preusmereno na stranu izmeni!");
        }

        public IActionResult Delete()
        {
            return Content("Uspesno preusmereno na stranu obrisi!");
        }
    }
}
