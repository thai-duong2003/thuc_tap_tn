import classNames from "classnames/bind";
import Acountitem from "./AcountItem";
import styles from "./SuggesteAcount.module.scss";

const cx = classNames.bind(styles);
function SuggesteAcount({ data, title }) {
  return (
    <div className={cx("wrapper ")}>
      <p className={cx("lable")}>{title}</p>
      {data.map((item, index) => {
        return <Acountitem data={item} key={index} />;
      })}
      <p className={cx("seeall")}>See All</p>
    </div>
  );
}
export default SuggesteAcount;
