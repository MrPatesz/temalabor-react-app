import React from "react";
import AlbumComponent from "./BasicComponents/AlbumComponent";

function AlbumListComponent(props) {
  function getAlbums() {
    var albums = [];

    props.songAIOs.forEach((s) => {
      if (
        !albums.includes(s.albumTitle) &&
        (s.genreName === props.selectedItems.selectedGenre || props.selectedItems.selectedGenre === null) &&
        (s.artistName === props.selectedItems.selectedArtist ||
          props.selectedItems.selectedArtist === null)
      )
        albums.push(s.albumTitle);
    });

    albums.sort((a1, a2) => a1.localeCompare(a2));

    return albums;
  }
  return (
    <ul>
      <li
        onClick={() => {
          props.selectedItems.setSelectedAlbum(null);
        }}
        className={
          props.selectedItems.selectedAlbum === null
            ? "selected-list-item"
            : "not-selected-list-item"
        }
      >
        All
      </li>
      {getAlbums().map((album) => (
        <li
          className={
            props.selectedItems.selectedAlbum === album
              ? "selected-list-item"
              : "not-selected-list-item"
          }
        >
          <AlbumComponent album={album} selectedItems={props.selectedItems} />
        </li>
      ))}
    </ul>
  );
}

export default AlbumListComponent;
