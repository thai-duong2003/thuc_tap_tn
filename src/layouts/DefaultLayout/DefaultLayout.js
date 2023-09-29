import className from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Header from "../Conponent/Header/Header";
import Sidebar from "../Conponent/Sidebar/Sidebar";
import Pretop from "~/conponents/Pretop";
import { useState } from "react";
const cx = className.bind(styles);
function DefaultLayout({ children }) {
  const [pretop, setpretop] = useState(false);
  document.onscroll = () => {
    if (window.scrollY > 250) {
      setpretop(true);
    } else setpretop(false);
  };
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Sidebar />
        <div className={cx("content")}>
          {children}
          {pretop && <Pretop />}
        </div>
      </div>
    </div>
  );
}
export default DefaultLayout;
