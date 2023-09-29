import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";

import config from "~/Config";
import MenuSidebar from "./Menu/Menu";
import { MenuItemSidebar } from "./Menu";
import {
  GroupActiveicon,
  Groupicon,
  HomeActiveIcon,
  HomeIcon,
  Khamphaicon,
  Khamphaiconactive,
  LiveActiveicon,
  Liveicon,
} from "~/conponents/Icon/Icon";
import SuggesteAcount from "~/conponents/SuggesteAcount";
import { useEffect, useState } from "react";
import * as userServices from "~/Services/SuggestServices";
const cx = classNames.bind(styles);
function Sidebar() {
  const per_page = 5;

  const [suggesteUsers, setsuggesteUsers] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const resuilt = await userServices.Suggest({
        page: 1,
        perpage: per_page,
      });
      setsuggesteUsers(resuilt);
    };
    // fetchApi();
  }, []);

  return (
    <div className={cx("wrapper")}>
      <MenuSidebar>
        <MenuItemSidebar
          title="For you"
          to={config.routes.home}
          activeicon={<HomeActiveIcon />}
          icon={<HomeIcon />}
        />
        <MenuItemSidebar
          to={config.routes.following}
          icon={<Groupicon />}
          activeicon={<GroupActiveicon />}
          title="Following"
        />
        <MenuItemSidebar
          title={"Khám Phá"}
          to={config.routes.khampha}
          icon={<Khamphaicon />}
          activeicon={<Khamphaiconactive />}
        />
        <MenuItemSidebar
          to={config.routes.live}
          title="Live"
          icon={<Liveicon />}
          activeicon={<LiveActiveicon />}
        />
      </MenuSidebar>
      <SuggesteAcount title="Suggested accounts" data={suggesteUsers} />
    </div>
  );
}
export default Sidebar;
