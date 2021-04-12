import React from 'react';
import Player from './Player';
import SongItem from './SongItem';

const PlayList = ({songs, setCurrentSong, audioRef, playSongHandler, isPlaying, setSongs,isOpenPlayList, setIsOpenPlayList}) => {
    return(
        <div className={`play-list ${isOpenPlayList ? 'is-open' : ''} `}>
            <h2>Play List</h2>
            <div className="play-list-song">
                {songs.map(song => (
                <SongItem 
                    songs={songs}
                    song={song}
                    key={song.id}
                    setCurrentSong={setCurrentSong}
                    audioRef={audioRef}
                    playSongHandler={playSongHandler}
                    isPlaying={isPlaying}
                    songs={songs}
                    setSongs={setSongs}
                    />))}
            </div>
        </div>
    )
}

export default PlayList;