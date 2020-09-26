import React, { Component } from 'react';
//import Song from './Song';

class SongList extends Component{
    constructor(songs){
        super();
        this.songs = songs;
    }

    addSong(song){
        this.songs.push(song);
    }

    render() {
        return (
            <ul>
                {this.songs.map(song => <li><a href={song.artist.url}>{song.artist.name}</a> - <a href={song.url}>{song.title}</a></li>)}
            </ul>
        );
    }
}

class Artist extends SongList{
    constructor(name, url){
        super();
        this.name = name;
        this.url = url;
    }
}

class Playlist extends SongList {
    constructor(name, info){
        super();
        this.name = name;
        this.info = info;
    }
}

export default Artist;