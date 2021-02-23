namespace MusicTimeApi.DAL.EfDbContext
{
    public class DbAlbum
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int ArtistId { get; set; }
        public virtual DbArtist Artist { get; set; }
        public int GenreId { get; set; }
        public virtual DbGenre Genre { get; set; }
    }
}
