import Tippy from "@tippyjs/react";
import classNames from "classnames/bind";
import { Acongicon, EmoineIcon } from "~/conponents/Icon/Icon";
import styles from "./WriteComment.module.scss";
const cx = classNames.bind(styles);
function WriteComment() {
  return (
    <div className={cx("wrappper")}>
      <div>
        <input
          className={cx("input")}
          type={"text"}
          placeholder="Thêm bình luận ..."
          spellCheck={false}
        />
        <span>
          <Acongicon />
        </span>
        <Tippy
          interactive
          placement="top"
          hideOnClick={false}
          render={(arrts) => <div tabIndex={"-1"} {...arrts}></div>}
        >
          <span>
            <EmoineIcon />
          </span>
        </Tippy>
      </div>
      <button>Đăng</button>
    </div>
  );
}
export default WriteComment;
