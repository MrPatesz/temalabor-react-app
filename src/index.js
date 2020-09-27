import React from 'react';
import ReactDOM/*, { unstable_renderSubtreeIntoContainer }*/ from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Song from './Song.js';
import Artist from './Artist';
import Playlist from './Playlist';

// #region Creating Songs
var song1 = new Song(
  new Artist("Kid Cudi", "https://open.spotify.com/artist/0fA0VVWsXO9YnASrzqfmYu?si=spQ4ByN1SiWV_5DaKopFAQ"),
  "Soundtrack 2 My Life",
  "https://open.spotify.com/track/0Ns3nvzgfC6Yh3j5apV66n?si=n_Kig2b8Q-eS-GAr7kPihA"
);
var song2 = new Song(
  new Artist("XXXTENTACION", "https://open.spotify.com/artist/15UsOTVnJzReFVN1VCnxy4?si=F_XDikgeQBSOIxrQkR__rw"),
  "Train Food",
  "https://open.spotify.com/track/5lar0mCUejpILVkAz50s2J?si=5EVCZxNrQDGRYZayujln5g"
);
var song3 = new Song(
  new Artist("A$AP Rocky", "https://open.spotify.com/artist/13ubrt8QOOCPljQ2FL1Kca?si=yKI2UbB2QEyUNkHgy0t1JQ"),
  "Sundress",
  "https://open.spotify.com/track/2aPTvyE09vUCRwVvj0I8WK?si=cyUiQFFrTV-CPYMbpWRY0A"
);
// #endregion

const Mock = () => {
  var songs = [ song1, song2, song3 ];

  return (
    <ul>
      {songs.map(song => <li><a href={song.artist.url}>{song.artist.name}</a> - <a href={song.url}>{song.title}</a></li>)}
    </ul>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Mock />
  </React.StrictMode>,
  document.getElementById('root')
);

var playlist1 = new Playlist("Cool Mixtape", "Good Songs");
playlist1.addSong(song1);
playlist1.addSong(song2);
playlist1.addSong(song3);

ReactDOM.render(
  <div>
      <h1> {playlist1.name} </h1>
      <ul>
          {playlist1.getListOfSongs()}
      </ul>
  </div>,
  document.getElementById('root2')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
