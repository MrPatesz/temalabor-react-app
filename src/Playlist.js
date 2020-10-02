import React from "react";

class Playlist extends React.Component {
  constructor(name) {
    super();
    this.name = name;
    this.songs = [];
  }

  addSong(song) {
    this.songs.push(song);
  }

  render() {
    return (
      <ul>
        {this.props.songs.map((song) => (
          <li>
            {song.artist.name} - <a href={song.url}>{song.title}</a>
          </li>
        ))}
      </ul>
    );
  }
}

export default Playlist;
