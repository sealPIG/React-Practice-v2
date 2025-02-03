using Microsoft.EntityFrameworkCore;
using Practice.Server.Models;

namespace Practice.Server.Data
{
    public class ApiContext : DbContext
    {
        public DbSet<Movie> MovieList { get; set; }

        public ApiContext(DbContextOptions<ApiContext> options)
            : base(options) { }
    }
}
