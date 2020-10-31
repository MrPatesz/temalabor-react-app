class Artist {
  constructor(name, albums) {
    this.name = name;
    this.albums = albums;
  }

  containsAlbum(album) {
    for (var i = 0; i < this.albums.length; i++) {
      if (this.albums[i].isSameAlbum(album)) {
        return true;
      }
    }
    return false;
  }

  indexOfAlbum(album){
    for (var i = 0; i < this.albums.length; i++) {
      if (this.albums[i].isSameAlbum(album)) {
        return i;
      }
    }
  }

  addAlbum(album) {
    if (!this.containsAlbum(album))
      this.albums.push(album);
    else {
      var index = this.indexOfAlbum(album);
      album.songs.forEach((song) => {
        this.albums[index].addSong(song);
      });
    }
  }

  /////////////////////////////

  isSameArtist(artist) {
    if (artist.name === this.name) return true;
    else return false;
  }
}

export default Artist;
