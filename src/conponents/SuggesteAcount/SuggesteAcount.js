import classNames from "classnames/bind";
import { useState } from "react";
import Acountitem from "./AcountItem";
import styles from "./SuggesteAcount.module.scss";

const cx = classNames.bind(styles);
function SuggesteAcount({ data, title, seeall, seeless }) {
  const [clickseeall, setclickseeall] = useState(false);
  const handlesee = () => {
    if (clickseeall) {
      setclickseeall(false);
      seeless();
    } else {
      setclickseeall(true);
      seeall();
    }
  };
  return (
    <div className={cx("wrapper ")}>
      <p className={cx("lable")}>{title}</p>
      {data.map((item, index) => {
        return <Acountitem data={item} key={index} />;
      })}
      {clickseeall ? (
        <p className={cx("seeall")} onClick={handlesee}>
          See Less
        </p>
      ) : (
        <p className={cx("seeall")} onClick={handlesee}>
          See All
        </p>
      )}
    </div>
  );
}
export default SuggesteAcount;
