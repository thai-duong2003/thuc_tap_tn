import classNames from "classnames/bind";
import styles from "./SuggesteAcount.module.scss";
import Image from "../Image";
import images from "~/access/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import { Wrapper } from "../popper";
import AccountPreview from "./AcountPrevew/AcountPreview";
import { Fragment } from "react";

const cx = classNames.bind(styles);
function Acountitem({ data }) {
  return (
    <div>
      <Tippy
        interactive
        delay={[500, 0]}
        placement="bottom"
        render={(props) => (
          <div tabIndex="-1" {...props}>
            <Wrapper>
              <AccountPreview data={data} />
            </Wrapper>
          </div>
        )}
      >
        <div className={cx("acount-item")}>
          <Image className={cx("avatar")} src={data.avatar} />
          <div className={cx("item-info")}>
            <p className={cx("nickname")}>
              <strong>{data.nickname}</strong>
              {data.tick && (
                <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
              )}
            </p>
            <p
              className={cx("name")}
            >{`${data.first_name} ${data.last_name}`}</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}
export default Acountitem;
