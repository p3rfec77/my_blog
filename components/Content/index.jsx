import React from "react";

import SanityBlockContent from "@sanity/block-content-to-react";

import { clientConfig } from "@/lib/client";

import cl from "classnames";
import styles from "./index.module.scss";

const Content = ({ className, body }) => {
  return (
    <div className={cl(className, styles.content)}>
      <SanityBlockContent
        blocks={body}
        imageOptions={{ w: 1000, h: 750, fit: "max" }}
        projectId={clientConfig.projectId}
        dataset={clientConfig.dataset}
      />
    </div>
  );
};

export default Content;
