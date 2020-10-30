import React, { useState } from "react";
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
  const [queue, setQueue] = useState([]);

  let selectedItems = {
    selectedGenre,
    setSelectedGenre,
    selectedArtist,
    setSelectedArtist,
    selectedAlbum,
    setSelectedAlbum,
  };

  function enqueueClicked() {
    var genres = mock.genres;
    var selection = [];
    for (var i = 0; i < genres.length; i++) {
      var artists = genres[i].artists;
      if (selectedGenre !== null && genres[i].name !== selectedGenre) continue;
      for (var j = 0; j < artists.length; j++) {
        var albums = artists[j].albums;
        if (selectedArtist !== null && artists[j].name !== selectedArtist)
          continue;
        for (var k = 0; k < albums.length; k++) {
          var songs = albums[k].songs;
          if (selectedAlbum !== null && albums[k].title !== selectedAlbum)
            continue;
          for (var n = 0; n < songs.length; n++) {
            selection.push(songs[n]);
          }
        }
      }
    }
    setQueue(queue.concat(selection));
  }

  return (
    <div className="home-page">
      <div className="columns-div">
        <div className="genre-div">
          <h1> Genres </h1>
          <GenreListComponent mock={mock} selectedItems={selectedItems} />
        </div>
        <div className="artist-div">
          <h1> Artists </h1>
          <ArtistListComponent mock={mock} selectedItems={selectedItems} />
        </div>

        <div className="album-div">
          <h1> Albums </h1>
          <AlbumListComponent mock={mock} selectedItems={selectedItems} />
        </div>
        <div className="selection-div">
          <h1> Selection </h1>
          <SelectionComponent mock={mock} selectedItems={selectedItems} />
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
