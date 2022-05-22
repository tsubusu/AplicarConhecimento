using AutoMapper;
using Entities.DTO;
using Entities.Model;

namespace Web.ProjetoProfile
{
    public class ProjetoProfile : Profile
    {
        public ProjetoProfile()
        {
            CreateMap<User, UserDTO>().ReverseMap();
        }
    }
}
