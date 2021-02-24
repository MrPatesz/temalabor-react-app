using MusicTimeApi.Controllers;
using MusicTimeApi.Models;
using System.Collections.Generic;

namespace MusicTimeApi.DAL
{
    public interface IArtistsRepository
    {
        IReadOnlyCollection<Artist> List();
        Artist Insert(CreateArtist value);
        Artist FindById(int id);
    }
}
