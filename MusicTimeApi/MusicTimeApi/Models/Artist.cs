using System.Collections.Generic;

namespace MusicTimeApi.Models
{
    public class Artist
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public List<Album> Albums { get; set; }
    }
}
