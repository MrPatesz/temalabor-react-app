import React from "react";
import ArtistComponent from "./BasicComponents/ArtistComponent";

function ArtistListComponent(props) {
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
              .map((artist) => (
                <li>
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
