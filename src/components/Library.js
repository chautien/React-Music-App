import React from 'react';
import FilterList from './FilterList';
import LibraryList from './LibraryList';

const Library = ({
  songs,
  songsFilter,
  setCurrentSong,
  currentSong,
  setSongs,
  children,
  filterError,
  active,
}) => {
  return (
    <div className={`library ${active ? 'library-active' : ''}`}>
      <h2 className="library-title">Library</h2>
      {children && children}
      {songs && !songsFilter.length && !filterError && (
        <LibraryList
          setCurrentSong={setCurrentSong}
          currentSong={currentSong}
          setSongs={setSongs}
          songs={songs}
        />
      )}
      {songsFilter.length > 0 && (
        <FilterList
          setCurrentSong={setCurrentSong}
          currentSong={currentSong}
          setSongs={setSongs}
          songs={songs}
          filterSongs={songsFilter}
        />
      )}
      {filterError && <h5 className="error-text">{filterError}</h5>}
    </div>
  );
};

export default Library;
