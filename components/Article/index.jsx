import React from "react";

import cl from "classnames";
import styles from "./index.module.scss";

const Article = ({ children, classname }) => {
  return (
    <article className={cl(classname, styles.article)}>{children}</article>
  );
};

export default Article;
