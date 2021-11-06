import {
  faAngleLeft,
  faAngleRight,
  faPause,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';

const Player = ({
  currentSong: { music, title },
  isPlaying,
  setIsPlaying,
  setError,
  currentSong,
  setCurrentSong,
  songs,
}) => {
  // State
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  // Ref
  const audioRef = useRef(null);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (!songInfo.duration) {
        setError(`${title} - error when loading this song!`);
      }
    }, 4000);
    return () => {
      clearInterval(timeOut);
    };
  }, [songInfo, title, setError]);

  // Method
  const handleSongLoad = (e) => {
    if (isPlaying) {
      audioRef.current.play();
    }
    handleTimeUpdate(e);
  };
  const handleSongAction = () => {
    const { current } = audioRef;
    if (isPlaying) {
      current.pause();
      setIsPlaying(!isPlaying);
    } else {
      current.play();
      setIsPlaying(!isPlaying);
    }
  };
  const handleTimeUpdate = ({ target }) => {
    const { currentTime, duration } = target;
    if (!duration) {
      setSongInfo({ currentTime: 0, duration: 0 });
      return;
    }
    setSongInfo({ ...songInfo, currentTime, duration });
    if (currentTime === duration) {
      setSongInfo({ ...songInfo, currentTime: 0 });
      handleSkipTrack('skip-forward');
    }
  };
  const timeFormat = (time) => {
    return `${Math.floor(time / 60)}:${('0' + Math.floor(time % 60)).slice(
      -2
    )}`;
  };
  const handleProgressDrag = (e) => {
    const { value } = e.target;
    audioRef.current.currentTime = value;
  };
  const handleSkipTrack = (direction) => {
    let currentSongIndex = songs.findIndex(
      (song) => song.id === currentSong.id
    );
    if (direction === 'skip-forward') {
      setCurrentSong({
        ...songs[(currentSongIndex + 1) % songs.length],
        active: true,
      });
    }
    if (direction === 'skip-back') {
      if ((currentSongIndex - 1) % songs.length === -1) {
        setCurrentSong({ ...songs[songs.length - 1], active: true });

        return;
      }
      setCurrentSong({
        ...songs[(currentSongIndex - 1) % songs.length],
        active: true,
      });
    }
  };

  return (
    <div className="player">
      <div className="time-control">
        <span>{timeFormat(songInfo.currentTime)}</span>
        <input
          type="range"
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          onChange={handleProgressDrag}
          className="song-range"
        />
        <span>{timeFormat(songInfo.duration)}</span>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
          onClick={() => {
            handleSkipTrack('skip-back');
          }}
        />
        <FontAwesomeIcon
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
          onClick={handleSongAction}
        />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
          onClick={() => {
            handleSkipTrack('skip-forward');
          }}
        />
      </div>
      <audio
        src={music}
        onLoadedMetadata={handleSongLoad}
        onTimeUpdateCapture={handleTimeUpdate}
        ref={audioRef}
      />
    </div>
  );
};

export default Player;
