import { faEllipsis, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { Await, Link } from "react-router-dom";
import Baocaoblock from "~/conponents/baocaoblock";
import Button from "~/conponents/Button";
import { Lockicon, PlaypathIcon, Sharepathicon } from "~/conponents/Icon/Icon";
import Image from "~/conponents/Image";
import Menu from "~/conponents/Menu";
import { Wrapper } from "~/conponents/popper";
import Shareblock from "~/conponents/Videobtnactive/Shareblock";
import VideoTag from "~/conponents/VideoTag";
import * as profileservice from "~/Services/profileService";
import styles from "./Profile.module.scss";

const cx = classNames.bind(styles);

function Profile() {
  const [isvideo, setisvideo] = useState(true);
  const [nickuser, setnickuser] = useState({ videos: [] });

  const isfollow = false;
  const video = () => setisvideo(true);
  const lock = () => setisvideo(false);

  const pathname = document.location.pathname;

  useEffect(() => {
    const fetchApi = async () => {
      const resuilt = await profileservice.getaUser(pathname);
      setnickuser(resuilt);
    };
    // fetchApi();
  }, []);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("profileAcount")}>
        <div className={cx("description")}>
          <div className={cx("info")}>
            <Image src={nickuser.avatar} />
            <div>
              <div className={cx("nick")}>
                <h2>{nickuser.nickname}</h2>
                <p>{`${nickuser.first_name} ${nickuser.last_name}`}</p>
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
              <span>{nickuser.followings_count}</span>Đang Follow
              <span>{nickuser.followers_count}</span>Follower
              <span>{nickuser.likes_count}</span>Thích
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
            <Button lefticon={<FontAwesomeIcon icon={faLock} />}>Liked</Button>
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
                      src={item.file_url}
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
    </div>
  );
}
export default Profile;
