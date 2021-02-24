using Microsoft.EntityFrameworkCore;
using MusicTimeApi.DAL.EfDbContext;
using MusicTimeApi.Models;
using System.Collections.Generic;
using System;
using System.Linq;
using MusicTimeApi.Controllers;
using MusicTimeApi.Controllers.Dto;

namespace MusicTimeApi.DAL
{
    public class AlbumsRepository : IAlbumsRepository
    {
        private readonly MusicTimeContext db;

        public AlbumsRepository(MusicTimeContext db)
        {
            this.db = db;
        }

        public IReadOnlyCollection<Album> List()
        {
            return db.Albums.Include(a => a.Genre).Include(a => a.Artist).Select(ToModel).ToList();
        }

        public Album Insert(CreateAlbum value)
        {
            using (var tran = db.Database.BeginTransaction(System.Data.IsolationLevel.RepeatableRead))
            {
                if (db.Albums.Any(t => EF.Functions.Like(t.Title, value.Title)))
                    throw new ArgumentException("name must be unique");

                DbGenre genre;
                if (db.Genres.Any(s => EF.Functions.Like(s.Name, value.Genre)))
                {
                    genre = db.Genres.FirstOrDefault(s => EF.Functions.Like(s.Name, value.Genre));
                }
                else
                {
                    var toInsert2 = new DbGenre() { Name = value.Genre };
                    db.Genres.Add(toInsert2);

                    db.SaveChanges();

                    genre = toInsert2;
                }

                DbArtist artist;
                if (db.Artists.Any(s => EF.Functions.Like(s.Name, value.Artist)))
                {
                    artist = db.Artists.FirstOrDefault(s => EF.Functions.Like(s.Name, value.Artist));
                }
                else
                {
                    var toInsert2 = new DbArtist() { Name = value.Artist };
                    db.Artists.Add(toInsert2);

                    db.SaveChanges();

                    artist = toInsert2;
                }

                var toInsert = new DbAlbum() { Title = value.Title, ArtistId = artist.Id, GenreId = genre.Id };
                db.Albums.Add(toInsert);

                db.SaveChanges();
                tran.Commit();

                return FindById(toInsert.Id);
            }
        }

        public Album FindById(int id)
        {
            var dbRecord = db.Albums.Include(a => a.Genre).Include(a => a.Artist).FirstOrDefault(s => s.Id == id);
            if (dbRecord == null)
                return null;
            else
                return ToModel(dbRecord);
        }

        private Album ToModel(DbAlbum value)
        {
            return new Album(value.Id, value.Title, value.Genre.Name, value.Artist.Name);
        }
    }
}
