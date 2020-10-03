import Song from "./DataClasses/Song";
import Artist from "./DataClasses/Artist";
import Album from "./DataClasses/Album";

class Mock {
  constructor() {
    this.createData();
  }

  createData() {
    this.artists = [
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
        new Album("The Fall", "Hip-hop", [
          new Song("XXXTENTACION", "Never"),
        ]),
      ]),
      new Artist("A$AP Rocky", [
        new Album("TESTING", "Hip-hop", [
          new Song("A$AP Rocky", "Changes"),
        ]),
      ]),
    ];
  }
}

export default Mock;
