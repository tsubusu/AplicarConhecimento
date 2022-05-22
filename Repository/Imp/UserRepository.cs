using Entities.Model;
using Microsoft.EntityFrameworkCore;
using Repository.Context;
using Repository.Interface;

namespace Repository.Imp
{
    public class UserRepository : IUserRepository
    {
        private readonly ProjetoContext _context;
        public UserRepository(ProjetoContext context)
        {
            _context = context;
        }

        public Task<List<User>> GetAll()
        {
            return _context.Set<User>().ToListAsync();
        }
    }
}
