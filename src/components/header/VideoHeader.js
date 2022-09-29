import React from "react";
import "./VideoHeader.css";
import { GrPrevious } from "react-icons/gr";
import { BsCamera } from "react-icons/bs";

const VideoHeader = () => {
  return (
    <div className="videoHeader">
      <GrPrevious />
      <h3>Shorts</h3>
      <BsCamera />
    </div>
  );
};

export default VideoHeader;
