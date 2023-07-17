import React from "react";

import { AiOutlineArrowLeft } from "react-icons/ai";

import cl from "classnames";
import styles from "./index.module.scss";
import Link from "next/link";

const Article = ({ children, className, backUrl }) => {
  return (
    <article className={cl(className, styles.article)}>
      <Link href={backUrl} className={styles.articleBack}>
        <AiOutlineArrowLeft />
      </Link>
      <div className={styles.articleContent}>{children}</div>
    </article>
  );
};

export default Article;
