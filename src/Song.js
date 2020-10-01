
class Song {
    constructor(artist, title, url, features = null) {
        this.artist = artist;
        this.title = title;
        this.url = url;
        this.features = features;
    }
}

export default Song;