import React from "react";
import GenreComponent from "./BasicComponents/GenreComponent";

function GenreListComponent(props) {
  function getGenres() {
    var genres = [];

    props.songAIOs.forEach((s) => {
      if (!genres.includes(s.genreName)) genres.push(s.genreName);
    });

    genres.sort((g1, g2) => g1.localeCompare(g2));

    return genres;
  }

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
      {getGenres().map((genre) => (
        <li
          className={
            props.selectedItems.selectedGenre === genre
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
