import React, { useState } from "react";
import Mock from "../Mock";
import AlbumComponent from "../Components/AlbumComponent";
import ArtistComponent from "../Components/ArtistComponent";
import SelectionComponent from "../Components/SelectionComponent";

function HomePage() {
  var mock = new Mock();

  const [selectedArtist, setSelectedArtist] = useState(null);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  let selectedItems = {
    selectedArtist,
    setSelectedArtist,
    selectedAlbum,
    setSelectedAlbum,
  };

  return (
    <div className="big-container">
      <div className="genre-div">
        <h1> Genres </h1>
        <ul>
          {mock.artists.map((artist) => (
            <div>
              {artist.albums.map((album) => (
                <li>{album.genre}</li>
              ))}
            </div>
          ))}
        </ul>
      </div>
      <div className="artist-div">
        <h1> Artists </h1>
        <ul>
          {mock.artists.map((artist) => (
            <li>
              <ArtistComponent artist={artist} selectedItems={selectedItems} />
            </li>
          ))}
        </ul>
      </div>
      <div className="album-div">
        <h1> Albums </h1>
        <ul>
          {mock.artists
            .filter((artist) => {
              if (selectedItems.selectedArtist === null) return true;
              return artist.name === selectedItems.selectedArtist;
            })
            .map((artist) => (
              <div>
                {artist.albums.map((album) => (
                  <li>
                    <AlbumComponent
                      album={album}
                      selectedItems={selectedItems}
                    />
                  </li>
                ))}
              </div>
            ))}
        </ul>
      </div>
      <div className="selection-div">
        <h1> Selection </h1>
        <SelectionComponent mock={mock} selectedItems={selectedItems} />
      </div>
    </div>
  );
}

export default HomePage;
