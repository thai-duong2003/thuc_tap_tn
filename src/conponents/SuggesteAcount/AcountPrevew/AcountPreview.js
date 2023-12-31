import styles from "./AcountPreview.module.scss";
import classNames from "classnames/bind";
import Image from "~/conponents/Image";
import Button from "~/conponents/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { IPHTTP } from "~/utils/httprequest";

const cx = classNames.bind(styles);

function AccountPreview({ data, bodyshow = false }) {
  return (
    <div className={cx("wrapper", { bodyshow })}>
      <div className={cx("header")}>
        <Image className={cx("avata")} src={IPHTTP+data.avatar} alt="" />
        <div>
          {" "}
          <Button
            primary={!bodyshow}
            outline={bodyshow}
            className={cx("following-btn")}
          >
            {bodyshow ? "Flollow" : "Flollowing"}
          </Button>
        </div>
      </div>
      <div className={cx("body")}>
        <p className={cx("nickname")}>
          <strong>{data.nickname}</strong>
          {data.tick && (
            <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
          )}
        </p>
        <p className={cx("name")}>{data.name}</p>
        <p className={cx("anakytics")}>
          <strong className={cx("value")}>{data.follower_counts}</strong>
          <span className={cx("lable")}>Followers</span>
          <strong className={cx("value")}>{data.like_counts}</strong>
          <span className={cx("lable")}>Likes</span>
        </p>
        {bodyshow && <p className={cx("slogan")}>{data.bio}</p>}
      </div>
    </div>
  );
}
export default AccountPreview;
