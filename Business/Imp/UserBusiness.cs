using AutoMapper;
using Business.Interface;
using Business.Validation;
using Business.Validation.Enum;
using Entities.DTO;
using Entities.Model;
using FluentResults;
using FluentValidation;
using Microsoft.AspNetCore.Identity;
using Repository.Interface;

namespace Business.Imp
{
    public class UserBusiness : IUserBusiness
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;
        private readonly IValidator<User> _userDTOValidation;
        private readonly UserManager<IdentityUser<int>> _userManager;

        public UserBusiness(IUserRepository userRepository,
                            IMapper mapper,
                            IValidator<User> validationRules,
                            UserManager<IdentityUser<int>> userManager)
        {
            _userRepository = userRepository;
            _mapper = mapper;
            _userDTOValidation = validationRules;
            _userManager = userManager;
        }

        public Result AddUser(UserDTO userDTO)
        {
            var model = _mapper.Map<User>(userDTO);
            var userIdentity = _mapper.Map<IdentityUser<int>>(model);

            var result = _userManager.CreateAsync(userIdentity, userDTO.Password);

            if (result.Result.Succeeded) return Result.Ok();

            return Result.Fail("Falha ao cadastrar usuário");
        }

        public async Task<List<UserDTO>> GetAll()
        {
            var user = await _userRepository.GetAll();

            var a = _userDTOValidation.Validate(user.FirstOrDefault(), opt => opt.IncludeRuleSets("Inserir"));

            return _mapper.Map<List<UserDTO>>(user);
        }
    }
}
