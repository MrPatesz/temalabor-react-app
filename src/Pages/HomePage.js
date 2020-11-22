import React, { useState, useEffect } from "react";
import axios from "axios";
import ArtistListComponent from "../Components/ArtistListComponent";
import SelectionComponent from "../Components/SelectionComponent";
import AlbumListComponent from "../Components/AlbumListComponent";
import GenreListComponent from "../Components/GenreListComponent";
import QueueComponent from "../Components/QueueComponent";
import "./HomePage.css";

function HomePage(props) {
  var mock = props.mock;

  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [queue, setQueue] = useState(props.savedQueue);

  let selectedItems = {
    selectedGenre,
    setSelectedGenre,
    selectedArtist,
    setSelectedArtist,
    selectedAlbum,
    setSelectedAlbum,
  };

  const [songAIOs, setSongAIOs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://localhost:5001/api/SongAIOs");

      setSongAIOs(result.data);
    };
    fetchData();
  }, []);

  function enqueueClicked() {
    var selection = [];
    songAIOs.forEach((s) => {
      var songString = s.artistName + " - " + s.songTitle;
      if (
        !selection.includes(songString) &&
        (s.genreName === selectedGenre || selectedGenre === null) &&
        (s.artistName === selectedArtist || selectedArtist === null) &&
        (s.albumTitle === selectedAlbum || selectedAlbum === null)
      )
      selection.push(songString);
    });

    selection.sort((a1, a2) => a1.localeCompare(a2));

    setQueue(queue.concat(selection));

    for (var l = 0; l < selection.length; l++) {
      props.savedQueue.push(selection[l]);
    }
  }

  return (
    <div className="home-page">
      <div className="columns-div">
        <div className="genre-div">
          <h1> Genres </h1>
          <GenreListComponent songAIOs={songAIOs} selectedItems={selectedItems} />
        </div>
        <div className="artist-div">
          <h1> Artists </h1>
          <ArtistListComponent songAIOs={songAIOs} mock={mock} selectedItems={selectedItems} />
        </div>

        <div className="album-div">
          <h1> Albums </h1>
          <AlbumListComponent songAIOs={songAIOs} mock={mock} selectedItems={selectedItems} />
        </div>
        <div className="selection-div">
          <h1> Selection </h1>
          <SelectionComponent songAIOs={songAIOs} mock={mock} selectedItems={selectedItems} />
        </div>
      </div>
      <div className="queue-div">
        <h1> Queue </h1>
        <QueueComponent queue={queue} />
      </div>
      <div className="buttons-div">
        <button
          onClick={() => {
            setQueue([]);
            while (props.savedQueue.length > 0) {
              props.savedQueue.pop();
            }
          }}
        >
          Clear Queue
        </button>
        <button
          onClick={() => {
            enqueueClicked();
          }}
        >
          Enqueue Selection
        </button>
      </div>
    </div>
  );
}

export default HomePage;
