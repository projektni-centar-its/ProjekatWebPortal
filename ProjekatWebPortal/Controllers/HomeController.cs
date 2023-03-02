using Microsoft.AspNetCore.Mvc;
using ProjekatWebPortal.Models;
using System.Diagnostics;

namespace ProjekatWebPortal.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult UserManager()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        public IActionResult Info()
        {
            return Content("Uspesno preusmereno na stranu info!");
        }

        public IActionResult Izmeni()
        {
            return Content("Uspesno preusmereno na stranu izmeni!");
        }

        public IActionResult Obrisi()
        {
            return Content("Uspesno preusmereno na stranu obrisi!");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}