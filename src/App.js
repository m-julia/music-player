import React, {useState, useRef} from 'react';
import Player from './components/Player';
import Song from './components/Song';
import './styles/app.scss';
import data from './data';
import PlayList from './components/PlayList';
import Nav from './components/Nav';


const App = () => {
 const [songs, setSongs] = useState(data());
 const [currentSong, setCurrentSong] = useState(songs[0]);
 const [isPlaying, setIsPlaying] = useState(false);
 const [currentTime, setCurrentTime] = useState(0);
 const [duration, setDuration] = useState(0);
 const [progress, setProgress] = useState(0);
 const [isOpenPlayList, setIsOpenPlayList] = useState(false);

 const audioRef = useRef(null);

 const timeUpdateHandler = (e) => {
  const current = e.target.currentTime;
  const duration = e.target.duration;
  const currentProgress = Math.round((current / duration) * 100);
  setCurrentTime(current);
  setDuration(duration);
  setProgress(currentProgress);
}

const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
  } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
  }
}

const songEndHandler = async () => {
  let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
  await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
  if (isPlaying) audioRef.current.play();
}

  return (
    <div className={`app ${isOpenPlayList ? "play-list-active" : ""}` }>
      <Nav 
        isOpenPlayList={isOpenPlayList}
        setIsOpenPlayList={setIsOpenPlayList}
      />
      <Song currentSong={currentSong} />
      <Player 
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        currentTime={currentTime}
        duration={duration}
        progress={progress}
        playSongHandler={playSongHandler}
        songs={songs}
        setSongs={setSongs}
        setCurrentTime={setCurrentTime}

      />

      <PlayList 
        songs={songs}
        setCurrentSong={setCurrentSong}
        currentTime={currentTime}
        duration={duration}
        audioRef={audioRef}
        playSongHandler={playSongHandler}
        isPlaying={isPlaying}
        setSongs={setSongs}
        isOpenPlayList={isOpenPlayList}
        setIsOpenPlayList={setIsOpenPlayList}
      />

      <audio 
        ref={audioRef} 
        src={currentSong.audio}
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        onEnded={songEndHandler}>
      </audio>
    </div>
  );
}

export default App;
