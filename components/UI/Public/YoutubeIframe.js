import { getYoutubeVideoId } from "../../../libs/string-utils";
import styles from "./YoutubeIframe.module.css";

const YoutubeIframe = ({ youtubeUrl = "" }) => {
  const youtubeVideoId = getYoutubeVideoId(youtubeUrl);

  if (!youtubeVideoId) return;

  return (
    <div className={styles.iframeContainer}>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${youtubeVideoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        className={styles.responsiveIframe}
      />
    </div>
  );
};

export default YoutubeIframe;
