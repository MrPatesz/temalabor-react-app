using MusicTimeApi.Controllers.Dto;
using MusicTimeApi.Models;
using System.Collections.Generic;

namespace MusicTimeApi.DAL
{
    public interface IGenresRepository
    {
        IReadOnlyCollection<Genre> List();
        Genre Insert(CreateGenre value);
        Genre FindById(int id);
    }
}
