using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using ProjekatWebPortal.Models;
using System.Diagnostics;

namespace ProjekatWebPortal.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly SignInManager<ApplicationUser> _signInManager;


        public HomeController(ILogger<HomeController> logger, SignInManager<ApplicationUser> signInManager)
        {
            _logger = logger;
            _signInManager = signInManager;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        public IActionResult redirectToLogin()
        {
            //return View();
            return Redirect("Identity/Account/Login");

        }

        [HttpPost]
        public async Task<IActionResult> logout()
        {

            await _signInManager.SignOutAsync();
            _logger.LogInformation("User logged out.");
            
                return RedirectToPage("/Login");
            

        }
    }
}