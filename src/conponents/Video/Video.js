import PropTypes from "prop-types";
import { faEllipsisVertical, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Video.module.scss";
import { Playicon } from "../Icon/Icon";
import { useRef, useState } from "react";
import Videobtnactive from "../Videobtnactive";
import TippyOptionvideo from "./tippyoptionvideo";
import Volume from "../Volume";
// import { setconfig, config } from "../Volume/Volume";
import { config } from "~/App";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

function Video({ data }) {
  const [isplay, setisplay] = useState(true);
  const [ishover, setishover] = useState(false);
  const videoref = useRef();

  const play = () => {
    setisplay(true);
    videoref.current.play();
    window.removeEventListener("scroll", videoScroll);
  };
  const pause = () => {
    setisplay(false);
    videoref.current.pause();
    window.removeEventListener("scroll", videoScroll);
  };

  function videoScroll() {
    const windowHeight = window.innerHeight; // lay ra chieu cao cua window

    var videoTag = videoref.current;

    if (videoTag) {
      var videoHeight = videoTag.clientHeight; //  lay ra chieu cao cua element
      var videoClientRect = videoTag.getBoundingClientRect().top; // tra ve kich thuoc cua phan tu va vij tri cua no so voikhung  nhin

      if (
        videoClientRect <= windowHeight - videoHeight * 0.5 &&
        videoClientRect >= 0 - videoHeight * 0.5
      ) {
        videoTag.play();
        setisplay(true);
      } else {
        setisplay(false);
        videoTag.pause();
      }
    }
  }

  return (
    <div className={cx("wrapper")} onLoadedData={videoScroll}>
      <div
        className={cx("video")}
        onMouseOver={() => setishover(true)}
        onMouseOut={() => setishover(false)}
      >
        <Link to={"/videodetail"}>
          <video
            loop
            // autoPlay
            ref={videoref}
            muted={config.ismute}
            src={data.file_url}
            poster={data.thumb_url}
            playsInline
            onLoadedData={() => {
              window.addEventListener("scroll", videoScroll);
            }}
          ></video>{" "}
        </Link>
        {ishover && (
          <>
            <div>
              <TippyOptionvideo isright>
                <button className={cx("more-btn")}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              </TippyOptionvideo>
            </div>
            <div className={cx("control")}>
              <div className={cx("play")}>
                {isplay ? (
                  <button onClick={pause}>
                    <Playicon />
                  </button>
                ) : (
                  <button onClick={play}>
                    <FontAwesomeIcon icon={faPlay} />
                  </button>
                )}
              </div>

              <Volume element={videoref.current} />
            </div>
          </>
        )}
      </div>

      <Videobtnactive data={data} />
    </div>
  );
}
export default Video;
