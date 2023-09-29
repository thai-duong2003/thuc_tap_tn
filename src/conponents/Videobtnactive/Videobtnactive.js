import PropTypes from "prop-types";
import Shareblock from "./Shareblock";
import classNames from "classnames/bind";
import styles from "./Videobtnactive.module.scss";
import { memo, useEffect, useMemo } from "react";

import Tippy from "@tippyjs/react/headless";
import Button from "../Button";
import { Wrapper } from "../popper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faCommentDots,
  faShare,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function Videobtnactive({ data, className, deletelastitem = false }) {
  const btnactive = [
    {
      icon: <FontAwesomeIcon icon={faHeart} />,
      title: data.likes_count,
    },
    {
      icon: <FontAwesomeIcon icon={faCommentDots} />,
      title: data.comments_count,
    },
    {
      icon: <FontAwesomeIcon icon={faBookmark} />,
      title: data.views_count,
    },
    {
      icon: <FontAwesomeIcon icon={faShare} />,
      title: data.shares_count,
      children: true,
    },
  ];
  deletelastitem && btnactive.pop();

  return (
    <div className={cx("wrapper", { [className]: className })}>
      {btnactive.map((item, index) => {
        const isparent = !item.children;

        if (isparent) {
          return (
            <div key={index}>
              <Button cricle key={index}>
                {item.icon}
              </Button>{" "}
              <p>{item.title}</p>
            </div>
          );
        } else {
          return (
            <Tippy
              key={index}
              interactive
              flip={false}
              hideOnClick={false}
              offset={[-30, 20]}
              delay={[0, 500]}
              placement="top-start"
              render={(attrs) => (
                <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
                  <Wrapper className={cx("menu-popper")}>
                    <Shareblock />
                  </Wrapper>
                </div>
              )}
            >
              <div key={index}>
                <button className={cx("cricle")}>{item.icon}</button>
                <p>{item.title}</p>
              </div>
            </Tippy>
          );
        }
      })}
    </div>
  );
}
export default Videobtnactive;
