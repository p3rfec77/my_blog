import React from "react";

import cl from "classnames";
import styles from "./index.module.scss";

const Cover = ({ classname, title }) => {
  return (
    <div className={cl(classname, styles.cover)}>
      <h1
        className={styles.coverTitle}
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </div>
  );
};

export default Cover;
