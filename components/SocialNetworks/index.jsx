import React from "react";

import {
  AiFillYoutube,
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";

import ScreenEgg from "../ScreenEgg";

import cl from "classnames";
import styles from "./index.module.scss";

const SocialNetworks = [
  {
    id: 1,
    link: "https://www.youtube.com/",
    icon: AiFillYoutube,
  },
  {
    id: 2,
    link: "https://github.com/p3rfec77",
    icon: AiFillGithub,
  },
  {
    id: 3,
    link: "https://instagram.com/golygin_k.a?igshid=MmIzYWVlNDQ5Yg==",
    icon: AiFillInstagram,
  },
  {
    id: 4,
    link: "https://twitter.com/",
    icon: AiFillTwitterCircle,
  },
];

const SocialNetwork = ({ classname }) => {
  return (
    <ScreenEgg>
      <ul className={cl(classname, styles.list)}>
        {SocialNetworks.map(({ id, link, icon }) => (
          <li key={id} className={styles.listItem}>
            <a href={link} target="_blank" className={styles.listLink}>
              {icon({ size: 50, color: "black" })}
            </a>
          </li>
        ))}
      </ul>
    </ScreenEgg>
  );
};

export default SocialNetwork;
