import styles from "./LeaderboardRow.module.css";
import cn from "classnames";
import { format } from "date-fns";
import { ModalPuzzle } from "../ModalPuzzle/ModalPuzzle";
import { useState } from "react";

function formatSeconds(seconds) {
  const date = new Date(0);
  date.setSeconds(seconds);
  return date;
}

export function LeaderboardRow({ position, userName, achievement, time }) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const formattedTime = format(formatSeconds(time), "mm:ss");

  const handleMouseEnter = () => {
    setIsPopupVisible(true);
  };

  const handleMouseLeave = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className={styles.sectionTop}>
      <p className={cn(styles.sectionText, styles.textPosition)}>{position}</p>
      <p className={cn(styles.sectionText, styles.textUser)}>{userName}</p>
      <div className={styles.sectionIcons}>
        <img src="./puzzle_empty.svg" alt="puzzle" />
        <img src="./magic_ball_empty.svg" alt="ball" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        {isPopupVisible && <ModalPuzzle />}
      </div>
      <p className={cn(styles.sectionText, styles.textTime)}>{formattedTime}</p>
    </div>
  );
}
