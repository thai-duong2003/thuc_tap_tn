import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import images from "~/access/image";
import Comments, { WriteComment } from "~/conponents/Comments";
import HomeHeader from "~/conponents/HomeHeader";
import Pretop from "~/conponents/Pretop";
import Videobtnactive from "~/conponents/Videobtnactive";
import Shareblock from "~/conponents/Videobtnactive/Shareblock";
import VideoTag from "~/conponents/VideoTag";
import styles from "./VideoDetail.module.scss";
import {
  faAngleDown,
  faAngleUp,
  faEllipsis,
  faPlay,
  faVolumeXmark,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TippyOptionvideo } from "~/conponents/Video";
import Search from "~/layouts/Conponent/Search/Search";

const cx = classNames.bind(styles);
const datac = {
  likes_count: 234,
  comments_count: 234,
  views_count: 234,
  shares_count: 234,
};

function VideoDetail() {
  const data = {
    description:
      "duong quang thai duong quang thai duong quang thai duong quang thai duong quang thai ",
    vidoe: [images.video, images.video1, images.video2],
    user: {
      nickname: "thaiq",
      avatar: images.noImg,
      tick: true,
      first_name: "duong quang",
      last_name: "thai",
    },
  };

  const [comment, setcomment] = useState(true);
  const link =
    "https://images2.thanhnien.vn/Uploaded/nhuvnq/2021_12_09/ta03-7305.jpg";

  const re = useRef();
  const [tag, settag] = useState(undefined);
  const [index, setindex] = useState(0);
  const vi = () => {
    settag(re.current.querySelector("video"));
  };
  console.log(index);
  return (
    <div className={cx("wrapper")}>
      <div ref={re} className={cx("videopast")} onMouseOver={vi}>
        <div
          className={cx("background")}
          style={{ background: `url(${link}) no-repeat center /cover` }}
        ></div>
        <div className={cx("overlay")}></div>

        <VideoTag
          className={"detailvideo"}
          src={data.vidoe[index]}
          onlodedplay
        ></VideoTag>
        {/*  */}
        <div className={cx("wrappercontrol")}>
          <div className={cx("close", "btn")}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
          <Search className={"videocontrol"} />
          <div className={cx("control")}>
            <TippyOptionvideo>
              <span className={cx("menu", "btn")}>
                <FontAwesomeIcon icon={faEllipsis} />
              </span>
            </TippyOptionvideo>
            <div className={cx("arrow")}>
              <span
                className={cx("arrow_up", "btn")}
                onClick={() => {
                  setindex((e) => e + 1);
                }}
              >
                <FontAwesomeIcon icon={faAngleUp} />
              </span>
              <span
                className={cx("arrow_down", "btn")}
                onClick={() => {
                  setindex((e) => e - 1);
                }}
              >
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
            </div>
            <div className={cx("volume", "btn")}>
              <FontAwesomeIcon icon={faVolumeXmark} />
            </div>
          </div>
        </div>
      </div>
      <div className={cx("contentpast")}>
        <HomeHeader className={"videodetail"} data={data} />
        <div className={cx("btnactive")}>
          <Videobtnactive
            deletelastitem
            data={datac}
            className={"videodetailBtnactive"}
          />
          <div className={cx("shareApp")}>
            <Shareblock videodetaill />
          </div>
        </div>
        <div className={cx("linkVideo")}>
          <p>{data.description}</p>
          <button>Coppy link</button>
        </div>
        <div className={cx("nameblock")}>
          <div
            onClick={() => setcomment(true)}
            style={{ fontWeight: comment ? "bold" : "initial" }}
          >
            <p>
              Comments (<span> 1013 </span>)
            </p>
          </div>
          <div
            onClick={() => setcomment(false)}
            style={{ fontWeight: comment ? "initial" : "bold" }}
          >
            <p>Creator Videos</p>
          </div>
          <p
            style={{
              transform: comment ? "" : "translateX(100%)",
            }}
            className={cx("line")}
          ></p>
        </div>
        <div className={cx("commentlock")}>
          <Comments />
          <WriteComment />
        </div>
      </div>
      <Pretop className={"detailvideo"} />
    </div>
  );
}
export default VideoDetail;
