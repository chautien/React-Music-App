import React from 'react';

const Song = ({ currentSong: { avatar, title, creator }, isPlaying }) => {
  return (
    <div className="song-container">
      <div className={`${isPlaying && 'loop'} song-media`}>
        <img src={avatar} alt={title} className="song-thumbnail" />
      </div>
      <h2 className="song-title">{title}</h2>
      <p className="song-singer">{creator}</p>
    </div>
  );
};

export default Song;
