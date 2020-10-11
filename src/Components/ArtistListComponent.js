import React from "react";
import ArtistComponent from "./BasicComponents/ArtistComponent";

function ArtistListComponent(props) {
  return (
    <ul>
      <li
        onClick={() => {
          props.selectedItems.setSelectedArtist(null);
          props.selectedItems.setSelectedAlbum(null);
        }}
        className={
          props.selectedItems.selectedArtist === null
            ? "selected-list-item"
            : "not-selected-list-item"
        }
      >
        All
      </li>
      {props.mock.genres
        .filter((genre) => {
          if (props.selectedItems.selectedGenre === null) return true;
          return genre.name === props.selectedItems.selectedGenre;
        })
        .map((genre) => (
          <div>
            {genre.artists.map((artist) => (
              <li
                className={
                  props.selectedItems.selectedArtist === artist.name
                    ? "selected-list-item"
                    : "not-selected-list-item"
                }
              >
                <ArtistComponent
                  artist={artist}
                  selectedItems={props.selectedItems}
                />
              </li>
            ))}
          </div>
        ))}
    </ul>
  );
}

export default ArtistListComponent;
