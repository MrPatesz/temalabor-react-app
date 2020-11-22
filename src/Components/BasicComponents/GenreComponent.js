import React from "react";

function GenreComponent(props) {
  return (
    <div
      onClick={() => {
        props.selectedItems.setSelectedGenre(props.genre);
        props.selectedItems.setSelectedArtist(null);
        props.selectedItems.setSelectedAlbum(null);
      }}
    >
      {props.genre}
    </div>
  );
}

export default GenreComponent;
