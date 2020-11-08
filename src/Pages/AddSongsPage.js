import React, { useState } from "react";
import EditableComponent from "../Components/BasicComponents/EditableComponent";
import MyAutocompleteComponent from "../Components/BasicComponents/MyAutocompleteComponent";
import Album from "../DataClasses/Album";
import Artist from "../DataClasses/Artist";
import Genre from "../DataClasses/Genre";
import Song from "../DataClasses/Song";
import "./AddSongsPage.css";
import Autocomplete from "react-autocomplete";

function AddSongPage(props) {
  const [genre, setGenre] = useState("Name of Genre");
  const [artist, setArtist] = useState("Name of Artist");
  const [album, setAlbum] = useState("Title of Album");
  const [songArray] = useState(["Title of Song"]);

  let firstEditableSong = (
    <EditableComponent
      content={"Title of Song"}
      setter={addSongSetter}
      index={0}
    />
  );
  const [editableSongs, setEditableSongs] = useState([firstEditableSong]);

  function makeGenre() {
    var g = new Genre(genre, [
      new Artist(artist, [
        new Album(
          album,
          genre,
          songArray.map((title) => new Song(artist, title))
        ),
      ]),
    ]);
    return g;
  }

  function addSongSetter(title, index) {
    songArray[index] = title;
  }

  function addAnotherSong() {
    let newEditableSong = (
      <EditableComponent
        content={"Title of Song"}
        setter={addSongSetter}
        index={editableSongs.length}
      />
    );
    setEditableSongs(editableSongs.concat(newEditableSong));
  }

  function getArtists() {
    var artists2 = [];
    for (var i = 0; i < props.mock.genres.length; i++) {
      var artists = props.mock.genres[i].artists;
      if (genre !== "Name of Genre" && props.mock.genres[i].name !== genre)
        continue;
      for (var j = 0; j < artists.length; j++) {
        artists2.push(artists[j]);
      }
    }
    return artists2;
  }

  function getAlbums() {
    var albums2 = [];
    for (var i = 0; i < props.mock.genres.length; i++) {
      var artists = props.mock.genres[i].artists;
      if (genre !== "Name of Genre" && props.mock.genres[i].name !== genre)
        continue;
      for (var j = 0; j < artists.length; j++) {
        var albums = artists[j].albums;
        if (artist !== "Name of Artist" && artists[j].name !== artist) continue;
        for (var k = 0; k < albums.length; k++) {
          albums2.push({ name: albums[k].title });
        }
      }
    }
    return albums2;
  }

  return (
    <div className="add-song-page">
      <div className="add-columns-div">
        <div className="add-genre-div">
          <h1> Genre: </h1>
          <MyAutocompleteComponent
            baseValue={"Name of Genre"}
            value={genre}
            setter={setGenre}
            list={props.mock.genres}
          />
        </div>
        <div className="add-artist-div">
          <h1> Artist: </h1>
          <MyAutocompleteComponent
            baseValue={"Name of Artist"}
            value={artist}
            setter={setArtist}
            list={getArtists()}
          />
        </div>
        <div className="add-album-div">
          <h1> Album: </h1>
          <MyAutocompleteComponent
            baseValue={"Title of Album"}
            value={album}
            setter={setAlbum}
            list={getAlbums()}
          />
        </div>
        <div className="add-songs-div">
          <h1> Songs: </h1>
          {editableSongs.map((editableSong) => (
            <div>{editableSong}</div>
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
