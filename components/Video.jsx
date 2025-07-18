import "./VideoStyle.css";
import Image from "next/image";
import motVideoPlayButton from "@/images/play-button.svg";
import { useState, useRef, useEffect } from "react";

const Video = ({ src, backgroundImage }) => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  const videoEndHandler = () => {
    setShowVideo(false);
  };

  useEffect(() => {
    if (videoRef && videoRef.current) {
      videoRef.current.onended = videoEndHandler;
    }
  }, [videoRef]);

  const playVideo = () => {
    videoRef.current.play();
    setShowVideo(true);
  };

  return (
    <div className="video-container">
      {showVideo === false && (
        <button className="play-button" onClick={playVideo}>
          <Image priority src={motVideoPlayButton} alt="Play Video" />
        </button>
      )}
      <div className="video-player">
        {showVideo === false && (
          <Image
            src={backgroundImage}
            alt="mot service"
            layout="fill"
            objectFit="cover"
            priority
            className="rounded z-1"
          />
        )}
        <video
          width="100%"
          controls
          controlsList="nodownload"
          disablePictureInPicture
          preload="none"
          ref={videoRef}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Video;
