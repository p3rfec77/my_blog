import React from "react";

import Link from "next/link";
import Image from "next/image";

import { urlFor } from "@/lib/client";

import Title from "../Title";

import cl from "classnames";
import styles from "./index.module.scss";

const Post = ({ classname, image, title, description, slug }) => {
  return (
    <div className={cl(classname, styles.post)}>
      <Link
        href={`/post/${encodeURIComponent(slug.current)}`}
        className={styles.postLink}
      >
        <Title type="small" className={styles.postTitle}>
          {title}
        </Title>

        <div className={styles.postContent}>
          <div>
            <Image
              src={urlFor(image).url()}
              alt={image.caption}
              width={100}
              height={100}
              className={styles.postImage}
            />
          </div>
          <p className={styles.postDescription}>{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default Post;
