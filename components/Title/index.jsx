import React from "react";

import cl from "classnames";
import styles from "./index.module.scss";

const Title = ({ children, classname }) => {
  return <h2 className={cl(classname, styles.title)}>{children}</h2>;
};

export default Title;
