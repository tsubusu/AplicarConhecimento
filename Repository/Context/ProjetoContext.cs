using Entities.Model;
using Microsoft.EntityFrameworkCore;
using Repository.Map;

namespace Repository.Context
{
    public class ProjetoContext : DbContext
    {
        public ProjetoContext(DbContextOptions<ProjetoContext> options) : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfiguration(new UserMap());
        }
        //entities
        public DbSet<User> Users { get; set; }
        public DbSet<Menu> Menus { get; set; }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    optionsBuilder.EnableSensitiveDataLogging();
        //    optionsBuilder.UseLoggerFactory(LoggerFactory.Create(x =>
        //        x.AddLog4Net()
        //            .AddConsole())
        //    );
        //    base.OnConfiguring(optionsBuilder);
        //    var connection = new SqlConnection(_connectionString);
        //    optionsBuilder.UseSqlServer(connection, e => { });
        //}
    }
}
