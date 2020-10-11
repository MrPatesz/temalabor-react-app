import React from "react";

function ArtistComponent(props) {
  return (
    <div
      onClick={() => {
        props.selectedItems.setSelectedArtist(props.artist.name);
        props.selectedItems.setSelectedAlbum(null);
      }}
    >
      {props.artist.name}
    </div>
  );
}

export default ArtistComponent;
