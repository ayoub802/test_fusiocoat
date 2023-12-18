import React from 'react';
import YouTube from 'react-youtube';

interface YouTubePlayerProps {
  videoId: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId }) => {
  const opts = {
    height: '590',
    width: '100%',
    playerVars: {
      autoplay: 0, // set to 1 for autoplay
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default YouTubePlayer;