import React from "react";
import Mock from "../Mock";

function HomePage() {
  var mock = new Mock();
  return (
    <div className="big-container">
      <div className="genre-div">
        <h1> Genres </h1>
        <ul>
          {mock.artists.map((artist) => (
            <div>
              {artist.albums.map((album) => (
                <li>{album.genre}</li>
              ))}
            </div>
          ))}
        </ul>
      </div>
      <div className="artist-div">
        <h1> Artists </h1>
        <ul>
          {mock.artists.map((artist) => (
            <li>{artist.name}</li>
          ))}
        </ul>
      </div>
      <div className="album-div">
        <h1> Albums </h1>
        <ul>
          {mock.artists.map((artist) => (
            <div>
              {artist.albums.map((album) => (
                <li
                  onClick={() => {
                    console.log(album.title);
                  }}
                >
                  {album.title}
                </li>
              ))}
            </div>
          ))}
        </ul>
      </div>
      <div className="selection-div">
        <h1> Selection </h1>
        <ul>
          {mock.artists.map((artist) => (
            <div>
              {artist.albums.map((album) => (
                <div>
                  {album.songs.map((song) => (
                    <li>
                      {song.artist} - {song.title}
                    </li>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
