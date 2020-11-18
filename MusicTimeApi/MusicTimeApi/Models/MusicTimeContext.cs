using Microsoft.EntityFrameworkCore;

namespace MusicTimeApi.Models
{
    public class MusicTimeContext : DbContext
    {
        public MusicTimeContext(DbContextOptions<MusicTimeContext> options)
            : base(options)
        {
        }

        public DbSet<Genre> Genres { get; set; }

        public DbSet<Artist> Artist { get; set; }

        public DbSet<Album> Album { get; set; }

        public DbSet<Song> Song { get; set; }

        public DbSet<SongAIO> SongAIOs { get; set; }
    }
}
