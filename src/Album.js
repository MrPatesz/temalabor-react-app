
class Album {
    constructor(title, genre, songs, cover = null){
        this.title = title;
        this.genre = genre;
        this.cover = cover;
        this.songs = songs;
    }
}

export default Album;