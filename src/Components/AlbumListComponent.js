import React from "react";
import AlbumComponent from "./BasicComponents/AlbumComponent";

function AlbumListComponent(props) {
  return (
    <ul>
      {props.mock.artists
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
    </ul>
  );
}

export default AlbumListComponent;
