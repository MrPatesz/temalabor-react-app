import Song from "./DataClasses/Song";
import Artist from "./DataClasses/Artist";
import Album from "./DataClasses/Album";
import Genre from "./DataClasses/Genre";

class Mock {
  state = {
    genres: []
  }
  constructor() {
    this.createData();
  }

  createData() {
    this.genres = [
      new Genre("Hip-hop", [
        new Artist("Kid Cudi", [
          new Album("Man on the Moon", "Hip-hop", [
            new Song("Kid Cudi", "Soundtrack 2 My Life"),
            new Song("Kid Cudi", "Man on the Moon"),
          ]),
        ]),
        new Artist("XXXTENTACION", [
          new Album("Bad Vibes Forever", "Hip-hop", [
            new Song("XXXTENTACION", "Train Food"),
          ]),
          new Album("The Fall", "Hip-hop", [new Song("XXXTENTACION", "Never")]),
        ]),
        new Artist("A$AP Rocky", [
          new Album("TESTING", "Hip-hop", [new Song("A$AP Rocky", "Changes")]),
        ]),
      ]),
      new Genre("Drum & Bass", [
        new Artist("Magnetude", [
          new Album("Trail of Tears", "Drum & Bass", [
            new Song("Magnetude", "Trail of Tears"),
          ]),
        ]),
      ]),
    ];
  }

  containsGenre(genre) {
    for (var i = 0; i < this.genres.length; i++) {
      if (this.genres[i].isSameGenre(genre)) {
        return true;
      }
    }
    return false;
  }

  indexOfGenre(genre){
    for (var i = 0; i < this.genres.length; i++) {
      if (this.genres[i].isSameGenre(genre)) {
        return i;
      }
    }
  }

  addGenre(genre) {
    if(!this.containsGenre(genre))
      this.genres.push(genre);
    else {
      var index = this.indexOfGenre(genre);
      genre.artists.forEach((artist) => {
        this.genres[index].addArtist(artist);
      });
    }
  }

  ///////////////////////

  addMusic(genre) {
    this.addGenre(genre);
  }
}

export default Mock;
