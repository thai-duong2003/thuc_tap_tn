import config from "~/Config";
//hederonly
import Home from "~/page/Home/Home";
import Following from "~/page/Following/Following";
import Live from "~/page/Live/Live";
import Explore from "~/page/Exploer/Exploer";
import Profile from "~/page/Profile/Profile";
import VideoDetail from "~/page/VideoDetail/VideoDetail";
import NoPage from "~/page/noPage/Nopage";

//public

const publicroutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.nopage, component: NoPage, nopage: true },
  { path: config.routes.following, component: Following },
  { path: config.routes.live, component: Live },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.khampha, component: Explore },
  { path: config.routes.videodetail, component: VideoDetail, layout: null },
];

// private

export { publicroutes };
