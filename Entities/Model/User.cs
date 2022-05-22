using Entities.Base;

namespace Entities.Model
{
    public class User : IEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
