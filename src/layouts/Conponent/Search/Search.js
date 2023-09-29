import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Search.module.scss";
import { Wrapper as PopperWrapper } from "~/conponents/popper";
import AccountItem from "~/conponents/AccountItem";
import { useRef, useState, useEffect } from "react";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import useDebounce from "~/hook/useDebounce";
import * as searchServices from "~/Services/searchServices";

const cx = classNames.bind(styles);

function Search({ className }) {
  const inputref = useRef();
  const [searchvalue, setsearchvalue] = useState("");
  const [loading, setloading] = useState(false);
  const [searchResult, setsearchResult] = useState([]);
  const [showresult, setshowresult] = useState(false);
  const debounce = useDebounce(searchvalue, 500);
  useEffect(() => {
    if (!debounce.trim()) {
      setsearchResult([]);
      return;
    }
    const fetchApi = async () => {
      setloading(true);
      const result = await searchServices.Search(debounce);
      setsearchResult(result);
      setloading(false);
    };
    fetchApi();
  }, [debounce]);

  const handleChange = (e) => {
    const valuesearch = e.target.value;
    if (!valuesearch.startsWith(" ")) {
      setsearchvalue(valuesearch);
    }
  };
  const handleclear = () => {
    setsearchvalue("");
    inputref.current.focus();
  };
  return (
    <Tippy
      interactive
      visible={showresult && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx("search-resuilt")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx("search-resuilt_title")}>Account</h4>
            {searchResult.map((item, index) => {
              return <AccountItem key={index} data={item} />;
            })}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={() => setshowresult(false)}
    >
      <div className={cx("search", { [className]: className })}>
        <input
          ref={inputref}
          type="text"
          placeholder="Search account and video"
          spellCheck={false}
          required
          value={searchvalue}
          onChange={handleChange}
          onFocus={() => setshowresult(true)}
        />
        {!!searchvalue && !loading && (
          <button className={cx("clear")} onClick={handleclear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {loading && (
          <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
        )}
        <button
          className={cx("search-btn")}
          onMouseDown={(e) => e.preventDefault()}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </Tippy>
  );
}
export default Search;
