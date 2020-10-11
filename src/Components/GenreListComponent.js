import React from "react";

function GenreListComponent(props) {
  return (
    <ul>
      {props.mock.artists.map((artist) => (
        <div>
          {artist.albums.map((album) => (
            <li>{album.genre}</li>
          ))}
        </div>
      ))}
    </ul>
  );
}

export default GenreListComponent;
