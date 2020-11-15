import React, { useState, useEffect } from "react";
import axios from "axios";

function Api() {
  const [songAIOs, setSongAIOs] = useState([]);
  const [fetch, setFetch] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://localhost:44339/api/SongAIOs");

      setSongAIOs(result.data);
    };
    fetchData();
  }, [fetch]);

  function fetchAgain() {
    setFetch(!fetch)
  }

  function getGenres() {
    var genres = [];

    var alreadyInList = [];

    songAIOs.forEach((s) => {
      if (!alreadyInList.includes(s.genreName)) {
        genres.push({ name: s.genreName });
        alreadyInList.push(s.genreName);
      }
    });

    return genres;
  }

  function getArtists() {
    var artists = [];

    var alreadyInList = [];

    songAIOs.forEach((s) => {
      if (!alreadyInList.includes(s.artistName)) {
        artists.push({ name: s.artistName });
        alreadyInList.push(s.artistName);
      }
    });

    return artists;
  }

  function getAlbums() {
    var albums = [];

    var alreadyInList = [];

    songAIOs.forEach((s) => {
      if (!alreadyInList.includes(s.albumTitle)) {
        albums.push({ name: s.albumTitle });
        alreadyInList.push(s.albumTitle);
      }
    });

    return albums;
  }

  function getSongs() {
    var songs = [];

    songAIOs.forEach((s) => {
        songs.push({ title: s.songTitle, album: s.albumTitle, artist: s.artistName, genre: s.genreName });
    });

    return songs;
  }

  return (
    <div>
      <ul>
        {songAIOs.map((songAIO) => (
          <li>{songAIO.songTitle}</li>
        ))}
      </ul>
      <button onClick={() => setFetch(!fetch)}>FetchAgain</button>
    </div>
  );
}

export default Api;