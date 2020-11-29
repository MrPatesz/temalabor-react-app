import React, { useState, useEffect } from "react";
import axios from "axios";
import EditableComponent from "../Components/BasicComponents/EditableComponent";
import MyAutocompleteComponent from "../Components/BasicComponents/MyAutocompleteComponent";
import Album from "../DataClasses/Album";
import Artist from "../DataClasses/Artist";
import Genre from "../DataClasses/Genre";
import Song from "../DataClasses/Song";
import "./AddSongsPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function AddSongPage() {
  
  let firstEditableSong = (
    <EditableComponent
      content={"Title of Song"}
      setter={addSongSetter}
      index={0}
    />
  );
  const [editableSongs, setEditableSongs] = useState([firstEditableSong]);

  const [genre, setGenre] = useState("Name of Genre");
  const [artist, setArtist] = useState("Name of Artist");
  const [album, setAlbum] = useState("Title of Album");
  const [songArray] = useState(["Title of Song"]);

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

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://localhost:5001/api/SongAIOs");

      setSongAIOs(result.data);
    };
    fetchData();
  }, []);

  function getGenres() {
    var genres = [];

    songAIOs.forEach((s) => {
      if (!genres.includes(s.genreName)) genres.push(s.genreName);
    });

    genres.sort((g1, g2) => g1.localeCompare(g2));

    return genres;
  }

  function getArtists() {
    var artists = [];

    songAIOs.forEach((s) => {
      if (
        !artists.includes(s.artistName) &&
        (s.genreName === genre || genre === "Name of Genre" || genre === "")
      )
        artists.push(s.artistName);
    });

    artists.sort((a1, a2) => a1.localeCompare(a2));

    return artists;
  }

  function getAlbums() {
    var albums = [];

    songAIOs.forEach((s) => {
      if (
        !albums.includes(s.albumTitle) &&
        (s.genreName === genre || genre === "Name of Genre" || genre === "") &&
        (s.artistName === artist ||
          artist === "Name of Artist" ||
          artist === "")
      )
        albums.push(s.albumTitle);
    });

    albums.sort((a1, a2) => a1.localeCompare(a2));

    return albums;
  }

  function postSongAIOs() {
    var postArray = [];

    songArray.forEach((song) => {
      if(song !== ""){
        postArray.push({
          GenreName: genre,
          AlbumTitle: album,
          ArtistName: artist,
          SongTitle: song,
        });
      }
    });

    postArray.forEach(async (p) => {
      await axios.post("https://localhost:5001/api/SongAIOs", p);
    });
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
            <div className="pb-1">{editableSong}</div>
          ))}
        </div>
      </div>
      <div className="buttons-div">
        <Button className="mr-2" variant="outline-info"
          onClick={() => {
            addAnotherSong();
          }}
        >
          Add Another Song
        </Button>
        <Button variant="outline-info"
          onClick={() => {
            postSongAIOs();
          }}
        >
          Add Songs
        </Button>
      </div>
    </div>
  );
}

export default AddSongPage;
