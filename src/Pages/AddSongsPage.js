import React, { useState, useEffect } from "react";
import axios from "axios";
import EditableComponent from "../Components/BasicComponents/EditableComponent";
import MyAutocompleteComponent from "../Components/BasicComponents/MyAutocompleteComponent";
import Album from "../DataClasses/Album";
import Artist from "../DataClasses/Artist";
import Genre from "../DataClasses/Genre";
import Song from "../DataClasses/Song";
import "./AddSongsPage.css";

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

  const [songAIOs, setSongAIOs] = useState([]);
  const [fetch, setFetch] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://localhost:5001/api/SongAIOs");

      setSongAIOs(result.data);
    };
    fetchData();
  }, [fetch]);

  function getGenres() {
    var genres2 = [];

    songAIOs.forEach((s) => {
      if (!genres2.includes(s.genreName)) genres2.push(s.genreName);
    });

    genres2.sort((g1, g2) => g1.localeCompare(g2));

    return genres2;
  }

  function getArtists() {
    var artists2 = [];

    songAIOs.forEach((s) => {
      if (
        !artists2.includes(s.artistName) &&
        (s.genreName === genre || genre === "Name of Genre" || genre === "")
      )
        artists2.push(s.artistName);
    });

    artists2.sort((a1, a2) => a1.localeCompare(a2));

    return artists2;
  }

  function getAlbums() {
    var albums2 = [];

    songAIOs.forEach((s) => {
      if (
        !albums2.includes(s.albumTitle) &&
        (s.genreName === genre || genre === "Name of Genre" || genre === "") &&
        (s.artistName === artist ||
          artist === "Name of Artist" ||
          artist === "")
      )
        albums2.push(s.albumTitle);
    });

    albums2.sort((a1, a2) => a1.localeCompare(a2));

    return albums2;
  }

  function postSongAIOs() {
    var postArray = [];

    songArray.forEach((song) => {
      postArray.push({
        GenreName: genre,
        AlbumTitle: album,
        ArtistName: artist,
        SongTitle: song,
      });
    });

    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    postArray.forEach(async (p) => {
      await axios.post("https://localhost:5001/api/SongAIOs", p, axiosConfig);
    });

    setFetch(!fetch);
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
            list={getGenres()}
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
          postSongAIOs();
          props.mock.addMusic(makeGenre());
        }}
      >
        Add Songs
      </button>
    </div>
  );
}

export default AddSongPage;
