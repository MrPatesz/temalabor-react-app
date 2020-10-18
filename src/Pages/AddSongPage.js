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
  //const [numOfSongs, setNumOfSongs] = useState(5);
  //const [songArray, setSongArray] = useState(Array(5));
  const [song, setSong] = useState("Title of Song");

  function makeGenre() {
    var g = new Genre(genre, [
        new Artist(artist, [
            new Album(album, genre, [
                new Song(artist, song)
            ])
        ])
    ]);
    return g;
  }

  return (
    <div>
      <div className="big-container">
        <div className="genre-div">
          <h1> Genre: </h1>
          <EditableComponent content={genre} setter={setGenre}/>
        </div>
        <div className="artist-div">
          <h1> Artist: </h1>
          <EditableComponent content={artist} setter={setArtist}/>
        </div>
        <div className="album-div">
          <h1> Album: </h1>
          <EditableComponent content={album} setter={setAlbum}/>
        </div>
        <div className="selection-div">
          <h1> Songs: </h1>
          <EditableComponent content={song} setter={setSong}/>
        </div>
      </div>
      <h1
        onClick={() => {
          props.mock.addMusic(makeGenre());
        }}
      >
        Add Song
      </h1>
    </div>
  );
}

export default AddSongPage;

/*
        {numOfSongs.forEach((element) => (
          <li>
            <EditableComponent content="{element}" />
          </li>
        ))}

        <div
          onClick={() => {
            setNumOfSongs(numOfSongs + 1);
          }}
        >
          Add Song
        </div>
*/
