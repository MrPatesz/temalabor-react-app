import React from "react";

function AlbumComponent(props) {
  return (
    <div
      onClick={() => {
        props.selectedItems.setSelectedAlbum(props.album.title);
      }}
    >
      {props.album.title}
    </div>
  );
}

export default AlbumComponent