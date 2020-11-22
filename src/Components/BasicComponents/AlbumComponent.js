import React from "react";

function AlbumComponent(props) {
  return (
    <div
      onClick={() => {
        props.selectedItems.setSelectedAlbum(props.album);
      }}
    >
      {props.album}
    </div>
  );
}

export default AlbumComponent