import HomeHeader from "~/conponents/HomeHeader";
import Video from "~/conponents/Video";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { memo, useEffect, useMemo, useRef, useState } from "react";
import * as userServices from "~/Services/Videoservice";
import { IPHTTP } from "~/utils/httprequest";
import Image from "~/conponents/Image";
const cx = classNames.bind(styles);

function Contentmain() {
  const [video, setvideo] = useState([]);
  const [page, setpage] = useState(1);
  const contairef = useRef();
  useEffect(() => {
    const fetchApi = async () => {
      const resuilt = await userServices.Video({ page: page });
      setvideo(resuilt);
    };
    fetchApi();
  }, [page]);
  window.onscroll = () => {
    if (contairef.current) {
      const heightconten = contairef.current.offsetHeight;
      const percentScrolly = Math.floor((window.scrollY / heightconten) * 100);

      if (percentScrolly === 90) {
        setpage(page + 1);
      }
    }
  };
  return (
    <div ref={contairef}>
      {video.map((item, index) => (
        <div key={index} className={cx("home-conten")}>
          <HomeHeader data={item} />
          <Video data={item} />
        </div>
      ))}
    </div>
  );
}
export default memo(Contentmain);
