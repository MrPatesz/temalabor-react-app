import React from "react";

function ArtistComponent(props) {
  return (
    <div
      onClick={() => {
        props.selectedItems.setSelectedArtist(props.artist);
        props.selectedItems.setSelectedAlbum(null);
      }}
    >
      {props.artist}
    </div>
  );
}

export default ArtistComponent;
