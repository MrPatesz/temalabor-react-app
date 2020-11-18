using System.Collections.Generic;

namespace MusicTimeApi.Models
{
    public class Genre
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public List<Artist> Artists { get; set; }
    }
}
