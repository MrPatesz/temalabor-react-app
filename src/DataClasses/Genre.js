class Genre {
  constructor(name, artists = null) {
    this.name = name;
    this.artists = artists;
  }

  containsArtist(artist) {
    for (var i = 0; i < this.artists.length; i++) {
      if (this.artists[i].isSameArtist(artist)) {
        return true;
      }
    }
    return false;
  }

  indexOfArtist(artist){
    for (var i = 0; i < this.artists.length; i++) {
      if (this.artists[i].isSameArtist(artist)) {
        return i;
      }
    }
  }

  addArtist(artist) {
    if (!this.containsArtist(artist))
      this.artists.push(artist);
    else {
      var index = this.indexOfArtist(artist);
      artist.albums.forEach((album) => {
        this.artists[index].addAlbum(album);
      });
    }
  }

  ////////////////////////

  isSameGenre(genre) {
    if (genre.name === this.name) return true;
    else return false;
  }
}

export default Genre;
