using System.Collections.Generic;

namespace MusicTimeApi.Models
{
    public class Album
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public string Genre { get; set; }
        public List<Song> Songs { get; set; }
    }
}
