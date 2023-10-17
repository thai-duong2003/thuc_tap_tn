import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import Image from "../Image";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { IPHTTP } from "~/utils/httprequest";

const cx = classNames.bind(styles);
function AccountItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
      <Image className={cx("avata")} src={IPHTTP+ data.avatar}></Image>
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span>{data.name}</span>
          {data.tick && (
            <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
          )}
        </p>
        <span className={cx("username")}>{data.nickname}</span>
      </div>
    </Link>
  );
}
export let nick;
export default AccountItem;
