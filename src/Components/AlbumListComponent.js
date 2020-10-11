import React from "react";
import AlbumComponent from "./BasicComponents/AlbumComponent";

function AlbumListComponent(props) {
  return (
    <ul>
      <li
        onClick={() => {
          props.selectedItems.setSelectedAlbum(null);
        }}
        className={
          props.selectedItems.selectedAlbum === null
            ? "selected-list-item"
            : "not-selected-list-item"
        }
      >
        All
      </li>
      {props.mock.genres
        .filter((genre) => {
          if (props.selectedItems.selectedGenre === null) return true;
          return genre.name === props.selectedItems.selectedGenre;
        })
        .map((genre) => (
          <div>
            {genre.artists
              .filter((artist) => {
                if (props.selectedItems.selectedArtist === null) return true;
                return artist.name === props.selectedItems.selectedArtist;
              })
              .map((artist) => (
                <div>
                  {artist.albums.map((album) => (
                    <li
                      className={
                        props.selectedItems.selectedAlbum === album.title
                          ? "selected-list-item"
                          : "not-selected-list-item"
                      }
                    >
                      <AlbumComponent
                        album={album}
                        selectedItems={props.selectedItems}
                      />
                    </li>
                  ))}
                </div>
              ))}
          </div>
        ))}
    </ul>
  );
}

export default AlbumListComponent;
