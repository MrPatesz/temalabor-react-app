using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
            return await _context.SongAIO.ToListAsync();
        }

        // GET: api/SongAIOs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SongAIO>> GetSongAIO(long id)
        {
            var songAIO = await _context.SongAIO.FindAsync(id);

            if (songAIO == null)
            {
                return NotFound();
            }

            return songAIO;
        }

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
            _context.SongAIO.Add(songAIO);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSongAIO", new { id = songAIO.Id }, songAIO);
        }

        // DELETE: api/SongAIOs/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<SongAIO>> DeleteSongAIO(long id)
        {
            var songAIO = await _context.SongAIO.FindAsync(id);
            if (songAIO == null)
            {
                return NotFound();
            }

            _context.SongAIO.Remove(songAIO);
            await _context.SaveChangesAsync();

            return songAIO;
        }

        // DELETE: api/SongAIOs
        [HttpDelete]
        public async Task<IActionResult> DeleteSongAIO(SongAIO songAIO)
        {
            var dbSongAIO = await _context.SongAIO
                        .FirstOrDefaultAsync(s =>
                            s.GenreName == songAIO.GenreName &&
                            s.AlbumTitle == songAIO.AlbumTitle &&
                            s.ArtistName == songAIO.ArtistName &&
                            s.SongTitle == songAIO.SongTitle
                        );

            if (dbSongAIO == null)
                return NotFound();

            _context.SongAIO.Remove(dbSongAIO);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SongAIOExists(long id)
        {
            return _context.SongAIO.Any(e => e.Id == id);
        }
    }
}