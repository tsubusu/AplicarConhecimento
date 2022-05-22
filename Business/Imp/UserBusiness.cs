using AutoMapper;
using Business.Interface;
using Entities.DTO;
using Entities.Model;
using Repository.Interface;

namespace Business.Imp
{
    public class UserBusiness : IUserBusiness
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;

        public UserBusiness(IUserRepository userRepository, IMapper mapper)
        {
            _userRepository = userRepository;
            _mapper = mapper;
        }

        public async Task<List<UserDTO>> GetAll()
        {
            var users = await _userRepository.GetAll();

            return _mapper.Map<List<UserDTO>>(users);
        }
    }
}
