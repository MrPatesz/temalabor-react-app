import React from "react";

function SelectionComponent(props) {
  //let filterFunction = true;
  //if(artist.name === props.selectedItems.selectedArtist)
  return (
    <ul>
      {props.mock.artists
        .filter((artist) => {
          if (props.selectedItems.selectedArtist === null) return true;
          return artist.name === props.selectedItems.selectedArtist;
        })
        .map((artist) => (
          <div>
            {artist.albums
              .filter((album) => {
                if (props.selectedItems.selectedAlbum === null) return true;
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
    </ul>
  );
}

export default SelectionComponent;
