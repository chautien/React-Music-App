import React, { useEffect, useState } from 'react';
import Error from './components/Error';
import Filter from './components/Filter';
import Library from './components/Library';
import Nav from './components/Nav';
import Player from './components/Player';
import Song from './components/Song';
import './styles/app.scss';
import data from './util';

const App = () => {
  const [songs, setSongs] = useState(() => data());
  const [currentSong, setCurrentSong] = useState(
    () => songs.filter((song) => song.active === true)[0]
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState(null);
  const [songsFilter, setSongsFilter] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [filterError, setFilterError] = useState('');
  const [libraryActive, setLibraryActive] = useState(false);

  useEffect(() => {
    const songsArr = [...songs];
    const songsUpdate = songsArr.map((song) => {
      if (song.id === currentSong.id) {
        return { ...song, active: true };
      }
      return { ...song, active: false };
    });
    setSongs(songsUpdate);
    setSongsFilter((songsFilter) =>
      songsFilter.map((song) => {
        if (song.id === currentSong.id) {
          return { ...song, active: true };
        }
        return { ...song, active: false };
      })
    );
    setError(null);
  }, [currentSong]);

  const handleFilterSong = (text) => {
    setFilterText(text);
    if (text.length === 0) {
      setSongsFilter([]);
      return;
    }
    const filterSongs = songs.filter(
      (song) => song.title.includes(text) || song.creator.includes(text)
    );
    if (filterSongs.length <= 0) {
      if (text.length > 0) {
        setFilterError('No song founded!');
      }
      setFilterError('');
    }
    setSongsFilter(filterSongs);
  };
  return (
    <div>
      {error && <Error message={error} />}
      <Nav libraryActive={libraryActive} setLibraryActive={setLibraryActive} />
      <Song currentSong={currentSong} isPlaying={isPlaying} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setError={setError}
        songs={songs}
        setCurrentSong={setCurrentSong}
      />
      <Library
        active={libraryActive}
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
        songsFilter={songsFilter}
        filterError={filterError}
      >
        <Filter onInputChange={handleFilterSong} filterText={filterText} />
      </Library>
    </div>
  );
};

export default App;
