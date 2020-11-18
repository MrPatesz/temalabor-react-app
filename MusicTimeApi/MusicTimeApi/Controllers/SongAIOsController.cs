using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MusicTimeApi.Models;

namespace MusicTimeApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SongAIOsController : ControllerBase
    {
        private readonly MusicTimeContext _context;

        public SongAIOsController(MusicTimeContext context)
        {
            _context = context;
        }

        // GET: api/SongAIOs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SongAIO>>> GetSongAIOs()
        {
            return await _context.SongAIOs.ToListAsync();
        }

        // GET: api/SongAIOs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SongAIO>> GetSongAIO(long id)
        {
            var songAIO = await _context.SongAIOs.FindAsync(id);

            if (songAIO == null)
            {
                return NotFound();
            }

            return songAIO;
        }

        // GET: api/SongAIOs/Punk
        /*[HttpGet("{genre}")]
        public async Task<ActionResult<IEnumerable<SongAIO>>> GetSongAIOs(string genre)
        {
            var query = from s in _context.SongAIOs
                        where s.GenreName == genre
                        select new { Id = s.Id, GenreName = s.GenreName, AlbumTitle = s.AlbumTitle, ArtistName = s.ArtistName, SongTitle = s.SongTitle };
                        //select new SongAIO(s.Id, s.GenreName, s.AlbumTitle, s.ArtistName, s.SongTitle);

            var qSongAIOs = await query.ToListAsync();

            return qSongAIOs.ToList<SongAIO>();//.Select(s => new SongAIO(s.Id, s.GenreName, s.AlbumTitle, s.ArtistName, s.SongTitle)).ToList(); //return qSongAIOs;
        
        }*/

        // PUT: api/SongAIOs/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSongAIO(long id, SongAIO songAIO)
        {
            if (id != songAIO.Id)
            {
                return BadRequest();
            }

            _context.Entry(songAIO).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SongAIOExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/SongAIOs
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<SongAIO>> PostSongAIO(SongAIO songAIO)
        {
            _context.SongAIOs.Add(songAIO);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSongAIO", new { id = songAIO.Id }, songAIO);
        }

        // DELETE: api/SongAIOs/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<SongAIO>> DeleteSongAIO(long id)
        {
            var songAIO = await _context.SongAIOs.FindAsync(id);
            if (songAIO == null)
            {
                return NotFound();
            }

            _context.SongAIOs.Remove(songAIO);
            await _context.SaveChangesAsync();

            return songAIO;
        }

        private bool SongAIOExists(long id)
        {
            return _context.SongAIOs.Any(e => e.Id == id);
        }
    }
}
