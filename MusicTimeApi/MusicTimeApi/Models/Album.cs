namespace MusicTimeApi.Models
{
    public class Album
    {
        public Album(int id, string title, string genreName, string artistName)
        {
            Id = id;
            Title = title;
            GenreName = genreName;
            ArtistName = artistName;
        }

        public int Id { get; }
        public string Title { get; }
        public string GenreName { get; }
        public string ArtistName { get; }
    }
}
