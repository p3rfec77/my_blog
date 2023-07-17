import React from "react";

import cl from "classnames";
import styles from "./index.module.scss";

const PostGrid = ({ classname, children }) => {
  return <div className={cl(classname, styles.postGrid)}>{children}</div>;
};

export default PostGrid;
