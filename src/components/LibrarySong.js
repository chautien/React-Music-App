import React from 'react';

const LibrarySong = ({
  song: { title, avatar, creator },
  setCurrentSong,
  song,
  songs,
  currentSong,
  setSongs,
}) => {
  const handleSongClick = () => {
    if (currentSong.id === song.id) return;
    console.log('Changed current song!');
    const songsUpdate = songs.map((stateSong) => {
      if (stateSong.id === currentSong.id) {
        return { ...stateSong, active: false };
      }
      if (stateSong.id === song.id) {
        const songUpdate = { ...song, active: true };
        setCurrentSong(songUpdate);
        return songUpdate;
      }
      return stateSong;
    });
    setSongs(songsUpdate);
  };
  return (
    <div
      onClick={handleSongClick}
      className={`${song.active ? 'active ' : ''}library-song`}
    >
      <img src={avatar} alt={title} className="library-song-thumbnail" />
      <div className="library-song-desc">
        <h3 className="library-song-title">{title}</h3>
        <p className="library-song-singer">{creator}</p>
      </div>
    </div>
  );
};

export default LibrarySong;
