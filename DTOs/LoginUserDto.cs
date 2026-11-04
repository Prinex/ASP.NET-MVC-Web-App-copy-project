using System.ComponentModel.DataAnnotations;

namespace MyWebApp.DTOs
{
    public class LoginUserDTO
    {
        [Display(Name = "Email")]
        public required string Email { get; set; }
        [Display(Name = "Password")]
        public required string Password { get; set; }
        [Display(Name = "Remember me?")]
        public bool RememberMe { get; set; }
    }
}
