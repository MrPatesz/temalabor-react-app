using Microsoft.EntityFrameworkCore;

namespace MusicTimeApi.Models
{
    public class MusicTimeContext : DbContext
    {
        public MusicTimeContext(DbContextOptions<MusicTimeContext> options)
            : base(options)
        {
        }

        public DbSet<SongAIO> SongAIO { get; set; }
    }
}
