namespace MusicTimeApi.Models
{
    public class Song
    {
        public Song(int id, string title, string url, string albumTitle)
        {
            Id = id;
            Title = title;
            URL = url;
            AlbumTitle = albumTitle;
        }

        public int Id { get; }
        public string Title { get; }
        public string URL { get; }
        public string AlbumTitle { get; }
    }
}
