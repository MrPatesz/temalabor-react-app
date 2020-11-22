import React from "react";
import ArtistComponent from "./BasicComponents/ArtistComponent";

function ArtistListComponent(props) {
  function getArtists() {
    var artists = [];

    props.songAIOs.forEach((s) => {
      if (
        !artists.includes(s.artistName) &&
        (s.genreName === props.selectedItems.selectedGenre || props.selectedItems.selectedGenre === null)
      )
        artists.push(s.artistName);
    });

    artists.sort((a1, a2) => a1.localeCompare(a2));

    return artists;
  }
  return (
    <ul>
      <li
        onClick={() => {
          props.selectedItems.setSelectedArtist(null);
          props.selectedItems.setSelectedAlbum(null);
        }}
        className={
          props.selectedItems.selectedArtist === null
            ? "selected-list-item"
            : "not-selected-list-item"
        }
      >
        All
      </li>
      {getArtists().map((artist) => (
        <li
          className={
            props.selectedItems.selectedArtist === artist
              ? "selected-list-item"
              : "not-selected-list-item"
          }
        >
          <ArtistComponent artist={artist} selectedItems={props.selectedItems} />
        </li>
      ))}
    </ul>
  );
}

export default ArtistListComponent;
