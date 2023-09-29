import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Image from "../Image";
import styles from "./HomeHeader.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faMusic } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import { useState } from "react";
import Tippy from "@tippyjs/react/headless";
import AccountPreview from "../SuggesteAcount/AcountPrevew/AcountPreview";
import { Wrapper } from "../popper";
const cx = classNames.bind(styles);

function HomeHeaderItem({ data, className }) {
  const [ismore, setismore] = useState(false);
  const datauser = data.user;

  const Accprevi = ({ children, name = false }) => (
    <div>
      {" "}
      <Tippy
        interactive
        offset={name && [-65, 30]}
        placement="bottom-start"
        delay={[500, 700]}
        hideOnClick={false}
        render={(attrs) => (
          <div tabIndex="-1" {...attrs}>
            <Wrapper>
              <AccountPreview data={datauser} bodyshow />
            </Wrapper>
          </div>
        )}
      >
        {children}
      </Tippy>
    </div>
  );
  const test =
    " as uyugdq wdyvw wdghdh qwdyqtw qwdgyqgdb jhduyqu dqygdqd qdgtwy wtwq dgygd kjen fuye udyeg fehu wewygb wehwgywe whegdwyef hgweyw eewe wehgy";
  return (
    <div className={cx("wrapper", { [className]: className })}>
      <div className={cx("user")}>
        <Accprevi>
          <Link to={`@${datauser.nickname}`}>
            {" "}
            <Image className={cx("avatar")} src={datauser.avatar}></Image>
          </Link>
        </Accprevi>

        <div className={cx("info")}>
          <Accprevi name>
            <Link to={`@${datauser.nickname}`}>
              <p className={cx("name")}>
                <strong>{datauser.nickname}</strong>
                {datauser.tick && (
                  <FontAwesomeIcon
                    className={cx("check")}
                    icon={faCheckCircle}
                  />
                )}
                <span
                  className={cx("fullname")}
                >{`${datauser.first_name} ${datauser.last_name}`}</span>
              </p>
            </Link>
          </Accprevi>
          <div className={cx("contents")}>
            <p className={cx("content", ismore && "block")}>
              {data.description}
            </p>
            {data.description.length >= 95 &&
              (ismore ? (
                <span className={cx("more")} onClick={() => setismore(false)}>
                  less
                </span>
              ) : (
                <span className={cx("more")} onClick={() => setismore(true)}>
                  more
                </span>
              ))}
          </div>
          <p className={cx("music")}>
            <FontAwesomeIcon icon={faMusic} />
            <span>{data.music}</span>
          </p>
        </div>
      </div>
      <div>
        {" "}
        <Button outline className={cx("buttom")}>
          Follow
        </Button>
      </div>
    </div>
  );
}
export default HomeHeaderItem;
