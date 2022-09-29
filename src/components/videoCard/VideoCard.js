import React, { useEffect, useRef, useState } from "react";
import "./videoCard.css";
import VideoHeader from "../header/VideoHeader";
import VideoFooter from "../footer/VideoFooter";

const VideoCard = ({ url, channel, avatarSrc, song, likes, shares }) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  const handleScroll = (e) => {
    if (playing) {
      videoRef.current.play();
      setPlaying(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div className="videoCard">
      <VideoHeader />
      <video
        src={url}
        className="videoCard__player"
        alt="Short Video App"
        ref={videoRef}
        onClick={handleVideoPress}
        loop
      />
      <VideoFooter
        channel={channel}
        likes={likes}
        shares={shares}
        avatarSrc={avatarSrc}
        song={song}
      />
    </div>
  );
};

export default VideoCard;
