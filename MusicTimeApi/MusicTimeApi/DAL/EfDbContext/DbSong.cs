namespace MusicTimeApi.DAL.EfDbContext
{
    public class DbSong
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string URL { get; set; }
        public int AlbumId { get; set; }
        public virtual DbAlbum Album { get; set; }
    }
}
