import classNames from "classnames/bind";
import HomeHeader from "~/conponents/HomeHeader";
import { useEffect, useRef, useState } from "react";
import images from "~/access/image";
import Comments, { WriteComment } from "~/conponents/Comments";
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
import { getanvideo } from "~/Services/getanvideo";
import { IPHTTP } from "~/utils/httprequest";
import { Getcomment } from "~/Services/Commentlist";

const cx = classNames.bind(styles);

function VideoDetail() {
  const [commentLayout, setcommentLayout] = useState(true);
  const link =
    "https://images2.thanhnien.vn/Uploaded/nhuvnq/2021_12_09/ta03-7305.jpg";

  const re = useRef();
  const [tag, settag] = useState(undefined);
  const [index, setindex] = useState(0);
  const [data, setdata] = useState("");
  const [commentlist, setcommentlist] = useState("");

  const vi = () => {
    settag(re.current.querySelector("video"));
  };

  const pathname = document.location.pathname.slice(1);
  // call get an video api

  useEffect(() => {
    const fetchApi = async () => {
      const resuilt = await getanvideo(pathname);
      setdata(resuilt);
    };

    fetchApi();
  }, [pathname]);
  // call Comment api
  // console.log(data.id);

  useEffect(() => {
    if (data.id) {
      const comnentapi = async () => {
        const resuilt = await Getcomment(data.id);
        setcommentlist(resuilt);
      };
      comnentapi();
    }
  }, [data.id]);

  const backbroser = () => {
    window.history.back();
  };
  return (
    <div className={cx("wrapper")}>
      <div ref={re} className={cx("videopast")} onMouseOver={vi}>
        <div
          className={cx("background")}
          style={{ background: `url(${link}) no-repeat center /cover` }}
        ></div>
        <div className={cx("overlay")}></div>

        <VideoTag
          // muted
          className={"detailvideo"}
          src={IPHTTP + data.file_url}
          onlodedplay
        ></VideoTag>
        {/*  */}
        <div className={cx("wrappercontrol")}>
          <div className={cx("close", "btn")} onClick={backbroser}>
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
        {data.user && <HomeHeader className={"videodetail"} data={data} />}
        <div className={cx("btnactive")}>
          <Videobtnactive
            deletelastitem
            data={data}
            className={"videodetailBtnactive"}
          />
          <div className={cx("shareApp")}>
            <Shareblock videodetaill />
          </div>
        </div>
        <div className={cx("linkVideo")}>
          <p>{IPHTTP + data.file_url}</p>
          <button>Coppy link</button>
        </div>
        <div className={cx("nameblock")}>
          <div
            onClick={() => setcommentLayout(true)}
            style={{ fontWeight: commentLayout ? "bold" : "initial" }}
          >
            <p>
              Comments (<span> {commentlist.length} </span>)
            </p>
          </div>
          <div
            onClick={() => setcommentLayout(false)}
            style={{ fontWeight: commentLayout ? "initial" : "bold" }}
          >
            <p>Creator Videos</p>
          </div>
          <p
            style={{
              transform: commentLayout ? "" : "translateX(100%)",
            }}
            className={cx("line")}
          ></p>
        </div>
        <div className={cx("commentlock")}>
          <Comments data={commentlist} />
          <WriteComment />
        </div>
      </div>
      <Pretop className={"detailvideo"} />
    </div>
  );
}
export default VideoDetail;
