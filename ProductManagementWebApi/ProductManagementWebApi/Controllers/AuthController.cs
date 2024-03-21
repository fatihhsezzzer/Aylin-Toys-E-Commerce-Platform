using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProductManagementWebApi.Models.Interfaces;
using ProductManagementWebApi.Models;
using ProductManagementWebApi.Models.YourNamespace.Models;
using Microsoft.AspNetCore.Authorization;

namespace ProductManagementWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        readonly IAuthService authService;
        DataContext db=new DataContext();
        public AuthController(IAuthService authService)
        {
            this.authService = authService;
        }

        [HttpPost("/LoginUser")]
        public async Task<ActionResult<UserLoginResponse>> LoginUserAsync(UserLoginRequest request)
        {
            var result = await authService.LoginUserAsync(request);

            if (result.IsSuccess)
            {
                return Ok(result); 
            }
            else
            {
                return BadRequest(result); 
            }
        }
        [HttpPost("/RegisterUser")]
        [AllowAnonymous]
        
        public async Task<ActionResult<bool>> RegisterUserAsync(UserRegisterRequest request)
        {
            bool result = false;
            User user = new User()
            {
                Name=request.Name,
                Surname= request.Surname,
                Email = request.Email,
                Password = request.Password,
                
            };
            await db.Users.AddAsync(user);
            db.SaveChanges();
            result = true;
            return result;
        }
    }
}
