import React from 'react';
import LibrarySong from './LibrarySong';

const FilterList = ({
  songs,
  setCurrentSong,
  currentSong,
  setSongs,
  filterSongs,
}) => {
  return (
    <div className="library-list">
      {filterSongs &&
        filterSongs.map((song) => (
          <LibrarySong
            setCurrentSong={setCurrentSong}
            key={song.id}
            song={song}
            songs={songs}
            currentSong={currentSong}
            setSongs={setSongs}
          />
        ))}
    </div>
  );
};

export default FilterList;
