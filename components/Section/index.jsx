import React from "react";

import cl from "classnames";
import styles from "./index.module.scss";

const Section = ({ children, classname }) => {
  return (
    <section className={cl(classname, styles.section)}>{children}</section>
  );
};

export default Section;
