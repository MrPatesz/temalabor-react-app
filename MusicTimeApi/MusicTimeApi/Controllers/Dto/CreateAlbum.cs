using System.ComponentModel.DataAnnotations;

namespace MusicTimeApi.Controllers.Dto
{
    public class CreateAlbum
    {
        [Required]
        public string Title { get; set; }
        [Required]
        public string Artist { get; set; }
        [Required]
        public string Genre { get; set; }
    }
}
