import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import images from "~/access/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import routes from "~/Config/routes";
import Search from "../Search/Search";
import Button from "~/conponents/Button";
import {
  faCircleQuestion,
  faCoins,
  faEllipsisVertical,
  faKeyboard,
  faPlus,
  faUser,
  faGear,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import Menu from "~/conponents/Menu";
import { InboxIcon, MessagesIcon, UploadIcon } from "~/conponents/Icon/Icon";
import { faAppStore } from "@fortawesome/free-brands-svg-icons";
import Image from "~/conponents/Image";
import LoginRegister from "~/page/LoginRegister/LoginRegister";
import { createContext, useState } from "react";
import { AcountLogin } from "~/page/LoginRegister/logIn/LogInItem";
import { IPHTTP } from "~/utils/httprequest";

const cx = classNames.bind(styles);
export const loginsucccess = createContext();
export var currentUser = false;

function Header() {
  //handle logic

  const [clickloginbtn, setclickloginbtn] = useState(false);
  const handlelogin = () => {
    if (clickloginbtn) {
      setclickloginbtn(false);
    } else {
      setclickloginbtn(true);
    }
  };

  const MENU_ITEMS = [
    {
      icon: <FontAwesomeIcon icon={faAppStore} />,
      title: "English",
      children: {
        title: "Language",
        data: [
          { code: "EN", title: "English" },
          { code: "VN", title: "Tieng Viet" },
        ],
      },
    },
    {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: "Feedback and help",
      to: "/feedback",
    },
    {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: "Keyboard shortcuts",
    },
  ];

  const usermenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "view profile",
      to: `/@${AcountLogin && AcountLogin.nickname}`,
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coins",
      to: "/feedback",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Setting",
      to: "/settings",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "log out",
      // to: "/logout",
      separate: true,
    },
  ];
  if (AcountLogin != undefined) {
    console.log(AcountLogin);
    currentUser = true;
  } else {
    currentUser = false;
  }
  return (
    <loginsucccess.Provider value={handlelogin}>
      <div className={cx("wrapper")}>
        <div className={cx("inner")}>
          <div className={cx("logo")}>
            <Link to={routes.home} className={cx("logo_link")}>
              <img src={images.logo} alt="tiktok" />
            </Link>
          </div>

          <div>
            <Search />
          </div>
          <div className={cx("action")}>
            {currentUser ? (
              <>
                {" "}
                <Tippy
                  content="Upload video"
                  placement="bottom"
                  delay={[0, 200]}
                >
                  <button className={cx("action-btn")}>
                    <UploadIcon />
                  </button>
                </Tippy>
                <Tippy content="Messages" placement="bottom" delay={[0, 200]}>
                  <button className={cx("action-btn")}>
                    <MessagesIcon />
                  </button>
                </Tippy>
                <Tippy content="Inbox" placement="bottom" delay={[0, 200]}>
                  <button className={cx("action-btn")}>
                    <InboxIcon />
                  </button>
                </Tippy>
              </>
            ) : (
              <>
                {" "}
                <Button text lefticon={<FontAwesomeIcon icon={faPlus} />}>
                  Upload
                </Button>
                <Button primary onClick={handlelogin}>
                  Log in
                </Button>
              </>
            )}
            <Menu items={currentUser ? usermenu : MENU_ITEMS}>
              {currentUser ? (
                <Image
                  className={cx("user-avata")}
                  src={
                    AcountLogin.avatar === ""
                      ? images.noImg
                      : IPHTTP + AcountLogin.avatar
                  }
                />
              ) : (
                <button className={cx("more-btn")}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              )}
            </Menu>
          </div>
          {clickloginbtn && (
            <div className={cx("loginform")} onClick={handlelogin}>
              <LoginRegister />
            </div>
          )}
        </div>
      </div>
    </loginsucccess.Provider>
  );
}
export default Header;
