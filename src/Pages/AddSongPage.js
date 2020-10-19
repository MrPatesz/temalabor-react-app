import React, { useState } from "react";
import EditableComponent from "../Components/BasicComponents/EditableComponent";
import Album from "../DataClasses/Album";
import Artist from "../DataClasses/Artist";
import Genre from "../DataClasses/Genre";
import Song from "../DataClasses/Song";

function AddSongPage(props) {
  const [genre, setGenre] = useState("Name of Genre");
  const [artist, setArtist] = useState("Name of Artist");
  const [album, setAlbum] = useState("Title of Album");
  const [songArray, setSongArray] = useState(["Title of Song"]);

  let firstEditableSong = <EditableComponent content={"Title of Song"} setter={addSongSetter} index={0}/>;
  const [editableSongs, setEditableSongs] = useState([firstEditableSong]);

  function makeGenre() {
    var g = new Genre(genre, [
      new Artist(artist, [new Album(album, genre, songArray.map(
        (song) => (
          new Song(artist, song)
        )
      ))]),
    ]);
    return g;
  }

  function addSongSetter(title, index) {
    songArray[index] = title;
  }

  function addAnotherSong() {
    let newEditableSong = <EditableComponent content={"Title of Song"} setter={addSongSetter} index={editableSongs.length} />;
    setEditableSongs(editableSongs.concat(newEditableSong));
  }

  return (
    <div>
      <div className="big-container">
        <div className="genre-div">
          <h1> Genre: </h1>
          <EditableComponent content={genre} setter={setGenre} />
        </div>
        <div className="artist-div">
          <h1> Artist: </h1>
          <EditableComponent content={artist} setter={setArtist} />
        </div>
        <div className="album-div">
          <h1> Album: </h1>
          <EditableComponent content={album} setter={setAlbum} />
        </div>
        <div className="selection-div">
          <h1> Songs: </h1>
          {editableSongs.map((editableSong) => (
            <div>
              {editableSong}
            </div>
          ))}

          <button
            onClick={() => {
              addAnotherSong();
            }}
          >
            Add Another Song
          </button>
        </div>
      </div>
      <button
        onClick={() => {
          props.mock.addMusic(makeGenre());
        }}
      >
        Add Songs
      </button>
    </div>
  );
}

export default AddSongPage;
