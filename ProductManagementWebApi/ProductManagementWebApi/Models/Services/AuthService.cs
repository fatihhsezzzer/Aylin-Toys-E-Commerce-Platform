using ProductManagementWebApi.Models.Interfaces;
using ProductManagementWebApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ProductManagementWebApi.Models.Services
{
    public class AuthService : IAuthService
    {
        readonly ITokenService tokenService;
        public AuthService(ITokenService _tokenService)
        {
           this.tokenService = _tokenService;
        }
        DataContext db=new DataContext();

        public async Task<UserLoginResponse> LoginUserAsync(UserLoginRequest request)
        {
            // Giriş bilgilerinin boş olup olmadığını kontrol et
            if (string.IsNullOrEmpty(request.Email) || string.IsNullOrEmpty(request.Password))
            {
                throw new ArgumentNullException(nameof(request));
            }

            // Veritabanından kullanıcıyı bul
            var user = await db.Users
                .FirstOrDefaultAsync(u => u.Email == request.Email && u.Password == request.Password);

            // Kullanıcı bulunamazsa
            if (user == null)
            {
                return new UserLoginResponse
                {
                    AuthenticateResult = false,
                  
                };
            }

            // Token bilgilerini üret
            var generateTokenInformation = await tokenService.GenerateTokenAsync(new GenerateTokenRequest { Email = user.Email });

            // Token bilgilerini ve doğrulama sonucunu ayarla
            return new UserLoginResponse
            {
                AccessTokenExpireDate = generateTokenInformation.TokenExpireDate,
                AuthenticateResult = true,
                AuthToken = generateTokenInformation.Token,
                IsSuccess = true,
                Name=user.Name,
                Surname=user.Surname,
                Id=user.Id
                
            };
        }
    }
}
