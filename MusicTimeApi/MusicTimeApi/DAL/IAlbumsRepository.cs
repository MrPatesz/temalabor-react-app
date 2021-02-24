using MusicTimeApi.Controllers.Dto;
using MusicTimeApi.Models;
using System.Collections.Generic;

namespace MusicTimeApi.DAL
{
    public interface IAlbumsRepository
    {
        IReadOnlyCollection<Album> List();
        Album Insert(CreateAlbum value);
        Album FindById(int id);
    }
}
