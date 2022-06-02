using Business.Interface;
using Entities.DTO;
using Microsoft.AspNetCore.Mvc;

namespace Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserBusiness _userBusiness;
        public UserController(IUserBusiness userBusiness)
        {
            _userBusiness = userBusiness;
        }

        [HttpGet]
        public async Task<IActionResult> GetAsync()
        {
            return Ok(await _userBusiness.GetAll());
        }

        [HttpPost]
        public IActionResult CadastroUsuario(UserDTO userDTO)
        {
            var result = _userBusiness.AddUser(userDTO);
            if (result.IsFailed) return StatusCode(500);
            return Ok();
        }
    }
}
