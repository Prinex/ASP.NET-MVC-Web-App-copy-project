using Microsoft.AspNetCore.Mvc;

namespace MyWebApp.Controllers
{
    public class AccountController : Controller
    {
        public IActionResult Login()
        {
            return View();
        }
    }
}
