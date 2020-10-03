class Album {
  constructor(title, genre, songs, cover = null) {
    this.title = title;
    this.genre = genre;
    this.songs = songs;
    this.cover = cover;
  }
}

export default Album;
