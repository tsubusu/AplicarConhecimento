using Entities.DTO;
using FluentResults;

namespace Business.Interface
{
    public interface IUserBusiness
    {
        Task<List<UserDTO>> GetAll();
        Result AddUser(UserDTO userDTO);
    }
}
