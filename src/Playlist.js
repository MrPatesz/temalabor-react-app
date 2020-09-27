import React from 'react';

class Playlist {
    constructor(name){
        this.name = name;
        this.songs = null;
    }

    addSong(song){
        if(this.songs == null)
            this.songs = [];
        this.songs.push(song);
    }

    getListOfSongs(){
        return this.songs.map(song => <li><a href={song.artist.url}>{song.artist.name}</a> - <a href={song.url}>{song.title}</a></li>);
    }
}

export default Playlist;