class Song {
  constructor(artist, title, url = null, features = null) {
    this.artist = artist;
    this.title = title;
    this.url = url;
    this.features = features;
  }

  isSameSong(song) {
    if (song.title === this.title)
      return true;
    else
      return false;
  }
}

export default Song;
