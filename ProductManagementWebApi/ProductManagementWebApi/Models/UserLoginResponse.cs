namespace ProductManagementWebApi.Models
{
    public class UserLoginResponse
    {

        public bool AuthenticateResult { get; set; }
        public string AuthToken { get; set; }
        public DateTime AccessTokenExpireDate { get; set; }
        public bool IsSuccess { get;  set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public int Id { get; set; }
    }
}
