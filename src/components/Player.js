import React, {useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay,  faAngleLeft, faAngleRight, faPause} from '@fortawesome/free-solid-svg-icons';
import playAudio from '../playAudio';

const Player = ({currentSong, setCurrentSong, isPlaying, songs, setSongs,
    setIsPlaying, audioRef, currentTime, setCurrentTime, duration, playSongHandler}) => {

    const transformationTime = (time) => {
        return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2);
    }

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setCurrentTime(e.target.value);
    }

    const skipTrackHandler = (direction) => {
       let currentIndex = songs.findIndex((song) => song.id === currentSong.id)
       switch (direction) {
            case 'skip-forward':
                setCurrentSong(songs[(currentIndex + 1) % songs.length])
                break;
            case 'skip-back':
                if (currentIndex === 0 ) {
                    setCurrentSong(songs[songs.length - 1]);
                    playAudio(isPlaying, audioRef);
                    return;
                }
                setCurrentSong(songs[(currentIndex - 1) % songs.length])
                break;
       }
       playAudio(isPlaying, audioRef);
    };

    useEffect(() => {
        const newSongs = songs.map((song) => {
            if (song.id === currentSong.id) {
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
    }, [currentSong]);

    return(
        <div className="player">
            <div className="time-control">
                <span>{transformationTime(currentTime)}</span>
                <input 
                    type="range"
                    min={0}
                    max={String(duration)}
                    value={currentTime}
                    onChange={dragHandler} />
                <span>{duration ? transformationTime(duration) : '0:00'}</span>
            </div>

            <div className="player-control">
                <FontAwesomeIcon 
                    className="skip-back fas" 
                    size="2x" 
                    icon={faAngleLeft}
                    onClick={() => skipTrackHandler('skip-back')}
                />
                <FontAwesomeIcon 
                    onClick={playSongHandler} 
                    className="play fas" 
                    size="2x" 
                    icon={isPlaying ? faPause : faPlay}/>
                <FontAwesomeIcon 
                    className="skip-forward fas" 
                    size="2x" 
                    icon={faAngleRight}
                    onClick={() => skipTrackHandler('skip-forward')}
                />
            </div>
        </div>
    )
};

export default Player;