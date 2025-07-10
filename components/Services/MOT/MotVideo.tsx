import Video from "../../Video";
import motVideoBackgroundImage from "@/images/mot_video_background.jpg";

function MotVideo() {
  const path = "/videos/mot_service.mp4";
  return (
    <div>
      <Video src={path} backgroundImage={motVideoBackgroundImage} />
    </div>
  );
}

export default MotVideo;
