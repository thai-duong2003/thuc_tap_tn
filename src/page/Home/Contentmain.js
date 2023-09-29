import HomeHeader from "~/conponents/HomeHeader";
import Video from "~/conponents/Video";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
import * as userServices from "~/Services/Videoservice";
const cx = classNames.bind(styles);

function Contentmain() {
  const [video, setvideo] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const resuilt = await userServices.Video({ type: "for-you", page: 1 });
      setvideo(resuilt);
    };
    fetchApi();
  }, []);

  return video.map((item, index) => (
    <div key={index} className={cx("home-conten")}>
      <HomeHeader data={item} />
      <Video data={item} />
    </div>
  ));
}

export default Contentmain;
