import React from "react";
import AlbumComponent from "./BasicComponents/AlbumComponent";

function AlbumListComponent(props) {
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
                  {artist.albums.map((album) => (
                    <li>
                      <AlbumComponent
                        album={album}
                        selectedItems={props.selectedItems}
                      />
                    </li>
                  ))}
                </div>
              ))}
          </div>
        ))}
    </ul>
  );
}

export default AlbumListComponent;
