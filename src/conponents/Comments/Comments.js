import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useState } from "react";
import Pretop from "../Pretop";
import CommentsItems from "./CommentsItem";
import styles from "./CommentsItems.module.scss";
const cx = classNames.bind(styles);
function Comments() {
  const [clickview, setclickview] = useState(false);
  const click = () => {
    setclickview(true);
  };
  return (
    <div className={cx("commentblock")}>
      <CommentsItems />
      {clickview && (
        <div className={cx("repcomment")}>
          <CommentsItems className={"repitem"} />
          <CommentsItems className={"repitem"} />
        </div>
      )}
      {!clickview && (
        <button className={cx("viewreply")} onClick={click}>
          <span>{`View ${5} reply`}</span>
          <FontAwesomeIcon icon={faAngleDown} />
        </button>
      )}
    </div>
  );
}
export default Comments;
