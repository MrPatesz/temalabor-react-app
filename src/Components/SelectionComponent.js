import React from "react";
import SongComponent from "./BasicComponents/SongComponent";

function SelectionComponent(props) {
  function getSelection() {
    var songs = [];

    props.songAIOs.forEach((s) => {
      var songString = s.artistName + " - " + s.songTitle;
      if (
        !songs.includes(songString) &&
        (s.genreName === props.selectedItems.selectedGenre ||
          props.selectedItems.selectedGenre === null) &&
        (s.artistName === props.selectedItems.selectedArtist ||
          props.selectedItems.selectedArtist === null) &&
        (s.albumTitle === props.selectedItems.selectedAlbum ||
          props.selectedItems.selectedAlbum === null)
      )
        songs.push(songString);
    });

    songs.sort((a1, a2) => a1.localeCompare(a2));

    return songs;
  }
  return (
    <ul>
      {getSelection().map((song) => (
        <li>
          <SongComponent song={song} />
        </li>
      ))}
    </ul>
  );
}

export default SelectionComponent;
