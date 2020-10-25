import React from "react";

function SelectionComponent(props) {
  return (
    <ul>
      {props.mock.genres
        .filter((genre) => {
          if (props.selectedItems.selectedGenre === null) return true;
          return genre.name === props.selectedItems.selectedGenre;
        })
        .map((genre) => (
          <div>
            {genre.artists
              .filter((artist) => {
                if (props.selectedItems.selectedArtist === null) return true;
                return artist.name === props.selectedItems.selectedArtist;
              })
              .map((artist) => (
                <div>
                  {artist.albums
                    .filter((album) => {
                      if (props.selectedItems.selectedAlbum === null)
                        return true;
                      return album.title === props.selectedItems.selectedAlbum;
                    })
                    .map((album) => (
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
          </div>
        ))}
    </ul>
  );
}

export default SelectionComponent;
