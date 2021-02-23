﻿namespace MusicTimeApi.Models
{
    public class Artist
    {
        public Artist(int id, string name)
        {
            Id = id;
            Name = name;
        }

        public int Id { get; }
        public string Name { get; }
    }
}
