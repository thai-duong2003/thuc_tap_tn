import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { useState } from "react";
import { Wrapper } from "../popper";
import HeaderMenu from "./Headermenu";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";

const cx = classNames.bind(styles);
const defaultfn = () => {};

function Menu({
  children,
  items = [],
  X,
  Y,
  hideOnClick = false,
  onchange = defaultfn,
  isright = false,
}) {
  const [history, sethistory] = useState([{ data: items }]);
  const curren = history[history.length - 1];
  const renderitems = () => {
    return curren.data.map((item, index) => {
      const isparent = !!item.children;

      return (
        <MenuItem
          key={index}
          data={item}
          morevideo={isright}
          onClick={() => {
            if (isparent) {
              sethistory((pre) => [...pre, item.children]);
            } else {
              onchange(item);
            }
          }}
        />
      );
    });
  };
  const map = isright ? "right" : "bottom-end";
  const placement = [X, Y];

  return (
    <Tippy
      interactive
      offset={X === undefined && Y === undefined ? [15, 8] : placement}
      delay={[0, 500]}
      placement={map}
      hideOnClick={hideOnClick}
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <Wrapper className={cx("menu-popper")}>
            {history.length > 1 && (
              <HeaderMenu
                title={curren.title}
                onback={() => sethistory((pre) => pre.slice(0, pre.length - 1))}
              />
            )}
            <div className={cx("menu-body")}>{renderitems()}</div>
          </Wrapper>
        </div>
      )}
      onHide={() => sethistory((pre) => pre.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
}
export default Menu;
