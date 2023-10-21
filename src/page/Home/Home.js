import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { AcountLogin } from "../LoginRegister/logIn/LogInItem";

import Contentmain from "./Contentmain";
import styles from "./Home.module.scss";
const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx("wrapper")}>
      <Contentmain />
      <Link>
        <h1>home page</h1>
      </Link>
    </div>
  );
}
export default Home;
