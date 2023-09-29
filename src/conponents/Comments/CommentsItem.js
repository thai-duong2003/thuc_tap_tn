import classNames from "classnames/bind";
import styles from "./CommentsItems.module.scss";
import images from "~/access/image";
import Image from "../Image";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faEllipsis,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { HeartIconActive, HeartPathIcon } from "../Icon/Icon";
import Baocaoblock from "../baocaoblock";
import { createContext } from "react";
import Tippy from "@tippyjs/react/headless";
import AccountPreview from "../SuggesteAcount/AcountPrevew/AcountPreview";
import { Wrapper } from "../popper";
import { useState } from "react";
const cx = classNames.bind(styles);

export const context = createContext();

function CommentsItems({ data, className }) {
  const [clickheart, setclickheart] = useState(false);

  const like = () => {
    setclickheart(true);
  };
  const unlike = () => {
    setclickheart(false);
  };

  const dataw = {
    music: "hjgfhs",
    description:
      "Specifies weight of glyphs in the font, their degree of blackness or stroke thickness.",
    user: {
      nickname: "thaiq9577",
      avatar: images.noImg,
      tick: true,
      first_name: "Duong",
      last_name: "Thai 2003",
      followers_count: 55,
      likes_count: 45,
      bio: "Specifies weight of glyphs in the font",
    },
  };
  return (
    <div className={cx("wrapper", { [className]: className })}>
      <div className={cx("user")}>
        <Link to={`/@${dataw.user.nickname}`}>
          {" "}
          <Image className={cx("avatar")} src={dataw.user.avatar}></Image>
        </Link>

        <div className={cx("info")}>
          <Tippy
            interactive
            placement="bottom"
            render={(attrs) => {
              return (
                <div tabIndex={"-1"} {...attrs}>
                  <Wrapper>
                    <AccountPreview bodyshow data={dataw.user} />
                  </Wrapper>
                </div>
              );
            }}
          >
            <Link to={`/@${dataw.user.nickname}`}>
              <div style={{ display: "inline-block" }}>
                <p
                  className={cx("name")}
                >{`${dataw.user.first_name} ${dataw.user.last_name}`}</p>
                {dataw.user.tick && (
                  <FontAwesomeIcon
                    className={cx("check")}
                    icon={faCheckCircle}
                  />
                )}
              </div>
            </Link>
          </Tippy>
          <div className={cx("contents")}>
            <div className={cx("content")}>
              <p>{dataw.description}</p>
              <p className={cx("daterep")}>
                <span>2 hours ago</span>
                <span>Repply</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Baocaoblock x={15} y={-10} />
        <div className={cx("heart")}>
          {clickheart ? (
            <span onClick={unlike}>
              <HeartIconActive />
            </span>
          ) : (
            <span onClick={like}>
              <HeartPathIcon />
            </span>
          )}
        </div>
        <p>312</p>
      </div>
    </div>
  );
}

export default CommentsItems;
