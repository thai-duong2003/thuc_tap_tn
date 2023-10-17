import { faEllipsis, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { Await, Link } from "react-router-dom";
import Baocaoblock from "~/conponents/baocaoblock";
import Button from "~/conponents/Button";
import {
  Lockicon,
  PlaypathIcon,
  Sharepathicon,
  UserTiktok,
} from "~/conponents/Icon/Icon";
import { Wrapper } from "~/conponents/popper";
import Shareblock from "~/conponents/Videobtnactive/Shareblock";
import VideoTag from "~/conponents/VideoTag";

import * as profileservice from "~/Services/profileService";
import { IPHTTP } from "~/utils/httprequest";
import Image from "~/conponents/Image";
import styles from "./Profile.module.scss";
import images from "~/access/image";

const cx = classNames.bind(styles);

function Profile() {
  const [isvideo, setisvideo] = useState(true);
  const [nickuser, setnickuser] = useState({ videos: [] });
  const [pathname, setpathname] = useState(document.location.pathname);

  const isfollow = false;
  const video = () => setisvideo(true);
  const lock = () => setisvideo(false);

  // window.onchange=()=>{
  // //  setpathname(document.location.pathname)
  // window.location.reload()
  // console.log(window.location)

  // }
  // console.log(pathname)
  useEffect(() => {
    const fetchApi = async () => {
      const resuilt = await profileservice.getaUser(pathname);
      setnickuser(resuilt);
    };
    fetchApi();
  }, [pathname]);
  console.log(nickuser);
  return (
    <div className={cx("wrapper")}>
      {nickuser === undefined ? (
        <div className={cx("nofinduser")}>
          <UserTiktok />
          <h1>Không thể tìm thấy tài khoản này</h1>
          <p>
            Bạn đang tìm kiếm video? Hãy thử duyệt tìm các tác giả, hashtag và
            âm thanh thịnh hành của chúng tôi.
          </p>
        </div>
      ) : (
        <>
          <div className={cx("profileAcount")}>
            <div className={cx("description")}>
              <div className={cx("info")}>
                {nickuser.avatar === "" ? (
                  <img src={images.noImg}></img>
                ) : (
                  <img src={IPHTTP + nickuser.avatar}></img>
                )}
                {/* <Image src={nickuser.avatar}></Image> */}
                <div>
                  <div className={cx("nick")}>
                    <h2>{nickuser.nickname}</h2>
                    <p>{nickuser.name}</p>
                  </div>
                  {isfollow ? (
                    <div className={cx("btn")}>
                      <Button outline>Tin nhan</Button>
                      <span className={cx("unfollow")}>
                        <FontAwesomeIcon icon={faUser} />
                      </span>
                    </div>
                  ) : (
                    <div className={cx("btn")}>
                      <Button primary>Follower</Button>
                    </div>
                  )}
                </div>
              </div>
              <div className={cx("active")}>
                <p>
                  <span>{nickuser.following_counts}</span>Đang Follow
                  <span>{nickuser.follower_counts}</span>Follower
                  <span>{nickuser.like_counts}</span>Thích
                </p>
                <p className={cx("slogan")}>{nickuser.bio}</p>
              </div>
            </div>
            <div className={cx("opption")}>
              <Tippy
                interactive
                placement="bottom-end"
                hideOnClick={false}
                delay={[0, 500]}
                offset={[20, 10]}
                render={(attrs) => (
                  <div tabIndex="-1" {...attrs}>
                    <Wrapper className={cx("menu-popper")}>
                      <Shareblock />
                    </Wrapper>
                  </div>
                )}
              >
                <span>
                  <Sharepathicon />
                </span>
              </Tippy>

              <Baocaoblock />
            </div>
          </div>
          <div className={cx("videoblock")}>
            <div className={cx("buttontab")}>
              <div className={cx("btn")} onClick={video}>
                <Button>Video</Button>
              </div>
              <div className={cx("btn")} onClick={lock}>
                <Button lefticon={<FontAwesomeIcon icon={faLock} />}>
                  Liked
                </Button>
              </div>
              <div className={cx("border", !isvideo && "tranf")}></div>
            </div>
            <div className={cx("content")}>
              {isvideo ? (
                <div className={cx("videotab")}>
                  {nickuser.videos.map((item, index) => {
                    return (
                      <Link
                        key={index}
                        to="/videodetail"
                        className={cx("video-item")}
                      >
                        <VideoTag
                          className={cx("profilevideo")}
                          src={IPHTTP + item.file_url}
                          mouseOutAutoPause
                          mouseOverAutoPlay
                          muted
                        >
                          <span className={cx("watched")}>
                            <PlaypathIcon />
                            <span>{item.views_count}</span>
                          </span>
                          <p className={cx("name")}>{item.description}</p>
                        </VideoTag>
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <div className={cx("locktab")}>
                  <Lockicon />
                  <h1>Video đã thích của người này ở trạng thái riêng tư</h1>
                  <p>Các video đã thích bởi {nickuser.nickname} hiện đang ẩn</p>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default Profile;
