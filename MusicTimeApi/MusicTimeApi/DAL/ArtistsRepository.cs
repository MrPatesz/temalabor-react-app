using Microsoft.EntityFrameworkCore;
using MusicTimeApi.DAL.EfDbContext;
using MusicTimeApi.Models;
using System.Collections.Generic;
using System;
using System.Linq;
using MusicTimeApi.Controllers;

namespace MusicTimeApi.DAL
{
    public class ArtistsRepository : IArtistsRepository
    {
        private readonly MusicTimeContext db;

        public ArtistsRepository(MusicTimeContext db)
        {
            this.db = db;
        }

        public IReadOnlyCollection<Artist> List()
        {
            return db.Artists.Select(ToModel).ToList();
        }

        public Artist Insert(CreateArtist value)
        {
            using (var tran = db.Database.BeginTransaction(System.Data.IsolationLevel.RepeatableRead))
            {
                if (db.Artists.Any(t => EF.Functions.Like(t.Name, value.Name)))
                    throw new ArgumentException("name must be unique");

                var toInsert = new DbArtist() { Name = value.Name };
                db.Artists.Add(toInsert);

                db.SaveChanges();
                tran.Commit();

                return ToModel(toInsert);
            }
        }

        public Artist FindById(int id)
        {
            var dbRecord = db.Artists.FirstOrDefault(s => s.Id == id);
            if (dbRecord == null)
                return null;
            else
                return ToModel(dbRecord);
        }

        private Artist ToModel(DbArtist value)
        {
            return new Artist(value.Id, value.Name);
        }
    }
}
