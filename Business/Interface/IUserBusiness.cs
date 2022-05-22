using Entities.DTO;

namespace Business.Interface
{
    public interface IUserBusiness
    {
        Task<List<UserDTO>> GetAll();
    }
}
