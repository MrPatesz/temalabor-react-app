import React from "react";
import GenreComponent from "./BasicComponents/GenreComponent";

function GenreListComponent(props) {
  return (
    <ul>
      <li
        onClick={() => {
          props.selectedItems.setSelectedGenre(null);
          props.selectedItems.setSelectedArtist(null);
          props.selectedItems.setSelectedAlbum(null);
        }}
        className={
          props.selectedItems.selectedGenre === null
            ? "selected-list-item"
            : "not-selected-list-item"
        }
      >
        All
      </li>
      {props.mock.genres.map((genre) => (
        <li
          className={
            props.selectedItems.selectedGenre === genre.name
              ? "selected-list-item"
              : "not-selected-list-item"
          }
        >
          <GenreComponent genre={genre} selectedItems={props.selectedItems} />
        </li>
      ))}
    </ul>
  );
}

export default GenreListComponent;
