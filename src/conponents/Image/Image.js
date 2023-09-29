import images from "~/access/image";
import classNames from "classnames";
import styles from "./Image.module.scss";
import { forwardRef, useState } from "react";

const Image = forwardRef(({ src, alt, clas, ...props }, ref) => {
  const [loi, setloi] = useState("");

  const handleError = () => {
    setloi(images.noImg);
  };
  return (
    <img
      src={loi || src}
      alt={alt}
      clas={classNames(styles.wrapper, clas)}
      ref={ref}
      {...props}
      onError={handleError}
    />
  );
});
export default Image;
