import React from "react";

class Playlist extends React.Component {
  constructor(name) {
    super();
    this.name = name;
    this.songs = [];
  }

  addSong(song) {
    if (this.songs == null) this.songs = [];
    this.songs.push(song);
  }

  getListOfSongs() {
    return this.songs.map((song) => (
      <li>
        <a href={song.artist.url}>{song.artist.name}</a> -{" "}
        <a href={song.url}>{song.title}</a>
      </li>
    ));
  }

  render() {
    if (this.songs != null) {
      return (
        <ul>
          {this.props.songs.map((song) => (
            <li>
              <a href={song.artist.url}>{song.artist.name}</a> -{" "}
              <a href={song.url}>{song.title}</a>
            </li>
          ))}
        </ul>
      );
    } else return <div></div>;
  }
}

export default Playlist;
