using System.ComponentModel.DataAnnotations;

namespace MusicTimeApi.Controllers
{
    public class CreateArtist
    {
        [Required]
        public string Name { get; set; }
    }
}
