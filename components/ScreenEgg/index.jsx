import React from "react";

import cl from "classnames";
import styles from "./index.module.scss";

const ScreenEgg = ({ classname, type, children }) => {
  return (
    <div
      className={cl(
        classname,
        styles.screenEgg,
        type === "right" ? styles.screenEggRight : styles.screenEggLeft
      )}
    >
      {children}
    </div>
  );
};

export default ScreenEgg;
