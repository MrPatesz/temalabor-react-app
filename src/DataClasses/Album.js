class Album {
  constructor(title, genre, songs, cover = null) {
    this.title = title;
    this.genre = genre;
    this.songs = songs;
    this.cover = cover;
  }

  containsSong(song) {
    for (var i = 0; i < this.songs.length; i++) {
      if (this.songs[i].isSameSong(song))
        return true;
    }
    return false;
  }

  addSong(song) {
    if (!this.containsSong(song)) this.songs.push(song);
  }

  /////////////////////////////////

  isSameAlbum(album) {
    if (album.title === this.title)
      return true;
    else
      return false;
  }
}

export default Album;
