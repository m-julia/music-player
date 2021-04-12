import React from 'react';
import playAudio from '../playAudio';

const SongItem = ({ song, setCurrentSong, audioRef, playSongHandler, isPlaying, songs, setSongs }) => {

    const songSelectHandler = () => {
        setCurrentSong(song);
        console.log(song);
        const activeSongid = song.id;
            
        playAudio(isPlaying, audioRef);

        const newSongs = songs.map((song) => {
            if (song.id === activeSongid) {
                return {
                    ...song,
                    active: true,            
                } 
            } else {
                return {
                    ...song,
                    active: false
                };
            }
        });

        setSongs(newSongs);
    }

    

    return (
        <div 
            onClick={songSelectHandler}
            className={`song-item ${song.active ? ' active' : ''}`}
        >
            <img src={song.cover} alt={song.name}/>
            
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
            
        </div>
    )
}

export default SongItem;