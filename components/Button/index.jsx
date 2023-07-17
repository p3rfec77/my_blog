import React from "react";

import cl from "classnames";
import styles from "./index.module.scss";

const Button = ({ className, children, onClick, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cl(className, styles.button)}
    >
      {children}
    </button>
  );
};

export default Button;
