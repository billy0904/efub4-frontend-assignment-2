import React from "react";
import Image from "next/image";
import * as styles from "@/styles/search/Content.css";
import playIcon from "/public/svgs/search/play_content.svg";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/"; // 기

interface ContentPropsTypes {
  title: string;
  poster: string;
}

export const Content = ({ title, poster }: ContentPropsTypes) => {
  const imageUrl = `${IMAGE_BASE_URL}${poster}`;

  return (
    <div className={styles.container}>
      <Image
        layout="fixed"
        alt="포스터"
        width={146}
        height={76}
        src={imageUrl}
        style={{ objectFit: "cover" }}
      />
      <span className={styles.textplaycontainer}>
        {title}
        <Image src={playIcon} alt="재생" />
      </span>
    </div>
  );
};
