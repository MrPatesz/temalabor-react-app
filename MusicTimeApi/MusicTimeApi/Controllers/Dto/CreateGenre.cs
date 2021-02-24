using System.ComponentModel.DataAnnotations;

namespace MusicTimeApi.Controllers.Dto
{
    public class CreateGenre
    {
        [Required]
        public string Name { get; set; }
    }
}
