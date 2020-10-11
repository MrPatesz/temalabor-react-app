import React from "react";

function GenreComponent(props) {
  return (
    <div
      onClick={() => {
        props.selectedItems.setSelectedGenre(props.genre.name);
        props.selectedItems.setSelectedArtist(null);
        props.selectedItems.setSelectedAlbum(null);
      }}
    >
      {props.genre.name}
    </div>
  );
}

export default GenreComponent;
