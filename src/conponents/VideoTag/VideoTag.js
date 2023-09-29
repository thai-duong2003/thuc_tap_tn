import styles from "./VideoTag.module.scss";
import classNames from "classnames/bind";
import { useRef, useState } from "react";
import { setconfig } from "~/App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function VideoTag({
  className,
  src,
  mouseOverAutoPlay = false,
  mouseOutAutoPause = false,
  onlodedplay = false,
  muted = false,
  playbtn = true,
  children,
  videotagref,
}) {
  // Lưu ý : google ko cho phép tự động phat  có âm thanh khi chua tuong tác voi document nen pjai cho muted vào
  const videref = useRef();
  const [isplay, setplay] = useState(true);

  setconfig("isplayvideotag", isplay);

  const play = () => {
    videref.current.play();
  };
  const pause = () => {
    const videolay = videref.current.play();
    if (videolay !== undefined) {
      videolay
        .then((_) => {
          videref.current.pause();
        })
        .catch((err) => {});
    }
  };
  const noactive = () => {};
  const clases = cx("wrapper", { [className]: className });
  return (
    <div
      ref={videotagref}
      className={clases}
      onMouseOver={mouseOverAutoPlay ? play : noactive}
      onMouseOut={mouseOutAutoPause ? pause : noactive}
      onClick={() => {
        if (isplay) {
          pause();
        } else {
          play();
        }
        setplay(!isplay);
      }}
    >
      <video
        // muted={muted && true}
        muted
        ref={videref}
        src={src}
        loop
        onLoadedData={onlodedplay ? play : noactive}
      />

      {playbtn && !isplay && (
        <div className={cx("playpause", !isplay && "hide")}>
          <FontAwesomeIcon icon={faPlay} />
        </div>
      )}
      {children}
    </div>
  );
}
export default VideoTag;
