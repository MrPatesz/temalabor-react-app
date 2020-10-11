import React from "react";
import ArtistComponent from "./BasicComponents/ArtistComponent";

function ArtistListComponent(props) {
  return (
    <ul>
      {props.mock.artists.map((artist) => (
        <li>
          <ArtistComponent
            artist={artist}
            selectedItems={props.selectedItems}
          />
        </li>
      ))}
    </ul>
  );
}

export default ArtistListComponent;
