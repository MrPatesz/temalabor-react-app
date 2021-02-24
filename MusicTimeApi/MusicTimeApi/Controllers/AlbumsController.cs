using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MusicTimeApi.DAL;
using MusicTimeApi.Models;
using System.Collections.Generic;
using System;
using MusicTimeApi.Controllers.Dto;

namespace MusicTimeApi.Controllers
{
    [Route("api/albums")]
    [ApiController]
    public class AlbumsController : ControllerBase
    {
        private readonly IAlbumsRepository repository;

        public AlbumsController(IAlbumsRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet]
        public IEnumerable<Album> List()
        {
            return repository.List();
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<Album> Get(int id)
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
        public ActionResult<Album> Create([FromBody] CreateAlbum value)
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
