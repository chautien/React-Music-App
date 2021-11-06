import React from 'react';
import LibrarySong from './LibrarySong';

const LibraryList = ({ songs, setCurrentSong, currentSong, setSongs }) => {
  return (
    <div className="library-list">
      {songs &&
        songs.map((song) => (
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

export default LibraryList;
