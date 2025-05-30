import React, { useRef } from 'react';
import './VideoPlayer.css';
import video from '../../assets/7971025-hd_1280_720_24fps.mp4';

const VideoPlayer = ({ playState, SetPlayState }) => {
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      SetPlayState(false);
    }
  };

  return (
    <div className={`Video-Player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
