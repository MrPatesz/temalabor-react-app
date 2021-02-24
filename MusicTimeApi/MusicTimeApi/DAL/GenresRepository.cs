using Microsoft.EntityFrameworkCore;
using MusicTimeApi.DAL.EfDbContext;
using MusicTimeApi.Models;
using System.Collections.Generic;
using System;
using System.Linq;
using MusicTimeApi.Controllers.Dto;

namespace MusicTimeApi.DAL
{
    public class GenresRepository : IGenresRepository
    {
        private readonly MusicTimeContext db;

        public GenresRepository(MusicTimeContext db)
        {
            this.db = db;
        }

        public IReadOnlyCollection<Genre> List()
        {
            return db.Genres.Select(ToModel).ToList();
        }

        public Genre Insert(CreateGenre value)
        {
            using (var tran = db.Database.BeginTransaction(System.Data.IsolationLevel.RepeatableRead))
            {
                if (db.Genres.Any(t => EF.Functions.Like(t.Name, value.Name)))
                    throw new ArgumentException("name must be unique");

                var toInsert = new DbGenre() { Name = value.Name };
                db.Genres.Add(toInsert);

                db.SaveChanges();
                tran.Commit();

                return ToModel(toInsert);
            }
        }

        public Genre FindById(int id)
        {
            var dbRecord = db.Genres.FirstOrDefault(s => s.Id == id);
            if (dbRecord == null)
                return null;
            else
                return ToModel(dbRecord);
        }

        private Genre ToModel(DbGenre value)
        {
            return new Genre(value.Id, value.Name);
        }
    }
}
