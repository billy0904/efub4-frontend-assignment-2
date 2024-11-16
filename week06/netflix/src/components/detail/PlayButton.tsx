import React from "react";
import * as styles from "@/styles/detail/playButton.css";
import playbtn from "/public/svgs/detail/playbutton.svg";
import Image from "next/image";

export const PlayButton = () => {
  return (
    <div className={styles.container}>
      <Image width={72} height={30} src={playbtn} alt="재생하기" />
    </div>
  );
};
