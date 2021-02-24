using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MusicTimeApi.DAL;
using MusicTimeApi.Models;
using System.Collections.Generic;
using System;

namespace MusicTimeApi.Controllers
{
    [Route("api/artists")]
    [ApiController]
    public class ArtistsController : ControllerBase
    {
        private readonly IArtistsRepository repository;

        public ArtistsController(IArtistsRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet]
        public IEnumerable<Artist> List()
        {
            return repository.List();
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<Artist> Get(int id)
        {
            var value = repository.FindById(id);
            if (value == null)
                return NotFound();
            else
                return Ok(value);
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<Artist> Create([FromBody] CreateArtist value)
        {
            try
            {
                var created = repository.Insert(value);
                return CreatedAtAction(nameof(Get), new { id = created.Id }, created);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(new { error = ex.Message });
            }
        }
    }
}