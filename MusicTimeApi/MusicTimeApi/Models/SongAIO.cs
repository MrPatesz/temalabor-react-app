namespace MusicTimeApi.Models
{
    public class SongAIO
    {
        public long Id { get; set; }
        public string GenreName { get; set; }
        public string AlbumTitle { get; set; }
        public string ArtistName { get; set; }
        public string SongTitle { get; set; }

        /*public SongAIO(long Id, string GenreName, string AlbumTitle, string ArtistName, string SongTitle)
        {
            this.Id = Id;
            this.GenreName = GenreName;
            this.AlbumTitle = AlbumTitle;
            this.ArtistName = ArtistName;
            this.SongTitle = SongTitle;
        }*/
    }
}
