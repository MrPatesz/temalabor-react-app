using Microsoft.EntityFrameworkCore;
using MusicTimeApi.DAL.EfDbContext;

namespace MusicTimeApi.Models
{
    public class MusicTimeContext : DbContext
    {
        public MusicTimeContext(DbContextOptions<MusicTimeContext> options)
            : base(options)
        {
        }

        public DbSet<SongAIO> SongAIO { get; set; }

        public DbSet<DbSong> Songs { get; set; }
        public DbSet<DbAlbum> Albums { get; set; }
        public DbSet<DbArtist> Artists { get; set; }
        public DbSet<DbGenre> Genres { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            /*modelBuilder.Entity<DbGenre>()
                .ToTable("Genres");
            modelBuilder.Entity<DbGenre>()
                .HasKey(s => s.Id);
            modelBuilder.Entity<DbGenre>()
                .Property(s => s.Name).HasMaxLength(50)
                .IsRequired(required: true).IsUnicode(unicode: true);

            modelBuilder.Entity<DbGenre>()
                .HasData(new[]
                {
                    new DbGenre() { Id = 1, Name = "Hip-hop" },
                    new DbGenre() { Id = 2, Name = "Punk" },
                });

            modelBuilder.Entity<DbArtist>()
                .ToTable("Artists");
            modelBuilder.Entity<DbArtist>()
                .HasKey(s => s.Id);
            modelBuilder.Entity<DbArtist>()
                .Property(s => s.Name).HasMaxLength(50)
                .IsRequired(required: true).IsUnicode(unicode: true);
            
            modelBuilder.Entity<DbArtist>()
                .HasData(new[]
                {
                    new DbArtist() { Id = 1, Name = "xxxtentacion" },
                    new DbArtist() { Id = 2, Name = "Billy Talent" },
                });*/

            modelBuilder.Entity<DbAlbum>()
                .ToTable("Albums");
            //modelBuilder.Entity<DbAlbum>()
            //   .HasKey(t => t.Id);
            //modelBuilder.Entity<DbAlbum>()
            //   .Property(t => t.Title).HasMaxLength(50)
            //   .IsRequired(required: true).IsUnicode(unicode: true);
            modelBuilder.Entity<DbAlbum>()
               .HasOne(t => t.Artist)
               .WithMany()
               .HasForeignKey(t => t.ArtistId)
               .IsRequired(required: true);
            modelBuilder.Entity<DbAlbum>()
               .HasOne(t => t.Genre)
               .WithMany()
               .HasForeignKey(t => t.GenreId)
               .IsRequired(required: true);

            /*modelBuilder.Entity<DbAlbum>()
                .HasData(new[]
                {
                    new DbAlbum() { Id = 1, Title = "17", ArtistId = 1, GenreId = 1},
                    new DbAlbum() { Id = 2, Title = "Afraid of Heights", ArtistId = 2, GenreId = 2 },
                });
            
            modelBuilder.Entity<DbSong>()
                .ToTable("Songs");
            modelBuilder.Entity<DbSong>()
               .HasKey(t => t.Id);
            modelBuilder.Entity<DbSong>()
               .Property(t => t.Title).HasMaxLength(50)
               .IsRequired(required: true).IsUnicode(unicode: true);
            modelBuilder.Entity<DbSong>()
               .Property(t => t.URL).HasMaxLength(150)
               .IsRequired(required: true).IsUnicode(unicode: true);
            modelBuilder.Entity<DbSong>()
               .HasOne(t => t.Album)
               .WithMany()
               .HasForeignKey(t => t.AlbumId)
               .IsRequired(required: true);
            
            modelBuilder.Entity<DbSong>()
                .HasData(new[]
                {
                    new DbSong() { Id = 1, Title = "Orlando", URL = "https://open.spotify.com/track/05bnEv2dpFzmGVLGdjD9UP?si=6KpK5c9IT02aWqu5JSqiUw", AlbumId = 1},
                    new DbSong() { Id = 2, Title = "Louder Than the DJ", URL = "https://open.spotify.com/track/6M5TeMPPzw4Xlve2n3ApSR?si=3dSwXPEHRYi8Sc78mzKb6g", AlbumId = 2 },
                });*/
        }
    }
}
