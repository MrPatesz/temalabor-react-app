import React, { useState } from "react";
import ArtistListComponent from "../Components/ArtistListComponent";
import SelectionComponent from "../Components/SelectionComponent";
import AlbumListComponent from "../Components/AlbumListComponent";
import GenreListComponent from "../Components/GenreListComponent";

function HomePage(props) {
  var mock = props.mock;

  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  let selectedItems = {
    selectedGenre,
    setSelectedGenre,
    selectedArtist,
    setSelectedArtist,
    selectedAlbum,
    setSelectedAlbum,
  };

  return (
    <div className="big-container">
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
  );
}

export default HomePage;
