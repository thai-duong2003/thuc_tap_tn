import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import Contentmain from "./Contentmain";
import styles from "./Home.module.scss";
const cx = classNames.bind(styles);

function Home() {
  const dc = "thai";
  return (
    <div className={cx("wrapper")}>
      <Contentmain />
      <Link to={`/@${dc}`}>
        <h1>home page</h1>
      </Link>
      {dc}
    </div>
  );
}
export default Home;
