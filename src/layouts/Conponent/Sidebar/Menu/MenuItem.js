import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";
const cx = classNames.bind(styles);

function MenuItemSidebar({ title, to, icon, activeicon }) {
  return (
    <NavLink
      to={to}
      className={(nav) => cx("Menu-Item", { active: nav.isActive })}
    >
      <span className={cx("icon")}>{icon}</span>
      <span className={cx("active-icon")}>{activeicon}</span>
      <p className={cx("title")}>{title}</p>
    </NavLink>
  );
}
export default MenuItemSidebar;
