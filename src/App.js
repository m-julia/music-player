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
 const [isOpenPlayList, setIsOpenPlayList] = useState(false);

 const audioRef = useRef(null);

 const timeUpdateHandler = (e) => {
  const current = e.target.currentTime;
  const duration = e.target.duration;
  setCurrentTime(current);
  setDuration(duration);
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

  return (
    <div className="app">
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
        onLoadedMetadata={timeUpdateHandler}>
      </audio>
    </div>
  );
}

export default App;
