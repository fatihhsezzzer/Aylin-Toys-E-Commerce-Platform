using ProductManagementWebApi.Models;

namespace ProductManagementWebApi.Models.Interfaces
{
    public interface IAuthService
    {
        public Task<UserLoginResponse> LoginUserAsync(UserLoginRequest request);
    }
}
