import React from "react";

import ScreenEgg from "../ScreenEgg";

import cl from "classnames";
import styles from "./index.module.scss";

const BuyMeCoffee = ({ classname }) => {
  return (
    <ScreenEgg type="right">
      <div className={cl(classname, styles.buyCoffee)}>
        <a
          className={styles.buyCoffeeButton}
          href="https://buy.stripe.com/5kA7sL9574SG7xCfZ3"
          target="_blank"
        >
          by me a coffee...
        </a>
      </div>
    </ScreenEgg>
  );
};

export default BuyMeCoffee;
